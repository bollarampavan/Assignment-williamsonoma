import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import {HttpModule, RequestOptions,BrowserXhr} from '@angular/http';
import {routing} from './app.routes';
import {DashboardComponent} from './dashboard/dashboard.component';
import {AppService} from './app.service';

@NgModule({
  imports:      [ BrowserModule ,HttpModule,routing],
  declarations: [ AppComponent,DashboardComponent ],
  bootstrap:    [ AppComponent ],
  providers:    [AppService]
})
export class AppModule { }
