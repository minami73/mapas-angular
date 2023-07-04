import { Component } from '@angular/core';
import { PlacesService } from '../../services';

@Component({
    selector: 'app-map-page',
    templateUrl: './map-page.component.html',
    styleUrls: ['./map-page.component.css']
})
export class MapPageComponent  {

    constructor(private placeService: PlacesService) { }

    get isuserLocationReady(){
        return this.placeService.isUserLocationReady;
    }

}
