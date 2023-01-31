const STATIC_CACHE = "static";

const APP_SHELL = [
    "/",
    "./index.html",
    "./css/estilos.css",
    "./js/functions.js",
    "./js/main.js",
    "./js/script.js",
    "./js/script2.js",
    "./img/5CR7.jpg",
];

self.addEventListener("install", (e) => {
    const cacheStatic = caches
        .open(STATIC_CACHE)
        .open((cache) => cache.addAll(APP_SHELL));

    e.waitUntil(cacheStatic);
});

self.addEventListener("fetch", (e) => {
    console.log("fectch! ", e.request);

    e.respondWith(
        caches
            .match(e.request)
            .then(res => res || fetch (e.request))
            .catch(console.log)
            );
});