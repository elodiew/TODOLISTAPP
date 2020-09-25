/*global qs, qsa, $on, $parent, $delegate */

(function (window) {
	'use strict';
	/** 
	 * VIEW Defines the default values ​​of the template as well as the interactions with the DOM (keyboard keys and events)
	 * @param {string} template template used
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
		 * Remove a task from the list
		 * @param {number} id The id of the task to delete
		 */
		_removeItem(id) {
			let elem = qs('[data-id="' + id + '"]');

			if (elem) {
				this.$todoList.removeChild(elem);
			}
		};

		/** 
		 * Show or hide completed items
		 * @param {number} completedCount The number of elements completed
		 * @param {boolean} visible Are the elements visible or not?
		 */
		_clearCompletedButton(completedCount, visible) {
			this.$clearCompleted.innerHTML = this.template.clearCompletedButton(completedCount);
			this.$clearCompleted.style.display = visible ? 'block' : 'none';
		};

		/** 
		 * Show or hide completed items
		 * @param {string} currentPage The filter applied: '' / active / completed
		 */
		_setFilter(currentPage) {
			qs('.filters .selected').className = '';
			qs('.filters [href="#/' + currentPage + '"]').className = 'selected';
		};

		/** 
		 * Testing whether a task is complete or not
		 * @param {number} id The id of the task to test
		 * @param {boolean} completed Is the task complete or not?
		 */
		_elementComplete(id, completed) {
			let listItem = qs('[data-id="' + id + '"]');

			if (!listItem) {
				return;
			}

			listItem.className = completed ? 'completed' : '';

			// In case it was toggled from an event and not by clicking on the checkbox
			qs('input', listItem).checked = completed;
		};

		/** 
		 * Edit a task in the list (thanks to the double click)
		 * @param {number} id The id of the task to edit
		 * @param {string} title The new job title
		 */
		_editItem(id, title) {
			let listItem = qs('[data-id="' + id + '"]');

			if (!listItem) {
				return;
			}

			listItem.className = listItem.className + ' editing';

			let input = document.createElement('input');
			input.className = 'edit';

			listItem.appendChild(input);
			input.focus();
			input.value = title;
		};

		/** 
		 * Indicates that the editing of a task is complete
		 * @param {number} id The id of the task that was being edited
		 * @param {string} title The new job title
		 */
		_editItemDone(id, title) {
			let listItem = qs('[data-id="' + id + '"]');

			if (!listItem) {
				return;
			}

			let input = qs('input.edit', listItem);
			listItem.removeChild(input);

			listItem.className = listItem.className.replace('editing', '');

			qsa('label', listItem).forEach(function (label) {
				label.textContent = title;
			});
		};

		/** 
		 * Indicates that editing of a task is complete
		 * @param {string} viewCmd The active function
		 * @param {object} parameter Active parameters
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
		 * Defines the actions after editing a task
		 * @param {element} element The task whose id we are looking for
		 * Return The task id
		 */
		_itemId(element) {
			let li = $parent(element, 'li');
			return parseInt(li.dataset.id, 10);
		};

		/** 
		 * Defines the actions after editing a task
		 * @param {function} handler Callback function that is executed when canceling the editing of a task
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
					// Remove the cursor from the entry when you press Enter, as if it
					// was a real form
					this.blur();
				}
			});
		};

		/** 
		 * Defines the actions when editing a task is canceled
		 * @param {function} handler Callback function that is executed when canceling the editing of a task
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
		 * Registry of event listeners on tasks based on user actions, HTML side
		 * @param {string} event The chosen event
		 * @param {function} handler Recall function executed according to the situation
		 */
		bind(event, handler) {
			let self = this;
			// Improvement
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