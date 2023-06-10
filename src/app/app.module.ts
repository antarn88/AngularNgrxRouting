import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataReducer } from './store/data/data-reducers';
import { DataEffects } from './store/data/data-effects';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent],
  imports: [BrowserModule, AppRoutingModule, StoreModule.forRoot({ data: DataReducer }), EffectsModule.forRoot([DataEffects])],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
