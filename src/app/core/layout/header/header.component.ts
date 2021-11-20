import { Component, OnInit } from '@angular/core';
import { ToggleService } from '../../services/toggle/toggle.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private toggleService: ToggleService) { }

  ngOnInit(): void {
  }
  toggleMenu() {
    this.toggleService.toggle();
  }

}
