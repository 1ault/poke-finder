(() => {
	/**
	 * App
	 * @param {void} void
	 * @return {object} init()
	 */
	const App = (() => {
		const htmlElemnts = {};

		const templates = {};

		const utils = {
			fetch: {
				async pokeApiV2() {
					const response = await fetch(`https://pokeapi.co/api/v2/pokemon/1`, {
						method: "GET",
					});

					console.log(await response.json());
				},
			},
		};

		const handlers = {};

		return {
			init() {
				utils.fetch.pokeApiV2();
			},
		};
	})();
	App.init();
})();
