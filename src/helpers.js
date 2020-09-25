/**
 * NodeList globale
 */
/** @global */
(function (window) {
	'use strict';

	/**
	 * Récupère un élément avec querySelector (qs) et le sélecteur CSS
	 * @param {string} selector The element's css selector
	 *  @param {string} scope The scope of the element (if not filled in, default document)
	 */
	window.qs = function (selector, scope) {
		return (scope || document).querySelector(selector);
	};

	/**
	 * Get multiple items with querySelectorAll (qsa) and CSS selector
	 * @param {string} selector The element's css selector
	 *  @param {string} scope The scope of the element (if not filled in, default document)
	 */
	window.qsa = function (selector, scope) {
		return (scope || document).querySelectorAll(selector);
	};

	/**
	 * Adds an event listener to the targeted item
	 * @param {element} target The targeted element
	 *  @param {string} type The type of event (click, change ...)
	 *  @param {string} callback The response in the event of an event
	 *  @param {Boolean} useCapture indicates if the event is sent to the registered listener before being dispatched to any EventTarget (https://developer.mozilla.org/fr/docs/Web/API/EventTarget/addEventListener)
	 */
	window.$on = function (target, type, callback, useCapture) {
		target.addEventListener(type, callback, !!useCapture);
	};

	/**
	 * Adds an event listener to all items that match the selector passed in the function.
	 * @param {element} target The targeted element
	 *  @param {string} selector The css selector of the targeted element
	 *  @param {string} seltypeector The type of event
	 *  @param {string} handler Callback executed
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
	 * Find the parent element with the following tag: $ parent (qs ('a'), 'div');
	 * @param {element} element The targeted element
	 *  @param {string} tagName The css selector of the targeted element
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
	// Allow the loop on the nodes by chaining:
	// qsa('.foo').forEach(function () {})
	NodeList.prototype.forEach = Array.prototype.forEach;
})(window);