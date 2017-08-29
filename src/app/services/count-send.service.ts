import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class CountSendService {
  private resourceUrl = 'https://email-counter-backend.herokuapp.com/api/user-counts';

  constructor(private http: Http) {
  }

  sendCount(arg: any): Observable<Response> {
    const art = {id: null, name: navigator.userAgent.toLowerCase()};
    return this.http.post(this.resourceUrl, art);
  }
}
