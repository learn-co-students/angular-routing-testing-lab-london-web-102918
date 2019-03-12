describe('Routes', () => {
	let $state;

	beforeEach(module('app'));

	beforeEach(inject($injector => {
		$state = $injector.get('$state');
	}));

	describe('Settings', () => {
		let state;

		it('should have the correct URL', () => {
			state = $state.get('settings');

			expect(state.url).toEqual('/settings');
    });

    it('should use the correct template', () => {
			// state = $state.get('settings');

    expect(state.templateUrl).toEqual('views/settings.html');

    });

    it('should have the correct controller', () => {

    expect(state.controller).toEqual('SettingsController');
		});
	});

	describe('User', () => {
		let state;

		it('should have the correct URL', () => {
			state = $state.get('settings.user');

			expect(state.url).toEqual('/user');
    });

    it('should use the correct template', () => {

    expect(state.templateUrl).toEqual('views/settings/user.html');
		});

    it('should have the correct controller', () => {

    expect(state.controller).toEqual('UserSettingsController');
    });
	});

	describe('Notifications', () => {
		let state;

		it('should have the correct URL', () => {
			state = $state.get('settings.notifications');

			expect(state.url).toEqual('/notifications');
    });

    it('should use the correct template', () => {
			state = $state.get('settings.notifications');

    expect(state.templateUrl).toEqual('views/settings/notifications.html');
	  });

    it('should have the correct controller', () => {

    expect(state.controller).toEqual('NotificationsSettingsController');
    });
	});
});
