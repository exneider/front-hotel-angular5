import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FilterHotel } from './filterHotel';

@Component({
  selector: 'app-hotelfilter',
  templateUrl: './hotelfilter.component.html',
  styleUrls: ['./hotelfilter.component.css']
})
export class HotelfilterComponent implements OnInit {


  @Output()
  private findByName: EventEmitter<string> = new EventEmitter<string>();

  @Output()
  private filterStars: EventEmitter<any> = new EventEmitter<any>();

  private filterHotel: FilterHotel = new FilterHotel('', []);
  private findSubmit = false;
  private checkAll = false;
  private findNameFilter = true;
  private findStarFilter = true;
  constructor() { }

  ngOnInit() {
    this.getFilterStars();
  }

  private findHotelByName() {
    this.findSubmit = true;
    this.findByName.emit(this.filterHotel.name);
  }

  private selectAll(event) {

    this.filterHotel.stars.forEach(s => s.check = event.target.checked);
    this.getHotelsByStars();
  }

  private selectCheckStar() {
    this.getHotelsByStars();
  }

  private getFilterStars() {
    for (let i = 5; i >= 1; i--) {
      this.filterHotel.stars.push({ check: false, listStars: this.getArrayStars(i) });
    }
  }

  private isAllChecked() {
    return this.filterHotel.stars.every(s => s.check);
  }

  private getArrayStars(stars: number): string[] {
    const listStars = [];
    for (let i = 1; i <= stars; i++) {
      listStars.push('' + i);
    }
    return listStars;
  }

  private getHotelsByStars() {
    this.filterStars.emit(this.filterHotel.stars);
  }
}
