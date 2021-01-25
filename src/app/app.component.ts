import { LoginService } from 'src/app/services/login/login.service';
import { Component, ElementRef, ViewChild, OnInit, AfterViewInit, Renderer2, AfterContentInit, AfterViewChecked } from '@angular/core';
import { Location } from '@angular/common';
import { LoadingService } from './shared/services/loading.service';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'ControleEstoque';
  collapsed = false;
  showNavBar = false;
  $isLoading: BehaviorSubject<boolean>;

  constructor(private location: Location, private renderer: Renderer2, private loadingService: LoadingService,
              private loginService: LoginService) {
    location.onUrlChange(() => {
      this.showNavBar = !location.isCurrentPathEqualTo('/login') && location.path().startsWith('/p');
    });

    this.$isLoading = loadingService.$isLoading;
  }

  logout(){
    this.loginService.logout();
  }
}
