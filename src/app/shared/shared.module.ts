import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConnectionService } from './service/connection.service';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    PageNotFoundComponent
  ],
  exports: [
    PageNotFoundComponent
  ],
  providers: [ConnectionService]
})
export class SharedModule { }
