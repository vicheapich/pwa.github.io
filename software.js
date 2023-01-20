self.addEventListener("install", e =>{
    console.log("Install  vichea");
    e.waitUntil(
        caches.open("static").then(cache => {
            return cache.addAll(["./", "./src/style.css", "./img/icon-144x144.png"]);
        })
    )
})

self.addEventListener("fetch", e => { 
    console.log("what if jkj0obn hjh");
    console.log(`Intercepting fetch request for: ${e.request.url}`);
})