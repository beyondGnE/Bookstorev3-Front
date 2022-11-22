import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { MatCardModule } from '@angular/material/card'; // NOTE: Your Angular version MUST be ^15 for Angular Material to successfully install!
import { MatGridListModule } from '@angular/material/grid-list'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookTestComponent } from './components/book-test/book-test.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BookCardComponent } from './components/book-card/book-card.component';


@NgModule({
  declarations: [
    AppComponent,
    BookTestComponent,
    BookCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatGridListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
