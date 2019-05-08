import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { LazyModule } from './lazy/lazy.module';
import { AppComponent } from './app.component';

const routes: Routes = [
  { path: '', redirectTo: 'lazy', pathMatch: 'full' },
  { path: 'lazy', loadChildren: 'app/lazy/lazy.module#LazyModule' },
];

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes, {
      relativeLinkResolution: 'corrected'
    }),
    LazyModule
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
