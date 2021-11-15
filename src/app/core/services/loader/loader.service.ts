import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {

  constructor() { }

  private isLoading = new BehaviorSubject(false);
  
  show(value: boolean) {
    this.isLoading.next(value);
  }
}
