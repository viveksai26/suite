import { ErrorHandler, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorServiceService } from './error-service/error-service.service';
import { CustomErrorHandler } from './error-handler/error-handler';
import { ErrorComponent } from './error-component/error.component';



@NgModule({
  declarations: [ErrorComponent],
  imports: [
    CommonModule
  ],
  providers: [
    ErrorServiceService,
    {
      provide: ErrorHandler,
      useClass: CustomErrorHandler
    }
  ]
})
export class ErrorModule { }
