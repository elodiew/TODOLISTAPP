/* NodeList globale */
(function (window) {
	'use strict';

	// Récupérez les éléments par le sélecteur CSS:
	window.qs = function (selector, scope) {
		return (scope || document).querySelector(selector);
	};
	window.qsa = function (selector, scope) {
		return (scope || document).querySelectorAll(selector);
	};

	// ajouter le wrapper Event Listener:
	window.$on = function (target, type, callback, useCapture) {
		target.addEventListener(type, callback, !!useCapture);
	};

	// Attachez un gestionnaire à l'événement pour tous les éléments qui correspondent au sélecteur,
	// maintenant ou dans le futur, basé sur un élément racine
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

	// Trouvez le parent de l'élément avec le nom de balise donné:
	// $parent(qs('a'), 'div');
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