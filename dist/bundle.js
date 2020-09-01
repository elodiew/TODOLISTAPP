/******/
(function (modules) { // webpackBootstrap
  /******/ // The module cache
  /******/
  var installedModules = {};
  /******/
  /******/ // The require function
  /******/
  function __webpack_require__(moduleId) {
    /******/
    /******/ // Check if module is in cache
    /******/
    if (installedModules[moduleId]) {
      /******/
      return installedModules[moduleId].exports;
      /******/
    }
    /******/ // Create a new module (and put it into the cache)
    /******/
    var module = installedModules[moduleId] = {
      /******/
      i: moduleId,
      /******/
      l: false,
      /******/
      exports: {}
      /******/
    };
    /******/
    /******/ // Execute the module function
    /******/
    modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
    /******/
    /******/ // Flag the module as loaded
    /******/
    module.l = true;
    /******/
    /******/ // Return the exports of the module
    /******/
    return module.exports;
    /******/
  }
  /******/
  /******/
  /******/ // expose the modules object (__webpack_modules__)
  /******/
  __webpack_require__.m = modules;
  /******/
  /******/ // expose the module cache
  /******/
  __webpack_require__.c = installedModules;
  /******/
  /******/ // define getter function for harmony exports
  /******/
  __webpack_require__.d = function (exports, name, getter) {
    /******/
    if (!__webpack_require__.o(exports, name)) {
      /******/
      Object.defineProperty(exports, name, {
        enumerable: true,
        get: getter
      });
      /******/
    }
    /******/
  };
  /******/
  /******/ // define __esModule on exports
  /******/
  __webpack_require__.r = function (exports) {
    /******/
    if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
      /******/
      Object.defineProperty(exports, Symbol.toStringTag, {
        value: 'Module'
      });
      /******/
    }
    /******/
    Object.defineProperty(exports, '__esModule', {
      value: true
    });
    /******/
  };
  /******/
  /******/ // create a fake namespace object
  /******/ // mode & 1: value is a module id, require it
  /******/ // mode & 2: merge all properties of value into the ns
  /******/ // mode & 4: return value when already ns object
  /******/ // mode & 8|1: behave like require
  /******/
  __webpack_require__.t = function (value, mode) {
    /******/
    if (mode & 1) value = __webpack_require__(value);
    /******/
    if (mode & 8) return value;
    /******/
    if ((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
    /******/
    var ns = Object.create(null);
    /******/
    __webpack_require__.r(ns);
    /******/
    Object.defineProperty(ns, 'default', {
      enumerable: true,
      value: value
    });
    /******/
    if (mode & 2 && typeof value != 'string')
      for (var key in value) __webpack_require__.d(ns, key, function (key) {
        return value[key];
      }.bind(null, key));
    /******/
    return ns;
    /******/
  };
  /******/
  /******/ // getDefaultExport function for compatibility with non-harmony modules
  /******/
  __webpack_require__.n = function (module) {
    /******/
    var getter = module && module.__esModule ?
      /******/
      function getDefault() {
        return module['default'];
      } :
      /******/
      function getModuleExports() {
        return module;
      };
    /******/
    __webpack_require__.d(getter, 'a', getter);
    /******/
    return getter;
    /******/
  };
  /******/
  /******/ // Object.prototype.hasOwnProperty.call
  /******/
  __webpack_require__.o = function (object, property) {
    return Object.prototype.hasOwnProperty.call(object, property);
  };
  /******/
  /******/ // __webpack_public_path__
  /******/
  __webpack_require__.p = "";
  /******/
  /******/
  /******/ // Load entry module and return exports
  /******/
  return __webpack_require__(__webpack_require__.s = 0);
  /******/
})
/************************************************************************/
/******/
({

  /***/
  "./src/javascript/app.js":
    /*!*******************************!*\
      !*** ./src/javascript/app.js ***!
      \*******************************/
    /*! no static exports found */
    /***/
    (function (module, exports, __webpack_require__) {

      eval("/*global app, $on */\n\n__webpack_require__(/*! ../javascript/view.js */ \"./src/javascript/view.js\");\n__webpack_require__(/*! ../javascript/store.js */ \"./src/javascript/store.js\");\n__webpack_require__(/*! ../javascript/model.js */ \"./src/javascript/model.js\");\n__webpack_require__(/*! ../javascript/template.js */ \"./src/javascript/template.js\");\n__webpack_require__(/*! ../javascript/controller.js */ \"./src/javascript/controller.js\");\n__webpack_require__(/*! ../javascript/helpers.js */ \"./src/javascript/helpers.js\");\n__webpack_require__(/*! ../javascript/app.js */ \"./src/javascript/app.js\");\n\n(function () {\n\t'use strict';\n\n\t/**\n\t * Initialise une nouvelle liste de tâche.\n\t * @param {string} name Le nom de la nouvelle liste de tâches.\n\t */\n\tfunction Todo(name) {\n\t\tthis.storage = new app.Store(name);\n\t\tthis.model = new app.Model(this.storage);\n\t\tthis.template = new app.Template();\n\t\tthis.view = new app.View(this.template);\n\t\tthis.controller = new app.Controller(this.model, this.view);\n\t}\n\n\tlet todo = new Todo('todos-vanillajs');\n\n\tfunction setView() {\n\t\ttodo.controller.setView(document.location.hash);\n\t}\n\t$on(window, 'load', setView);\n\t$on(window, 'hashchange', setView);\n})();\n\n//# sourceURL=webpack:///./src/javascript/app.js?");

      /***/
    }),

  /***/
  "./src/javascript/controller.js":
    /*!**************************************!*\
      !*** ./src/javascript/controller.js ***!
      \**************************************/
    /*! no static exports found */
    /***/
    (function (module, exports) {

      eval("(function (window) {\n\t'use strict';\n\n\t/**\n\t * CONTROLLER Permet l'intéraction entre le Model et la View\n\t * @constructor\n\t * @param {object} model L'instance du Model\n\t * @param {object} view L'instance de la View\n\t */\n\tclass Controller {\n\t\tconstructor(model, view) {\n\t\t\tlet self = this;\n\t\t\tself.model = model;\n\t\t\tself.view = view;\n\n\t\t\tself.view.bind('newTodo', function (title) {\n\t\t\t\tself.addItem(title);\n\t\t\t});\n\n\t\t\tself.view.bind('itemEdit', function (item) {\n\t\t\t\tself.editItem(item.id);\n\t\t\t});\n\n\t\t\tself.view.bind('itemEditDone', function (item) {\n\t\t\t\tself.editItemSave(item.id, item.title);\n\t\t\t});\n\n\t\t\tself.view.bind('itemEditCancel', function (item) {\n\t\t\t\tself.editItemCancel(item.id);\n\t\t\t});\n\n\t\t\tself.view.bind('itemRemove', function (item) {\n\t\t\t\tself.removeItem(item.id);\n\t\t\t});\n\n\t\t\tself.view.bind('itemToggle', function (item) {\n\t\t\t\tself.toggleComplete(item.id, item.completed);\n\t\t\t});\n\n\t\t\tself.view.bind('removeCompleted', function () {\n\t\t\t\tself.removeCompletedItems();\n\t\t\t});\n\n\t\t\tself.view.bind('toggleAll', function (status) {\n\t\t\t\tself.toggleAll(status.completed);\n\t\t\t});\n\t\t}\n\n\t\t/**\n\t\t * Charge et initialise la View\n\t\t * @param {string} 'Peut prendre 3 valeurs : '' / 'active' / 'completed'\n\t\t */\n\t\tsetView(locationHash) {\n\t\t\tlet route = locationHash.split('/')[1];\n\t\t\tlet page = route || '';\n\t\t\tthis._updateFilterState(page);\n\t\t};\n\n\t\t/**\n\t\t * Affiche toutes les tâches de la liste en cours\n\t\t */\n\t\tshowAll() {\n\t\t\tlet self = this;\n\t\t\tself.model.read(function (data) {\n\t\t\t\tself.view.render('showEntries', data);\n\t\t\t});\n\t\t};\n\n\t\t/**\n\t\t * Affiche toutes les tâches actives de la liste en cours\n\t\t */\n\t\tshowActive() {\n\t\t\tlet self = this;\n\t\t\tself.model.read({\n\t\t\t\tcompleted: false\n\t\t\t}, function (data) {\n\t\t\t\tself.view.render('showEntries', data);\n\t\t\t});\n\t\t};\n\n\t\t/**\n\t\t * Affiche toutes les tâches complétées de la liste en cours\n\t\t */\n\t\tshowCompleted() {\n\t\t\tlet self = this;\n\t\t\tself.model.read({\n\t\t\t\tcompleted: true\n\t\t\t}, function (data) {\n\t\t\t\tself.view.render('showEntries', data);\n\t\t\t});\n\t\t};\n\n\t\t/**\n\t\t * Ajoute une nouvelle tâche dans la liste en cours (insertion dans le DOM et dans le local storage)\n\t\t * @param {string} title Le titre de la tâche ajoutée\n\t\t */\n\t\taddItem(title) {\n\t\t\tlet self = this;\n\n\t\t\tif (title.trim() === '') {\n\t\t\t\treturn;\n\t\t\t}\n\n\t\t\tself.model.create(title, function () {\n\t\t\t\tself.view.render('clearNewTodo');\n\t\t\t\tself._filter(true);\n\t\t\t});\n\t\t};\n\n\t\t/**\n\t\t * Déclenche le mode d'édition des éléments.\n\t\t * Active l'édition d'une tâche de la liste en cours\n\t\t *  @param {number} id L'id du model (correspondant à la tâche à éditer)\n\t\t */\n\t\teditItem(id) {\n\t\t\tlet self = this;\n\t\t\tself.model.read(id, function (data) {\n\t\t\t\tself.view.render('editItem', {\n\t\t\t\t\tid: id,\n\t\t\t\t\ttitle: data[0].title\n\t\t\t\t});\n\t\t\t});\n\t\t};\n\n\t\t/**\n\t\t * Enregistre la nouvelle tâche éditée\n\t\t *  @param {number} id L'id de la tâche éditéez\n\t\t *  @param {string} title Le titre de la tâche éditée\n\t\t */\n\t\teditItemSave(id, title) {\n\t\t\tlet self = this;\n\n\t\t\twhile (title[0] === \" \") {\n\t\t\t\ttitle = title.slice(1);\n\t\t\t}\n\n\t\t\twhile (title[title.length - 1] === \" \") {\n\t\t\t\ttitle = title.slice(0, -1);\n\t\t\t}\n\n\t\t\tif (title.length !== 0) {\n\t\t\t\tself.model.update(id, {\n\t\t\t\t\ttitle: title\n\t\t\t\t}, function () {\n\t\t\t\t\tself.view.render('editItemDone', {\n\t\t\t\t\t\tid: id,\n\t\t\t\t\t\ttitle: title\n\t\t\t\t\t});\n\t\t\t\t});\n\t\t\t} else {\n\t\t\t\tself.removeItem(id);\n\t\t\t}\n\t\t};\n\n\t\t/** \n\t\t * Annule l'édition de la tâche en cours \n\t\t * @param {number} idL'id de la tâche éditée\n\t\t */\n\t\teditItemCancel(id) {\n\t\t\tlet self = this;\n\t\t\tself.model.read(id, function (data) {\n\t\t\t\tself.view.render('editItemDone', {\n\t\t\t\t\tid: id,\n\t\t\t\t\ttitle: data[0].title\n\t\t\t\t});\n\t\t\t});\n\t\t};\n\n\t\t/**\n\t\t * Supprime une tâche de la liste en cours.\n\t\t * @param {number} id L'id de la tâche à supprimer dans le DOM et dans le localStorage\n\t\t */\n\t\tremoveItem(id) {\n\t\t\tlet self = this;\n\t\t\tlet items;\n\t\t\tself.model.read(function (data) {\n\t\t\t\titems = data;\n\t\t\t});\n\n\t\t\tself.model.remove(id, function () {\n\t\t\t\tself.view.render('removeItem', id);\n\t\t\t\tconsole.log(\"Element with ID: \" + id + \" has been removed.\");\n\t\t\t});\n\n\t\t\tself._filter();\n\t\t};\n\n\t\t/**\n\t\t * Supprime toutes les tâches terminées de la liste en cours\n\t\t */\n\t\tremoveCompletedItems() {\n\t\t\tlet self = this;\n\t\t\tself.model.read({\n\t\t\t\tcompleted: true\n\t\t\t}, function (data) {\n\t\t\t\tdata.forEach(function (item) {\n\t\t\t\t\tself.removeItem(item.id);\n\t\t\t\t});\n\t\t\t});\n\n\t\t\tself._filter();\n\t\t};\n\n\t\t/**\n\t\t * Actualise l'affichage de la tâche en fonction de son statut (terminé ou non)\n\t\t * Donnez-lui un identifiant d'un modèle et une case à cocher et il mettra à jour l'article\n\t\t * dans le stockage en fonction de l'état de la case à cocher.\n\t\t * @param {number} id L'id de la tâche (toutes les tâches sont parcourues)\n\t\t * @param {object} checkbox Vérifie si le champ checked est coché ou non\n\t\t * @param {boolean|undefined} silent Empêche le refiltrage des éléments de la liste\n\t\t */\n\t\ttoggleComplete(id, completed, silent) {\n\t\t\tlet self = this;\n\t\t\tself.model.update(id, {\n\t\t\t\tcompleted: completed\n\t\t\t}, function () {\n\t\t\t\tself.view.render('elementComplete', {\n\t\t\t\t\tid: id,\n\t\t\t\t\tcompleted: completed\n\t\t\t\t});\n\t\t\t});\n\n\t\t\tif (!silent) {\n\t\t\t\tself._filter();\n\t\t\t}\n\t\t};\n\n\t\t/**\n\t\t * Permet d'activer ou de désactiver les cases cochées\n\t\t * @param {object} completed Les tâches terminées\n\t\t */\n\t\ttoggleAll(completed) {\n\t\t\tlet self = this;\n\t\t\tself.model.read({\n\t\t\t\tcompleted: !completed\n\t\t\t}, function (data) {\n\t\t\t\tdata.forEach(function (item) {\n\t\t\t\t\tself.toggleComplete(item.id, completed, true);\n\t\t\t\t});\n\t\t\t});\n\n\t\t\tself._filter();\n\t\t};\n\n\t\t/**\n\t\t * Met à jour le compteur de tâche en bas à gauche de l'application\n\t\t */\n\t\t_updateCount() {\n\n\t\t\tlet self = this;\n\t\t\tself.model.getCount(function (todos) {\n\t\t\t\tself.view.render('updateElementCount', todos.active);\n\t\t\t\tself.view.render('clearCompletedButton', {\n\t\t\t\t\tcompleted: todos.completed,\n\t\t\t\t\tvisible: todos.completed > 0\n\t\t\t\t});\n\t\t\t\tself.view.render('toggleAll', {\n\t\t\t\t\tchecked: todos.completed === todos.total\n\t\t\t\t});\n\t\t\t\tself.view.render('contentBlockVisibility', {\n\t\t\t\t\tvisible: todos.total > 0\n\t\t\t\t});\n\t\t\t});\n\t\t};\n\n\t\t/**\n\t\t * Refiltre les tâches en fonction de leur statut actif (#active)\n\t\t * @param {boolean|undefined} force  Refiltre les tâches.\n\t\t */\n\t\t_filter(force) {\n\t\t\tlet activeRoute = this._activeRoute.charAt(0).toUpperCase() + this._activeRoute.substr(1);\n\n\t\t\t// Mettez à jour les éléments de la page, qui changent à chaque tâche terminée\n\t\t\tthis._updateCount();\n\n\t\t\t// Si le dernier itinéraire actif n'est pas \"Tous\" ou si nous changeons d'itinéraire, nous\n\t\t\t// recréez les éléments de l'élément todo, en appelant:\n\t\t\t//   this.show[All|Active|Completed]();\n\t\t\tif (force || this._lastActiveRoute !== 'All' || this._lastActiveRoute !== activeRoute) {\n\t\t\t\tthis['show' + activeRoute]();\n\t\t\t}\n\n\t\t\tthis._lastActiveRoute = activeRoute;\n\t\t};\n\n\t\t/**\n\t\t * Met à jour l'url pour filtrer les tâches (ajoute à l'url : /active ou /completed)\n\t\t */\n\t\t_updateFilterState(currentPage) { // \n\n\t\t\t// Stocker une référence à l'itinéraire actif, nous permettant de re-filtrer todo\n\t\t\t// éléments car ils sont marqués comme complets ou incomplets.\n\t\t\tthis._activeRoute = currentPage;\n\n\t\t\tif (currentPage === '') {\n\t\t\t\tthis._activeRoute = 'All';\n\t\t\t}\n\n\t\t\tthis._filter();\n\n\t\t\tthis.view.render('setFilter', currentPage);\n\t\t};\n\t};\n\n\t// Exporter vers la window\n\twindow.app = window.app || {};\n\twindow.app.Controller = Controller;\n})(window);\n\n//# sourceURL=webpack:///./src/javascript/controller.js?");

      /***/
    }),

  /***/
  "./src/javascript/helpers.js":
    /*!***********************************!*\
      !*** ./src/javascript/helpers.js ***!
      \***********************************/
    /*! no static exports found */
    /***/
    (function (module, exports) {

      eval("/**\n * NodeList globale\n */\n/** @global */\n(function (window) {\n\t'use strict';\n\n\t/**\n\t * Récupère un élément avec querySelector (qs) et le sélecteur CSS\n\t * @param {string} selector Le sélecteur css de l'élément\n\t *  @param {string} scope Le scope de l'élément (si pas renseigné, document par défaut)\n\t */\n\twindow.qs = function (selector, scope) {\n\t\treturn (scope || document).querySelector(selector);\n\t};\n\n\t/**\n\t * Récupère plusieurs éléments avec querySelectorAll (qsa) et le sélecteur CSS\n\t * @param {string} selector Le sélecteur css de l'élément\n\t *  @param {string} scope Le scope de l'élément (si pas renseigné, document par défaut)\n\t */\n\twindow.qsa = function (selector, scope) {\n\t\treturn (scope || document).querySelectorAll(selector);\n\t};\n\n\t/**\n\t * Ajoute un écouteur d'évènement à l'élément ciblé\n\t * @param {element} target L'élément ciblé\n\t *  @param {string} type Le type de l'évènement (click, change...)\n\t *  @param {string} callback La réponse en cas d'évènement\n\t *  @param {Boolean} useCapture indique si l'évènement est envoyé au listener enregistré avant d'être distribué à tout EventTarget (https://developer.mozilla.org/fr/docs/Web/API/EventTarget/addEventListener)\n\t */\n\twindow.$on = function (target, type, callback, useCapture) {\n\t\ttarget.addEventListener(type, callback, !!useCapture);\n\t};\n\n\t/**\n\t * Ajoute un écouteur d'évènement à tous les éléments qui correspondent au sélecteur passé dans la fonction.\n\t * @param {element} target L'élément ciblé\n\t *  @param {string} selector Le sélecteur css de l'élément ciblé\n\t *  @param {string} seltypeector Le type de l'event\n\t *  @param {string} handler Callback exécuté\n\t */\n\twindow.$delegate = function (target, selector, type, handler) {\n\t\tfunction dispatchEvent(event) {\n\t\t\tlet targetElement = event.target;\n\t\t\tlet potentialElements = window.qsa(selector, target);\n\t\t\tlet hasMatch = Array.prototype.indexOf.call(potentialElements, targetElement) >= 0;\n\n\t\t\tif (hasMatch) {\n\t\t\t\thandler.call(targetElement, event);\n\t\t\t}\n\t\t}\n\t\t// https://developer.mozilla.org/en-US/docs/Web/Events/blur\n\t\tlet useCapture = type === 'blur' || type === 'focus';\n\n\t\twindow.$on(target, type, dispatchEvent, useCapture);\n\t};\n\n\t/**\n\t * Trouve l'élément parent qui porte le tag suivant : $parent(qs('a'), 'div');\n\t * @param {element} element L'élément ciblé\n\t *  @param {string} tagName Le sélecteur css de l'élément ciblé\n\t */\n\twindow.$parent = function (element, tagName) {\n\t\tif (!element.parentNode) {\n\t\t\treturn;\n\t\t}\n\t\tif (element.parentNode.tagName.toLowerCase() === tagName.toLowerCase()) {\n\t\t\treturn element.parentNode;\n\t\t}\n\t\treturn window.$parent(element.parentNode, tagName);\n\t};\n\t// Autoriser la boucle sur les nœuds en chaînant:\n\t// qsa('.foo').forEach(function () {})\n\tNodeList.prototype.forEach = Array.prototype.forEach;\n})(window);\n\n//# sourceURL=webpack:///./src/javascript/helpers.js?");

      /***/
    }),

  /***/
  "./src/javascript/model.js":
    /*!*********************************!*\
      !*** ./src/javascript/model.js ***!
      \*********************************/
    /*! no static exports found */
    /***/
    (function (module, exports) {

      eval("(function (window) {\n\t'use strict';\n\n\t/**\n\t * MODEL Création d'une nouvelle instance de Model et intéraction avec la classe Store\n\t * Crée une nouvelle instance de modèle et connecte le stockage.\n\t * @constructor\n\t * @param {object} storage Identifie la classe Store côté client.\n\t */\n\tclass Model {\n\t\tconstructor(storage) {\n\t\t\tthis.storage = storage;\n\t\t}\n\n\t\t/**\n\t\t * Créer un nouveau model de todo pour la tâche ajoutée\n\t\t * @param {string} [title] Le titre de la tâche\n\t\t * @param {function} [callback] La fonction appelé après que le model soit crée.\n\t\t */\n\t\tcreate(title, callback) {\n\t\t\ttitle = title || '';\n\t\t\tcallback = callback || function () {};\n\n\t\t\tlet newItem = {\n\t\t\t\ttitle: title.trim(),\n\t\t\t\tcompleted: false\n\t\t\t};\n\n\t\t\tthis.storage.save(newItem, callback);\n\t\t};\n\n\t\t/**\n\t\t * Recherche et renvoie un modèle stocké. Si aucune requête n'est donnée, il sera simplement\n\t\t * tout retourner. Si vous passez une chaîne ou un nombre, cela ressemblera à\n\t\t * l'ID du modèle à trouver. Enfin, vous pouvez lui passer un objet pour correspondre\n\t\t * contre.remove\n\t\t * @param {string|number|object} [query] La requête pour filtrer les modèles\n\t\t * @param {function} [callback] Une fonction de rappel à utiliser lorsqu'un model est trouvé\n\t\t * \n\t\t * Recherche et retourne un modèle stocké. Si aucune requête n'est donnée, tout sera simplement retourné. Si vous transmettez une chaîne ou un nombre, il le recherchera en tant qu'ID du modèle à rechercher. Enfin, vous pouvez lui transmettre un objet à comparer. Recherche et retourne dans le localStorage un model stocké. Si aucune requête n'est envoyée, tous les models seront renvoyés. Si la requête est une chaine de caractère ou un nombre, la méthode recherchera un id de model à retourner Il est aussi possible de passer un objet à comparer dans la requête.\n\t\t * @example \n\t\t * model.read(1, func); // Va chercher et trouver le modèle avec l'id 1\n\t\t * model.read('1'); // Fera la même chose\n\t\t *  Ci-dessous, un exemple avec foo égal à bar et hello égal à world\n\t\t * model.read({ foo: 'bar', hello: 'world' });remove\n\t\t */\n\t\tread(query, callback) {\n\t\t\tlet queryType = typeof query;\n\t\t\tcallback = callback || function () {};\n\n\t\t\tif (queryType === 'function') {\n\t\t\t\tcallback = query;\n\t\t\t\treturn this.storage.findAll(callback);\n\t\t\t} else if (queryType === 'string' || queryType === 'number') {\n\t\t\t\tquery = parseInt(query, 10);\n\t\t\t\tthis.storage.find({\n\t\t\t\t\tid: query\n\t\t\t\t}, callback);\n\t\t\t} else {\n\t\t\t\tthis.storage.find(query, callback);\n\t\t\t}\n\t\t};\n\n\t\t/**\n\t\t * Met à jour un modèle en lui attribuant un ID, des données à mettre à jour et une fonction de rappel appelée une fois la mise à jour terminée.\n\t\t * @param {number} id L'id du model à mettre à jour\n\t\t * @param {object} data Les données à mettre à jour et leurs nouvelles valeurs\n\t\t * @param {function} callback La fonction de rappel utilisée après la mise à jour\n\t\t */\n\t\tupdate(id, data, callback) {\n\t\t\tthis.storage.save(data, callback, id);\n\t\t};\n\n\t\t/**\n\t\t * Supprime un élément du stockage\n\t\t * @param {number} id L'ID du modèle à supprimer\n\t\t * @param {function} callback La fonction de rappel utilisée après la suppression\n\t\t */\n\t\tremove(id, callback) {\n\t\t\tthis.storage.remove(id, callback);\n\t\t};\n\n\t\t/**\n\t\t * AVERTISSEMENT: Attention, cette méthode supprime tous les éléments du stockage\n\t\t * @param {function} callback La fonction de rappel utilisée après la suppression\n\t\t */\n\t\tremoveAll(callback) {\n\t\t\tthis.storage.drop(callback);\n\t\t};\n\n\t\t/**\n\t\t * Retourne le nombre de todos\n\t\t */\n\t\tgetCount(callback) {\n\t\t\tlet todos = {\n\t\t\t\tactive: 0,\n\t\t\t\tcompleted: 0,\n\t\t\t\ttotal: 0\n\t\t\t};\n\n\t\t\tthis.storage.findAll(function (data) {\n\t\t\t\tdata.forEach(function (todo) {\n\t\t\t\t\tif (todo.completed) {\n\t\t\t\t\t\ttodos.completed++;\n\t\t\t\t\t} else {\n\t\t\t\t\t\ttodos.active++;\n\t\t\t\t\t}\n\n\t\t\t\t\ttodos.total++;\n\t\t\t\t});\n\t\t\t\tcallback(todos);\n\t\t\t});\n\t\t};\n\t};\n\t// Exporter vers window\n\twindow.app = window.app || {};\n\twindow.app.Model = Model;\n})(window);\n\n//# sourceURL=webpack:///./src/javascript/model.js?");

      /***/
    }),

  /***/
  "./src/javascript/store.js":
    /*!*********************************!*\
      !*** ./src/javascript/store.js ***!
      \*********************************/
    /*! no static exports found */
    /***/
    (function (module, exports) {

      eval("/*jshint eqeqeq:false */\n(function (window) {\n\t'use strict';\n\n\t/**\n\t * STORE Crée un nouvel objet Store côté client et créera un espace vide si aucun objet existe déja.\n\t * @param {string} name Le nom de la base de donnée à utiliser\n\t * @param {function} callback La fonction de rappel (seulement parce qu'on est en localStorage) utilisé après l'initialisation du Store. Dans le cas d'une vrai BDD, nous effecturions des appels AJAX.\n\t */\n\tclass Store {\n\t\tconstructor(name, callback) {\n\t\t\tcallback = callback || function () {};\n\n\t\t\tthis._dbName = name;\n\n\t\t\tif (!localStorage[name]) {\n\t\t\t\tlet data = {\n\t\t\t\t\ttodos: []\n\t\t\t\t};\n\n\t\t\t\tlocalStorage[name] = JSON.stringify(data);\n\t\t\t}\n\n\t\t\tcallback.call(this, JSON.parse(localStorage[name]));\n\t\t}\n\n\t\t/**\n\t\t * Trouve un élément en fonction de la requête (objet JS)\n\t\t * @param {object} query La requête à comparer (par exemple {foo: 'bar'})\n\t\t * @param {function} callback La fonction de rappel à utiliser lorsque le traitement de la requête est terminé\n\t\t * @example\n\t\t * db.find({foo: 'bar', hello: 'world'}, function (data) {\n\t\t *\t // data will return any items that have foo: bar and\n\t\t *\t // hello: world in their properties\n\t\t * });\n\t\t */\n\t\tfind(query, callback) {\n\t\t\t// if (!callback) {\n\t\t\t// \treturn;\n\t\t\t// }\n\n\t\t\tlet todos = JSON.parse(localStorage[this._dbName]).todos;\n\n\t\t\tcallback.call(this, todos.filter(function (todo) {\n\t\t\t\tfor (let q in query) {\n\t\t\t\t\tif (query[q] !== todo[q]) {\n\t\t\t\t\t\treturn false;\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t\treturn true;\n\t\t\t}));\n\t\t};\n\n\t\t/**\n\t\t * Trouve tous les éléments présent dans le stockage\n\t\t * @param {function} callback La fonction de rappel utilisée lorsque tous les éléments ont été trouvés\n\t\t */\n\t\tfindAll(callback) {\n\t\t\tcallback = callback || function () {};\n\t\t\tcallback.call(this, JSON.parse(localStorage[this._dbName]).todos);\n\t\t};\n\n\t\t/**\n\t\t * Sauvegarde les données dans la BDD. Si aucun élément n'existe, un nouveau élément sera créé, sinon une mise à jour des propriétés de l' élément existant sera réalisé\n\t\t * @param {object} updateData L'objet data à sauvegarder dans la BDD\n\t\t * @param {function} callback La fonction de rappel à utiliser après la sauvegarde\n\t\t * @param {number} id L'id de l'élément à sauvegarder (facultatif)\n\t\t */\n\t\tsave(updateData, callback, id) {\n\t\t\tlet data = JSON.parse(localStorage[this._dbName]);\n\t\t\tlet todos = data.todos;\n\t\t\tcallback = callback || function () {};\n\t\t\t// Generer un ID\n\t\t\tlet newId = \"\";\n\t\t\tlet charset = \"0123456789\";\n\n\t\t\tfor (let i = 0; i < 6; i++) {\n\t\t\t\tnewId += charset.charAt(Math.floor(Math.random() * charset.length));\n\t\t\t}\n\t\t\t// Si un ID a été donné, recherchez l'élément et mettez à jour chaque propriété\n\t\t\tif (id) {\n\t\t\t\tfor (let i = 0; i < todos.length; i++) {\n\t\t\t\t\tif (todos[i].id === id) {\n\t\t\t\t\t\tfor (let key in updateData) {\n\t\t\t\t\t\t\ttodos[i][key] = updateData[key];\n\t\t\t\t\t\t}\n\t\t\t\t\t\tbreak;\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t\tlocalStorage[this._dbName] = JSON.stringify(data);\n\t\t\t\tcallback.call(this, todos);\n\t\t\t} else {\n\t\t\t\t// Assigner un ID\n\t\t\t\t/**\n\t\t\t\t * Génére un identifiant unique\n\t\t\t\t * @see  https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Date/now\n\t\t\t\t * @example\n\t\t\t\t * returns {number} 1519326977765\n\t\t\t\t */\n\t\t\t\t// updateData.id = parseInt(newId);\n\t\t\t\tupdateData.id = Date.now();\n\t\t\t\ttodos.push(updateData);\n\t\t\t\tlocalStorage[this._dbName] = JSON.stringify(data);\n\t\t\t\tcallback.call(this, [updateData]);\n\t\t\t}\n\t\t};\n\n\t\t/**\n\t\t * Supprime un élément du stockage en se basant sur son ID\n\t\t * @param {number} id L'id de l'élément à supprimer\n\t\t * @param {function} callback La fonction de rappel utilisée après la suppression\n\t\t */\n\t\tremove(id, callback) {\n\t\t\tlet data = JSON.parse(localStorage[this._dbName]);\n\t\t\tlet todos = data.todos;\n\t\t\tlet todoId;\n\n\t\t\tfor (let i = 0; i < todos.length; i++) {\n\t\t\t\tif (todos[i].id == id) {\n\t\t\t\t\ttodoId = todos[i].id;\n\t\t\t\t}\n\t\t\t}\n\n\t\t\tfor (let i = 0; i < todos.length; i++) {\n\t\t\t\tif (todos[i].id == todoId) {\n\t\t\t\t\ttodos.splice(i, 1);\n\t\t\t\t}\n\t\t\t}\n\n\t\t\tlocalStorage[this._dbName] = JSON.stringify(data);\n\t\t\tcallback.call(this, todos);\n\t\t};\n\n\t\t/**\n\t\t * Démarre un nouveau stockage\n\t\t * @param {function} callback La fonction de rappel utilisée après avoir envoyé les données\n\t\t */\n\t\tdrop(callback) {\n\t\t\tlet data = {\n\t\t\t\ttodos: []\n\t\t\t};\n\t\t\tlocalStorage[this._dbName] = JSON.stringify(data);\n\t\t\tcallback.call(this, data.todos);\n\t\t};\n\t};\n\t// Export to window\n\twindow.app = window.app || {};\n\twindow.app.Store = Store;\n})(window);\n\n//# sourceURL=webpack:///./src/javascript/store.js?");

      /***/
    }),

  /***/
  "./src/javascript/template.js":
    /*!************************************!*\
      !*** ./src/javascript/template.js ***!
      \************************************/
    /*! no static exports found */
    /***/
    (function (module, exports) {

      eval("/*jshint laxbreak:true */\n(function (window) {\n\t'use strict';\n\n\tlet htmlEscapes = {\n\t\t'&': '&amp;',\n\t\t'<': '&lt;',\n\t\t'>': '&gt;',\n\t\t'\"': '&quot;',\n\t\t'\\'': '&#x27;',\n\t\t'`': '&#x60;'\n\t};\n\n\tlet escapeHtmlChar = function (chr) {\n\t\treturn htmlEscapes[chr];\n\t};\n\n\tlet reUnescapedHtml = /[&<>\"'`]/g;\n\tlet reHasUnescapedHtml = new RegExp(reUnescapedHtml.source);\n\n\tlet escape = function (string) {\n\t\treturn (string && reHasUnescapedHtml.test(string)) ?\n\t\t\tstring.replace(reUnescapedHtml, escapeHtmlChar) :\n\t\t\tstring;\n\t};\n\n\t/**\n\t * TEMPLATE Définit le template utilisé pour afficher les tâches\n\t * @constructor\n\t */\n\tclass Template {\n\t\tconstructor() {\n\t\t\tthis.defaultTemplate = '<li data-id=\"{{id}}\" class=\"{{completed}}\">' +\n\t\t\t\t'<div class=\"view\">' +\n\t\t\t\t'<input class=\"toggle\" type=\"checkbox\" {{checked}}>' +\n\t\t\t\t'<label>{{title}}</label>' +\n\t\t\t\t'<button class=\"destroy\"></button>' +\n\t\t\t\t'</div>' +\n\t\t\t\t'</li>';\n\t\t}\n\n\t\t/**\n\t\t * Crée un élément HTML et place le template dans l'application. \n\t\t * Normalement, il est conseillé d'utiliser un moteur de template comme Mustache ou Handlebars.\n\t\t * Pour simplifier notre application, nous avons décidé de créer un template en vanilla JS.\n\t\t * @param {object} data L'objet contenant les informations à remplacer dans le template.\n\t\t * @returns {string} Chaîne HTML d'un élément <li> Le template HTML contenant l'élément\n\t\t * @example\n\t\t * view.show({\n\t\t * id: 1, // l'id de la tâche\n\t\t * title: \"Hello World\", // le titre de la tâche\n\t\t * completed: 0, // la tâche est par défaut non terminée\n\t\t});\n\t\t */\n\t\tshow(data) {\n\t\t\tlet i, l;\n\t\t\tlet view = '';\n\n\t\t\tfor (i = 0, l = data.length; i < l; i++) {\n\t\t\t\tlet template = this.defaultTemplate;\n\t\t\t\tlet completed = '';\n\t\t\t\tlet checked = '';\n\n\t\t\t\tif (data[i].completed) {\n\t\t\t\t\tcompleted = 'completed';\n\t\t\t\t\tchecked = 'checked';\n\t\t\t\t}\n\n\t\t\t\ttemplate = template.replace('{{id}}', data[i].id);\n\t\t\t\ttemplate = template.replace('{{title}}', escape(data[i].title));\n\t\t\t\ttemplate = template.replace('{{completed}}', completed);\n\t\t\t\ttemplate = template.replace('{{checked}}', checked);\n\n\t\t\t\tview = view + template;\n\t\t\t}\n\n\t\t\treturn view;\n\t\t};\n\n\t\t/**\n\t\t * Affiche un compteur de tâches actives en bas à gauche de l'application\n\t\t * @param {number} activeTodos Le nombre de tâches actives\n\t\t * @returns {string} Chaîne contenant le nombre\n\t\t */\n\t\titemCounter(activeTodos) {\n\t\t\tlet plural = activeTodos === 1 ? '' : 's';\n\n\t\t\treturn '<strong>' + activeTodos + '</strong> item' + plural + ' left';\n\t\t};\n\n\t\t/** \n\t\t * Affiche ou non le bouton \"Clear Completed\" (si pas de tâches terminées = pas de bouton)\n\t\t * @param  {Number} completedTodos Le nombre de tâche complétées\n\t\t * @returns {string} Chaîne contenant le nombre\n\t\t */\n\t\tclearCompletedButton(completedTodos) {\n\t\t\tif (completedTodos > 0) {\n\t\t\t\treturn 'Clear completed';\n\t\t\t} else {\n\t\t\t\treturn ''; // RETURN itemCounterLa chaine de caractère contenant le texte du bouton.\n\t\t\t}\n\t\t};\n\t};\n\t// Export to window\n\twindow.app = window.app || {};\n\twindow.app.Template = Template;\n})(window);\n\n//# sourceURL=webpack:///./src/javascript/template.js?");

      /***/
    }),

  /***/
  "./src/javascript/view.js":
    /*!********************************!*\
      !*** ./src/javascript/view.js ***!
      \********************************/
    /*! no static exports found */
    /***/
    (function (module, exports) {

      eval("/*global qs, qsa, $on, $parent, $delegate */\n\n(function (window) {\n\t'use strict';\n\t/** \n\t * VIEW Définit les valeurs par défaut du template ainsi que les intéractions avec le DOM (touches du clavier et évènements)\n\t * @param {string} template template utilisé\n\t */\n\tclass View {\n\t\tconstructor(template) {\n\t\t\tthis.template = template;\n\n\t\t\tthis.ENTER_KEY = 13;\n\t\t\tthis.ESCAPE_KEY = 27;\n\n\t\t\tthis.$todoList = qs('.todo-list');\n\t\t\tthis.$todoItemCounter = qs('.todo-count');\n\t\t\tthis.$clearCompleted = qs('.clear-completed');\n\t\t\tthis.$main = qs('.main');\n\t\t\tthis.$footer = qs('.footer');\n\t\t\tthis.$toggleAll = qs('.toggle-all');\n\t\t\tthis.$newTodo = qs('.new-todo');\n\t\t}\n\n\t\t/** \n\t\t * Supprime une tâche de la liste\n\t\t * @param {number} id L'id de la tâche à supprimer\n\t\t */\n\t\t_removeItem(id) {\n\t\t\tlet elem = qs('[data-id=\"' + id + '\"]');\n\n\t\t\tif (elem) {\n\t\t\t\tthis.$todoList.removeChild(elem);\n\t\t\t}\n\t\t};\n\n\t\t/** \n\t\t * Affiche ou cache les éléments terminés\n\t\t * @param {number} completedCount Le nombre d'éléments terminés\n\t\t * @param {boolean} visible Les éléments sont-ils visibles ou non ?\n\t\t */\n\t\t_clearCompletedButton(completedCount, visible) {\n\t\t\tthis.$clearCompleted.innerHTML = this.template.clearCompletedButton(completedCount);\n\t\t\tthis.$clearCompleted.style.display = visible ? 'block' : 'none';\n\t\t};\n\n\t\t/** \n\t\t * Affiche ou cache les éléments terminés\n\t\t * @param {string} currentPage Le filtre appliqué : '' / active / completed\n\t\t */\n\t\t_setFilter(currentPage) {\n\t\t\tqs('.filters .selected').className = '';\n\t\t\tqs('.filters [href=\"#/' + currentPage + '\"]').className = 'selected';\n\t\t};\n\n\t\t/** \n\t\t * Test si une tâche est terminée ou non\n\t\t * @param {number} id L'id de la tâche à tester\n\t\t * @param {boolean} completed La tâche est-elle terminée ou non ?\n\t\t */\n\t\t_elementComplete(id, completed) {\n\t\t\tlet listItem = qs('[data-id=\"' + id + '\"]');\n\n\t\t\t// if (!listItem) {\n\t\t\t// \treturn;\n\t\t\t// }\n\n\t\t\tlistItem.className = completed ? 'completed' : '';\n\n\t\t\t// Dans le cas où il a été basculé à partir d'un événement et non en cliquant sur la case à cocher\n\t\t\tqs('input', listItem).checked = completed;\n\t\t};\n\n\t\t/** \n\t\t * Editer une tâche dans la liste (grâce au double click)\n\t\t * @param {number} id L'id de la tâche à éditer\n\t\t * @param {string} title Le nouveau titre de la tâche\n\t\t */\n\t\t_editItem(id, title) {\n\t\t\tlet listItem = qs('[data-id=\"' + id + '\"]');\n\n\t\t\t// if (!listItem) {\n\t\t\t// \treturn;\n\t\t\t// }\n\n\t\t\tlistItem.className = listItem.className + ' editing';\n\n\t\t\tlet input = document.createElement('input');\n\t\t\tinput.className = 'edit';\n\n\t\t\tlistItem.appendChild(input);\n\t\t\tinput.focus();\n\t\t\tinput.value = title;\n\t\t};\n\n\t\t/** \n\t\t * Indique que l'édition d'une tâche est terminée\n\t\t * @param {number} id L'id de la tâche qui était en édition\n\t\t * @param {string} title Le nouveau titre de la tâche\n\t\t */\n\t\t_editItemDone(id, title) {\n\t\t\tlet listItem = qs('[data-id=\"' + id + '\"]');\n\n\t\t\t// if (!listItem) {\n\t\t\t// \treturn;\n\t\t\t// }\n\n\t\t\tlet input = qs('input.edit', listItem);\n\t\t\tlistItem.removeChild(input);\n\n\t\t\tlistItem.className = listItem.className.replace('editing', '');\n\n\t\t\tqsa('label', listItem).forEach(function (label) {\n\t\t\t\tlabel.textContent = title;\n\t\t\t});\n\t\t};\n\n\t\t/** \n\t\t * Indique que l'édition d'une tâche est terminée\n\t\t * @param {string} viewCmd La fonction active\n\t\t * @param {object} parameter Les paramètres actifs\n\t\t */\n\t\trender(viewCmd, parameter) {\n\t\t\tlet self = this;\n\t\t\tlet viewCommands = {\n\t\t\t\tshowEntries: function () {\n\t\t\t\t\tself.$todoList.innerHTML = self.template.show(parameter);\n\t\t\t\t},\n\t\t\t\tremoveItem: function () {\n\t\t\t\t\tself._removeItem(parameter);\n\t\t\t\t},\n\t\t\t\tupdateElementCount: function () {\n\t\t\t\t\tself.$todoItemCounter.innerHTML = self.template.itemCounter(parameter);\n\t\t\t\t},\n\t\t\t\tclearCompletedButton: function () {\n\t\t\t\t\tself._clearCompletedButton(parameter.completed, parameter.visible);\n\t\t\t\t},\n\t\t\t\tcontentBlockVisibility: function () {\n\t\t\t\t\tself.$main.style.display = self.$footer.style.display = parameter.visible ? 'block' : 'none';\n\t\t\t\t},\n\t\t\t\ttoggleAll: function () {\n\t\t\t\t\tself.$toggleAll.checked = parameter.checked;\n\t\t\t\t},\n\t\t\t\tsetFilter: function () {\n\t\t\t\t\tself._setFilter(parameter);\n\t\t\t\t},\n\t\t\t\tclearNewTodo: function () {\n\t\t\t\t\tself.$newTodo.value = '';\n\t\t\t\t},\n\t\t\t\telementComplete: function () {\n\t\t\t\t\tself._elementComplete(parameter.id, parameter.completed);\n\t\t\t\t},\n\t\t\t\teditItem: function () {\n\t\t\t\t\tself._editItem(parameter.id, parameter.title);\n\t\t\t\t},\n\t\t\t\teditItemDone: function () {\n\t\t\t\t\tself._editItemDone(parameter.id, parameter.title);\n\t\t\t\t}\n\t\t\t};\n\n\t\t\tviewCommands[viewCmd]();\n\t\t};\n\n\t\t/** \n\t\t * Définit les actions après l'édition d'une tâche\n\t\t * @param {element} element La tâche dont on cherche l'id\n\t\t * Return L'id de la tâche\n\t\t */\n\t\t_itemId(element) {\n\t\t\tlet li = $parent(element, 'li');\n\t\t\treturn parseInt(li.dataset.id, 10);\n\t\t};\n\n\t\t/** \n\t\t * Définit les actions après l'édition d'une tâche\n\t\t * @param {function} handler Fonction de rappel qui est exécutée lors de l'annulation de l'édition d'une tâche\n\t\t */\n\t\t_bindItemEditDone(handler) {\n\t\t\tlet self = this;\n\t\t\t$delegate(self.$todoList, 'li .edit', 'blur', function () {\n\t\t\t\tif (!this.dataset.iscanceled) {\n\t\t\t\t\thandler({\n\t\t\t\t\t\tid: self._itemId(this),\n\t\t\t\t\t\ttitle: this.value\n\t\t\t\t\t});\n\t\t\t\t}\n\t\t\t});\n\n\t\t\t$delegate(self.$todoList, 'li .edit', 'keypress', function (event) {\n\t\t\t\tif (event.keyCode === self.ENTER_KEY) {\n\t\t\t\t\t// Retirez le curseur de l'entrée lorsque vous appuyez sur Entrée, comme s'il \n\t\t\t\t\t// était une vraie forme\n\t\t\t\t\tthis.blur();\n\t\t\t\t}\n\t\t\t});\n\t\t};\n\n\t\t/** \n\t\t * Définit les actions lorsque l'édition d'une tâche est annulée\n\t\t * @param {function} handler Fonction de rappel qui est exécutée lors de l'annulation de l'édition d'une tâche\n\t\t */\n\t\t_bindItemEditCancel(handler) {\n\t\t\tlet self = this;\n\t\t\t$delegate(self.$todoList, 'li .edit', 'keyup', function (event) {\n\t\t\t\tif (event.keyCode === self.ESCAPE_KEY) {\n\t\t\t\t\tthis.dataset.iscanceled = true;\n\t\t\t\t\tthis.blur();\n\n\t\t\t\t\thandler({\n\t\t\t\t\t\tid: self._itemId(this)\n\t\t\t\t\t});\n\t\t\t\t}\n\t\t\t});\n\t\t};\n\n\t\t/** \n\t\t * Greffe des écouteurs d'évènements sur les tâches en fonction des actions de l'utilisateur, côté HTML\n\t\t * @param {string} event L'event choisi\n\t\t * @param {function} handler Fonctnion de rappel exécutée selon la situation\n\t\t */\n\t\tbind(event, handler) {\n\t\t\tlet self = this;\n\t\t\t// Amélioration\n\t\t\t// Methode servant a binbder plusieur event: dans une logique d'amelioraztion, nous avons utiliser un traitement switch, qui est un peu plus maintenable et un peu plus lisible et plus performant.\n\t\t\tswitch (event) {\n\t\t\t\tcase 'newTodo':\n\t\t\t\t\t$on(self.$newTodo, 'change', function () {\n\t\t\t\t\t\thandler(self.$newTodo.value);\n\t\t\t\t\t});\n\t\t\t\t\tbreak;\n\t\t\t\tcase 'removeCompleted':\n\t\t\t\t\t$on(self.$clearCompleted, 'click', function () {\n\t\t\t\t\t\thandler();\n\t\t\t\t\t});\n\t\t\t\t\tbreak;\n\t\t\t\tcase 'toggleAll':\n\t\t\t\t\t$on(self.$toggleAll, 'click', function () {\n\t\t\t\t\t\thandler({\n\t\t\t\t\t\t\tcompleted: this.checked\n\t\t\t\t\t\t});\n\t\t\t\t\t});\n\t\t\t\t\tbreak;\n\t\t\t\tcase 'itemEdit':\n\t\t\t\t\t$delegate(self.$todoList, 'li label', 'dblclick', function () {\n\t\t\t\t\t\thandler({\n\t\t\t\t\t\t\tid: self._itemId(this)\n\t\t\t\t\t\t});\n\t\t\t\t\t});\n\t\t\t\t\tbreak;\n\t\t\t\tcase 'itemRemove':\n\t\t\t\t\t$delegate(self.$todoList, '.destroy', 'click', function () {\n\t\t\t\t\t\thandler({\n\t\t\t\t\t\t\tid: self._itemId(this)\n\t\t\t\t\t\t});\n\t\t\t\t\t});\n\t\t\t\t\tbreak;\n\t\t\t\tcase 'itemToggle':\n\t\t\t\t\t$delegate(self.$todoList, '.toggle', 'click', function () {\n\t\t\t\t\t\thandler({\n\t\t\t\t\t\t\tid: self._itemId(this),\n\t\t\t\t\t\t\tcompleted: this.checked\n\t\t\t\t\t\t});\n\t\t\t\t\t});\n\t\t\t\t\tbreak;\n\t\t\t\tcase 'itemEditDone':\n\t\t\t\t\tself._bindItemEditDone(handler);\n\t\t\t\t\tbreak;\n\n\t\t\t\tcase 'itemEditCancel': {\n\t\t\t\t\tself._bindItemEditCancel(handler);\n\t\t\t\t}\n\t\t\t}\n\t\t};\n\t};\n\n\t// Export to window\n\twindow.app = window.app || {};\n\twindow.app.View = View;\n}(window));\n\n//# sourceURL=webpack:///./src/javascript/view.js?");

      /***/
    }),

  /***/
  0:
    /*!*************************************************************!*\
      !*** multi ./src/javascript/app.js ./assets/style/app.scss ***!
      \*************************************************************/
    /*! no static exports found */
    /***/
    (function (module, exports, __webpack_require__) {

      eval("__webpack_require__(/*! ./src/javascript/app.js */\"./src/javascript/app.js\");\n!(function webpackMissingModule() { var e = new Error(\"Cannot find module './assets/style/app.scss'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\n\n\n//# sourceURL=webpack:///multi_./src/javascript/app.js_./assets/style/app.scss?");

      /***/
    })

  /******/
});