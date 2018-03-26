import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { environment } from '../../environments/environment';
import { UrlServices } from '../../assets/constants/urlservices.component';

@Injectable()
export class HotelService {

  constructor(private http: HttpClient) { }

  public get(): Observable<any> {

    //return this.http.get(environment.API_ENDPOINT + UrlServices.URL_HOTELS);

    return this.http.get('../../assets/mocks/hotels.json');

  }

  public findHotelByName(name: string): Observable<any> {
    const url = `${environment.API_ENDPOINT + UrlServices.URL_HOTELS}/${name}`;
    return this.http.get(url);
  }

  public findHotelByStars(stars1: number, stars2: number, stars3: number, stars4: number, stars5: number): Observable<any> {
    const url = `${environment.API_ENDPOINT + UrlServices.URL_HOTELS + UrlServices.URL_STARS}/${stars1}/${stars2}/${stars3}/${stars4}/${stars5}`;
    return this.http.get(url);
  }

}
