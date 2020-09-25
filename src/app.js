/*global app, $on */

require('./view.js');
require('./store.js');
require('./model.js');
require('./template.js');
require('./controller.js');
require('./helpers.js');
require('./app.js');
// require('./dist/main.css');
import './style/main.css'
import '../assets/img/todo.png'


(function () {
	'use strict';

	/**
	 * Initializes a new task list.
	 * @param {string} name The name of the new task list.
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