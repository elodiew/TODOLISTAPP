(function (window) {
	'use strict';

	/**
	 * CONTROLLER Allows interaction between the Model and the View
	 * @constructor
	 * @param {object} model The Model instance
	 * @param {object} view The View instance
	 */
	class Controller {
		constructor(model, view) {
			let self = this;
			self.model = model;
			self.view = view;

			self.view.bind('newTodo', function (title) {
				self.addItem(title);
			});

			self.view.bind('itemEdit', function (item) {
				self.editItem(item.id);
			});

			self.view.bind('itemEditDone', function (item) {
				self.editItemSave(item.id, item.title);
			});

			self.view.bind('itemEditCancel', function (item) {
				self.editItemCancel(item.id);
			});

			self.view.bind('itemRemove', function (item) {
				self.removeItem(item.id);
			});

			self.view.bind('itemToggle', function (item) {
				self.toggleComplete(item.id, item.completed);
			});

			self.view.bind('removeCompleted', function () {
				self.removeCompletedItems();
			});

			self.view.bind('toggleAll', function (status) {
				self.toggleAll(status.completed);
			});
		}

		/**
		 * Loads and initializes the View
		 * @param {string} 'Can take 3 values:' '/' active '/' completed '
		 */
		setView(locationHash) {
			let route = locationHash.split('/')[1];
			let page = route || '';
			this._updateFilterState(page);
		};

		/**
		 * Displays all tasks in the current list
		 */
		showAll() {
			let self = this;
			self.model.read(function (data) {
				self.view.render('showEntries', data);
			});
		};

		/**
		 * Displays all active tasks in the current list
		 */
		showActive() {
			let self = this;
			self.model.read({
				completed: false
			}, function (data) {
				self.view.render('showEntries', data);
			});
		};

		/**
		 * Displays all completed tasks in the current list
		 */
		showCompleted() {
			let self = this;
			self.model.read({
				completed: true
			}, function (data) {
				self.view.render('showEntries', data);
			});
		};

		/**
		 * Adds a new task in the current list (insertion in the DOM and in the local storage)
		 * @param {string} title The title of the added task
		 */
		addItem(title) {
			let self = this;

			if (title.trim() === '') {
				return;
			}

			self.model.create(title, function () {
				self.view.render('clearNewTodo');
				self._filter(true);
			});
		};

		/**
		 * Triggers edit mode for items.
		 * Enables editing of a task from the current list
		 *  @param {number} id The model id (corresponding to the task to edit)
		 */
		editItem(id) {
			let self = this;
			self.model.read(id, function (data) {
				self.view.render('editItem', {
					id: id,
					title: data[0].title
				});
			});
		};

		/**
		 * Save the new edited task
		 *  @param {number} id The id of the edited task
		 *  @param {string} title The title of the edited task
		 */
		editItemSave(id, title) {
			let self = this;

			while (title[0] === " ") {
				title = title.slice(1);
			}

			while (title[title.length - 1] === " ") {
				title = title.slice(0, -1);
			}

			if (title.length !== 0) {
				self.model.update(id, {
					title: title
				}, function () {
					self.view.render('editItemDone', {
						id: id,
						title: title
					});
				});
			} else {
				self.removeItem(id);
			}
		};

		/** 
		 * Cancels editing of the current task
		 * @param {number} idL L'id of the edited task
		 */
		editItemCancel(id) {
			let self = this;
			self.model.read(id, function (data) {
				self.view.render('editItemDone', {
					id: id,
					title: data[0].title
				});
			});
		};

		/**
		 * Removes a task from the current list.
		 * @param {number} id The id of the task to delete in the DOM and in the localStorage
		 */
		removeItem(id) {
			let self = this;
			let items;
			self.model.read(function (data) {
				items = data;
			});

			// Suppression de la boucle Foreach
			// items.forEach(function(item) {
			// 	if (item.id === id) {
			// 		console.log("Element with ID: " + id + " has been removed.");
			// 	}
			// });

			self.model.remove(id, function () {
				self.view.render('removeItem', id);
				console.log("Element with ID: " + id + " has been removed.");
			});

			self._filter();
		};

		/**
		 * Removes all completed tasks from the current list
		 */
		removeCompletedItems() {
			let self = this;
			self.model.read({
				completed: true
			}, function (data) {
				data.forEach(function (item) {
					self.removeItem(item.id);
				});
			});

			self._filter();
		};

		/**
		 * Updates the display of the task according to its status (completed or not)
		 * Give it a template id and a checkbox and it will update the article
		 * in storage according to the state of the checkbox.
		 * @param {number} id The task id (all tasks are scanned)
		 * @param {object} checkbox Checks if the checked field is checked or not
		 * @param {boolean|undefined} silent Prevents re-filtering of list items
		 */
		toggleComplete(id, completed, silent) {
			let self = this;
			self.model.update(id, {
				completed: completed
			}, function () {
				self.view.render('elementComplete', {
					id: id,
					completed: completed
				});
			});

			if (!silent) {
				self._filter();
			}
		};

		/**
		 * Allows you to activate or deactivate the checked boxes
		 * @param {object} completed Completed tasks
		 */
		toggleAll(completed) {
			let self = this;
			self.model.read({
				completed: !completed
			}, function (data) {
				data.forEach(function (item) {
					self.toggleComplete(item.id, completed, true);
				});
			});

			self._filter();
		};

		/**
		 * Updates the task counter at the bottom left of the app
		 */
		_updateCount() {

			let self = this;
			self.model.getCount(function (todos) {
				self.view.render('updateElementCount', todos.active);
				self.view.render('clearCompletedButton', {
					completed: todos.completed,
					visible: todos.completed > 0
				});
				self.view.render('toggleAll', {
					checked: todos.completed === todos.total
				});
				self.view.render('contentBlockVisibility', {
					visible: todos.total > 0
				});
			});
		};

		/**
		 * Refilter tasks according to their active status (#active)
		 * @param {boolean|undefined} force  Refilter the tasks.
		 */
		_filter(force) {
			let activeRoute = this._activeRoute.charAt(0).toUpperCase() + this._activeRoute.substr(1);

			// Update the page elements, which change with each completed task
			this._updateCount();

			// If the last active route is not "All" or if we change the route, we
			// recreate the elements of the todo element, by calling:
			//   this.show[All|Active|Completed]();
			if (force || this._lastActiveRoute !== 'All' || this._lastActiveRoute !== activeRoute) {
				this['show' + activeRoute]();
			}

			this._lastActiveRoute = activeRoute;
		};

		/**
		 * Update url to filter tasks (add to url: / active or / completed)
		 */
		_updateFilterState(currentPage) { // 

			// Store a reference to the active route, allowing us to re-filter todo
			// items because they are marked as complete or incomplete.
			this._activeRoute = currentPage;

			if (currentPage === '') {
				this._activeRoute = 'All';
			}

			this._filter();

			this.view.render('setFilter', currentPage);
		};
	};

	// Export to window
	window.app = window.app || {};
	window.app.Controller = Controller;
})(window);