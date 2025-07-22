'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "4a36e21959beebb8bc1843b525a7fd54",
"assets/AssetManifest.bin.json": "29de86f6b5e9e9ccece4fd30d2c635ec",
"assets/AssetManifest.json": "536ec2e6d538ce88a2bd4ec74d7ef65f",
"assets/assets/Backgrounds/background.png": "6dbc116b2d270f2723adf6a213b691fb",
"assets/assets/Backgrounds/background2.png": "5fe582affc275318137c65f157bb1e9a",
"assets/assets/Backgrounds/background5.webp": "2b84f4c613e7b82e832fd1149b59483a",
"assets/assets/Backgrounds/chart.jpg": "2ea2fcd6b2159fecbf569bac5f8adfcc",
"assets/assets/Backgrounds/cvcbackground.jpg": "384058723108a6fd712b2ea7d14e8b4a",
"assets/assets/Backgrounds/cvcguy.jpg": "bfe8ad2701cc4370434d25a407be7f2f",
"assets/assets/Backgrounds/cvcguy2.jpg": "9bd9d90d9a345bf332d1e658183d4b55",
"assets/assets/Backgrounds/cvclogo.jpg": "19087b7e4133017633debfe64bc246c5",
"assets/assets/Backgrounds/cvcstaff.jpg": "bd5f5c6d454b9984e1863ed0b6f89c49",
"assets/assets/Backgrounds/cvcwall.jpg": "ebcdc2439fdc35eb7be09777370cd939",
"assets/assets/Backgrounds/cvcwall2.jpg": "64db15bec666eaae20ff978700e785d6",
"assets/assets/Backgrounds/cvcwall3.jpg": "dc5eda4af474988a6cef20121aeaf310",
"assets/assets/Backgrounds/cvcwall4.jpg": "5a1e4ab2d4262bd3f738557e71be293e",
"assets/assets/Backgrounds/logo.jpg": "572faaa1f041ee486c25a9f4ee5ecfd0",
"assets/assets/icons/Bitcoin.png": "b7d58a9f48a5460a277544ea3361bc1d",
"assets/assets/icons/BitcoinCash.png": "053a28e72f3223ed086ca73ce9caecd2",
"assets/assets/icons/chart.jpg": "2ea2fcd6b2159fecbf569bac5f8adfcc",
"assets/assets/icons/cvclogo.jpg": "19087b7e4133017633debfe64bc246c5",
"assets/assets/icons/DOGE.png": "e596c8c071005a2579b3b602e6af5d5c",
"assets/assets/icons/Ethereum.png": "0879552e044ddd1866a4e974efa5ff54",
"assets/assets/icons/logos.png": "0eae3f147b49d0d4ce6dd729eab1e1f4",
"assets/assets/icons/OBO.png": "498cb3b3b81bba33da12d9bef0861851",
"assets/assets/icons/professional1.jpg": "d0790f746ad803d35dbbb85c8cf8dbf9",
"assets/assets/icons/professional2.png": "63f8a046802cea75476d6fd875ce09e0",
"assets/assets/icons/professional3.jpg": "ecec921d1240d09ec68b270cd1602cd7",
"assets/assets/icons/SOL.png": "0d8e9a185773da474955639b5fc82808",
"assets/assets/icons/STELLAR.png": "aaf5f5ac89abd4dbc6c0d8d657071ac8",
"assets/assets/icons/trustrise.png": "203820261ae689cd79e1497ca4728c90",
"assets/assets/icons/USDT.png": "a440d4b512f4d2b9b63d3ab8818fc9e3",
"assets/assets/icons/verified.png": "e04f337891c8d48162867023a27dc10d",
"assets/assets/icons/XRP.png": "b848ca58f9c34bf2044c327122ec7477",
"assets/assets/icons/ZELLE.png": "f3f58670cc4890350c786e7c0838b216",
"assets/assets/svg/Finance-amico.svg": "1fc4ab32c41b28e12734a3f7abcd60d8",
"assets/assets/svg/financial-trajectory.svg": "18e732a8cb63814b11b0819572d12259",
"assets/assets/svg/gifsplash.gif": "80f7590624d16934ff2c1e65f04437aa",
"assets/assets/svg/gtm-framework.svg": "6c908e2a698698d9ad24d27c602eaa75",
"assets/assets/svg/j-curve.svg": "bf3b4a27504d0ae548fb94552be3df26",
"assets/assets/svg/Slices.gif": "164d12c6b33ab49d871e3888a0ef11dd",
"assets/assets/svg/world.svg": "604d3391d8d237c606299e9359a9e000",
"assets/assets/svg/world_map.svg": "d41d8cd98f00b204e9800998ecf8427e",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "18e065d9ecdd97401a4ed77af8870df3",
"assets/NOTICES": "5fca6a48c506ea804247602f163d3851",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "728b2d477d9b8c14593d4f9b82b484f3",
"canvaskit/canvaskit.js.symbols": "bdcd3835edf8586b6d6edfce8749fb77",
"canvaskit/canvaskit.wasm": "7a3f4ae7d65fc1de6a6e7ddd3224bc93",
"canvaskit/chromium/canvaskit.js": "8191e843020c832c9cf8852a4b909d4c",
"canvaskit/chromium/canvaskit.js.symbols": "b61b5f4673c9698029fa0a746a9ad581",
"canvaskit/chromium/canvaskit.wasm": "f504de372e31c8031018a9ec0a9ef5f0",
"canvaskit/skwasm.js": "ea559890a088fe28b4ddf70e17e60052",
"canvaskit/skwasm.js.symbols": "e72c79950c8a8483d826a7f0560573a1",
"canvaskit/skwasm.wasm": "39dd80367a4e71582d234948adc521c0",
"favicon.png": "203820261ae689cd79e1497ca4728c90",
"flutter.js": "83d881c1dbb6d6bcd6b42e274605b69c",
"flutter_bootstrap.js": "7119298de18d48415b18c8b5abf0987d",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "fa3cf7c4257ae6c3cb21bfc6b3ac9471",
"/": "fa3cf7c4257ae6c3cb21bfc6b3ac9471",
"main.dart.js": "190ffbc45d1b578d7f95d90a2cc14120",
"manifest.json": "7d46c039243147c137819b509e9a1276",
"version.json": "c1889aa6ca796886d0445f57ca5fca51"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
