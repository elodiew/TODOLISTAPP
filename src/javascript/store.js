/*jshint eqeqeq:false */
(function (window) {
	'use strict';

	/**
	 * STORE Crée un nouvel objet Store côté client et créera un espace vide si aucun objet existe déja.
	 * @param {string} name Le nom de la base de donnée à utiliser
	 * @param {function} callback La fonction de rappel (seulement parce qu'on est en localStorage) utilisé après l'initialisation du Store. Dans le cas d'une vrai BDD, nous effecturions des appels AJAX.
	 */
	class Store {
		constructor(name, callback) {
			callback = callback || function () {};

			this._dbName = name;

			if (!localStorage[name]) {
				let data = {
					todos: []
				};

				localStorage[name] = JSON.stringify(data);
			}

			callback.call(this, JSON.parse(localStorage[name]));
		}

		/**
		 * Trouve un élément en fonction de la requête (objet JS)
		 * @param {object} query La requête à comparer (par exemple {foo: 'bar'})
		 * @param {function} callback La fonction de rappel à utiliser lorsque le traitement de la requête est terminé
		 * @example
		 * db.find({foo: 'bar', hello: 'world'}, function (data) {
		 *	 // data will return any items that have foo: bar and
		 *	 // hello: world in their properties
		 * });
		 */
		find(query, callback) {
			// if (!callback) {
			// 	return;
			// }

			let todos = JSON.parse(localStorage[this._dbName]).todos;

			callback.call(this, todos.filter(function (todo) {
				for (let q in query) {
					if (query[q] !== todo[q]) {
						return false;
					}
				}
				return true;
			}));
		};

		/**
		 * Trouve tous les éléments présent dans le stockage
		 * @param {function} callback La fonction de rappel utilisée lorsque tous les éléments ont été trouvés
		 */
		findAll(callback) {
			callback = callback || function () {};
			callback.call(this, JSON.parse(localStorage[this._dbName]).todos);
		};

		/**
		 * Sauvegarde les données dans la BDD. Si aucun élément n'existe, un nouveau élément sera créé, sinon une mise à jour des propriétés de l' élément existant sera réalisé
		 * @param {object} updateData L'objet data à sauvegarder dans la BDD
		 * @param {function} callback La fonction de rappel à utiliser après la sauvegarde
		 * @param {number} id L'id de l'élément à sauvegarder (facultatif)
		 */
		save(updateData, callback, id) {
			let data = JSON.parse(localStorage[this._dbName]);
			let todos = data.todos;
			callback = callback || function () {};
			// Generer un ID
			let newId = "";
			let charset = "0123456789";

			for (let i = 0; i < 6; i++) {
				newId += charset.charAt(Math.floor(Math.random() * charset.length));
			}
			// Si un ID a été donné, recherchez l'élément et mettez à jour chaque propriété
			if (id) {
				for (let i = 0; i < todos.length; i++) {
					if (todos[i].id === id) {
						for (let key in updateData) {
							todos[i][key] = updateData[key];
						}
						break;
					}
				}
				localStorage[this._dbName] = JSON.stringify(data);
				callback.call(this, todos);
			} else {
				// Assigner un ID
				/**
				 * Génére un identifiant unique
				 * @see  https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Date/now
				 * @example
				 * returns {number} 1519326977765
				 */
				// updateData.id = parseInt(newId);
				updateData.id = Date.now();
				todos.push(updateData);
				localStorage[this._dbName] = JSON.stringify(data);
				callback.call(this, [updateData]);
			}
		};

		/**
		 * Supprime un élément du stockage en se basant sur son ID
		 * @param {number} id L'id de l'élément à supprimer
		 * @param {function} callback La fonction de rappel utilisée après la suppression
		 */
		remove(id, callback) {
			let data = JSON.parse(localStorage[this._dbName]);
			let todos = data.todos;
			let todoId;

			for (let i = 0; i < todos.length; i++) {
				if (todos[i].id == id) {
					todoId = todos[i].id;
				}
			}

			for (let i = 0; i < todos.length; i++) {
				if (todos[i].id == todoId) {
					todos.splice(i, 1);
				}
			}

			localStorage[this._dbName] = JSON.stringify(data);
			callback.call(this, todos);
		};

		/**
		 * Démarre un nouveau stockage
		 * @param {function} callback La fonction de rappel utilisée après avoir envoyé les données
		 */
		drop(callback) {
			let data = {
				todos: []
			};
			localStorage[this._dbName] = JSON.stringify(data);
			callback.call(this, data.todos);
		};
	};
	// Export to window
	window.app = window.app || {};
	window.app.Store = Store;
})(window);