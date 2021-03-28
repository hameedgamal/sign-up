import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { UserInfo } from '../shared';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  private readonly serviceURl = 'https://demo-api.now.sh/users';

  constructor(private http: HttpClient) { }

  signUp(userInfo: UserInfo): Observable<object> {
    const { firstName, lastName, email } = userInfo;
    return this.http.post(this.serviceURl, { firstName, lastName, email });
  }
}
