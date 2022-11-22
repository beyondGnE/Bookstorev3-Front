import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookTestComponent } from './components/book-test/book-test.component';

const routes: Routes = [
  {path: '', component: BookTestComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
