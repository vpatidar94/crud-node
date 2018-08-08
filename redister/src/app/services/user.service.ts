import { UserLoginVo } from './../vo/user-login.vo';
import { ApiResponse } from './../dto/api-response';
import { UserInfoVo } from './../vo/user-info.vo';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

const BASE_URL = 'http://localhost:3300/details/';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  
  constructor(private http: HttpClient) { }

  public registerUser(userInfoVo: UserInfoVo): Observable<any> {
    return this.http.post<any>(BASE_URL, userInfoVo);
  }

  public loginUser(userLoginVo: UserLoginVo): Observable<ApiResponse<UserInfoVo>> {
    return this.http.post<ApiResponse<UserInfoVo>>(BASE_URL + 'login', userLoginVo);
  }

  public getRegisterUsers(): Observable<ApiResponse<Array<UserInfoVo>>> {
    return this.http.get<ApiResponse<Array<UserInfoVo>>>(BASE_URL);
  }
  public deleteUser(_id: string): Observable<ApiResponse<any>> {
    return this.http.delete<ApiResponse<any>>(BASE_URL + _id );
  }

}
