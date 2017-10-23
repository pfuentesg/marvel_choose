import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import {MarvelApiService} from './services/marvel-api.service';
import { ListComponent } from './list/list.component';
import { HeaderComponent } from './header/header.component'

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home',  component: ListComponent },
 
];
@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule, 
    RouterModule.forRoot(routes)
  ],
  providers: [MarvelApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
