import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class CountSendService {
  private resourceUrl = 'http://localhost:8080/api/user-counts';

  constructor(private http: Http) {
  }

  sendCount(arg: any): Observable<Response> {
    const art = {id: null, name: 'test2'};
    return this.http.post(this.resourceUrl, art);
  }
}
