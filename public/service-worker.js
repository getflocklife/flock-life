self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open("flock-cache-v1").then((cache) => {
      return cache.addAll([
        "/",
        "/app",
        "/manifest.json",
        "/icons/flock-icon-192.png",
        "/icons/flock-icon-512.png",
        "/images/flock-og.jpg"
      ]);
    })
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
