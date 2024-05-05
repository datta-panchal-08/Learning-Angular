import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentComponent } from './student/student.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ErrorHandlingComponent } from './error-handling/error-handling.component';

const routes: Routes = [
  {path :"student",component : StudentComponent},
  {path: "about-us",component : AboutUsComponent},
  {path : "error-handling", component : ErrorHandlingComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PortfolioRoutingModule { }
