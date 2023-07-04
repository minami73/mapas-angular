import { Component } from '@angular/core';
import { PlacesService } from '../../services';

@Component({
    selector: 'app-search-bar',
    templateUrl: './search-bar.component.html',
    styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent {

    constructor(private placesService: PlacesService) { }

    private debounceTimer?: NodeJS.Timeout;


    onQueryChanged(query: string) {

        if (this.debounceTimer) clearTimeout(this.debounceTimer);

        this.debounceTimer = setTimeout(() => {
            this.placesService.getPlacesByQuery(query);
        }, 500)

    }

}
