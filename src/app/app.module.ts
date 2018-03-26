import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './hotel/app.component';
import { HotelfilterComponent } from './hotelfilter/hotelfilter.component';
import { HoteldetailComponent } from './hoteldetail/hoteldetail.component';
import { HotelService } from './hotel/hotel.service';
import { NgHttpLoaderModule } from 'ng-http-loader/ng-http-loader.module';
import { HttpModule } from '@angular/http';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    HotelfilterComponent,
    HoteldetailComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AngularFontAwesomeModule,
    HttpClientModule,
    HttpModule,
    NgHttpLoaderModule
  ],
  providers: [HotelService],
  bootstrap: [AppComponent]
})
export class AppModule { }
