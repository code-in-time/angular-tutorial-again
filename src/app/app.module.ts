import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppServerComponent } from './app-server/app-server.component';
import { ListViewComponent } from './list-view/list-view.component';
import { SmallFormComponent } from './small-form/small-form.component';

@NgModule({
  declarations: [
    AppComponent,
    AppServerComponent,
    ListViewComponent,
    SmallFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
