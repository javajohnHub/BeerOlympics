import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {
  LocationStrategy,
  HashLocationStrategy
} from '@angular/common';
import {routing} from './app-routing.module';

import { AppComponent } from './app.component';
import { ScoreBoardComponent } from './components/scoreboard/scoreBoard.component';
import { NoContentComponent } from './components/no-content/no-content';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AdminComponent } from './components/admin/admin.component';

import {CollapseModule } from 'ngx-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    ScoreBoardComponent,
    NoContentComponent,
    NavbarComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    CollapseModule.forRoot()
  ],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
