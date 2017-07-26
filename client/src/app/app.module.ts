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
import { BoardComponent } from './components/board/board.component';
import { NoContentComponent } from './components/no-content/no-content';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AdminComponent } from './components/admin/admin.component';

import {CollapseModule } from 'ngx-bootstrap';
import {BoardService} from "./components/board/board.service";

@NgModule({
  declarations: [
    AppComponent,
    BoardComponent,
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
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}, BoardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
