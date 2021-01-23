import { Component, ElementRef, ViewChild, OnInit, AfterViewInit, Renderer2, AfterContentInit, AfterViewChecked } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

 

  title = 'ControleEstoque';
  collapsed = false;
  showNavBar = false;

  constructor(private location: Location, private renderer: Renderer2) {
    location.onUrlChange(() => {
      this.showNavBar = !location.isCurrentPathEqualTo('/login');
    });
  }
}
