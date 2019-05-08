import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AComponent } from './a/a.component';
import { BComponent } from './b/b.component';
import { CComponent } from './c/c.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: AComponent
      },
      {
        path: 'comp/b',
        component: BComponent
      },
      {
        path: 'comp/b/comp/c',
        children: [
          {
            path: '',
            component: CComponent
          }
          // and more routes...
        ]
      }
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AComponent, BComponent, CComponent]
})
export class LazyModule { }