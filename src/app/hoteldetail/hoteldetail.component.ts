import { Component, OnInit, Input } from '@angular/core';
import { Hotel } from '../model/hotel';

@Component({
  selector: 'app-hoteldetail',
  templateUrl: './hoteldetail.component.html',
  styleUrls: ['./hoteldetail.component.css']
})
export class HoteldetailComponent implements OnInit {


  @Input()
  private hotel: Hotel;
  private listStars: string[];
  constructor() { }

  ngOnInit() {
    this.getStars(this.hotel.stars);
  }


  getStars(stars: number) {
    this.listStars = [];
    for (let i = 0; i < stars; i++) {
      this.listStars.push('' + i);
    }

  }

}
