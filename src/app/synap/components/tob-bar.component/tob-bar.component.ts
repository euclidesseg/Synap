import {Component, output } from '@angular/core';

@Component({
  selector: 'app-tob-bar',
  imports: [],
  templateUrl: './tob-bar.component.html',
})
export class TobBarComponent {

  toogleSidebarEmit = output();

  toggleSidebar(){
    this.toogleSidebarEmit.emit();
  }

 }
