var cacheName =  'simple-pwa-page';
var fileToCache = [
    '/',
    '/index.html',
    'hello.css'
];

self.addEventListener('install',function(e){
    console.log('[ServiceWorker] install');
    e.waitUntil(
        caches.open(cacheName).then(function(cache){
            console.log('[ServiceWorker] Caching app shell');
            return cache.addAll(fileToCache);
        })
    );
});

self.addEventListener('activate',event =>{
    event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch',event => {
    event.respondWith(
        caches.match(event.request,{ignoreSearch:true}).then(response => {
            return response || fetch(event.request);
        })
    );
});