+(() => {
  const VsApp = (() => {
    // =========================
    // 1) DOM
    // =========================
    const htmlElements = {
      input1: () => document.getElementById("vsInput1"),
      input2: () => document.getElementById("vsInput2"),
      btnBuscar1: () => document.getElementById("btnBuscar1"),
      btnBuscar2: () => document.getElementById("btnBuscar2"),
      btnBatallar: () => document.getElementById("btnBatallar"),

      badgeP1: () => document.getElementById("badgeP1"),
      badgeP2: () => document.getElementById("badgeP2"),
      spriteP1: () => document.getElementById("spriteP1"),
      spriteP2: () => document.getElementById("spriteP2"),
      nameP1: () => document.getElementById("nameP1"),
      nameP2: () => document.getElementById("nameP2"),
      typesP1: () => document.getElementById("typesP1"),
      typesP2: () => document.getElementById("typesP2"),

      favP1: () => document.getElementById("favP1"),
      favP2: () => document.getElementById("favP2"),
      favR1: () => document.getElementById("favR1"),
      favR2: () => document.getElementById("favR2"),

      stack: () => document.getElementById("vsStack"),

      resultCard1: () => document.getElementById("resultCard1"),
      resultCard2: () => document.getElementById("resultCard2"),
      winnerTag1: () => document.getElementById("winnerTag1"),
      winnerTag2: () => document.getElementById("winnerTag2"),

      resultSprite1: () => document.getElementById("resultSprite1"),
      resultSprite2: () => document.getElementById("resultSprite2"),
      resultName1: () => document.getElementById("resultName1"),
      resultName2: () => document.getElementById("resultName2"),
      resultTypes1: () => document.getElementById("resultTypes1"),
      resultTypes2: () => document.getElementById("resultTypes2"),
      resultPts1: () => document.getElementById("resultPts1"),
      resultPts2: () => document.getElementById("resultPts2"),

      typeAdv: () => document.getElementById("typeAdv"),
      statsCompare: () => document.getElementById("statsCompare"),
      calcBox: () => document.getElementById("calcBox"),
    };

    // =========================
    // 2) Templates
    // =========================
    const templates = {
      pill: (type) => `<span class="vs-pill">${utils.upper(type)}</span>`,
      spriteImg: (src, alt) => (src ? `<img src="${src}" alt="${alt}" />` : ""),
      typeAdvRow: ({ cls, top, sub }) => `
        <div class="vs-adv-row ${cls}">
          <div class="vs-adv-top">${top}</div>
          <div class="vs-adv-sub">${sub}</div>
        </div>
      `,
      statRow: ({ v1, v2, w1, w2, label, leftClass, rightClass }) => `
        <div class="vs-stat-row">
          <div class="vs-stat-num">${v1}</div>

          <div class="vs-stat-track">
            <!-- del centro hacia afuera -->
            <div class="vs-stat-left ${leftClass}" style="width:${w1}%"></div>
            <div class="vs-stat-right ${rightClass}" style="width:${w2}%"></div>

            <div class="vs-stat-label">${label}</div>
          </div>

          <div class="vs-stat-num">${v2}</div>
        </div>
      `,
    };

    // =========================
    // 3) Utils
    // =========================
    const utils = {
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
						
						const cargando = document.querySelectorAll(".cargando");
						for (val of cargando) { val.classList.toggle("display-hidden"); }
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

						const cargando = document.querySelectorAll(".cargando");
						for (val of cargando) { val.classList.toggle("display-hidden"); }
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
      TYPE_CHART: {
        normal:  { rock:0.5, ghost:0, steel:0.5 },
        fire:    { fire:0.5, water:0.5, grass:2, ice:2, bug:2, rock:0.5, dragon:0.5, steel:2 },
        water:   { fire:2, water:0.5, grass:0.5, ground:2, rock:2, dragon:0.5 },
        electric:{ water:2, electric:0.5, grass:0.5, ground:0, flying:2, dragon:0.5 },
        grass:   { fire:0.5, water:2, grass:0.5, poison:0.5, ground:2, flying:0.5, bug:0.5, rock:2, dragon:0.5, steel:0.5 },
        ice:     { fire:0.5, water:0.5, grass:2, ice:0.5, ground:2, flying:2, dragon:2, steel:0.5 },
        fighting:{ normal:2, ice:2, rock:2, dark:2, steel:2, poison:0.5, flying:0.5, psychic:0.5, bug:0.5, ghost:0, fairy:0.5 },
        poison:  { grass:2, fairy:2, poison:0.5, ground:0.5, rock:0.5, ghost:0.5, steel:0 },
        ground:  { fire:2, electric:2, grass:0.5, poison:2, flying:0, bug:0.5, rock:2, steel:2 },
        flying:  { grass:2, fighting:2, bug:2, electric:0.5, rock:0.5, steel:0.5 },
        psychic: { fighting:2, poison:2, psychic:0.5, steel:0.5, dark:0 },
        bug:     { grass:2, psychic:2, dark:2, fire:0.5, fighting:0.5, poison:0.5, flying:0.5, ghost:0.5, steel:0.5, fairy:0.5 },
        rock:    { fire:2, ice:2, flying:2, bug:2, fighting:0.5, ground:0.5, steel:0.5 },
        ghost:   { psychic:2, ghost:2, dark:0.5, normal:0 },
        dragon:  { dragon:2, steel:0.5, fairy:0 },
        dark:    { psychic:2, ghost:2, fighting:0.5, dark:0.5, fairy:0.5 },
        steel:   { ice:2, rock:2, fairy:2, fire:0.5, water:0.5, electric:0.5, steel:0.5 },
        fairy:   { fighting:2, dragon:2, dark:2, fire:0.5, poison:0.5, steel:0.5 }
      },

      CACHE_KEY: "pokemon_cache",
      FAV_KEY: "favoritos",
      upper: (s) => String(s || "").toUpperCase(),

      getCacheList: () => JSON.parse(localStorage.getItem(utils.CACHE_KEY) || "[]"),

      buscarEnCache: (nombreOId) => {
        const busqueda = String(nombreOId).toLowerCase().trim();
        const cache = utils.getCacheList();
        return cache.find(
          (item) =>
            String(item?.data?.id) === busqueda ||
            item?.data?.name?.toLowerCase() === busqueda
        ) || null;
      },

      agregarAlCache: (pokemonData) => {
        console.log(pokemonData);
        const cache = utils.getCacheList();
        const nuevoCache = cache.filter((it) => it?.data?.id !== pokemonData.id);
        nuevoCache.unshift({ data: pokemonData, timestamp: Date.now() });
        localStorage.setItem(utils.CACHE_KEY, JSON.stringify(nuevoCache));
      },

      // getFavoritos: () => localStorage.getItem(utils.FAV_KEY) || [],
      esFavorito: (pokemonId) =>  {
        
        const storage = localStorage.getItem(utils.FAV_KEY);

        const favoritos = storage ? JSON.parse(storage) : [];
        
        // console.log(typeof storage);
        // console.log(typeof JSON.stringify(storage));
        // console.log("isArray:", Array.isArray(storage));
        return favoritos.some(val => val.id === pokemonId);
        // console.log(.some((val) => val.id === pokemonId) || []);
        // return utils.getFavoritos().some((val) => val.id === pokemonId);
      },
      toggleFavorito: (pokemonData) => {
         const storage = localStorage.getItem(utils.FAV_KEY);
         const favoritos = storage ? JSON.parse(storage) : [];
        const favs = favoritos;
        const idx = favs.findIndex((f) => f.id === pokemonData.id);

        console.log(pokemonData);
        if (idx >= 0) favs.splice(idx, 1);
        else favs.unshift({
          id: pokemonData.id,
          name: pokemonData.name,
          types: pokemonData.types.map(val => val.name),
          sprite: pokemonData.sprites?.front_default,
        });

        console.log(pokemonData.types);
        console.log(favs);

        console.log(favs);
        console.log(JSON.stringify(favs));
        localStorage.setItem(utils.FAV_KEY, JSON.stringify(favs));
      },

      setHeart: (btn, pokemonData) => {
        if (!btn || !pokemonData) return;
        btn.textContent = utils.esFavorito(pokemonData.id) ? "❤️" : "🤍";
      },

      setBadge: (badgeEl, source) => {
        if (!badgeEl) return;
        badgeEl.classList.remove("vs-source-api", "vs-source-cache");
        if (source === "API") {
          badgeEl.classList.add("vs-source-api");
          badgeEl.textContent = "API";
        } else {
          badgeEl.classList.add("vs-source-cache");
          badgeEl.textContent = "CACHE";
        }
      },

      statValue: (p, key) => {
        const found = (p.stats || []).find((s) => s.name === key);
        return found ? Number(found.base_stat) : 0;
      },

      baseTotal: (p) => (p.stats || []).reduce((acc, s) => acc + Number(s.base_stat || 0), 0),
      typesOf: (p) => (p.types || []).map((t) => t.name),

      typeMultiplier: (attackerType, defenderTypes) => {
        let mult = 1;
        for (const d of defenderTypes) {
          const row = utils.TYPE_CHART[attackerType] || {};
          mult *= (row[d] ?? 1);
        }
        return mult;
      },

      bestAttackMultiplier: (attackerTypes, defenderTypes) => {
        let best = 0;
        let bestType = attackerTypes[0] || "normal";
        for (const t of attackerTypes) {
          const m = utils.typeMultiplier(t, defenderTypes);
          if (m > best) { best = m; bestType = t; }
        }
        if (best === 0) best = 1;
        return { best, bestType };
      },

      advClass: (mult) => (mult > 1 ? "vs-adv-good" : mult < 1 ? "vs-adv-bad" : "vs-adv-neutral"),
      advText: (mult) => (mult > 1 ? "Es super efectivo" : mult < 1 ? "Es poco efectivo" : "Daño neutral"),

      fetchPokemonSmart: async (nameOrId) => {
        const key = String(nameOrId).trim().toLowerCase();

        const cachedItem = utils.buscarEnCache(key);
        if (cachedItem?.data) return { data: cachedItem.data, source: "CACHE" };

        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${key}`);
        if (!res.ok) throw new Error("No se encontró el Pokémon.");

        const datosCompletos = await res.json();

        const datosCompletosSpecies = await utils.fetch.pokeApiPokemonSpecies(key);

        const datosCompletosEvolution =
        await utils.fetch.pokeApiEvolutionChain(
          datosCompletosSpecies.evolution_chain.url
        );
        // const pokemonData = {
        //   id: d.id,
        //   name: d.name,
        //   sprites: { front_default: d.sprites?.front_default || "" },
        //   types: d.types.map((x) => ({ name: x.type.name })),
        //   stats: d.stats.map((s) => ({ name: s.stat.name, base_stat: s.base_stat })),
        // };

        const pokemonData = {
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

        utils.agregarAlCache(pokemonData);
        return { data: pokemonData, source: "API" };
      },

      renderPreview: (slot, payload) => {
        const { data, source } = payload;

        const badge = slot === 1 ? htmlElements.badgeP1() : htmlElements.badgeP2();
        const sprite = slot === 1 ? htmlElements.spriteP1() : htmlElements.spriteP2();
        const name = slot === 1 ? htmlElements.nameP1() : htmlElements.nameP2();
        const types = slot === 1 ? htmlElements.typesP1() : htmlElements.typesP2();
        const favBtn = slot === 1 ? htmlElements.favP1() : htmlElements.favP2();

        utils.setBadge(badge, source);
        sprite.innerHTML = templates.spriteImg(data.sprites?.front_default, data.name);

        const total = utils.baseTotal(data);
        name.textContent = `#${data.id} ${utils.upper(data.name)} • ${total} pts`;

        const tnames = (data.types || []).map((t) => t.name);
        types.innerHTML = tnames.map((t) => templates.pill(t)).join("");

        utils.setHeart(favBtn, data);
      },

      mostrarResultado: (p1Pts, p2Pts) => {
        const tag1 = htmlElements.winnerTag1();
        const tag2 = htmlElements.winnerTag2();
        const card1 = htmlElements.resultCard1();
        const card2 = htmlElements.resultCard2();

        if (!tag1 || !tag2 || !card1 || !card2) return;

        tag1.classList.add("vs-hidden");
        tag2.classList.add("vs-hidden");
        card1.classList.remove("vs-win", "vs-lose");
        card2.classList.remove("vs-win", "vs-lose");

        if (p1Pts > p2Pts) {
          tag1.classList.remove("vs-hidden");
          card1.classList.add("vs-win");
          card2.classList.add("vs-lose");
        } else if (p2Pts > p1Pts) {
          tag2.classList.remove("vs-hidden");
          card2.classList.add("vs-win");
          card1.classList.add("vs-lose");
        } else {
          card1.classList.add("vs-lose");
          card2.classList.add("vs-lose");
        }
      },

      renderStatsCompare: (p1, p2) => {
        const rows = [
          { key: "hp", label: "HP" },
          { key: "attack", label: "ATK" },
          { key: "defense", label: "DEF" },
          { key: "special-attack", label: "SP.ATK" },
          { key: "special-defense", label: "SP.DEF" },
          { key: "speed", label: "SPD" },
        ];

        const closeThreshold = 5;
        const getMax = (k) => Math.max(utils.statValue(p1, k), utils.statValue(p2, k), 120);

        const box = htmlElements.statsCompare();
        if (!box) return;

        box.innerHTML = rows.map((r) => {
          const v1 = utils.statValue(p1, r.key);
          const v2 = utils.statValue(p2, r.key);
          const max = getMax(r.key);

          // ✅ DEL CENTRO HACIA AFUERA: máximo 50% por lado
          const w1 = Math.round((v1 / max) * 50);
          const w2 = Math.round((v2 / max) * 50);

          const diff = Math.abs(v1 - v2);
          const close = diff <= closeThreshold;

          let leftClass = "vs-close";
          let rightClass = "vs-close";

          if (!close) {
            if (v1 > v2) { leftClass = "vs-strong"; rightClass = "vs-weak"; }
            else { leftClass = "vs-weak"; rightClass = "vs-strong"; }
          }

          return templates.statRow({ v1, v2, w1, w2, label: r.label, leftClass, rightClass });
        }).join("");
      },

      renderBattle: (P1, P2) => {
        if (!P1 || !P2) return;

        const p1 = P1.data;
        const p2 = P2.data;

        const total1 = utils.baseTotal(p1);
        const total2 = utils.baseTotal(p2);

        const t1 = utils.typesOf(p1);
        const t2 = utils.typesOf(p2);

        const m1 = utils.bestAttackMultiplier(t1, t2);
        const m2 = utils.bestAttackMultiplier(t2, t1);

        const score1 = +(total1 * m1.best).toFixed(1);
        const score2 = +(total2 * m2.best).toFixed(1);

        htmlElements.stack()?.classList.remove("vs-hidden");

        htmlElements.resultSprite1().innerHTML = templates.spriteImg(p1.sprites.front_default, p1.name);
        htmlElements.resultSprite2().innerHTML = templates.spriteImg(p2.sprites.front_default, p2.name);

        htmlElements.resultName1().textContent = utils.upper(p1.name);
        htmlElements.resultName2().textContent = utils.upper(p2.name);

        htmlElements.resultTypes1().innerHTML = t1.map((t) => templates.pill(t)).join("");
        htmlElements.resultTypes2().innerHTML = t2.map((t) => templates.pill(t)).join("");

        htmlElements.resultPts1().textContent = `${score1} pts`;
        htmlElements.resultPts2().textContent = `${score2} pts`;

        utils.mostrarResultado(score1, score2);

        utils.setHeart(htmlElements.favR1(), p1);
        utils.setHeart(htmlElements.favR2(), p2);

        htmlElements.typeAdv().innerHTML = [
          templates.typeAdvRow({
            cls: utils.advClass(m1.best),
            top: `${utils.upper(p1.name)} vs ${utils.upper(p2.name)}: x${m1.best.toFixed(2)} (${utils.upper(m1.bestType)})`,
            sub: `${utils.advText(m1.best)} contra ${t2.map(utils.upper).join(" / ")}`
          }),
          templates.typeAdvRow({
            cls: utils.advClass(m2.best),
            top: `${utils.upper(p2.name)} vs ${utils.upper(p1.name)}: x${m2.best.toFixed(2)} (${utils.upper(m2.bestType)})`,
            sub: `${utils.advText(m2.best)} contra ${t1.map(utils.upper).join(" / ")}`
          }),
        ].join("");

        utils.renderStatsCompare(p1, p2);

        htmlElements.calcBox().innerHTML = `
          <div>Stats Base Total: <b>${p1.name}</b>: ${total1} | <b>${p2.name}</b>: ${total2}</div>
          <div>Multiplicador de Tipo: <b>${p1.name}</b>: x${m1.best.toFixed(2)} | <b>${p2.name}</b>: x${m2.best.toFixed(2)}</div>
          <div>Puntaje Final: <b>${p1.name}</b>: ${score1} | <b>${p2.name}</b>: ${score2}</div>
        `;
      },
    };

    // =========================
    // 4) Handlers
    // =========================
    const handlers = {
      state: { P1: null, P2: null },

      buscarSlot: async (slot) => {
        const value = (slot === 1 ? htmlElements.input1().value : htmlElements.input2().value).trim();
        if (!value) return;

        const payload = await utils.fetchPokemonSmart(value);

        if (slot === 1) handlers.state.P1 = payload;
        else handlers.state.P2 = payload;

        utils.renderPreview(slot, payload);

        htmlElements.stack()?.classList.add("vs-hidden");
        htmlElements.btnBatallar().disabled = !(handlers.state.P1 && handlers.state.P2);
      },

      onBatallar: () => utils.renderBattle(handlers.state.P1, handlers.state.P2),

      onToggleFavFromSlot: (slot) => {
        const payload = slot === 1 ? handlers.state.P1 : handlers.state.P2;
        if (!payload?.data) return;

        utils.toggleFavorito(payload.data);

        utils.setHeart(htmlElements.favP1(), handlers.state.P1?.data);
        utils.setHeart(htmlElements.favP2(), handlers.state.P2?.data);
        utils.setHeart(htmlElements.favR1(), handlers.state.P1?.data);
        utils.setHeart(htmlElements.favR2(), handlers.state.P2?.data);
      },
    };

    // =========================
    // 5) Init
    // =========================
    const init = () => {
      htmlElements.btnBuscar1()?.addEventListener("click", () => handlers.buscarSlot(1));
      htmlElements.btnBuscar2()?.addEventListener("click", () => handlers.buscarSlot(2));

      htmlElements.input1()?.addEventListener("keydown", (e) => {
        if (e.key === "Enter") { e.preventDefault(); handlers.buscarSlot(1); }
      });
      htmlElements.input2()?.addEventListener("keydown", (e) => {
        if (e.key === "Enter") { e.preventDefault(); handlers.buscarSlot(2); }
      });

      htmlElements.btnBatallar()?.addEventListener("click", handlers.onBatallar);

      htmlElements.favP1()?.addEventListener("click", () => handlers.onToggleFavFromSlot(1));
      htmlElements.favP2()?.addEventListener("click", () => handlers.onToggleFavFromSlot(2));
      htmlElements.favR1()?.addEventListener("click", () => handlers.onToggleFavFromSlot(1));
      htmlElements.favR2()?.addEventListener("click", () => handlers.onToggleFavFromSlot(2));
    };

    return { init };
  })();

  document.addEventListener("DOMContentLoaded", VsApp.init);
})();