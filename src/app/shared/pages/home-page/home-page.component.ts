import {Component } from '@angular/core';
import { FooterComponent } from "../../components/footer/footer.component";
import { RouterLink } from "@angular/router";
import { NavBarComponent } from '../../components/navbar/navbar.component';

@Component({
  imports: [FooterComponent, NavBarComponent, RouterLink],
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
