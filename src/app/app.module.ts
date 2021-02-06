import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgxCursorModule } from 'node_modules/ngx-cursor';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { TripsBlockComponent } from './trips-block/trips-block.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TripsBlockComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxCursorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
