import { Router } from '@angular/router';
import { UserService } from './../../../services/user.service';
import { UserInfoVo } from './../../../vo/user-info.vo';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  /* *******************************Instance Field***************************** */
  userInfoVo: UserInfoVo;

  /* *******************************Constructors***************************** */
  constructor(private userService: UserService,
  private router: Router) { }
  /* *******************************Public Methods***************************** */
  ngOnInit() {
    console.log('xxxxxxxxxxx', this.userInfoVo);
    this.userInfoVo = this._getDataFromLocalStorage();
    if(!this.userInfoVo) {
      this.router.navigate(['/login']);
    }
  }

  public logout() {
    localStorage.clear();
    this.userInfoVo = <UserInfoVo> {};
    this.router.navigate(['/login']);

  }

  /* *******************************Private Methods***************************** */
  private _getDataFromLocalStorage(): UserInfoVo {
    let user = JSON.parse(localStorage.getItem('current-user'));
    console.log('xxxxxxx xxxxxxxxxxxxx xxxxxxxxx logged user is ', user);
    return user;
  }

}
