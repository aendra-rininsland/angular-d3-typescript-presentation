import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable }     from 'rxjs/Observable';

@Injectable()
export class PanamaPapersDataService {
  constructor(private http: Http) {}

  getData(): Observable<any> {
    return this.http.get('aliyeva-network.json')
      .map(res => res.json());
  }
}
