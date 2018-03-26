import { Component, OnInit } from '@angular/core';
import { HotelService } from './hotel.service';
import { Hotel } from '../model/hotel';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {

  private hotels: Hotel[];
  constructor(private hotelService: HotelService) {

  }

  ngOnInit() {
    this.getHotels();
  }

  private getHotels() {
    this.hotelService.get().subscribe(
      resp => {
        this.hotels = resp;
      },
      error => {
        console.log('Error getHotels');
      });
  }

  private findHotelByName(hotelName) {
    this.hotelService.findHotelByName(hotelName).subscribe(
      resp => {
        this.hotels = [];
        this.hotels = resp;
      }, error => {

      }
    );
  }

  private findHotelByStars(starsFilter) {
      const isCheck =  starsFilter.filter(_ => _.check);
    if (isCheck.length > 0) {
      const parameters = this.getParametersFilterStars(starsFilter);
      console.log(parameters);
      this.hotelService.findHotelByStars(
        parameters[0].stars,
        parameters[1].stars,
        parameters[2].stars,
        parameters[3].stars,
        parameters[4].stars).subscribe(
        resp => {
          this.hotels = [];
          this.hotels = resp;
        }, error => {

        }
        );
    } else {
      this.getHotels();
    }
  }

  private getParametersFilterStars(starsFilter) {
    const parameters = [];
    starsFilter.forEach(element => {
      if (element.check) {
        parameters.push({ stars: element.listStars.length });
      } else {
        parameters.push({ stars: 0 });
      }
    });
    return parameters;
  }
}
