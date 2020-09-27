/*global app, jasmine, describe, it, beforeEach, expect */

describe('controller', function () {
	'use strict';

	let subject, model, view;

	let setUpModel = function (todos) { // "setUpModel" = Configurer le modele
		model.read.and.callFake(function (query, callback) {
			callback = callback || query;
			callback(todos);
		});

		model.getCount.and.callFake(function (callback) {

			let todoCounts = {
				active: todos.filter(function (todo) {
					return !todo.completed;
				}).length,
				completed: todos.filter(function (todo) {
					return !!todo.completed;
				}).length,
				total: todos.length
			};

			callback(todoCounts);
		});

		model.remove.and.callFake(function (id, callback) {
			callback();
		});

		model.create.and.callFake(function (title, callback) {
			callback();
		});

		model.update.and.callFake(function (id, updateData, callback) {
			callback();
		});
	};

	// "createViewStub" = creer un stub de vue
	let createViewStub = function () {
		let eventRegistry = {};
		return {
			render: jasmine.createSpy('render'),
			bind: function (event, handler) {
				eventRegistry[event] = handler;
			},
			trigger: function (event, parameter) {
				eventRegistry[event](parameter);
			}
		};
	};

	beforeEach(function () {
		model = jasmine.createSpyObj('model', ['read', 'getCount', 'remove', 'create', 'update']);
		view = createViewStub();
		subject = new app.Controller(model, view);
	});

	it('should show entries on start-up', function () { // devrait afficher les tache au chargement
		// TODO: write test 01
		let todos = {}; // créer un objet todos vide
		setUpModel([todos]); // initialiser le modèle avec l'objet todos
		subject.setView(''); // intialiser la vue

		// l'application s'attend à ce que la vue soit appelée avec showEntries et l'objet todos
		expect(view.render).toHaveBeenCalledWith('showEntries', [todos]);

	});

	describe('routing', function () {

		it('should show all entries without a route', function () { // devrait afficher toutes les tache au chargement
			let todo = {
				title: 'my todo'
			};
			setUpModel([todo]);

			subject.setView('');

			expect(view.render).toHaveBeenCalledWith('showEntries', [todo]);
		});

		it('should show all entries without "all" route', function () { // devrait afficher toutes les tache au chargement "all"
			let todo = {
				title: 'my todo'
			};
			setUpModel([todo]);

			subject.setView('#/');

			expect(view.render).toHaveBeenCalledWith('showEntries', [todo]);
		});

		it('should show active entries', function () { // devrait afficher les tache actives
			// START TODO: write test 02 ****************************************/
			let todo = {
				title: 'todoTest',
				completed: false // terminer
			};
			// créer un objet todo avec la propriété completed à false

			setUpModel([todo]); // initialiser le modèle avec l'objet todo
			subject.setView('#/active'); // initialiser la vue en affichant seulement les todos actives

			// doit retourner true si le model trouve la todo testée (avec le paramètre completed)
			expect(model.read).toHaveBeenCalledWith({
				completed: false
			}, jasmine.any(Function));

			// l'application s'attend à ce que la vue soit appelée avec showEntries et l'objet todos
			expect(view.render).toHaveBeenCalledWith('showEntries', [todo]);
			// END write test ****************************************/
		});


		it('should show completed entries', function () { // devrait afficher les tache terminees
			// START TODO: write test 03 ****************************************/
			let todo = {
				title: 'todoTest',
				completed: true
			}; // créer un objet todo avec la propriété completed à true
			setUpModel([todo]); // initialiser le modèle avec l'objet todo
			subject.setView('#/completed'); // initialiser la vue en affichant seulement les todos complétées

			// doit retourner true si le model trouve la todo testée (le paramètre completed)
			expect(model.read).toHaveBeenCalledWith({
				completed: true
			}, jasmine.any(Function));

			// l'application s'attend à ce que la vue soit appelée avec showEntries et l'objet todos
			expect(view.render).toHaveBeenCalledWith('showEntries', [todo]);
			// END write test ****************************************/
		});
	});

	it('should show the content block when todos exists', function () { // devrait afficher le bloc de contenu lorsque todos existe
		setUpModel([{
			title: 'my todo',
			completed: true
		}]);

		subject.setView('');

		expect(view.render).toHaveBeenCalledWith('contentBlockVisibility', {
			visible: true
		});
	});

	it('should hide the content block when no todos exists', function () { // devrait masquer le bloc de contenu lorsqu il n y a pas de todos
		setUpModel([]);

		subject.setView('');

		expect(view.render).toHaveBeenCalledWith('contentBlockVisibility', {
			visible: false
		});
	});

	it('should check the toggle all button, if all todos are completed', function () { // devrait cocher le bouton bascule tout, si toutes les taches sont terminees
		setUpModel([{
			title: 'my todo',
			completed: true
		}]);

		subject.setView('');

		expect(view.render).toHaveBeenCalledWith('toggleAll', {
			checked: true
		});
	});

	it('should set the "clear completed" button', function () { // devrait definir le bouton "Effacer termine"
		let todo = {
			id: 42,
			title: 'my todo',
			completed: true
		};
		setUpModel([todo]);

		subject.setView('');

		expect(view.render).toHaveBeenCalledWith('clearCompletedButton', {
			completed: 1,
			visible: true
		});
	});

	it('should highlight "All" filter by default', function () { // doit mettre en evidence le filtre "Tous" par defaut
		// TODO: write test 04
		let filterAll = ''; // le filtre par défaut pour afficher toutes les todos

		setUpModel([]); // initialiser le modèle
		subject.setView(filterAll); // initialiser la vue avec le filtre par défaut

		// l'application s'attend à ce que la vue soit filtrée avec setFilter et le filtre par défaut
		expect(view.render).toHaveBeenCalledWith('setFilter', filterAll);
	});

	it('should highlight "Active" filter when switching to active view', function () { // doit mettre en surbrillance le filtre "Actif" lors du passage A la vue active
		// TODO: write test 05
		let filterActive = 'active'; // le filtre pour afficher les todos actives

		setUpModel([]); // initialiser le modèle
		subject.setView('#/' + filterActive); // initialiser la vue avec le filtre pour afficher seulement les todos actives

		// l'application s'attend à ce que la vue soit filtrée avec setFilter et le filtre pour afficher les todos actives
		expect(view.render).toHaveBeenCalledWith('setFilter', filterActive);
	});

	describe('toggle all', function () {
		it('should toggle all todos to completed', function () { // devrait basculer toutes les taches A terminer
			// START TODO: write test 06 ****************************************/
			setUpModel([{
				title: 'my todo',
				completed: true
			}]);

			subject.setView('');

			expect(view.render).toHaveBeenCalledWith('toggleAll', {
				checked: true
			});
			// END ****************************************/
		});

		it('should update the view', function () { // devrait mettre A jour la vue
			// START TODO: write test 07 **************************************************************************************************************************/
			let todo = {
				id: 72,
				title: 'my todo',
				completed: true
			};
			setUpModel([todo]);
			subject.setView('');

			view.trigger('itemToggle', {
				id: 72,
				completed: false
			});
			expect(view.render).toHaveBeenCalledWith('elementComplete', {
				id: 72,
				completed: false
			});
			// END ****************************************************************************************************************************/
		});
	});

	describe('new todo', function () {
		it('should add a new todo to the model', function () { // devrait ajouter un nouveau todo au modele
			// START TODO: write test 08 ****************************************/
			setUpModel([]); // initialiser le model
			subject.setView(''); // initialiser la vue

			// l'action de création d'une todo doit déclencher une création d'une todo dans le model
			view.trigger('newTodo', 'a new todo');
			expect(model.create).toHaveBeenCalledWith('a new todo', jasmine.any(Function));
			// END TODO: write test****************************************/
		});

		it('should add a new todo to the view', function () { // devrait ajouter un nouveau todo a la vue
			setUpModel([]);
			subject.setView('');

			view.render.calls.reset();
			model.read.calls.reset();
			model.read.and.callFake(function (callback) {
				callback([{
					title: 'a new todo',
					completed: false,
				}, ]);
			});

			view.trigger('newTodo', 'a new todo');

			expect(model.read).toHaveBeenCalled();

			expect(view.render).toHaveBeenCalledWith('showEntries', [{
				title: 'a new todo',
				completed: false,
			}, ]);
		});

		it('should clear the input field when a new todo is added', function () { // devrait effacer le champ de saisie lorsqu un nouveau todo est ajoute
			setUpModel([]);

			subject.setView('');

			view.trigger('newTodo', 'a new todo');

			expect(view.render).toHaveBeenCalledWith('clearNewTodo');
		});
	});

	describe('element removal', function () {
		it('should remove an entry from the model', function () { // devrait supprimer une entree du modele
			// STARt TODO: write test 09 ****************************************************/
			let todo = {
				id: 1,
				title: 'testTodo',
				completed: true
			}; // création d'une todo déja complétée

			setUpModel([todo]); // initialiser le model avec cette todo
			subject.setView(''); // initialiser la vue

			// l'action de suppression d'une todo doit déclencher une suppression de la todo dans le model
			view.trigger('itemRemove', {
				id: 1
			});
			expect(model.remove).toHaveBeenCalledWith(1, jasmine.any(Function));
			// END test ****************************************************/
		});

		it('should remove an entry from the view', function () { // devrait supprimer une entree de la vue
			let todo = {
				id: 42,
				title: 'my todo',
				completed: true
			};
			setUpModel([todo]);

			subject.setView('');
			view.trigger('itemRemove', {
				id: 42
			});

			expect(view.render).toHaveBeenCalledWith('removeItem', 42);
		});

		it('should update the element count', function () { // devrait mettre A jour le nombre d elements
			let todo = {
				id: 42,
				title: 'my todo',
				completed: true
			};
			setUpModel([todo]);

			subject.setView('');
			view.trigger('itemRemove', {
				id: 42
			});

			expect(view.render).toHaveBeenCalledWith('updateElementCount', 0);
		});
	});

	describe('remove completed', function () {
		it('should remove a completed entry from the model', function () { // devrait supprimer une entree terminee du modele
			let todo = {
				id: 42,
				title: 'my todo',
				completed: true
			};
			setUpModel([todo]);

			subject.setView('');
			view.trigger('removeCompleted');

			expect(model.read).toHaveBeenCalledWith({
				completed: true
			}, jasmine.any(Function));
			expect(model.remove).toHaveBeenCalledWith(42, jasmine.any(Function));
		});

		it('should remove a completed entry from the view', function () { // devrait supprimer une entree terminee de la vue
			let todo = {
				id: 42,
				title: 'my todo',
				completed: true
			};
			setUpModel([todo]);

			subject.setView('');
			view.trigger('removeCompleted');

			expect(view.render).toHaveBeenCalledWith('removeItem', 42);
		});
	});

	describe('element complete toggle', function () {
		it('should update the model', function () { // devrait mettre A jour le modele
			let todo = {
				id: 21,
				title: 'my todo',
				completed: false
			};
			setUpModel([todo]);
			subject.setView('');

			view.trigger('itemToggle', {
				id: 21,
				completed: true
			});

			expect(model.update).toHaveBeenCalledWith(21, {
				completed: true
			}, jasmine.any(Function));
		});

		it('should update the view', function () { // devrait mettre A jour la vue
			let todo = {
				id: 42,
				title: 'my todo',
				completed: true
			};
			setUpModel([todo]);
			subject.setView('');

			view.trigger('itemToggle', {
				id: 42,
				completed: false
			});

			expect(view.render).toHaveBeenCalledWith('elementComplete', {
				id: 42,
				completed: false
			});
		});
	});

	describe('edit item', function () {
		it('should switch to edit mode', function () { // devrait passer en mode edition
			let todo = {
				id: 21,
				title: 'my todo',
				completed: false
			};
			setUpModel([todo]);

			subject.setView('');

			view.trigger('itemEdit', {
				id: 21
			});

			expect(view.render).toHaveBeenCalledWith('editItem', {
				id: 21,
				title: 'my todo'
			});
		});

		it('should leave edit mode on done', function () { // devrait quitter le mode d edition sur termine
			let todo = {
				id: 21,
				title: 'my todo',
				completed: false
			};
			setUpModel([todo]);

			subject.setView('');

			view.trigger('itemEditDone', {
				id: 21,
				title: 'new title'
			});

			expect(view.render).toHaveBeenCalledWith('editItemDone', {
				id: 21,
				title: 'new title'
			});
		});

		it('should persist the changes on done', function () { // devrait persister les changements sur fait
			let todo = {
				id: 21,
				title: 'my todo',
				completed: false
			};
			setUpModel([todo]);

			subject.setView('');

			view.trigger('itemEditDone', {
				id: 21,
				title: 'new title'
			});

			expect(model.update).toHaveBeenCalledWith(21, {
				title: 'new title'
			}, jasmine.any(Function));
		});

		it('should remove the element from the model when persisting an empty title', function () { // devrait supprimer lelement du modele lors de la persistance d un titre vide
			let todo = {
				id: 21,
				title: 'my todo',
				completed: false
			};
			setUpModel([todo]);

			subject.setView('');

			view.trigger('itemEditDone', {
				id: 21,
				title: ''
			});

			expect(model.remove).toHaveBeenCalledWith(21, jasmine.any(Function));
		});

		it('should remove the element from the view when persisting an empty title', function () { // devrait supprimer l element du modele lors de la persistance d un titre vide
			let todo = {
				id: 21,
				title: 'my todo',
				completed: false
			};
			setUpModel([todo]);

			subject.setView('');

			view.trigger('itemEditDone', {
				id: 21,
				title: ''
			});

			expect(view.render).toHaveBeenCalledWith('removeItem', 21);
		});

		it('should leave edit mode on cancel', function () { // devrait quitter le mode d edition en cas d annulation
			let todo = {
				id: 21,
				title: 'my todo',
				completed: false
			};
			setUpModel([todo]);

			subject.setView('');

			view.trigger('itemEditCancel', {
				id: 21
			});

			expect(view.render).toHaveBeenCalledWith('editItemDone', {
				id: 21,
				title: 'my todo'
			});
		});

		it('should not persist the changes on cancel', function () { // ne doit pas persister les modifications lors de l annulation
			let todo = {
				id: 21,
				title: 'my todo',
				completed: false
			};
			setUpModel([todo]);

			subject.setView('');

			view.trigger('itemEditCancel', {
				id: 21
			});

			expect(model.update).not.toHaveBeenCalled();
		});
	});
});