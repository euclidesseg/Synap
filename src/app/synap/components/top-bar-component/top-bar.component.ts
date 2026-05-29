import {Component, output } from '@angular/core';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-tob-bar',
  imports: [RouterLink],
  templateUrl: './top-bar.component.html',
})
export class TopBarComponent {

  toogleSidebarEmit = output();

  toggleSidebar(){
    this.toogleSidebarEmit.emit();
  }

 }
