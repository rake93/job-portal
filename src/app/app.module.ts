import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { HttpModule, Http } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { ChartModule } from 'angular2-highcharts';
import { AppComponent } from './app.component';
import { MapsContainerComponent } from './maps/maps-container/maps-container.component';
import { MapsComponent } from './maps/maps/maps.component';
import { SearchCriteriaComponent } from './form/search-criteria/search-criteria.component';
import { LoadingIndicatorComponent } from './common/loading-indicator/loading-indicator.component';
import { DetailGridComponent } from './form/detail-grid/detail-grid.component';

@NgModule({
  declarations: [
    AppComponent,
    MapsContainerComponent,
    MapsComponent,
    SearchCriteriaComponent,
    LoadingIndicatorComponent,
    DetailGridComponent
  ],
  imports: [
    NgbModule.forRoot(),
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    MaterialModule,
    ChartModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
