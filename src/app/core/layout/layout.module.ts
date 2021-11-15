import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout-component/layout-component.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { NavigationComponent } from './navigation/navigation.component';
import { HeaderComponent } from './header/header.component';
import { BannerComponent } from './banner/banner.component';
import { UnauthorizedComponent } from './unauthorized/unauthorized.component';



@NgModule({
  declarations: [
    LayoutComponent,
    PageNotFoundComponent,
    NavigationComponent,
    HeaderComponent,
    BannerComponent,
    UnauthorizedComponent
  ],
  imports: [
    CommonModule
  ]
})
export class LayoutModule { }
