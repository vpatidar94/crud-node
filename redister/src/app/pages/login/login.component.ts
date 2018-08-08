import { RouteLinkVo } from './../../vo/route-link.vo';
import { UserInfoVo } from './../../vo/user-info.vo';
import { ApiResponse } from './../../dto/api-response';
import { UserService } from './../../services/user.service';
import { UserLoginVo } from './../../vo/user-login.vo';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  userLoginVo: UserLoginVo;
  isLogin: boolean = true;
  showMsg: boolean = false;

  /* *******************************Constructors***************************** */
  constructor(private userService: UserService,
    private router: Router) { }


  ngOnInit() {
    this._reset();
  }

  public login() {
    this.userService.loginUser(this.userLoginVo).subscribe((apiResponse: ApiResponse<UserInfoVo>) => {
      if (apiResponse.body) {
        console.log(apiResponse.body);
        localStorage.setItem('current-user', JSON.stringify(apiResponse.body));
        this.router.navigate(['/home']);
      } else {
        this._showMsg();
        console.log(apiResponse.message);
      }
    });
  }

  public register() {
    this.isLogin = false;
  }

  private _reset() {
    this.userLoginVo = <UserLoginVo>{};
  }

  private _showMsg() {
    this.showMsg = true;
    setTimeout (() => {
      this.showMsg = false;
      this._reset();

    }, 3000);

  }


}
