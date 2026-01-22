import {Component } from '@angular/core';
import { FooterComponent } from "../../components/footer-component/footer.component";
import { RouterLink } from "@angular/router";
import { NavComponent } from '../../components/nav-component/nav.component';

@Component({
  imports: [FooterComponent, NavComponent, RouterLink],
  templateUrl: './home-page.component.html',
  styles:`
    .floating {
      animation: floating 3s ease-in-out infinite;
    }

    @keyframes floating {
        0% {
            transform: translateY(0px);
        }

        50% {
            transform: translateY(-10px);
        }

        100% {
            transform: translateY(0px);
        }
    }
  `
})
export default class HomePageComponent { }
