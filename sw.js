const $versi = "v 0.0";
const $caches = [
	'.','index.html','style.css','script.js','Poppins-Regular.woff','icon.png','welcome.jpg','misi.jpg','3.jpg','x.jpg','offroad.jpg','rafting.jpg','paintball.jpg','fox.jpg','team.jpg','atv.jpg','harmoko.png','google8f10dab510b8f12c.html'
];

self.addEventListener('install', e => {
	e.waitUntil(
		caches.open($versi).then(cache => {
			return cache.addAll($caches);
		})
	);
	self.skipWaiting();
});

self.addEventListener('activate', e=>{
  e.waitUntil(
		caches.keys().then(keys => {
		  return Promise.all(keys.filter(key => key !== $versi).map(key => caches.delete(key))
		  )
		})
	);
});

self.addEventListener('fetch', e => {
	e.respondWith(
		caches.match(e.request).then(response => {
			return response || fetch(e.request);
		})
	);
});

