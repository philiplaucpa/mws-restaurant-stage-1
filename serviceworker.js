self.addEventListener('install', function(event) {
	console.log("Installed");
	event.waitUntil(
		caches.open('newcache').then(function(cache) {
			return cache.addAll([
				'js/dbhelper.js',
				'js/main.js',
				'js/restaurant_info.js',
				'js/utils.js',
				'img/1.jpg',
				'img/10.jpg',
				'img/2.jpg',
				'img/3.jpg',
				'img/4.jpg',
				'img/5.jpg',
				'img/6.jpg',
				'img/7.jpg',
				'img/8.jpg',
				'img/9.jpg',
				'data/restaurants.json',
				'css/styles.css'
				]);
		})
		);
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
  	caches.match(event.request).then(function(response) {
  		if(response){
  			console.log("Success");
  			return response;	
  		} 
  		return fetch(event.request);
  	})
  	);
});
