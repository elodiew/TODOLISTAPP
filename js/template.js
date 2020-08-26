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
	 * TEMPLATE Définit le template utilisé pour afficher les tâches
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
		 * Crée un élément HTML et place le template dans l'application. 
		 * Normalement, il est conseillé d'utiliser un moteur de template comme Mustache ou Handlebars.
		 * Pour simplifier notre application, nous avons décidé de créer un template en vanilla JS.
		 * @param {object} data L'objet contenant les informations à remplacer dans le template.
		 * @returns {string} Chaîne HTML d'un élément <li> Le template HTML contenant l'élément
		 * @example
		 * view.show({
		 * id: 1, // l'id de la tâche
		 * title: "Hello World", // le titre de la tâche
		 * completed: 0, // la tâche est par défaut non terminée
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
		 * Affiche un compteur de tâches actives en bas à gauche de l'application
		 * @param {number} activeTodos Le nombre de tâches actives
		 * @returns {string} Chaîne contenant le nombre
		 */
		itemCounter(activeTodos) {
			let plural = activeTodos === 1 ? '' : 's';

			return '<strong>' + activeTodos + '</strong> item' + plural + ' left';
		};

		/** 
		 * Affiche ou non le bouton "Clear Completed" (si pas de tâches terminées = pas de bouton)
		 * @param  {[type]} completedTodos Le nombre de tâche complétées
		 * @returns {string} Chaîne contenant le nombre
		 */
		clearCompletedButton(completedTodos) {
			if (completedTodos > 0) {
				return 'Clear completed';
			} else {
				return ''; // RETURN itemCounterLa chaine de caractère contenant le texte du bouton.
			}
		};
	};
	// Export to window
	window.app = window.app || {};
	window.app.Template = Template;
})(window);