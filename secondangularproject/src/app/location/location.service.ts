import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class LocationService {

  baseUrl: string = "http://localhost:3000/locations";

  constructor(private httpClient: HttpClient) { }


  getAllLocation(): Observable<any> {

    return this.httpClient.get(this.baseUrl);

  }


  createLocation(location: Location): Observable<any> {

    return this.httpClient.post(this.baseUrl, location);


  }

  deleteLocation(id:string):Observable<any>{
    return this.httpClient.delete(this.baseUrl+"/"+id);
    //  http://localhost:3000/locations/id
  }


}
