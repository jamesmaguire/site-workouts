self.addEventListener('install', function(e) {
 e.waitUntil(
   caches.open('video-store').then(function(cache) {
     return cache.addAll([
       '/www-workouts/',
       '/www-workouts/index.html',
       '/www-workouts/static/common.css',
       '/www-workouts/static/index.css',
       '/www-workouts/static/recipe.css',
       '/www-workouts/static/search.js',
       '/www-workouts/static/pwa.js',
     ]);
   })
 );
});

self.addEventListener('fetch', function(e) {
  console.log(e.request.url);
  e.respondWith(
    caches.match(e.request).then(function(response) {
      return response || fetch(e.request);
    })
  );
});
