import {Component } from '@angular/core';
import { FooterComponent } from "../../components/footer-component/footer.component";
import { RouterLink } from "@angular/router";
import { NavComponent } from '../../components/nav-component/nav.component';

@Component({
  imports: [FooterComponent, NavComponent, RouterLink],
  templateUrl: './home-page.component.html',
})
export default class HomePageComponent { }
