import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { UserService } from './../../services/user.service';
import { UserInfoVo } from './../../vo/user-info.vo';



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  /* *******************************Instance Field***************************** */
  @Input() userInfoVo: UserInfoVo;
  caseEdit: boolean = false;
  showMsg: boolean = false;



  /* *******************************Constructors***************************** */
  constructor(private userService: UserService,
    private router: Router) { }
  /* *******************************Public Methods***************************** */
  ngOnInit() {
    this._reset();
  }

  public addUser() {
    this.userService.registerUser(this.userInfoVo).subscribe((apiResponse: any) => {
      this._showMsg();
      console.log('xxxxxxxx xxxxxxxxxxxxx xxxxxxxxx added user is ', apiResponse);
      if (this.caseEdit == true) {
        console.log('check', this.caseEdit);
        localStorage.setItem('current-user', JSON.stringify(this.userInfoVo));
      }


    });
  }

  /* *******************************Private Methods***************************** */
  private _reset() {
    if (null == this.userInfoVo) {
      this.userInfoVo = <UserInfoVo>{};
      this.caseEdit = false;
      console.log('if');
    } else {
      this.caseEdit = true;
      console.log('else');
    }
  }
  private _showMsg() {
    this.showMsg = true;
    setTimeout(() => {
      this.showMsg = false;
      this.router.navigate(['/home']);


    }, 5000);

  }
}
