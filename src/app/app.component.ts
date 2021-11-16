import { Component, OnInit } from '@angular/core';
import { NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router } from '@angular/router';
import { LoaderService } from './core/services/loader/loader.service';
import { UpdateService } from './core/services/update-service/update-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'suite';
  isLoading = false;
  isRouting = false;
  constructor(private loaderService: LoaderService, private router: Router, private sw: UpdateService) {}
  ngOnInit() {
    this.httpSpinner();
    this.routingSpinner();
    this.checkForSWUpdates();
  }
  httpSpinner() {
    this.loaderService.isLoading.subscribe(value => {
      this.isLoading = value;
    });
  }
  routingSpinner() {
    this.router.events.subscribe((event) => {
      switch(true) {
        case event instanceof NavigationStart: {
          this.isRouting = true;
          break;
        }
        case event instanceof NavigationEnd: {
          this.isRouting = false;
          break;
        }
        case event instanceof NavigationCancel:
          case event instanceof NavigationError: {
          this.isRouting = false;
          break;
        }
        default: {
          break;
        }
      }
    })
  }
  checkForSWUpdates() {
    this.sw.checkForUpdates();
  }

}
