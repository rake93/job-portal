import { Component } from '@angular/core';
import { ApiService } from 'app/common/api.service';

@Component({
  selector: 'detail-grid',
  templateUrl: './detail-grid.component.html',
  styleUrls: ['./detail-grid.component.css'],
  providers : [ApiService]
})
export class DetailGridComponent {
    JobList: Object;
  constructor(private api: ApiService) {
      api.getSearchData ();
      //api.getSearchData.subscribe(value => this.JobList = value);
  }

}
