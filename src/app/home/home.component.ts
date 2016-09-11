import { Component } from '@angular/core';
import { XLarge } from './x-large';

@Component({
  // The selector is what angular internally uses
  // for `document.querySelectorAll(selector)` in our index.html
  // where, in this case, selector is the string 'home'
  selector: 'home',  // <home></home>
  // Our list of styles in our component. We may add more to compose many styles together
  styleUrls: ['./home.style.css'],
  // Every Angular template is first compiled by the browser before Angular runs it's compiler
  templateUrl: './home.template.html'
})
export class Home {

  public status: Object = {
    isFirstOpen: true,
    isFirstDisabled: false
  };

  totalAlerts:number;

  public groups: Array<any> = [
    {
      title: 'vCenter Server 5.1 startup may be slow',
      content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore facilis nobis dignissimos doloribus at eveniet libero aut ab fugiat. Esse officia cupiditate eveniet accusantium recusandae.'
    },
    {
      title: 'How to Upgrade from vSphere 4',
      content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore facilis nobis dignissimos doloribus at eveniet libero aut ab fugiat. Esse officia cupiditate eveniet accusantium recusandae.'
    },
    {
      title: 'VR 5.1 unable to recover protected virtual machines',
      content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore facilis nobis dignissimos doloribus at eveniet libero aut ab fugiat. Esse officia cupiditate eveniet accusantium recusandae.'
    },
    {
      title: 'vCenter Server 5.1 may fail to start',
      content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore facilis nobis dignissimos doloribus at eveniet libero aut ab fugiat. Esse officia cupiditate eveniet accusantium recusandae.'
    },
    {
      title: 'vCenter Server 5.1 installation troubleshooting',
      content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore facilis nobis dignissimos doloribus at eveniet libero aut ab fugiat. Esse officia cupiditate eveniet accusantium recusandae.'
    }
  ];
  // TypeScript public modifiers
  constructor() {
    this.totalAlerts = this.groups.length;
  }

  ngOnInit() {

  }

}
