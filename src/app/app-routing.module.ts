import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookDetailsComponent } from './components/book-details/book-details.component';
import { BookTestComponent } from './components/book-test/book-test.component';

const routes: Routes = [
  {path: '', component: BookTestComponent},
  // {path: 'books/:bookId', component: BookDetailsComponent },
  {path: 'books', component: BookDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
