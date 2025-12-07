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
              'button[data-name="nav-historico"]'
            ),
            vs: document.querySelector('button[data-name="nav-vs"]'),
            favoritos: document.querySelector(
              'button[data-name="nav-favoritos"]'
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
      pokeCard: {
        stats: {
          hp: () => {
            return document.querySelector('div[data-name="stats-hp"]');
          },
          attack: () => {
            return document.querySelector('div[data-name="stats-attack"]');
          },
          defense: () => {
            return document.querySelector('div[data-name="stats-defense"]');
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
            return document.querySelector('div[data-name="stats-speed"]');
          },
        },
        types: () => {
          return document.querySelector('div[data-name="poke-types"]');
        },
        habilidades: () => {
          return document.querySelector('div[data-name="poke-habilidades"]');
        },
      },
    };

    const templates = {
      empty: () => {
        return "";
      },
      pokemon: {
        card: {
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
          },
          init: () => {
            return `
						<div data-name="poke-info"
							class="background-color-FCFCFC border-width-4px border-color-2d2d2d border-estyle-solid"
						>
							<div data-name="container-data"
								class="flex flex-column flex-justify-center"
							>
						`;
          },
          dataCenter: () => {
            // // 📦 DESDE_CACHÉ
            return `
						<div data-name="container-poke-data-center"
							class="flex flex-justify-space-between"
						>
							<span class="background-color-2d2d2d text-color-white" data-name="pokemon-data">Pokemon Data</span>
							<span data-name="api-or-cache" class="background-color-4ecdc4">🌐 DESDE_API</span>
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
                datosPokemon.stats.find((st) => st.name === "hp").base_stat
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
                  datosPokemon.stats.find((st) => st.name === "special-attack")
                    .base_stat
                }"
								data-max="100"
								class="bar"
							>
							</div>

							<span>SPECIAL-DEFENSE:</span>
							<div
								data-name="stats-special-defense"
								data-value="${
                  datosPokemon.stats.find((st) => st.name === "special-defense")
                    .base_stat
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
						<div>
							<button type="submit" data-name="favorito">❤️</button>
						</div>
						`;
          },
          pokeShowCadenaDeEvolucion: (datosPokemon) => {
            return `
						<div class="tmp-divide"></div>
						<div>
							<span>CADENA DE EVOLUCIÓN</span>
							<button></button>
						</div>
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
        itemHistorial: (item) => {
          const { id, name, sprite, tipos = [], historyId } = item;
          const tiposHTML = tipos
            .map(
              (t) =>
                `<span class="tipo-pokemon">${String(t).toUpperCase()}</span>`
            )
            .join("");

          return `
        <div data-history-id="${historyId}" class="item-historial">
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
                    <button
                        data-action="favorito"
                        data-pokemon="${name}"
                        class="boton-historial"
                    >❤️</button>

                    <button
                        data-action="eliminar-item"
                        data-history-id="${historyId}"
                        class="boton-historial"
                    >🗑️</button>
                </div>
            </div>
        </div>`;
        },
      },
    };

    const utils = {
      string: {
        capitalizeFirstLetter: (val) => {
          return `${String(val).charAt(0).toUpperCase()}${String(val).slice(
            1
          )}`;
        },
      },
      gui: {
        newPokemonDataCard: (datosPokemon) => {
          let html = templates.empty();

          {
            html += templates.pokemon.card.init();

            {
              html += templates.pokemon.card.dataCenter();

              html += templates.pokemon.card.initPokeShow();

              {
                html += templates.pokemon.card.pokeShowSprite(datosPokemon);

                html += templates.pokemon.card.pokeShowName(datosPokemon);

                html += templates.pokemon.card.pokeShowType();

                html += templates.pokemon.card.pokeShowHabilidades();

                html += templates.pokemon.card.pokeShowStats(datosPokemon);

                html += templates.pokemon.card.pokeShowFavorito();

                html += templates.pokemon.card.pokeShowCadenaDeEvolucion();
              }

              html += templates.pokemon.card.endPokeShow();
            }

            html += templates.pokemon.card.end();
          }

          console.log(datosPokemon);
          htmlElemnts.main.innerHTML = html;
          utils.gui.setPokemonDataCardHabilidades(datosPokemon);
          utils.gui.setPokemonDataCardTypes(datosPokemon);
          utils.gui.setPokemonDataCardStats();
          utils.gui.setPokemonDataCardCadenaDeEvolucion();
        },
        setPokemonDataCardTypes(datosPokemon) {
          let elementTypes = htmlElemnts.pokeCard.types();
          let html = "";

          datosPokemon.types.forEach((val) => {
            html += templates.pokemon.card.generate.types(
              String(val.name).toUpperCase()
            );
          });

          elementTypes.innerHTML += html;
        },
        setPokemonDataCardHabilidades(datosPokemon) {
          let elementHabilidades = htmlElemnts.pokeCard.habilidades();
          let html = "";

          datosPokemon.abilities.forEach((val) => {
            console.log(val);
            if (val.hidden) {
              html += templates.pokemon.card.generate.abilities.oculta(
                `${utils.string.capitalizeFirstLetter(
                  String(val.name)
                )} (Oculta)`
              );
              return;
            }

            html += templates.pokemon.card.generate.abilities.visible(
              utils.string.capitalizeFirstLetter(String(val.name))
            );
          });

          elementHabilidades.innerHTML += html;
        },

        setPokemonDataCardCadenaDeEvolucion() {},

        setPokemonDataCardStats() {
          const valHp = htmlElemnts.pokeCard.stats.hp().dataset.value;
          console.log(valHp);
          htmlElemnts.pokeCard.stats
            .hp()
            .style.setProperty("--value", valHp * 1);

          const valAttack = htmlElemnts.pokeCard.stats.attack().dataset.value;
          htmlElemnts.pokeCard.stats
            .attack()
            .style.setProperty("--value", valAttack * 1);

          const valDefense = htmlElemnts.pokeCard.stats.defense().dataset.value;
          htmlElemnts.pokeCard.stats
            .defense()
            .style.setProperty("--value", valDefense * 1);

          const valSpecialAttack =
            htmlElemnts.pokeCard.stats.specialAttack().dataset.value;
          htmlElemnts.pokeCard.stats
            .specialAttack()
            .style.setProperty("--value", valSpecialAttack * 1);

          const valSpecialDefense =
            htmlElemnts.pokeCard.stats.specialDefense().dataset.value;
          htmlElemnts.pokeCard.stats
            .specialDefense()
            .style.setProperty("--value", valSpecialDefense * 1);

          const valSpeed = htmlElemnts.pokeCard.stats.speed().dataset.value;
          htmlElemnts.pokeCard.stats
            .speed()
            .style.setProperty("--value", valSpeed * 1);
        },
      },

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
              String(obj.id) === keyVal || obj.name.toLowerCase() === keyVal
          );
        },

        filter(objs, key) {
          const keyVal = String(key).trim().toLowerCase();
          return objs.filter(
            (obj) =>
              String(obj.id).includes(keyVal) || obj.name.includes(keyVal)
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

        guardarEnHistorial(pokemonData) {
          const historial = this.get("historial") || [];
          const ahora = Date.now();

          const entrada = {
            historyId: ahora,
            id: pokemonData.id,
            name: pokemonData.name,
            tipos: pokemonData.types,
            sprite: pokemonData.sprites?.front_default,
            fechaBusqueda: ahora,
          };

          historial.unshift(entrada);

          // Luego se nos llena el localstorage
          if (historial.length > 50) historial.length = 50;

          this.save("historial", historial);
        },

        obtenerHistorial() {
          return this.get("historial") || [];
        },

        eliminarDelHistorial(idHistorial) {
          const historial = this.get("historial") || [];
          const idNum = Number(idHistorial); // Convertir a número
          const nuevo = historial.filter((item) => item.historyId !== idNum);
          this.save("historial", nuevo);
        },

        limpiarHistorial() {
          localStorage.removeItem("historial");
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

    const historyModule = {
      renderHistorial() {
        const historyList = document.getElementById("history-list");
        if (!historyList) return;

        const historial = utils.storageLocal.obtenerHistorial();

        historyList.innerHTML = historial
          .map((item) => templates.history.itemHistorial(item))
          .join("");
      },

      setupHistorialListeners() {
        const historyList = document.getElementById("history-list");
        const clearHistoryBtn = document.getElementById("clear-history-btn");

        if (!historyList || !clearHistoryBtn) return;

        historyList.addEventListener("click", (e) => {
          const button = e.target.closest("button");
          if (!button) return;

          const action = button.dataset.action;
          const pokemonName = button.dataset.pokemon;
          const idHistorial = button.dataset.historyId;

          if (action === "favorito" && pokemonName) {
            //TODO: fav
          }

          if (action === "eliminar-item" && idHistorial) {
            utils.storageLocal.eliminarDelHistorial(idHistorial);
            this.renderHistorial();
          }
        });

        clearHistoryBtn.addEventListener("click", () => {
          utils.storageLocal.limpiarHistorial();
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

    const handlers = {
      async onFormSubmit(e) {
        e.preventDefault();

        console.log(e);

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

        // Search

        if (
          e.submitter.dataset.name ===
          htmlElemnts.form.finder.button.buscar.dataset.name
        ) {
          const busqueda = htmlElemnts.form.finder.input.search.value.trim();
          if (!busqueda) return;

          let cachePokemon = JSON.parse(
            localStorage.getItem("pokemon_cache") || "[]"
          );

          let enCache = cachePokemon.find(
            (p) =>
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
                  front_default: datosCompletos.sprites.front_default,
                },
                stats: datosCompletos.stats.map((stat) => ({
                  name: stat.stat.name,
                  base_stat: stat.base_stat,
                })),
                types: datosCompletos.types.map((type) => ({
                  name: type.type.name,
                })),
                abilities: datosCompletos.abilities.map((ability) => ({
                  name: ability.ability.name,
                })),
                moves: datosCompletos.moves.map((move) => ({
                  name: move.move.name,
                })),
              };

              cachePokemon.push({
                id: datosPokemon.id,
                name: datosPokemon.name,
                obj: datosPokemon,
                fecha: new Date().toISOString(),
              });

              localStorage.setItem(
                "pokemon_cache",
                JSON.stringify(cachePokemon)
              );
            } catch (error) {
              console.error("Error buscando:", error);
              return;
            }
          }

          utils.gui.newPokemonDataCard(datosPokemon);

          htmlElemnts.formMain.reset();

          utils.storageLocal.guardarEnHistorial({
            id: datosPokemon.id,
            name: datosPokemon.name,
            types: datosPokemon.types.map((t) => t.name),
            sprites: datosPokemon.sprites,
            fechaBusqueda: Date.now(),
          });
        }
      },
    };

    return {
      init() {
        htmlElemnts.formMain.addEventListener("submit", handlers.onFormSubmit);
        historyModule.init();
      },
    };
  })();
  App.init();
})();
