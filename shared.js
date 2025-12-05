(() => {
	/**
	 * App
	 * @param {void} void
	 * @return {object} init()
	 */
	const App = (() => {
		const htmlElemnts = {
			formMain: document.querySelector('form[data-name="form-main"]'),
			main: document.querySelector('main[data-name="main"]'),
			form: {
				nav: {
					button: {
						historico: document.querySelector(
							'button[data-name="nav-historico"]',
						),
						vs: document.querySelector('button[data-name="nav-vs"]'),
						favoritos: document.querySelector(
							'button[data-name="nav-favoritos"]',
						),
						buscar: document.querySelector('button[data-name="nav-buscar"]'),
					},
				},
				finder: {
					input: {
						search: document.querySelector('input[data-name="finder-search"]'),
					},
					button: {
						buscar: document.querySelector('button[data-name="finder-buscar"]'),
					},
				},
			},
			tmp: {
				img: document.querySelector('img[data-name="img-poke-sprite"]'),
			},
			// form: document.querySelector('form[name="loginForm"]'),
			// formFinderBuscar: document.querySelector(""),
		};

		const templates = {
			search: {
				// poke-name, poke-type, poke-habilidades, stats
				pokemonDataCard: (json) => `
<div data-name="poke-info"
	class="background-color-FCFCFC border-width-4px border-color-2d2d2d border-estyle-solid"
>
	<div data-name="container-data"
		class="flex flex-align-center flex-justify-space-between"
	>
		<span class="background-color-2d2d2d text-color-white" data-name="pokemon-data">Pokemon Data</span>
		<span data-name="api-or-cache" class="background-color-4ecdc4">api-or-cache</span>

		</div>
				<div class="padding-0-5rem">
					<div
						data-name="container-sprite"
						class="flex flex-align-center flex-justify-center"
					>
						<div
							data-name="bg-sprite"
							class="width-10rem height-10rem background-linear-gradient-sprite"
						>
							<img data-name="img-poke-sprite" src="${json.sprites.front_default}" alt="" />
						</div>
					</div>

					<div class="poke-name">
						<h2>#${json.id} ${json.name}</h2>
						<hr />
					</div>

					<div data-name="poke-type">
						<span>Grass</span>
					</div>

					<div data-name="poke-habilidades"></div>

					<div class="stats">
						<span>HP</span>
						<div data-name="hp-bar" data-value="75" class="bar">
							<span>HP</span>
						</div>

						<span>ATTACK</span>
						<div
							data-name="hp-attack"
							data-value="75"
							class="bar"
						></div>

						<span>DEFENCE:</span>
						<div
							data-name="hp-defence"
							data-value="75"
							class="bar"
						></div>

						<span>SPECIAL-ATTACK:</span>
						<div
							data-name="hp-attack"
							data-value="75"
							class="bar"
						></div>

						<span>SPEED:</span>
						<div
							data-name="hp-speed"
							data-value="75"
							class="bar"
						></div>
					</div>

					<div>
						<button type="submit" data-name="favorito">❤️</button>
					</div>

					<hr />
					<span>CADENA DE EVOLUCIÓN</span>

					<div>
						<button></button>
					</div>
				</div>
			</div>
			`,
			},
		};

		const utils = {
			storageLocal: {
				save(key, obj) {
					localStorage.setItem(`${key}`, JSON.stringify(obj));
				},

				get(key) {
					const obj = localStorage.getItem(`${key}`);
					return obj ? JSON.parse(obj) : [];
				},

				getAll() {
					// ! TODO
				},

				remove(key) {
					localStorage.removeItem(`${key}`);
				},

				removeAll() {
					// ! TODO
				},

				find(objs, key) {
					const keyVal = String(key).trim().toLowerCase();
					return objs.find(
						(obj) =>
							String(obj.id) === keyVal || obj.name.toLowerCase() === keyVal,
					);
				},

				filter(objs, key) {
					const keyVal = String(key).trim().toLowerCase();
					return objs.filter(
						(obj) =>
							String(obj.id).includes(keyVal) || obj.name.includes(keyVal),
					);
				},
				/**
				 * Storage.local.exist ?
				 * @param {string} key
				 * @return {boolean}
				 */
				exist(key) {
					const val = localStorage.getItem(`${key}`);

					if (val === null || val === "") {
						return false;
					}
					return true;
				},
			},
			fetch: {
				/**
				 * pokeApiSearch
				 * @param {string} input
				 * @return {object} data
				 */
				async pokeApiSearch(input) {
					try {
						const response = await fetch(
							`https://pokeapi.co/api/v2/pokemon/${input}`,
							{
								method: "GET",
							},
						);

						if (!response.ok) {
							throw new Error(`Error: ${response.status}`);
						}

						const data = await response.json();

						return data;
					} catch (error) {
						console.error("Hubo un problema:", error);
					}
				},
			},
		};

		const handlers = {
			async onFormSubmit(e) {
				e.preventDefault();

				// console.log(e.submitter.dataset.name);

				// Routers
				if (
					e.submitter.dataset.name ===
					htmlElemnts.form.nav.button.historico.dataset.name
				) {
					window.location.href = "historico.html";
				}

				if (
					e.submitter.dataset.name ===
					htmlElemnts.form.nav.button.favoritos.dataset.name
				) {
					window.location.href = "favoritos.html";
				}

				if (
					e.submitter.dataset.name ===
					htmlElemnts.form.nav.button.buscar.dataset.name
				) {
					window.location.href = "index.html";
				}

				if (
					e.submitter.dataset.name ===
					htmlElemnts.form.nav.button.vs.dataset.name
				) {
					window.location.href = "vs.html";
				}

				if (
					e.submitter.dataset.name ===
					htmlElemnts.form.finder.button.buscar.dataset.name
				) {
					const busqueda = htmlElemnts.form.finder.input.search.value.trim();
					if (!busqueda) return;

					let cachePokemon = JSON.parse(localStorage.getItem("pokemon_cache") || "[]");

					let enCache = cachePokemon.find(p => 
						p.name.toLowerCase() === busqueda.toLowerCase() || 
						String(p.id) === busqueda
					);

					let datosPokemon;
					let fuente = "cache";

					if (enCache) {
						datosPokemon = enCache.obj;
						fuente = "cache";
					} else {
						try {
							const datosCompletos = await utils.fetch.pokeApiSearch(busqueda);
							fuente = "api";
							datosPokemon = {
								id: datosCompletos.id,
								name: datosCompletos.name,
								sprites: {
									front_default: datosCompletos.sprites.front_default
								},
								stats: datosCompletos.stats.map(stat => ({
									name: stat.stat.name,
									base_stat: stat.base_stat
								})),
								types: datosCompletos.types.map(type => ({
									name: type.type.name
								})),
								abilities: datosCompletos.abilities.map(ability => ({
									name: ability.ability.name
								})),
								moves: datosCompletos.moves.map(move => ({
									name: move.move.name
								}))
							};
							
							cachePokemon.push({
								id: datosPokemon.id,
								name: datosPokemon.name,
								obj: datosPokemon,
								fecha: new Date().toISOString()
							});
							
							localStorage.setItem("pokemon_cache", JSON.stringify(cachePokemon));
						} catch (error) {
							console.error("Error buscando:", error);
							return;
						}
					}

					htmlElemnts.main.innerHTML = templates.search.pokemonDataCard(datosPokemon);

					htmlElemnts.formMain.reset();
				}
			},
		};

		return {
			init() {
				htmlElemnts.formMain.addEventListener("submit", handlers.onFormSubmit);
			},
		};
	})();
	App.init();
})();
