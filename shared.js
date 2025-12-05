(() => {
	/**
	 * App
	 * @param {void} void
	 * @return {object} init()
	 */
	const App = (() => {
		const htmlElemnts = {
			form : document.querySelector('form[name="loginForm"]'),

		};

		const templates = {};

		const utils = {
			// fetch: {
			// 	async pokeApiV2() {
			// 		// const response = await fetch(`https://pokeapi.co/api/v2/pokemon/1`, {
			// 			method: "GET",
			// 		});

			// 		console.log(await response.json());
			// 	},
			// },
		};

		const handlers = {
			onFormSubmit(e) { 
				e.preventDefault();
			}
		};

		return {
			init() {
				htmlElemnts.form.addEventListener(
					"submit",
					handlers.onFormSubmit,
				);
			},
		};
	})();
	App.init();
})();
