import { Component, OnInit } from '@angular/core';
import { ToggleService } from '../../services/toggle/toggle.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  isMenuOpen = true;
  constructor(private toggleService: ToggleService) { }

  ngOnInit(): void {
    this.toggleService.toggleState.subscribe(data => {
      this.isMenuOpen = data
    })
  }

}
