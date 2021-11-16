import { Injectable, Injector } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Event, NavigationError, Router } from '@angular/router';
import { of, Subscription } from 'rxjs';
import { ErrorComponent } from '../error-component/error.component';

@Injectable()
export class ErrorServiceService {
  matDialogRef: any;
  subscriptions: Subscription[] = [];
  constructor(private router: Router, private dialog: MatDialog) {
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationError) {
          this.matDialogRef = this.dialog.open(ErrorComponent, {
            width: '650px',
            data: {
              event
            }
          })
      }
    });
  }
  ngOnDestroy() {
    this.subscriptions.forEach(subscription => subscription.unsubscribe());
  }
}
