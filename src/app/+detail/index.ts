import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { Detail } from './detail.component';
import { InputTextModule, DataTableModule, ButtonModule, DialogModule, CheckboxModule, PaginatorModule } from 'primeng/primeng';
console.log('`Detail` bundle loaded asynchronously');
// async components must be named routes for WebpackAsyncRoute
export const routes = [
  { path: '', component: Detail, pathMatch: 'full' }
];

@NgModule({
  declarations: [
    // Components / Directives/ Pipes
    Detail
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
    InputTextModule, DataTableModule, ButtonModule, DialogModule, CheckboxModule, PaginatorModule
  ]
})
export default class AboutModule {
  static routes = routes;
}
