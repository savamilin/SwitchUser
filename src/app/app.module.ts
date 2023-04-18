import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AttiveUserComponent } from './attive/attive-user/attive-user.component';
import { InactiveUserComponent } from './inative/inactive-user/inactive-user.component';

@NgModule({
  declarations: [
    AppComponent,
    AttiveUserComponent,
    InactiveUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
