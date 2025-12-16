# Parcheando

## ADD

- Master Bola dark theme
- Control de errores en busqueda min max
- Template Cargando datos...
- Poke sonidos al buscar

## Update

- Template


## fix

- Otros bugs..
- Pokebola
- ButtonFv
```js
listaFavoritos.addEventListener("click", (e) => {
    const boton = e.target.closest('button');
    if (!boton) return;

    const pokemonId = Number(boton.dataset.favoriteId);

    utils.storageLocal.eliminarDeFavoritos(pokemonId);
    this.renderFavoritos();
});
```
## TODO

- Fix technical debt