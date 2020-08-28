/**
 * NodeList globale
 */
/** @global */
(function (window) {
	'use strict';

	/**
	 * Récupère un élément avec querySelector (qs) et le sélecteur CSS
	 * @param {string} selector Le sélecteur css de l'élément
	 *  @param {string} scope Le scope de l'élément (si pas renseigné, document par défaut)
	 */
	window.qs = function (selector, scope) {
		return (scope || document).querySelector(selector);
	};

	/**
	 * Récupère plusieurs éléments avec querySelectorAll (qsa) et le sélecteur CSS
	 * @param {string} selector Le sélecteur css de l'élément
	 *  @param {string} scope Le scope de l'élément (si pas renseigné, document par défaut)
	 */
	window.qsa = function (selector, scope) {
		return (scope || document).querySelectorAll(selector);
	};

	/**
	 * Ajoute un écouteur d'évènement à l'élément ciblé
	 * @param {element} target L'élément ciblé
	 *  @param {string} type Le type de l'évènement (click, change...)
	 *  @param {string} callback La réponse en cas d'évènement
	 *  @param {Boolean} useCapture indique si l'évènement est envoyé au listener enregistré avant d'être distribué à tout EventTarget (https://developer.mozilla.org/fr/docs/Web/API/EventTarget/addEventListener)
	 */
	window.$on = function (target, type, callback, useCapture) {
		target.addEventListener(type, callback, !!useCapture);
	};

	/**
	 * Ajoute un écouteur d'évènement à tous les éléments qui correspondent au sélecteur passé dans la fonction.
	 * @param {element} target L'élément ciblé
	 *  @param {string} selector Le sélecteur css de l'élément ciblé
	 *  @param {string} seltypeector Le type de l'event
	 *  @param {string} handler Callback exécuté
	 */
	window.$delegate = function (target, selector, type, handler) {
		function dispatchEvent(event) {
			let targetElement = event.target;
			let potentialElements = window.qsa(selector, target);
			let hasMatch = Array.prototype.indexOf.call(potentialElements, targetElement) >= 0;

			if (hasMatch) {
				handler.call(targetElement, event);
			}
		}
		// https://developer.mozilla.org/en-US/docs/Web/Events/blur
		let useCapture = type === 'blur' || type === 'focus';

		window.$on(target, type, dispatchEvent, useCapture);
	};

	/**
	 * Trouve l'élément parent qui porte le tag suivant : $parent(qs('a'), 'div');
	 * @param {element} element L'élément ciblé
	 *  @param {string} tagName Le sélecteur css de l'élément ciblé
	 */
	window.$parent = function (element, tagName) {
		if (!element.parentNode) {
			return;
		}
		if (element.parentNode.tagName.toLowerCase() === tagName.toLowerCase()) {
			return element.parentNode;
		}
		return window.$parent(element.parentNode, tagName);
	};
	// Autoriser la boucle sur les nœuds en chaînant:
	// qsa('.foo').forEach(function () {})
	NodeList.prototype.forEach = Array.prototype.forEach;
})(window);