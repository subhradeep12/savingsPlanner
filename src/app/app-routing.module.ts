import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompoundintComponent } from './compoundint/compoundint.component';
import { OptionsComponent } from './options/options.component';
import { RateComponent } from './rate/rate.component';
import { TargetComponent } from './target/target.component';
import { TaxComponent } from './tax/tax.component';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [
  {path: "", redirectTo: "welcome", pathMatch: "full"},
  {path: "welcome", component: WelcomeComponent},
  {path: "options", component: OptionsComponent},
  {path: "comp-int", component: CompoundintComponent},
  {path: "tax", component : TaxComponent},
  {path: "rate", component: RateComponent},
  {path: "target", component: TargetComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
