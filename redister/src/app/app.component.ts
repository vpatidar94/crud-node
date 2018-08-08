import { Component, OnInit } from '@angular/core';
import { RouteLinkVo } from './vo/route-link.vo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'redister';
  /* routeLinkVo: RouteLinkVo;
  links: Array<RouteLinkVo> = <Array<RouteLinkVo>>[];

  ngOnInit() {
    this._init();
  }

  private _init() {
   this.routeLinkVo = <RouteLinkVo> {};
   this.routeLinkVo.name = 'Login';
   this.routeLinkVo.route = '/';
   this.links.push(this.routeLinkVo);

   this.routeLinkVo = <RouteLinkVo> {};
   this.routeLinkVo.name = 'Register';
   this.routeLinkVo.route = '/register';
   this.links.push(this.routeLinkVo);

   this.routeLinkVo = <RouteLinkVo> {};
   this.routeLinkVo.name = 'All Users';
   this.routeLinkVo.route = '/all';
   this.links.push(this.routeLinkVo);
  } */
}
