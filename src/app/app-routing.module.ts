import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompoundintComponent } from './compoundint/compoundint.component';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [
  {path: "", redirectTo: "welcome", pathMatch: "full"},
  {path: "welcome", component: WelcomeComponent},
  {path: "comp-int", component: CompoundintComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
