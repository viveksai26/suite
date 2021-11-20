import { Component, OnInit } from '@angular/core';
import { ToggleService } from '../../services/toggle/toggle.service';

@Component({
  selector: 'app-layout-component',
  templateUrl: './layout-component.component.html',
  styleUrls: ['./layout-component.component.scss']
})
export class LayoutComponent implements OnInit {
  subscriptions = [];
  isMenuOpen = true;
  constructor(private toggleService: ToggleService) { }

  ngOnInit(): void {
      this.toggleService.toggleState.subscribe(data => {
        this.isMenuOpen = data
      })
  }
}
