import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable }     from 'rxjs/Observable';

@Injectable()
export class PanamaPapersDataService {
  data: any;

  constructor(private http: Http) {}

  getData(): any {
    return this.http.get('aliyeva-network.json')
      .map(res => res.json());
  }
}
