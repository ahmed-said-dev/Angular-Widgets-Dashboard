import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { MainComponent } from './main/main.component';
import { TopWidgetsComponent } from './top-widgets/top-widgets.component';
import { LeftMiddleWidgetComponent } from './left-middle-widget/left-middle-widget.component';
import { RightMiddleWidgetComponent } from './right-middle-widget/right-middle-widget.component';
import { LeftLastWidgetComponent } from './left-last-widget/left-last-widget.component';
import { RightLastWidgetComponent } from './right-last-widget/right-last-widget.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ChartModule } from 'angular-highcharts';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SideNavComponent,
    MainComponent,
    TopWidgetsComponent,
    LeftMiddleWidgetComponent,
    RightMiddleWidgetComponent,
    LeftLastWidgetComponent,
    RightLastWidgetComponent,
    
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    ChartModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
