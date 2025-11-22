// Service Worker for Interview Notes PWA
const CACHE_NAME = "interview-notes-v5";
const RUNTIME_CACHE = "interview-notes-runtime-v5";

// Files to cache immediately on install
const PRECACHE_URLS = [
  "./",
  "./index.html",
  "./offline.md",
  "./README.md",
  "./_sidebar.md",
  "./about.md",
  "./FEATURES.md",
  "./manifest.json",
  "./assets/apple-touch-icon.png",
  "./assets/favicon-32x32.png",
  "./assets/favicon-16x16.png",
  // CDN resources
  "https://cdn.jsdelivr.net/npm/docsify@4/lib/themes/vue.css",
  "https://cdn.jsdelivr.net/npm/docsify@4",
  "https://cdn.jsdelivr.net/npm/docsify@4/lib/plugins/search.min.js",
  "https://cdn.jsdelivr.net/npm/docsify-copy-code@2",
  "https://cdn.jsdelivr.net/npm/docsify-pagination@2/dist/docsify-pagination.min.js",
  "https://cdn.jsdelivr.net/npm/prismjs@1/components/prism-bash.min.js",
  "https://cdn.jsdelivr.net/npm/prismjs@1/components/prism-java.min.js",
  "https://cdn.jsdelivr.net/npm/prismjs@1/components/prism-sql.min.js",
  "https://cdn.jsdelivr.net/npm/prismjs@1/components/prism-python.min.js",
  "https://cdn.jsdelivr.net/npm/prismjs@1/components/prism-javascript.min.js",
  "https://cdn.jsdelivr.net/npm/docsify@4/lib/plugins/zoom-image.min.js",
];

// Install event - cache core files
self.addEventListener("install", (event) => {
  console.log("[Service Worker] Installing...");
  event.waitUntil(
    caches
      .open(CACHE_NAME)
      .then((cache) => {
        console.log("[Service Worker] Precaching app shell");
        return cache.addAll(PRECACHE_URLS);
      })
      .then(() => self.skipWaiting())
  );
});

// Activate event - clean up old caches
self.addEventListener("activate", (event) => {
  console.log("[Service Worker] Activating...");
  event.waitUntil(
    caches
      .keys()
      .then((cacheNames) => {
        return Promise.all(
          cacheNames.map((cacheName) => {
            if (cacheName !== CACHE_NAME && cacheName !== RUNTIME_CACHE) {
              console.log("[Service Worker] Deleting old cache:", cacheName);
              return caches.delete(cacheName);
            }
          })
        );
      })
      .then(() => self.clients.claim())
  );
});

// Fetch event - serve from cache, fallback to network
self.addEventListener("fetch", (event) => {
  const { request } = event;
  const url = new URL(request.url);

  // Skip cross-origin requests
  if (
    url.origin !== location.origin &&
    !url.hostname.includes("cdn.jsdelivr.net")
  ) {
    return;
  }

  // Network first strategy for HTML and markdown files (to get latest content)
  if (
    request.headers.get("accept")?.includes("text/html") ||
    url.pathname.endsWith(".md")
  ) {
    event.respondWith(
      fetch(request)
        .then((response) => {
          // Clone and cache the response
          const responseClone = response.clone();
          caches.open(RUNTIME_CACHE).then((cache) => {
            cache.put(request, responseClone);
          });
          return response;
        })
        .catch(() => {
          // If network fails, try cache
          return caches.match(request).then((response) => {
            if (response) {
              return response;
            }
            // If not in cache and it's a markdown file, show offline page
            if (url.pathname.endsWith(".md")) {
              return caches.match("./offline.md");
            }
          });
        })
    );
    return;
  }

  // Cache first strategy for everything else (CSS, JS, images)
  event.respondWith(
    caches
      .match(request)
      .then((cachedResponse) => {
        if (cachedResponse) {
          return cachedResponse;
        }

        return fetch(request).then((response) => {
          // Don't cache non-successful responses
          if (
            !response ||
            response.status !== 200 ||
            response.type === "error"
          ) {
            return response;
          }

          // Clone and cache the response
          const responseClone = response.clone();
          caches.open(RUNTIME_CACHE).then((cache) => {
            cache.put(request, responseClone);
          });

          return response;
        });
      })
      .catch(() => {
        // Fallback for offline - return a custom offline page if available
        if (request.destination === "document") {
          return caches.match("./index.html");
        }
      })
  );
});

// Handle message events (e.g., for skip waiting)
self.addEventListener("message", (event) => {
  if (event.data && event.data.type === "SKIP_WAITING") {
    self.skipWaiting();
  }
});

// Background sync for future enhancements
self.addEventListener("sync", (event) => {
  if (event.tag === "sync-notes") {
    event.waitUntil(syncNotes());
  }
});

async function syncNotes() {
  // Placeholder for syncing functionality
  console.log("[Service Worker] Syncing notes...");
}

// Periodic background sync (if supported)
self.addEventListener("periodicsync", (event) => {
  if (event.tag === "update-content") {
    event.waitUntil(updateContent());
  }
});

async function updateContent() {
  // Placeholder for periodic content updates
  console.log("[Service Worker] Updating content...");
}
