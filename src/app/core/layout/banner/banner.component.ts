import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {
  bannerMessage: any;
  isBannerOpen = false;

  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.getBannerContent();
  }
  getBannerContent() {
    // this.bannerService.fetchData().subscribe(data => {
    //   this.bannerMessage = this.sanitizer.bypassSecurityTrustHtml(
    //     data['Message'];
    //   )
    // });
  }

}
