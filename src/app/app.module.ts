import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HomeComponent } from './views/home/home.component';
import { ForecastComponent } from './components/forecast/forecast.component';
import { ForecastTableComponent } from './components/forecast-table/forecast-table.component';
import { IconPipe } from './pipe/icon.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ForecastComponent,
    ForecastTableComponent,
    IconPipe
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    MatInputModule,
    MatCardModule,
    MatIconModule,
    MatSlideToggleModule,
    FormsModule,
    MatProgressSpinnerModule,
    ReactiveFormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
