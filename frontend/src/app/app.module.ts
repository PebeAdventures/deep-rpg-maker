import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MiddleComponentComponent } from './Screen-visual-test/test-middle-component/middle-component.component';
import { LeftComponent1Component } from './Screen-visual-test/test-left-component1/left-component1.component';
import { LeftComponent2Component } from './Screen-visual-test/test-left-component2/left-component2.component';
import { RightComponent1Component } from './Screen-visual-test/test-right-component1/right-component1.component';
import { RightComponent2Component } from './Screen-visual-test/test-right-component2/right-component2.component';
import { MainPageComponent } from './main-page/main-page.component';
import { RightIconsComponent } from './right-icons/right-icons.component';
import { FrameComponent } from './frame/frame.component';
import { SlideOutMenuComponent } from './slide-out-menu/slide-out-menu.component';
import { LabelComponent } from './label/label.component';
import { PlayerNameIndicatorComponent } from './player-name-indicator/player-name-indicator.component';

@NgModule({
  declarations: [
    AppComponent,
    MiddleComponentComponent,
    LeftComponent1Component,
    LeftComponent2Component,
    RightComponent1Component,
    RightComponent2Component,
    MainPageComponent,
    RightIconsComponent,
    FrameComponent,
    SlideOutMenuComponent,
    LabelComponent,
    PlayerNameIndicatorComponent,
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
