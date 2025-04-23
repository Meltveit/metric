/**
 * KonverterProff - Service Worker
 * This service worker provides offline functionality for the app
 */

const CACHE_NAME = 'konverterproff-cache-v1';

// Files to cache for offline use
const urlsToCache = [
  '/',
  '/index.html',
  '/css/styles.css',
  '/js/main.js',
  '/js/converters/volume.js',
  '/js/converters/length.js',
  '/js/converters/weight.js',
  '/js/converters/temperature.js',
  '/pages/volume.html',
  '/pages/length.html',
  '/pages/weight.html',
  '/pages/temperature.html',
  '/assets/images/logo.svg',
  '/assets/images/icons/flask.svg',
  '/assets/images/icons/ruler.svg',
  '/assets/images/icons/weight.svg',
  '/assets/images/icons/thermometer.svg',
  '/assets/images/icons/currency.svg',
  '/assets/images/icons/hard-drive.svg',
  '/assets/images/icons/clock.svg',
  '/assets/images/icons/square.svg',
  '/assets/images/icons/speed.svg',
  '/favicon.ico',
  '/manifest.json'
];

// Install event - cache essential files
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
      .catch(error => {
        console.error('Error caching files during install:', error);
      })
  );
});

// Activate event - clean up old caches
self.addEventListener('activate', event => {
  const cacheWhitelist = [CACHE_NAME];
  
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});

// Fetch event - serve from cache or network
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        // Cache hit - return the response from cache
        if (response) {
          return response;
        }
        
        // Clone the request because it's a one-time use stream
        const fetchRequest = event.request.clone();
        
        // Try to fetch from network
        return fetch(fetchRequest)
          .then(response => {
            // Check if response is valid
            if (!response || response.status !== 200 || response.type !== 'basic') {
              return response;
            }
            
            // Clone the response because it's a one-time use stream
            const responseToCache = response.clone();
            
            // Cache the new resource
            caches.open(CACHE_NAME)
              .then(cache => {
                // Skip caching for API calls or external resources
                const url = event.request.url;
                if (!url.includes('api.') && !url.includes('external.') && 
                    (url.startsWith(self.location.origin) || url.startsWith('https://unpkg.com/alpinejs'))) {
                  cache.put(event.request, responseToCache);
                }
              });
            
            return response;
          })
          .catch(error => {
            // Network failed, try to return a fallback page if it's a HTML request
            if (event.request.mode === 'navigate') {
              return caches.match('/offline.html');
            }
            
            console.error('Fetch failed:', error);
            throw error;
          });
      })
  );
});

// Handle offline fallback
self.addEventListener('fetch', event => {
  if (event.request.mode === 'navigate' || 
      (event.request.method === 'GET' && 
       event.request.headers.get('accept').includes('text/html'))) {
    event.respondWith(
      fetch(event.request)
        .catch(() => {
          return caches.match('/offline.html');
        })
    );
  }
});