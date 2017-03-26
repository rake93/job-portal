import { Component } from '@angular/core';
import { ApiService } from 'app/common/api.service';

@Component({
  selector: 'search-criteria',
  templateUrl: './search-criteria.component.html',
  styleUrls: ['./search-criteria.component.css'],
  providers : [ApiService]
})
export class SearchCriteriaComponent {
    selectedValue: string;

    foods = [
        {value: 'steak-0', viewValue: 'Steak'},
        {value: 'pizza-1', viewValue: 'Pizza'},
        {value: 'tacos-2', viewValue: 'Tacos'}
    ];
  constructor(api: ApiService) {
      api.getSearchData();
  }

}
