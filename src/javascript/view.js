/*global qs, qsa, $on, $parent, $delegate */

(function (window) {
	'use strict';
	/** 
	 * VIEW Définit les valeurs par défaut du template ainsi que les intéractions avec le DOM (touches du clavier et évènements)
	 * @param {string} template template utilisé
	 */
	class View {
		constructor(template) {
			this.template = template;

			this.ENTER_KEY = 13;
			this.ESCAPE_KEY = 27;

			this.$todoList = qs('.todo-list');
			this.$todoItemCounter = qs('.todo-count');
			this.$clearCompleted = qs('.clear-completed');
			this.$main = qs('.main');
			this.$footer = qs('.footer');
			this.$toggleAll = qs('.toggle-all');
			this.$newTodo = qs('.new-todo');
		}

		/** 
		 * Supprime une tâche de la liste
		 * @param {number} id L'id de la tâche à supprimer
		 */
		_removeItem(id) {
			let elem = qs('[data-id="' + id + '"]');

			if (elem) {
				this.$todoList.removeChild(elem);
			}
		};

		/** 
		 * Affiche ou cache les éléments terminés
		 * @param {number} completedCount Le nombre d'éléments terminés
		 * @param {boolean} visible Les éléments sont-ils visibles ou non ?
		 */
		_clearCompletedButton(completedCount, visible) {
			this.$clearCompleted.innerHTML = this.template.clearCompletedButton(completedCount);
			this.$clearCompleted.style.display = visible ? 'block' : 'none';
		};

		/** 
		 * Affiche ou cache les éléments terminés
		 * @param {string} currentPage Le filtre appliqué : '' / active / completed
		 */
		_setFilter(currentPage) {
			qs('.filters .selected').className = '';
			qs('.filters [href="#/' + currentPage + '"]').className = 'selected';
		};

		/** 
		 * Test si une tâche est terminée ou non
		 * @param {number} id L'id de la tâche à tester
		 * @param {boolean} completed La tâche est-elle terminée ou non ?
		 */
		_elementComplete(id, completed) {
			let listItem = qs('[data-id="' + id + '"]');

			// if (!listItem) {
			// 	return;
			// }

			listItem.className = completed ? 'completed' : '';

			// Dans le cas où il a été basculé à partir d'un événement et non en cliquant sur la case à cocher
			qs('input', listItem).checked = completed;
		};

		/** 
		 * Editer une tâche dans la liste (grâce au double click)
		 * @param {number} id L'id de la tâche à éditer
		 * @param {string} title Le nouveau titre de la tâche
		 */
		_editItem(id, title) {
			let listItem = qs('[data-id="' + id + '"]');

			// if (!listItem) {
			// 	return;
			// }

			listItem.className = listItem.className + ' editing';

			let input = document.createElement('input');
			input.className = 'edit';

			listItem.appendChild(input);
			input.focus();
			input.value = title;
		};

		/** 
		 * Indique que l'édition d'une tâche est terminée
		 * @param {number} id L'id de la tâche qui était en édition
		 * @param {string} title Le nouveau titre de la tâche
		 */
		_editItemDone(id, title) {
			let listItem = qs('[data-id="' + id + '"]');

			// if (!listItem) {
			// 	return;
			// }

			let input = qs('input.edit', listItem);
			listItem.removeChild(input);

			listItem.className = listItem.className.replace('editing', '');

			qsa('label', listItem).forEach(function (label) {
				label.textContent = title;
			});
		};

		/** 
		 * Indique que l'édition d'une tâche est terminée
		 * @param {string} viewCmd La fonction active
		 * @param {object} parameter Les paramètres actifs
		 */
		render(viewCmd, parameter) {
			let self = this;
			let viewCommands = {
				showEntries: function () {
					self.$todoList.innerHTML = self.template.show(parameter);
				},
				removeItem: function () {
					self._removeItem(parameter);
				},
				updateElementCount: function () {
					self.$todoItemCounter.innerHTML = self.template.itemCounter(parameter);
				},
				clearCompletedButton: function () {
					self._clearCompletedButton(parameter.completed, parameter.visible);
				},
				contentBlockVisibility: function () {
					self.$main.style.display = self.$footer.style.display = parameter.visible ? 'block' : 'none';
				},
				toggleAll: function () {
					self.$toggleAll.checked = parameter.checked;
				},
				setFilter: function () {
					self._setFilter(parameter);
				},
				clearNewTodo: function () {
					self.$newTodo.value = '';
				},
				elementComplete: function () {
					self._elementComplete(parameter.id, parameter.completed);
				},
				editItem: function () {
					self._editItem(parameter.id, parameter.title);
				},
				editItemDone: function () {
					self._editItemDone(parameter.id, parameter.title);
				}
			};

			viewCommands[viewCmd]();
		};

		/** 
		 * Définit les actions après l'édition d'une tâche
		 * @param {element} element La tâche dont on cherche l'id
		 * Return L'id de la tâche
		 */
		_itemId(element) {
			let li = $parent(element, 'li');
			return parseInt(li.dataset.id, 10);
		};

		/** 
		 * Définit les actions après l'édition d'une tâche
		 * @param {function} handler Fonction de rappel qui est exécutée lors de l'annulation de l'édition d'une tâche
		 */
		_bindItemEditDone(handler) {
			let self = this;
			$delegate(self.$todoList, 'li .edit', 'blur', function () {
				if (!this.dataset.iscanceled) {
					handler({
						id: self._itemId(this),
						title: this.value
					});
				}
			});

			$delegate(self.$todoList, 'li .edit', 'keypress', function (event) {
				if (event.keyCode === self.ENTER_KEY) {
					// Retirez le curseur de l'entrée lorsque vous appuyez sur Entrée, comme s'il 
					// était une vraie forme
					this.blur();
				}
			});
		};

		/** 
		 * Définit les actions lorsque l'édition d'une tâche est annulée
		 * @param {function} handler Fonction de rappel qui est exécutée lors de l'annulation de l'édition d'une tâche
		 */
		_bindItemEditCancel(handler) {
			let self = this;
			$delegate(self.$todoList, 'li .edit', 'keyup', function (event) {
				if (event.keyCode === self.ESCAPE_KEY) {
					this.dataset.iscanceled = true;
					this.blur();

					handler({
						id: self._itemId(this)
					});
				}
			});
		};

		/** 
		 * Greffe des écouteurs d'évènements sur les tâches en fonction des actions de l'utilisateur, côté HTML
		 * @param {string} event L'event choisi
		 * @param {function} handler Fonctnion de rappel exécutée selon la situation
		 */
		bind(event, handler) {
			let self = this;
			// Amélioration
			// Methode servant a binbder plusieur event: dans une logique d'amelioraztion, nous avons utiliser un traitement switch, qui est un peu plus maintenable et un peu plus lisible et plus performant.
			switch (event) {
				case 'newTodo':
					$on(self.$newTodo, 'change', function () {
						handler(self.$newTodo.value);
					});
					break;
				case 'removeCompleted':
					$on(self.$clearCompleted, 'click', function () {
						handler();
					});
					break;
				case 'toggleAll':
					$on(self.$toggleAll, 'click', function () {
						handler({
							completed: this.checked
						});
					});
					break;
				case 'itemEdit':
					$delegate(self.$todoList, 'li label', 'dblclick', function () {
						handler({
							id: self._itemId(this)
						});
					});
					break;
				case 'itemRemove':
					$delegate(self.$todoList, '.destroy', 'click', function () {
						handler({
							id: self._itemId(this)
						});
					});
					break;
				case 'itemToggle':
					$delegate(self.$todoList, '.toggle', 'click', function () {
						handler({
							id: self._itemId(this),
							completed: this.checked
						});
					});
					break;
				case 'itemEditDone':
					self._bindItemEditDone(handler);
					break;

				case 'itemEditCancel': {
					self._bindItemEditCancel(handler);
				}
			}
		};
	};

	// Export to window
	window.app = window.app || {};
	window.app.View = View;
}(window));