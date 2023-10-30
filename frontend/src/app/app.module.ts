import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestChatComponentComponent } from './screen-visual-test/test-chat-component/test-chat-component.component';
import { TestNicknameComponent } from './screen-visual-test/test-nickname/test-nickname.component';
import { TestSlideoutMenuComponent } from './screen-visual-test/test-slideout-menu/test-slideout-menu.component';
import { TestButtonsGroupComponent } from './screen-visual-test/test-buttons-group/test-buttons-group.component';
import { MainPageComponent } from './main-page/main-page.component';
import { FrameComponent } from './frame/frame.component';
import { SlideOutMenuComponent } from './slide-out-menu/slide-out-menu.component';
import { LabelComponent } from './label/label.component';
import { PlayerNameIndicatorComponent } from './player-name-indicator/player-name-indicator.component';
import { PlayerMainpageComponent } from './player-mainpage/player-mainpage.component';
import { AdminMainpageComponent } from './admin-mainpage/admin-mainpage.component';
import { ScreenDisplayComponent } from './screen-display/screen-display.component';
import { ButtonComponent } from './button/button.component';

@NgModule({
  declarations: [
    AppComponent,
    TestChatComponentComponent,
    TestNicknameComponent,
    TestSlideoutMenuComponent,
    TestButtonsGroupComponent,
    MainPageComponent,
    FrameComponent,
    SlideOutMenuComponent,
    LabelComponent,
    PlayerNameIndicatorComponent,
    PlayerMainpageComponent,
    AdminMainpageComponent,
    ScreenDisplayComponent,
    ButtonComponent,
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
