import { Component, ElementRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
/*
 * We're loading this component asynchronously
 * We are using some magic with es6-promise-loader that will wrap the module with a Promise
 * see https://github.com/gdi2290/es6-promise-loader for more info
 */

@Component({
  selector: 'about',
  styleUrls: ['./about.style.css'],
  templateUrl: './about.template.html'
})

export class About {
  localState: any;
  allRecords: any;
  localStateTotal: number;
  selectedCompanies: any[];
  msgs: any[];
  pageObject: any;
  values:any = null;
  
  //Show row data on selection
  onRowSelect(event): void {
    console.log(this.selectedCompanies);
    console.log(event.data);
  }
  //Remove data when checkbox unchecked
  onRowUnselect(event): void {
    console.log(this.selectedCompanies);
    console.log(event.data);
  }

  constructor(public route: ActivatedRoute,public element: ElementRef) {
    
  }

  //When user types page number in text box and searches
  navigateToPage(value): void {
    //Check if input is a number
    if (value.match(/.*[^0-9].*/)) {
      this.formatPageWiseData(0, 0);
      return;
    } else {
      //Check if number entered is more than page count or not 0
      if ((+value <= this.pageObject.pageCount) && (+value != 0)) {
        this.paginate({}, +value)
      } else {
        this.formatPageWiseData(0, 0);
      }
    }
    //Remove the active class from page numbers
    if(this.element.nativeElement.querySelector('.ui-state-active') != null){
      this.element.nativeElement.querySelector('.ui-state-active').classList.remove('ui-state-active');
    }
  }
  
  //When user clicks any control in the Pagination control
  paginate(event, pageNumber?: number): void {

    let rows:any= (Object.keys(event).length === 0)?0:event.rows;
    //Check if page number is being passsed
    if (pageNumber) {
      //Check page object for current no. of records to fetch (10,20,50,100)
      if (this.pageObject.rows) {
        this.formatPageWiseData(+this.pageObject.rows, (+pageNumber));
      } else {
        //If page object is not set, set no of records to fetch to 10
        this.formatPageWiseData(10, (+pageNumber));
      }
    } else {
      //Clear the value in text field
      this.values = null;
      //Check if value is All, fetch all records
      if (isNaN(rows) && rows.toLowerCase() === 'all') {
        this.formatPageWiseData(this.allRecords.length, 1)
      } else {
        //Get page wise data
        this.formatPageWiseData(+event.rows, (+event.page) + 1);
      }
      this.pageObject = event;
    }
  }
  
  //Logic to calculate page size and start and end index of records
  formatPageWiseData(pageSize, pageIndex): void {
    let page: any = pageIndex;
    let startRec: any = Math.max(page - 1, 0) * pageSize;
    let endRec: any = Math.min(startRec + pageSize, this.allRecords.length);
    this.localState = this.allRecords.slice(startRec, endRec);
    console.log(this.localState);
  }

  ngOnInit() {
    this.route
      .data
      .subscribe((data: any) => {
        // your resolved data from route
        this.localState = data.yourData;
      });

    // get data from mock-data.json file
    this.asyncDataWithWebpack();
  }

  asyncDataWithWebpack(): void {
    // you can also async load mock data with 'es6-promise-loader'
    // you would do this if you don't want the mock-data bundled
    // remember that 'es6-promise-loader' is a promise
    setTimeout(() => {
      //Initialize initial properties
      System.import('../../assets/mock-data/mock-data.json')
        .then(json => {
          console.log('async mockData', json);
          this.allRecords = json;
          this.localStateTotal = json.length;
          this.formatPageWiseData(10, 1);
          this.pageObject = { pageCount: Math.ceil(json.length / 10) };
        });

    });
  }

}
