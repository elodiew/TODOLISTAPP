/*jshint eqeqeq:false */
(function (window) {
	'use strict';

	/**
	 * STORE Creates a new client-side Store object and will create an empty space if no object already exists.
	 * @param {string} name The name of the database to use
	 * @param {function} callback The callback function (only because we are in localStorage) used after the Store initialization. In the case of a real DB, we would make AJAX calls.
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
		 * Find an item based on the query (JS object)
		 * @param {object} query The query to compare (for example {foo: 'bar'})
		 * @param {function} callback The callback function to use when the request is finished processing
		 * @example
		 * db.find({foo: 'bar', hello: 'world'}, function (data) {
		 *	 // data will return any items that have foo: bar and
		 *	 // hello: world in their properties
		 * });
		 */
		find(query, callback) {
			if (!callback) {
				return;
			}

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
		 * Find all the items in the storage
		 * @param {function} callback The callback function used when all items were found
		 */
		findAll(callback) {
			callback = callback || function () {};
			callback.call(this, JSON.parse(localStorage[this._dbName]).todos);
		};

		/**
		 * Save the data in the database. If no element exists, a new element will be created, otherwise an update of the properties of the existing element will be carried out.
		 * @param {object} updateData The data object to save in the database
		 * @param {function} callback The callback function to use after saving
		 * @param {number} id The id of the element to save (optional)
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
			// If an ID was given, find the item and update each property
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
				// Assign ID
				/**
				 * Generate a unique identifier
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
		 * Removes an item from storage based on its ID
		 * @param {number} id The id of the element to delete
		 * @param {function} callback The callback function used after deletion
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
		 * Starts a new storage
		 * @param {function} callback The callback function used after sending the data
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