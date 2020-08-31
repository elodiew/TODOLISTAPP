/*global app, $on */

require('../javascript/view.js');
require('../javascript/store.js');
require('../javascript/model.js');
require('../javascript/template.js');
require('../javascript/controller.js');
require('../javascript/helpers.js');
require('../javascript/app.js');

(function () {
	'use strict';

	/**
	 * Initialise une nouvelle liste de tâche.
	 * @param {string} name Le nom de la nouvelle liste de tâches.
	 */
	function Todo(name) {
		this.storage = new app.Store(name);
		this.model = new app.Model(this.storage);
		this.template = new app.Template();
		this.view = new app.View(this.template);
		this.controller = new app.Controller(this.model, this.view);
	}

	let todo = new Todo('todos-vanillajs');

	function setView() {
		todo.controller.setView(document.location.hash);
	}
	$on(window, 'load', setView);
	$on(window, 'hashchange', setView);
})();