import { Injectable } from '@angular/core';
declare var $:any;
@Injectable()
export class ApiService {
    jobData : Object;
    getSearchData () {
        $.getJSON('http://localhost:8081/search', function (data) {
            this.jobData =  data;
            return data;
        }).fail((data, err, errMsg) => {
            console.debug (data, err, errMsg);
            this.jobData = {error : "Error Getting Data", results : []}
        });
        return this.jobData;
    }
    getJobData () {
        return this.jobData;
    }
    constructor() { }

}
