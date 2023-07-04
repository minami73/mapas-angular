import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

import mapboxgl from 'mapbox-gl'; // or "const mapboxgl = require('mapbox-gl');"

mapboxgl.accessToken = 'pk.eyJ1IjoibWluYW1pNzMiLCJhIjoiY2xpeGZxNmt0MDZkMjNqc3d6Mm5kZXNnMCJ9.ciqSO083qGzzl2UwZPzriA';

if(!navigator.geolocation){
    alert('Navegador no soporta la geolocalización')
    throw new Error('Navegador no soporta la geolocalización')
}


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
