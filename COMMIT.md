# ADD

- Buscar url query search 
    - Example: `?search=657`


- function utils.routers.query.set("search", `${busqueda}`); `ref: historial`
- evolution chain ➜ && select


# fix

- Ir a historial y despues a Buscar

````text
Uncaught (in promise) TypeError: can't access property "dataset", htmlElemnts.form.finder.button.buscar is null
    search http://127.0.0.1:5501/shared.js:1365
    onFormSubmit http://127.0.0.1:5501/shared.js:1474
    init http://127.0.0.1:5501/shared.js:1558
    <anonymous> http://127.0.0.1:5501/shared.js:1584
    <anonymous> http://127.0.0.1:5501/shared.js:1585
shared.js:1365:6
    search http://127.0.0.1:5501/shared.js:1365
    onFormSubmit http://127.0.0.1:5501/shared.js:1474
    (Async: EventListener.handleEvent)
    init http://127.0.0.1:5501/shared.js:1558
    <anonymous> http://127.0.0.1:5501/shared.js:1584
    <anonymous> http://127.0.0.1:5501/shared.js:1585

```