(function (window) {
	'use strict';

	/**
	 * MODEL Creation of a new Model instance and interaction with the Store class
	 * Creates a new model instance and connects storage.
	 * @constructor
	 * @param {object} storage Identifies the client-side Store class.
	 */
	class Model {
		constructor(storage) {
			this.storage = storage;
		}

		/**
		 * Create a new todo model for the added task
		 * @param {string} [title] The title of the task
		 * @param {function} [callback] The function called after the model is created.
		 */
		create(title, callback) {
			title = title || '';
			callback = callback || function () {};

			let newItem = {
				title: title.trim(),
				completed: false
			};

			this.storage.save(newItem, callback);
		};

		/**
		 * Finds and returns a stored model. If no request is given, it will simply be
		 * return everything. If you pass a string or a number it will look like
		 * the ID of the model to find. Finally, you can pass it an object to match
		 * contre.remove
		 * @param {string|number|object} [query] The query to filter the models
		 * @param {function} [callback] A callback function to use when a model is found
		 * 
		 * Finds and returns a stored model. If no request is given, everything will simply be returned. If you pass a string or a number, it will look for it as the ID of the pattern to find. Finally, you can pass it an object to compare. Finds and returns a stored model in the localStorage. If no request is sent, all models will be returned. If the request is a string or a number, the method will look for a model id to return. It is also possible to pass an object to compare in the request.
		 * @example 
		 * model.read(1, func); // Go search and find the model with id 1
		 * model.read('1'); // Will do the same
		 *  Below is an example with foo equal to bar and hello equal to world
		 * model.read({ foo: 'bar', hello: 'world' });remove
		 */
		read(query, callback) {
			let queryType = typeof query;
			callback = callback || function () {};

			if (queryType === 'function') {
				callback = query;
				return this.storage.findAll(callback);
			} else if (queryType === 'string' || queryType === 'number') {
				query = parseInt(query, 10);
				this.storage.find({
					id: query
				}, callback);
			} else {
				this.storage.find(query, callback);
			}
		};

		/**
		 * Updates a model by assigning it an ID, data to update, and a callback function called when the update is complete.
		 * @param {number} id The id of the model to update
		 * @param {object} data The data to update and their new values
		 * @param {function} callback The callback function used after the update
		 */
		update(id, data, callback) {
			this.storage.save(data, callback, id);
		};

		/**
		 * Removes an item from storage
		 * @param {number} id The ID of the model to delete
		 * @param {function} callback The callback function used after deletion
		 */
		remove(id, callback) {
			this.storage.remove(id, callback);
		};

		/**
		 * WARNING: Be careful, this method removes all items from storage
		 * @param {function} callback The callback function used after deletion
		 */
		removeAll(callback) {
			this.storage.drop(callback);
		};

		/**
		 * Returns the number of todos
		 */
		getCount(callback) {
			let todos = {
				active: 0,
				completed: 0,
				total: 0
			};

			this.storage.findAll(function (data) {
				data.forEach(function (todo) {
					if (todo.completed) {
						todos.completed++;
					} else {
						todos.active++;
					}

					todos.total++;
				});
				callback(todos);
			});
		};
	};
	// Export to window
	window.app = window.app || {};
	window.app.Model = Model;
})(window);