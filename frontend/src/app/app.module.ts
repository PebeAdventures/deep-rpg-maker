import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MiddleComponentComponent } from './middle-component/middle-component.component';
import { LeftComponent1Component } from './left-component1/left-component1.component';
import { LeftComponent2Component } from './left-component2/left-component2.component';
import { RightComponent1Component } from './right-component1/right-component1.component';
import { RightComponent2Component } from './right-component2/right-component2.component';
import { MainPageComponent } from './main-page/main-page.component';
import { RightIconsComponent } from './right-icons/right-icons.component';

@NgModule({
  declarations: [
    AppComponent,
    MiddleComponentComponent,
    LeftComponent1Component,
    LeftComponent2Component,
    RightComponent1Component,
    RightComponent2Component,
    MainPageComponent,
    RightIconsComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
