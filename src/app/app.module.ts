import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CompoundintComponent } from './compoundint/compoundint.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { OptionsComponent } from './options/options.component';
import { TaxComponent } from './tax/tax.component';
import { RateComponent } from './rate/rate.component';
import { TargetComponent } from './target/target.component';

@NgModule({
  declarations: [
    AppComponent,
    CompoundintComponent,
    WelcomeComponent,
    OptionsComponent,
    TaxComponent,
    RateComponent,
    TargetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
