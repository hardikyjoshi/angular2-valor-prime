import { Component, ElementRef } from '@angular/core';

@Component({
  selector: 'detail',
  styleUrls: ['./detail.style.css'],
  templateUrl: './detail.template.html'
})
export class Detail {
  constructor() {

  }
  display: boolean = false;

  showDialog() {
    this.display = true;
  }
  
  ngOnInit() {
    console.log('hello `Detail` component');
  }

}
