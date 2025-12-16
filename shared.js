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
				gui: {
					button: {
						theme: () => { return document.querySelector('button[data-name="theme"]'); }
					},
				},
				nav: {
					button: {
						historico: () => { return document.querySelector('button[data-name="nav-historico"]'); }, 
						vs: () => { return document.querySelector('button[data-name="nav-vs"]'); }, 
						favoritos: () => { return document.querySelector('button[data-name="nav-favoritos"]'); },
						buscar: () =>  { return document.querySelector('button[data-name="nav-buscar"]'); },
					},
				},
				finder: {
					input:  {
						search: () => { return document.querySelector('input[data-name="finder-search"]'); },
					},
					button: {
						search: () => { return document.querySelector('button[data-name="finder-buscar"]'); },
					},
					select: {
						option: () => { return document.querySelector('select[data-name="finder-select"]'); },
					},
				},
			},
			tmp: {
				img: () =>  { return document.querySelector('img[data-name="img-poke-sprite"]'); }, 
			},
			pokeCard: {
				hability: {					
					container: () => { return document.querySelector('div[data-name="pokemon-container"]'); },
				},
				stats: {
					hp: () => {
						return document.querySelector(
							'div[data-name="stats-hp"]'
						);
					},
					attack: () => {
						return document.querySelector(
							'div[data-name="stats-attack"]'
						);
					},
					defense: () => {
						return document.querySelector(
							'div[data-name="stats-defense"]'
						);
					},
					specialAttack: () => {
						return document.querySelector(
							'div[data-name="stats-special-attack"]'
						);
					},
					specialDefense: () => {
						return document.querySelector(
							'div[data-name="stats-special-defense"]'
						);
					},
					speed: () => {
						return document.querySelector(
							'div[data-name="stats-speed"]'
						);
					},
				},
				types: () => {
					return document.querySelector(
						'div[data-name="poke-types"]'
					);
				},
				habilidades: () => {
					return document.querySelector(
						'div[data-name="poke-habilidades"]'
					);
				},
				evolucion: () => {
					return document.querySelector(
						'div[data-name="poke-evolucion"]'
					);
				},
			},
		};

		const templates = {
			empty: () => {
				return "";
			},
			pokemon: {
				card: {
					abilities: {
						init: (id, name, length, description) => {
return `

<div data-name="poke-info" class="padding-1rem background-color-FCFCFC font-size-0-9rem border-width-4px border-color-2d2d2d border-estyle-solid flex-wrap">
	<div class="flex text-align-center flex-justify-space-between">
		<div>
		 <h2 class="font-weight-900">✨${name}</h2>
		</div>

		<div class="
			background-color-FFE261 
			padding-x-0-75rem
			padding-y-0-5rem 
			flex flex-align-center flex-justify-center border-width-4px border-color-2d2d2d border-estyle-solid">
			<span>#${id}</span>
		</div>
	</div>

	<div class="tmp-divide2"></div>

	<div class="padding-0-5rem background-color-DBDBDB flex-gap-0-5rem flex flex-column border-width-4px border-color-2d2d2d border-estyle-solid">
		<div><span class="font-weight-bold">EFECTO<span></div>
		<div class="text flex-item"><span>${description}<span></div>
	</div>

	<div class="padding-0-5rem padding-y-1rem font-weight-bold ">POKÉMON CON ESTA HABILIDAD (${length})</div>

	<div
		class="background-color-DBDBDB  tmp-grid-container border-width-4px border-color-2d2d2d border-estyle-solid"
		data-name="pokemon-container"
	>
	</div>

</div>
`;
						},
						addPokemon: (name, id, sprite) => {
							return `
<div
	data-action="search"
	data-name="poke-evo-root"
	data-poke-name="${name}"
	data-poke-id="${id}"
	class="tmpevohover2 flex flex-align-center text-align-center flex-column flex-justify-center background-color-DBDBDB border-color-2d2d2d border-width-4px border-estyle-solid shadow-box-x6px-y6px-b0px-s0px-2d2d2d"
>
	<img
		src="${sprite}"
		alt="${name}"
		class="sprite-historial"
	/>
	<span>${name}</span>
</div>
							`;
						},
					},
					generate: {
						types: (text) => {
							return `<span class="poke-type">${text}</span>`;
						},
						abilities: {
							visible: (text) => {
								return `<span class="poke-abilitie visible order-width-4px border-color-2d2d2d border-estyle-solid padding-0-3rem font-weight-bold font-size-0-9rem shadow-box-x4px-y4px-b0px-s0px-2d2d2d">${text}</span>`;
							},
							oculta: (text) => {
								return `<span class="poke-abilitie oculta order-width-4px border-color-2d2d2d border-estyle-solid padding-0-3rem font-weight-bold font-size-0-9rem shadow-box-x4px-y4px-b0px-s0px-2d2d2d font-style">${text}</span>`;
							},
						},
						evolucion: {
							root: (id, sprite, name) => {
								// return `
								//   <img src="${sprite}" alt="${name}" class="sprite-historial" />
								//   <span>${name}</span>
								//   `;
								return `
									<div
										data-action="search"
										data-name="poke-evo-root"
										data-poke-name="${name}"
										data-poke-id="${id}"
										class="tmpevohover flex flex-align-center text-align-center flex-column flex-justify-center background-color-DBDBDB border-color-2d2d2d border-width-4px border-estyle-solid shadow-box-x6px-y6px-b0px-s0px-2d2d2d"
									>
										<img
											src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${sprite}.png"
											alt="${name}"
											class="sprite-historial"
										/>
										<span>${name}</span>
									</div>
								`;
							},
							arrow: () => `➜`,
							sibling: (id, sprite, name) => {
								return `
									<div
										data-action="search"
										data-name="poke-evo-sibling"
										data-poke-name="${name}"
										data-poke-id="${id}"
										class="tmpevohover flex flex-align-center text-align-center flex-column flex-justify-center background-color-DBDBDB border-color-2d2d2d border-width-4px border-estyle-solid shadow-box-x6px-y6px-b0px-s0px-2d2d2d"
									>
										<img
											src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${sprite}.png"
											alt="${name}"
											class="sprite-historial"
										/>
										<span>${name}</span>
									</div>
								`;
							},
							child: (id, sprite, name) => {
								return `
									<div
										data-action="search"
										data-name="poke-evo-sibling"
										data-poke-name="${name}"
										data-poke-id="${id}"
										class="tmpevohover flex flex-align-center text-align-center flex-column flex-justify-center background-color-DBDBDB border-color-2d2d2d border-width-4px border-estyle-solid shadow-box-x6px-y6px-b0px-s0px-2d2d2d"
									>
										<img
											src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${sprite}.png"
											alt="${name}"
											class="sprite-historial"
										/>
										<span>${name}</span>
									</div>
								`;
							},
						},
					},

					init: () => {
						return `
							<div 
								data-name="poke-info"
								class="background-color-FCFCFC border-width-4px border-color-2d2d2d border-estyle-solid flex-wrap"
							>
								<div 
									data-name="container-data"
									class="flex flex-column flex-justify-center"
								>
						`;
					},

					dataCenter: (fuente = "api") => {
						let color = "background-color-4ecdc4";
						let texto = "🌐 DESDE API";

						if (fuente === "cache") {
							color = "background-color-ffcc00";
							texto = "📦 DESDE CACHÉ";
						} else if (fuente === "cache-expired") {
							color = "background-color-ffa500";
							texto = "CACHÉ EXPIRADO";
						}

						return `
							<div data-name="container-poke-data-center"
								class="flex flex-justify-space-between"
							>
								<span class="background-color-2d2d2d text-color-white" data-name="pokemon-data">Pokemon Data</span>
								<span data-name="api-or-cache" class="${color}">${texto}</span>
							</div>
						`;
					},
					initPokeShow: () => {
						return `
							<div data-name="container-poke-show"
								class="padding-0-5rem"
							>
						`;
					},
					pokeShowSprite: (datosPokemon) => {
						return `
						<div data-name="container-sprite"
							class="flex flex-align-center flex-justify-center"
						>
							<div data-name="bg-sprite"
								class="width-10rem height-10rem background-linear-gradient-sprite border-width-4px border-color-2d2d2d border-estyle-solid"
							>
								<img data-name="img-poke-sprite" src="${datosPokemon.sprites.front_default}" alt="${datosPokemon.name}" />
							</div>
						</div>
						`;
					},
					pokeShowName: (datosPokemon) => {
						return `
						<div data-name="container-poke-name"
							class="padding-0-5rem"
						>
							<h2>#${datosPokemon.id} ${String(datosPokemon.name).toUpperCase()}</h2>
							<div class="tmp-divide2">
						</div>
						`;
					},
					pokeShowType: () => {
						return `
						<div data-name="poke-types"
							class="padding-0-5rem flex flex-gap-0-5rem"
						>
						</div>
						`;
					},
					pokeShowHabilidades: () => {
						return `
						<div>
							<span class="font-weight-bold">HABILIDADES</span>
						</div>
						<div data-name="poke-habilidades"
							class="padding-0-5rem flex flex-gap-0-5rem"
						>
						</div>
						`;
					},
					pokeShowStats: (datosPokemon) => {
						return `
						<div class="stats padding-0-5rem"
						>
							<span>HP:</span>
							<div data-name="stats-hp" data-value="${
								datosPokemon.stats.find(
									(st) => st.name === "hp"
								).base_stat
							}" class="bar"
							>
							</div>

							<span>ATTACK:</span>
							<div
								data-name="stats-attack"
								data-value="${datosPokemon.stats.find((st) => st.name === "attack").base_stat}"
								data-max="100"
								class="bar"
							>
							</div>

							<span>DEFENSE:</span>
							<div
								data-name="stats-defense"
								data-value="${datosPokemon.stats.find((st) => st.name === "defense").base_stat}"
								data-max="100"
								class="bar"
							>
							</div>

							<span>SPECIAL-ATTACK:</span>
							<div
								data-name="stats-special-attack"
								data-value="${
									datosPokemon.stats.find(
										(st) => st.name === "special-attack"
									).base_stat
								}"
								data-max="100"
								class="bar"
							>
							</div>

							<span>SPECIAL-DEFENSE:</span>
							<div
								data-name="stats-special-defense"
								data-value="${
									datosPokemon.stats.find(
										(st) => st.name === "special-defense"
									).base_stat
								}"
								data-max="100"
								class="bar"
							>
							</div>

							<span>SPEED:</span>
							<div
								data-name="stats-speed"
								data-value="${datosPokemon.stats.find((st) => st.name === "speed").base_stat}"
								data-max="100"
								class="bar"
							>
							</div>
						</div>

						`;
					},
					pokeShowFavorito: () => {
						return `
							<div class="flex flex-justify-center">
								<button class="boton-historial" "type="submit" data-action="favorito" data-name="favorito">🤍</button>
							</div>
						`;
					},
					pokeShowCadenaDeEvolucion: () => {
						return `
							<div class="tmp-divide"></div>
							<div class="flex flex-justify-center"><span>CADENA DE EVOLUCIÓN</span></div>
							<div
								data-name="poke-evolucion"
								class="flex flex-align-center flex-justify-center flex-gap-0-3rem"
							></div>
						`;
					},
					endPokeShow: () => {
						return `</div>`;
					},
					end: () => {
						return `</div>`;
					},
				},
			},

			history: {
				itemHistorial: (item, index) => {
					const { id, name, sprite, types = [], historyId } = item;
					const tiposHTML = types
						.map(
							(t) =>
								`<span class="tipo-pokemon">${String(
									t
								).toUpperCase()}</span>`
						)
						.join("");

					return `
						<div data-history-index="${index}" class="item-historial anim-popup">
							<div class="contenedor-item-historial">
								<div class="info-historial">
									<div class="contenedor-sprite-historial">
										<img src="${sprite}" alt="${name}" class="sprite-historial" />
									</div>

									<div class="contenedor-nombre-historial">
										<h3 class="nombre-historial">#${id} ${name.toUpperCase()}</h3>
										<div class="tipos-historial">${tiposHTML}</div>
									</div>
								</div>

								<div class="acciones-historial">
									${templates.favoritoButton(name, id)}
									<button
										data-action="eliminar-item"
										data-history-index="${index}"
										data-pokemon-id="${id}"
										class="boton-historial"
									>
										🗑️
									</button>
								</div>
							</div>
						</div>
					`;
				},
			},

			favorites: {
				itemFavorito: (item) => {
					const { id, name, sprite, types = [] } = item;
					const tiposHTML = types
						.map(
							(t) =>
								`<span class="tipo-pokemon">${String(
									t
								).toUpperCase()}</span>`
						)
						.join("");

					return `
						<div data-favorite-id="${id}" class="item-historial anim-popup">
							<div class="contenedor-item-historial">
								<div class="info-historial">
									<div class="contenedor-sprite-historial">
										<img src="${sprite}" alt="${name}" class="sprite-historial" />
									</div>
									<div class="contenedor-nombre-historial">
										<h3 class="nombre-historial">#${id} ${name.toUpperCase()}</h3>
										<div class="tipos-historial">${tiposHTML}</div>
									</div>
								</div>
								<button
									data-action="eliminar-favorito"
									data-favorite-id="${id}"
									class="boton-historial"
								>
									🗑️
								</button>
							</div>
						</div>
					`;
				},
			},
			favoritoButton: (pokemonName, pokemonId) => {
				const esFavorito = utils.storageLocal.esFavorito(pokemonId);
				const corazon = esFavorito ? "❤️" : "🤍";
				const claseColor = esFavorito
					? "corazon-rojo"
					: "corazon-blanco";
				return `
					<button
						data-action="favorito"
						data-pokemon="${pokemonName}"
						data-pokemon-id="${pokemonId}"
						class="boton-historial ${claseColor}"
					>
						${corazon}
					</button>
				`;
			},
		};

		const utils = {
			routers: {
				query: {
					set: (key, value) => {
						const url = new URL(window.location);
						url.searchParams.set(key, value);
						history.replaceState({}, "", url);
					},
				},
			},
			struct: {
				node: {
					tree: {
						rooted: {
							init: (
								KeyID,
								KeyName,
								keyVal,
								keyP,
								keyLeft,
								keyRight
							) => {
								return {
									KeyID: KeyID,
									KeyName: KeyName,
									keyVal: keyVal,
									keyP: keyP,
									keyLeft: keyLeft,
									keyRight: keyRight,
								};
							},
							push: (array, node) => {
								array.push(node);
							},
							checkSiblings(node) {
								if (node.KeyP == null) { return true; }
								return false;
							},
							checkChild(node) {
								if (node.KeyP == null) { return true; }
								return false;
							},
							checkRoot(node) {
								if (node.KeyP == null) { return true; }
								return false;
							},
							pokeChineToRooted: async (
								array,
								evolution_chain
							) => {
								if (!evolution_chain) return;

								const children =
									evolution_chain.evolves_to ?? [];


								for (let i = 0; i < children.length; i++) {
									const val = children[i];

									const dataPokemonSpecie =
										await utils.fetch.pokeApiPokemonSpecieFull(
											val.species.url
										);

									const node = {
										KeyID: dataPokemonSpecie?.id ?? null,
										KeyName:
											dataPokemonSpecie?.name ?? null,
										KeyVal: dataPokemonSpecie ?? null,
										KeyP:
											dataPokemonSpecie?.evolves_from_species ??
											null,
										keyLeft:
											val?.evolves_to[0]?.species?.name ??
											null,
										keyRight:
											children?.[i + 1]?.species?.name ??
											null,
									};

									utils.struct.node.tree.rooted.push(
										array,
										node
									);


									if (val.evolves_to.length != 0) {
										await utils.struct.node.tree.rooted.pokeChineToRooted(
											array,
											val
										);
									}

									// utils.struct.node.tree.rooted.pokeChineToRooted(array, val.evolves_to);
								}
							},
						},
					},
				},
			},
			string: {
				capitalizeFirstLetter: (val) => {
					return `${String(val).charAt(0).toUpperCase()}${String(
						val
					).slice(1)}`;
				},
			},
			gui: {
				newPokemonDataCard: async (datosPokemon, fuente = "api") => {
					let html = templates.empty();

					{
						html += templates.pokemon.card.init();

						{
							html += templates.pokemon.card.dataCenter(fuente);

							html += templates.pokemon.card.initPokeShow();

							{
								html +=
									templates.pokemon.card.pokeShowSprite(
										datosPokemon
									);
								html +=
									templates.pokemon.card.pokeShowName(
										datosPokemon
									);
								html += templates.pokemon.card.pokeShowType();
								html +=
									templates.pokemon.card.pokeShowHabilidades();
								html +=
									templates.pokemon.card.pokeShowStats(
										datosPokemon
									);
								html +=
									templates.pokemon.card.pokeShowFavorito();
								html +=
									templates.pokemon.card.pokeShowCadenaDeEvolucion();
							}

							html += templates.pokemon.card.endPokeShow();
						}

						html += templates.pokemon.card.end();
					}

					
					
					
					// let elementHabilidades = htmlElemnts.pokeCard.habilidades();
					// let elementHabilidades = html.querySelector('div[data-name="poke-habilidades"]');
					// htmlElemnts.main.innerHTML +=
					
					const htmlPokeHabilidad = utils.gui.setPokemonDataCardHabilidades(datosPokemon);
					const htmlPokeTypes = utils.gui.setPokemonDataCardTypes(datosPokemon);

					const htmlPokeEvoChain = await utils.gui.setPokemonDataCardCadenaDeEvolucion(datosPokemon);
					
					htmlElemnts.main.innerHTML = html;
					htmlElemnts.pokeCard.habilidades().innerHTML += htmlPokeHabilidad;
					htmlElemnts.pokeCard.types().innerHTML += htmlPokeTypes;

					utils.gui.setPokemonDataCardStats();

					htmlElemnts.pokeCard.evolucion().innerHTML += htmlPokeEvoChain;
										
					const element = htmlElemnts.pokeCard
					.evolucion()
					.querySelector(
						`div[data-poke-name="${datosPokemon.name}"], div[data-poke-id="${datosPokemon.id}"]`
					);

					if (element) {
						element.classList.add("tmp-evo-selected");
						element.classList.remove("tmpevohover");
						element.removeAttribute("data-action");
					}
					htmlElemnts.pokeCard.evolucion().addEventListener("click", handlers.evoSeach);
				},
				setPokemonDataCardTypes(datosPokemon) {
					// let elementTypes = htmlElemnts.pokeCard.types();
					let html = "";

					datosPokemon.types.forEach((val) => {
						html += templates.pokemon.card.generate.types(
							String(val.name).toUpperCase()
						);
					});

					// elementTypes.innerHTML += html;
					return html;
				},

				setPokemonDataCardHabilidades(datosPokemon) {
					let html = "";
					

					datosPokemon.abilities.forEach((val) => {
						if (val.hidden) {
							html +=
								templates.pokemon.card.generate.abilities.oculta(
									`${utils.string.capitalizeFirstLetter(
										String(val.name)
									)} (Oculta)`
								);
							return;
						}

						html +=
							templates.pokemon.card.generate.abilities.visible(
								utils.string.capitalizeFirstLetter(
									String(val.name)
								)
							);
					});

					return html;
				},

				chain: (arrayRoot, evolvet_to) => {
					val.species;
					arrayRoot.push();
				},

				async setPokemonDataCardCadenaDeEvolucion(datosPokemon) {
					// ! Dato
					// let elementEvolucion = htmlElemnts.pokeCard.evolucion();
					let html = "";

					const chainEvo = [];

					const pokeSpecie =
						await utils.fetch.pokeApiPokemonSpecieFull(
							datosPokemon?.evolution_chain?.chain?.species?.url
						);

					const node = {
						KeyID: pokeSpecie?.id ?? null,
						KeyName:
							datosPokemon?.evolution_chain?.chain?.species
								?.name ?? null,
						KeyVal: pokeSpecie,
						KeyP: null,
						keyLeft:
							datosPokemon?.evolution_chain?.chain?.evolves_to[0]
								?.species?.name ?? null,
						keyRight: null,
					};

					utils.struct.node.tree.rooted.push(chainEvo, node);

					await utils.struct.node.tree.rooted.pokeChineToRooted(
						chainEvo,
						datosPokemon.evolution_chain.chain
					);

					html = await new Promise((resolve, reject) => {
						try {
							let result = "";
							for (const val of chainEvo) {
								// console.log(val);
								// ! No borrar
								// const poke = await utils.fetch.pokeApiSearch(val.KeyName);
								// const sprite = poke?.sprites?.front_default ?? null;
								// result += templates.pokemon.card.generate.evolucion.root(sprite, val.KeyName);

								// const poke = await utils.fetch.pokeApiSearch(val.KeyName);
								// const sprite = poke?.sprites?.front_default ?? null;
								// ! No borrar

								if (val.KeyP == null && val.keyLeft != null) {
									result += templates.pokemon.card.generate.evolucion.root(
										val.KeyID,
										val.KeyID,
										val.KeyName
									);
									result +=  templates.pokemon.card.generate.evolucion.arrow();
									continue;
								}

								if (val.KeyP == null && val.keyLeft == null) {
									result += templates.pokemon.card.generate.evolucion.root(
										val.KeyID,
										val.KeyID,
										val.KeyName
									);
									continue;
								}


								if (val.keyRight == null && val.keyLeft != null) {
									result += templates.pokemon.card.generate.evolucion.sibling(
										val.KeyID,
										val.KeyID,
										val.KeyName
									);
									result +=  templates.pokemon.card.generate.evolucion.arrow();
									continue;
								}


								result += templates.pokemon.card.generate.evolucion.child(
									val.KeyID,
									val.KeyID,
									val.KeyName
								);

								// result += templates.pokemon.card.generate.evolucion.root(
								// 		val.KeyID,
								// 		val.KeyID,
								// 		val.KeyName
								// 	);
								// 	continue;
							}

							// throw new Error("test");
							

							resolve(result);
						} catch (e) {
							reject(e);
						}
					});
					// console.log(html);

					// elementEvolucion.innerHTML += html;


					// const elemnt = htmlElemnts.pokeCard
					// 	.evolucion()
					// 	.querySelector('div[data-poke-name="machop"]', 'div[data-poke-id="66"]');

					// htmlElemnts.pokeCard.evolucion().querySelector(div[data-poke-name="machop"]).classList.add();
					// console.log(datosPokemon);
					// data-poke-name="machop"
					
					return html;
				},

				setPokemonDataCardStats() {
					const valHp = htmlElemnts.pokeCard.stats.hp().dataset.value;
					htmlElemnts.pokeCard.stats
						.hp()
						.style.setProperty("--value", valHp * 1);

					const valAttack =
						htmlElemnts.pokeCard.stats.attack().dataset.value;
					htmlElemnts.pokeCard.stats
						.attack()
						.style.setProperty("--value", valAttack * 1);

					const valDefense =
						htmlElemnts.pokeCard.stats.defense().dataset.value;
					htmlElemnts.pokeCard.stats
						.defense()
						.style.setProperty("--value", valDefense * 1);

					const valSpecialAttack =
						htmlElemnts.pokeCard.stats.specialAttack().dataset
							.value;
					htmlElemnts.pokeCard.stats
						.specialAttack()
						.style.setProperty("--value", valSpecialAttack * 1);

					const valSpecialDefense =
						htmlElemnts.pokeCard.stats.specialDefense().dataset
							.value;
					htmlElemnts.pokeCard.stats
						.specialDefense()
						.style.setProperty("--value", valSpecialDefense * 1);

					const valSpeed =
						htmlElemnts.pokeCard.stats.speed().dataset.value;
					htmlElemnts.pokeCard.stats
						.speed()
						.style.setProperty("--value", valSpeed * 1);
				},
			},

			storageLocal: {
				save(key, obj) {
					localStorage.setItem(`${key}`, JSON.stringify(obj));
				},

				get(key, defaultValue = null) {
					const raw = localStorage.getItem(key);
					return raw ? JSON.parse(raw) : defaultValue;
				},

				exists(key) {
					return localStorage.getItem(key) !== null;
				},

				remove(key) {
					localStorage.removeItem(`${key}`);
				},

				obtenerHistorialDesdeCache() {
					const cache = this.obtenerCachePokemon();
					return cache.map((item) => ({
						id: item.data?.id,
						name: item.data?.name,
						types: item.data?.types?.map((t) => t.name) || [],
						sprite: item.data?.sprites?.front_default,
					}));
				},

				limpiarCache() {
					this.save("pokemon_cache", []);
				},

				eliminarDelCache(pokemonId) {
					const cache = this.obtenerCachePokemon();
					const nuevoCache = cache.filter(
						(item) => item.data?.id !== pokemonId
					);
					this.save("pokemon_cache", nuevoCache);
				},

				//fav
				limpiarFavoritos() {
					this.save("favoritos", []);
				},
				guardarEnFavoritos(pokemonData) {
					const favoritos = this.get("favoritos", []);

					// Evitar duplicados
					if (favoritos.some((fav) => fav.id === pokemonData.id)) {
						return false;
					}

					favoritos.unshift({
						id: pokemonData.id,
						name: pokemonData.name,
						types: pokemonData.types || [],
						sprite: pokemonData.sprites?.front_default,
					});

					this.save("favoritos", favoritos);
					return true;
				},

				/**
				 * Obtener todos los favoritos
				 * @return {array} Lista de Pokémon favoritos
				 */
				obtenerFavoritos() {
					return this.get("favoritos", []);
				},

				eliminarDeFavoritos(pokemonId) {
					const favoritos = this.obtenerFavoritos();
					const nuevos = favoritos.filter(
						(item) => item.id !== pokemonId
					);
					this.save("favoritos", nuevos);
				},

				esFavorito(pokemonId) {
					const favoritos = this.obtenerFavoritos();
					return favoritos.some((fav) => fav.id === pokemonId);
				},

				obtenerCachePokemon() {
					const CincoMinutos = 5 * 60 * 1000;
					const CincoSegundos = 5 * 1000;
					const veinticuatroHoras = 24 * 60 * 60 * 1000;

					const cache = this.get("pokemon_cache", []);
					const ahora = Date.now();

					return cache.filter(
						(item) => ahora - item.timestamp < veinticuatroHoras
					);
				},

				buscarEnCache(nombreOId) {
					const cache = this.obtenerCachePokemon();
					const busqueda = String(nombreOId).toLowerCase().trim();

					return cache.find(
						(item) =>
							String(item.data?.id) === busqueda ||
							item.data?.name?.toLowerCase() === busqueda
					);
				},

				agregarAlCache(pokemonData) {
					const cache = this.obtenerCachePokemon();

					// Remover si existe
					const nuevoCache = cache.filter(
						(item) => item.data?.id !== pokemonData.id
					);

					nuevoCache.unshift({
						data: pokemonData,
						timestamp: Date.now(),
					});

					this.save("pokemon_cache", nuevoCache);
				},
			},
			fetch: {
				/**
				 * pokeApiSearch
				 * @param {string} input
				 * @return {object} data
				 */
				async pokeApiPokemonAbility(input) {
					try {
						const response = await fetch(
							`https://pokeapi.co/api/v2/ability/${input}`,
							{
								method: "GET",
							}
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
							}
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

				async pokeApiSearchFull(input) {
					try {
						const response = await fetch(
							`${input}`,
							{
								method: "GET",
							}
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

				/**
				 * pokeApiPokemonSpecies
				 * @param {string} input
				 * @return {object} data
				 */
				async pokeApiPokemonSpecies(input) {
					try {
						const response = await fetch(
							`https://pokeapi.co/api/v2/pokemon-species/${input}`,
							{
								method: "GET",
							}
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

				async pokeApiPokemonSpecieFull(input) {
					try {
						const response = await fetch(`${input}`, {
							method: "GET",
						});

						if (!response.ok) {
							throw new Error(`Error: ${response.status}`);
						}

						const data = await response.json();

						return data;
					} catch (error) {
						console.error("Hubo un problema:", error);
					}
				},

				/**
				 * pokeApiEvolutionChain
				 * @param {string} input
				 * @return {object} data
				 */
				async pokeApiEvolutionChain(input) {
					try {
						const response = await fetch(
							// `https://pokeapi.co/api/v2/evolution-chain/${input}`,
							`${input}`,
							{
								method: "GET",
							}
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

		const historicoModule = {
			renderHistorial() {
				const listaHistorial = document.getElementById("history-list");
				const botonLimpiarHistorial =
					document.getElementById("clear-history-btn");
				const historial =
					utils.storageLocal.obtenerHistorialDesdeCache();

				listaHistorial.innerHTML =
					historial.length === 0
						? `
						<div class="item-historial text-align-center shadow-box-x6px-y6px-b0px-s0px-2d2d2d"
							style="padding: 24px; min-height: 200px; width: 100%;">
							<p style="font-size: 300%;">📜</p>
							<h3 style="padding: 12px;">NO TIENES POKÉMONES EN EL HISTÓRICO</h3>
							<p></p>
							<p>Busca un pokémon para agregarlo aquí</p>
						</div>`
						: historial
								.map((item, index) =>
									templates.history.itemHistorial(item, index)
								)
								.join("");

				if (botonLimpiarHistorial) {
					if (historial.length === 0) {
						botonLimpiarHistorial.style.display = "none";
					} else {
						botonLimpiarHistorial.style.display = "";
					}
				}
			},

			setupHistorialListeners() {
				const listaHistorial = document.getElementById("history-list");
				const botonLimpiarHistorial =
					document.getElementById("clear-history-btn");

				listaHistorial.addEventListener("click", (e) => {
					const itemHistorial = e.target.closest(".item-historial");
					const boton = e.target.closest("button");

					if (itemHistorial && !boton) {
						const pokemonId = itemHistorial.querySelector(
							"button[data-pokemon-id]"
						)?.dataset.pokemonId;
						const pokemonName =
							itemHistorial.querySelector(
								".nombre-historial"
							)?.textContent;

						if (pokemonId || pokemonName) {
							window.location.href = `index.html?search=${
								pokemonId || pokemonName
							}`;
						}
						return;
					}

					if (!boton) return;

					const accion = boton.dataset.action;
					const historialIndex = boton.dataset.historyIndex;
					const pokemonId = Number(boton.dataset.pokemonId);

					if (accion === "favorito") {
						handlers.favorito(e);

						const esFavorito =
							utils.storageLocal.esFavorito(pokemonId);
						const corazon = esFavorito ? "❤️" : "🤍";
						const claseColor = esFavorito
							? "corazon-rojo"
							: "corazon-blanco";

						boton.innerHTML = corazon;
						boton.className = "boton-historial " + claseColor;

						return;
					}

					if (accion === "eliminar-item") {
						if (pokemonId) {
							utils.storageLocal.eliminarDelCache(pokemonId);
							this.renderHistorial();
						}
					}
				});

				botonLimpiarHistorial.addEventListener("click", () => {
					utils.storageLocal.limpiarCache();
					this.renderHistorial();
				});
			},

			init() {
				if (window.location.pathname.includes("historico.html")) {
					this.renderHistorial();
					this.setupHistorialListeners();
				}
			},
		};

		const favoritosModule = {
			renderFavoritos() {
				const listaFavoritos =
					document.getElementById("favorites-list");
				const botonLimpiarFavoritos = document.getElementById(
					"clear-favorites-btn"
				);
				const favoritos = utils.storageLocal.obtenerFavoritos();

				listaFavoritos.innerHTML =
					favoritos.length === 0
						? `
						<div class="item-historial text-align-center shadow-box-x6px-y6px-b0px-s0px-2d2d2d"
							style="padding: 24px; min-height: 200px; width: 100%;">
							<p style="font-size: 300%;">❤️</p>
							<h3 style="padding: 12px;">NO TIENES POKÉMONES FAVORITOS</h3>
							<p></p>
							<p>Busca un pokémon como favorito</p>
						</div>`
						: favoritos
								.map((item) =>
									templates.favorites.itemFavorito(item)
								)
								.join("");

				if (botonLimpiarFavoritos) {
					if (favoritos.length === 0) {
						botonLimpiarFavoritos.style.display = "none";
					} else {
						botonLimpiarFavoritos.style.display = "";
					}
				}
			},

			setupFavoritosListeners() {
				const listaFavoritos =
					document.getElementById("favorites-list");

				const botonLimpiarFavoritos = document.getElementById(
					"clear-favorites-btn"
				);

				listaFavoritos.addEventListener("click", (e) => {
					const boton = e.target.closest('button');
					if (!boton) return;

					const pokemonId = Number(boton.dataset.favoriteId);

					utils.storageLocal.eliminarDeFavoritos(pokemonId);
					this.renderFavoritos();
				});

				botonLimpiarFavoritos.addEventListener("click", () => {
					utils.storageLocal.limpiarFavoritos();
					this.renderFavoritos();
				});
			},

			init() {
				if (window.location.pathname.includes("favoritos.html")) {
					this.renderFavoritos();
					this.setupFavoritosListeners();
				}
			},
		};

		const handlers = {
			evoSeach: (event) => {
				event.preventDefault();
				const evoSearch = event.target.closest("div[data-action='search']");
				// console.log(event);
				console.log(evoSearch);
				if (evoSearch == null) { return; }
				
				// console.log();
				// console.log();
				
				// // console.log(!event.dataset.dataAction);
				// // if(!event || !event.dataset.dataAction) { return; }

				// // if (!evoSearc) return;
				
				
				window.location.href = `index.html?search=${evoSearch.dataset.pokeId || evoSearch.dataset.pokeName}`;
			},
			search: async (e) => {
				if (
					e.submitter.dataset.name ===
					htmlElemnts?.form?.finder?.button?.search()?.dataset?.name ?? null
				) 
				{


					const options_val = htmlElemnts.form.finder.select.option().value.trim();
					console.log(options_val);

					const busqueda =
						htmlElemnts.form.finder.input
						.search()
						.value
						.trim();
							
					if (!busqueda) return;


					

					utils.routers.query.set("search", `${busqueda}`);

					const pokeInfo = document.querySelector('[data-name="poke-info"]');

					if (pokeInfo) {
						pokeInfo.remove();
					}

					switch (options_val) {
						case "Pokemon": 
						{
							if (busqueda <= 0) return;
							// 10154
							// STURDY
							if (busqueda > 1025) return;

							const cargando = document.querySelectorAll(".cargando");
							for (val of cargando) { val.classList.toggle("display-hidden"); }



							const cacheItem =
								utils.storageLocal.buscarEnCache(busqueda);
							let datosPokemon;
							let fuente = "api";

							if (cacheItem) {
								datosPokemon = cacheItem.data;
								fuente = "cache";
							}

							if (!datosPokemon) 
							{
								try {
									const datosCompletos =
										await utils.fetch.pokeApiSearch(busqueda);
									const datosCompletosSpecies =
										await utils.fetch.pokeApiPokemonSpecies(
											busqueda
										);
									const datosCompletosEvolution =
										await utils.fetch.pokeApiEvolutionChain(
											datosCompletosSpecies.evolution_chain.url
										);

									datosPokemon = {
										id: datosCompletos.id,
										name: datosCompletos.name,
										sprites: {
											front_default:
											datosCompletos.sprites.front_default,
										},
										stats: datosCompletos.stats.map((stat) => ({
											name: stat.stat.name,
											base_stat: stat.base_stat,
										})),
										types: datosCompletos.types.map((type) => ({
											name: type.type.name,
										})),
										abilities: datosCompletos.abilities.map(
											(ability) => ({
												name: ability.ability.name,
												hidden: ability.is_hidden,
											})
										),
										species: datosCompletosSpecies,
										evolution_chain: datosCompletosEvolution,
									};

									utils.storageLocal.agregarAlCache(datosPokemon);
									fuente = "api";
								} catch (error) {
									console.error("Error buscando:", error);
									return;
								}
							}
							

							const audio = document.querySelector("#audio");

							const random = Math.floor(Math.random() * 2);

							const pokeAudioId = datosPokemon.id; 
							let type = "latest";
							if (random === 0) {
								type = "legacy";
							} 

							audio.src = `https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/${type}/${pokeAudioId}.ogg`;

							audio.play().catch((e) => {
								console.error("Audio play failed: ", e);
								type = type === "legacy" ? "latest" : "legacy";
								audio.src = `https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/${type}/${pokeAudioId}.ogg`;
								audio.play();
							});


							await utils.gui.newPokemonDataCard(datosPokemon, fuente);
							for (val of cargando) { val.classList.toggle("display-hidden"); }

							htmlElemnts.formMain.reset();


							const favoritoBtn = document.querySelector(
								'button[data-name="favorito"]'
							);


							if (favoritoBtn) {
								favoritoBtn.setAttribute("data-action", "favorito");
								favoritoBtn.setAttribute(
									"data-pokemon",
									datosPokemon.name
								);
								favoritoBtn.setAttribute(
									"data-pokemon-id",
									datosPokemon.id
								);

								const esFavorito = utils.storageLocal.esFavorito(
									datosPokemon.id
								);
								if (esFavorito) {
									favoritoBtn.classList.add("corazon-rojo");
									favoritoBtn.classList.remove("corazon-blanco");
									favoritoBtn.innerHTML = "❤️";
								} else {
									favoritoBtn.classList.add("corazon-blanco");
									favoritoBtn.classList.remove("corazon-rojo");
									favoritoBtn.innerHTML = "🤍";
								}

								favoritoBtn.addEventListener("click", (e) => {
									e.preventDefault();
									handlers.favorito(e);
								});
							}
							break;
						}
						case "Habilidad":

							if (busqueda <= 0) return;

							if (busqueda > 307) return;
							
							const cargando = document.querySelectorAll(".cargando");
							for (val of cargando) { val.classList.toggle("display-hidden"); }

							const datosCompletosHabilidad = await utils.fetch.pokeApiPokemonAbility(busqueda);


							const datosHabilidad = {
								id: datosCompletosHabilidad?.id ?? null,
								name: datosCompletosHabilidad?.name ?? null,
								pokemon: datosCompletosHabilidad?.pokemon ?? null,
								pokemonLength: datosCompletosHabilidad?.pokemon?.length ?? null,
								// description: datosCompletosHabilidad.effect_entries.find(e => e.language.name === "en")?.short_effect,
								description: datosCompletosHabilidad.flavor_text_entries.find(e => e.language.name === "es")?.flavor_text,
							};

							

							let html = templates.empty();
							html += templates.pokemon.card.abilities.init(
								datosHabilidad.id,
								datosHabilidad.name.toUpperCase().replaceAll("-", " "),
								datosHabilidad.pokemonLength,
								datosHabilidad.description
							);


							const result = await new Promise((resolve, reject) => {
							(async () => {
								try {
								let html = "";

								for (const val of datosHabilidad.pokemon) {
									const datosPokemonVal = await utils.fetch.pokeApiSearchFull(val.pokemon.url);

									const id = datosPokemonVal.id;
									const name = datosPokemonVal.name;
									const sprite = datosPokemonVal.sprites.front_default;
										

									// console.log(val);
									// console.log(datosPokemonVal);

									html += templates.pokemon.card.abilities.addPokemon(name, id, sprite);
								}

								resolve(html);
								} catch (e) {
									reject(e);
								}
							})();
							});

							for (val of cargando) { val.classList.toggle("display-hidden"); }
							htmlElemnts.main.innerHTML = html;

							const pokemonContainer = htmlElemnts.pokeCard.hability.container();

							pokemonContainer.insertAdjacentHTML(
								"beforeend", 
								result
							);

							pokemonContainer.addEventListener("click", handlers.evoSeach);
							break;
						default:
							break;
					}
				}
			},
			onFormSubmit(e) {
				e.preventDefault();
				
				if (
					e.submitter.dataset.name ===
					htmlElemnts?.form?.gui?.button?.theme()?.dataset?.name ?? null
				) {
					const docTheme = document.documentElement.dataset.theme;
					const buttonTheme = htmlElemnts?.form?.gui?.button?.theme();
					
					const theme = docTheme === "dark" ? "light" : "dark";
					localStorage.setItem("theme", theme);
					buttonTheme.textContent = theme === "dark" ? "🌙" : "☀️";
					document.documentElement.dataset.theme = theme === "dark" ? "dark" : "light";

					return;
				}

				handlers.routers(e);

				handlers.search(e);
			},

			routers: (e) => {
				if (
					e.submitter.dataset.name ===
					htmlElemnts.form.nav.button.historico().dataset.name
				) {
					window.location.href = "historico.html";
				}

				if (
					e.submitter.dataset.name ===
					htmlElemnts.form.nav.button.favoritos().dataset.name
				) {
					window.location.href = "favoritos.html";
				}

				if (
					e.submitter.dataset.name ===
					htmlElemnts.form.nav.button.buscar().dataset.name
				) {
					window.location.href = "index.html";
				}

				if (
					e.submitter.dataset.name ===
					htmlElemnts.form.nav.button.vs().dataset.name
				) {
					window.location.href = "vs.html";
				}
			},

			favorito: (e) => {
				e.preventDefault();
				const boton = e.target.closest(
					'button[data-action="favorito"]'
				);
				if (!boton) return;

				const pokemonName = boton.dataset.pokemon;
				const pokemonId = Number(boton.dataset.pokemonId);

				const esFavorito = utils.storageLocal.esFavorito(pokemonId);

				if (esFavorito) {
					utils.storageLocal.eliminarDeFavoritos(pokemonId);
					boton.classList.remove("corazon-rojo");
					boton.classList.add("corazon-blanco");
					boton.innerHTML = "🤍";
				} else {
					const cache = utils.storageLocal.obtenerCachePokemon();
					const itemCache = cache.find(
						(item) =>
							item.data?.name === pokemonName ||
							item.data?.id === pokemonId
					);

					if (itemCache && itemCache.data) {
						const favoritoExitoso =
							utils.storageLocal.guardarEnFavoritos({
								id: itemCache.data.id,
								name: itemCache.data.name,
								types:
									itemCache.data.types?.map((t) => t.name) ||
									[],
								sprites: {
									front_default:
										itemCache.data.sprites?.front_default,
								},
							});

						if (favoritoExitoso) {
							boton.classList.remove("corazon-blanco");
							boton.classList.add("corazon-rojo");
							boton.innerHTML = "❤️";
						}
					}
				}
			},
		};

		return {
			
			init() {
				htmlElemnts.formMain.addEventListener(
					"submit",
					handlers.onFormSubmit
				);
				historicoModule.init();
				favoritosModule.init();

				this.procesarParametrosURL();
			},

			procesarParametrosURL() {
				if (!window.location.pathname.includes("index.html")) return;

				const buscaParam = new URLSearchParams(
					window.location.search
				).get("search");
				if (!buscaParam) return;

				htmlElemnts.form.finder.input.search().value = buscaParam;

				setTimeout(() => {
					htmlElemnts.form.finder.button.search().click();
				}, 100);
			},
		};
	})();
	App.init();
})();
