// Buscar el caché en la pestaña
const staticCacheName = 'magico-v1';
const assets = [
  '/',
  '/index.html',
  '/style.css',
  '/main.js'
];

/*
  El evento install se ejecuta cuando el Service Worker se instala correctamente y se usa 
  para abrir un cache y agregar todos los archivos estáticos necesarios 
  para el funcionamiento offline de tu sitio.
*/

self.addEventListener('install', event => {
  /*
  waitUntil es un método que se usa en eventos relacionados con Service Workers y 
  se utiliza para especificar cuánto tiempo el navegador debe esperar antes de considerar 
  que la tarea relacionada con el evento se ha completado.

  El método waitUntil recibe una promesa 
  */
  event.waitUntil(
    caches.open(staticCacheName).then(cache => {
      return cache.addAll(assets);
    })
  );
});

/*
  El evento fetch se ejecuta cada vez que se realiza una solicitud en el sitio y se usa para buscar la 
  respuesta en el cache primero, y si no se encuentra, para solicitarla desde el servidor
*/

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});