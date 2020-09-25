/*jshint laxbreak:true */
(function (window) {
	'use strict';

	let htmlEscapes = {
		'&': '&amp;',
		'<': '&lt;',
		'>': '&gt;',
		'"': '&quot;',
		'\'': '&#x27;',
		'`': '&#x60;'
	};

	let escapeHtmlChar = function (chr) {
		return htmlEscapes[chr];
	};

	let reUnescapedHtml = /[&<>"'`]/g;
	let reHasUnescapedHtml = new RegExp(reUnescapedHtml.source);

	let escape = function (string) {
		return (string && reHasUnescapedHtml.test(string)) ?
			string.replace(reUnescapedHtml, escapeHtmlChar) :
			string;
	};

	/**
	 * TEMPLATE Defines the template used to display tasks
	 * @constructor
	 */
	class Template {
		constructor() {
			this.defaultTemplate = '<li data-id="{{id}}" class="{{completed}}">' +
				'<div class="view">' +
				'<input class="toggle" type="checkbox" {{checked}}>' +
				'<label>{{title}}</label>' +
				'<button class="destroy"></button>' +
				'</div>' +
				'</li>';
		}

		/**
		 * Creates an HTML element and places the template in the application.
		 * Normally, it is advisable to use a template engine like Mustache or Handlebars.
		 * To simplify our application, we decided to create a template in vanilla JS.
		 * @param {object} data The object containing the information to replace in the template.
		 * @returns {string} HTML string of an <li> element The HTML template containing the element
		 * @example
		 * view.show({
		 * id: 1, // the task id
		 * title: "Hello World", // this title of the task 
		 * completed: 0, // the task is by default not completed
		});
		 */
		show(data) {
			let i, l;
			let view = '';

			for (i = 0, l = data.length; i < l; i++) {
				let template = this.defaultTemplate;
				let completed = '';
				let checked = '';

				if (data[i].completed) {
					completed = 'completed';
					checked = 'checked';
				}

				template = template.replace('{{id}}', data[i].id);
				template = template.replace('{{title}}', escape(data[i].title));
				template = template.replace('{{completed}}', completed);
				template = template.replace('{{checked}}', checked);

				view = view + template;
			}

			return view;
		};

		/**
		 * Displays an active task counter at the bottom left of the application
		 * @param {number} activeTodos The number of active tasks
		 * @returns {string} String containing the number
		 */
		itemCounter(activeTodos) {
			let plural = activeTodos === 1 ? '' : 's';

			return '<strong>' + activeTodos + '</strong> item' + plural + ' left';
		};

		/** 
		 * Display or not the "Clear Completed" button (if no completed tasks = no button)
		 * @param  {Number} completedTodos The number of completed tasks
		 * @returns {string} String containing the number
		 */
		clearCompletedButton(completedTodos) {
			if (completedTodos > 0) {
				return 'Clear completed';
			} else {
				return ''; // RETURN itemCounter The string containing the button text.
			}
		};
	};
	// Export to window
	window.app = window.app || {};
	window.app.Template = Template;
})(window);