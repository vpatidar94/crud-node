import { Router } from '@angular/router';
import { UserInfoVo } from './../../../../vo/user-info.vo';
import { Component, OnInit } from '@angular/core';
import { RouteLinkVo } from '../../../../vo/route-link.vo';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {
  userInfoVo: UserInfoVo;
  routeLinkVo: RouteLinkVo;
  links: Array<RouteLinkVo> = <Array<RouteLinkVo>>[];

  constructor(private router: Router) { }

  ngOnInit() {
    this._init();
  }

  private _init() {
    this.userInfoVo = this._getDataFromLocalStorage();

    this.routeLinkVo = <RouteLinkVo>{};
    this.routeLinkVo.name = 'Home';
    this.routeLinkVo.route = '/';
    this.links.push(this.routeLinkVo);

   /*  if (!this.userInfoVo) {
      this.routeLinkVo = <RouteLinkVo>{};
      this.routeLinkVo.name = 'Register';
      this.routeLinkVo.route = '/register';
      this.links.push(this.routeLinkVo);
    } */

    this.routeLinkVo = <RouteLinkVo>{};
    this.routeLinkVo.name = 'All Users';
    this.routeLinkVo.route = '/all';
    this.links.push(this.routeLinkVo);
  }



  private _getDataFromLocalStorage(): UserInfoVo {
    let user = JSON.parse(localStorage.getItem('current-user'));
    console.log('xxxxxxx xxxxxxxxxxxxx xxxxxxxxx logged user is ', user);
    return user;
  }

}
