import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ToggleService {
  toggleValue = true;
  public toggleState = new BehaviorSubject(this.toggleValue);

  constructor() { }
  toggle() {
    this.toggleValue = !this.toggleValue
    this.toggleState.next(this.toggleValue)
  }
}
