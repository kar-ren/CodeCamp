import { NgModule } from '@angular/core';
import { AdduserComponent } from './adduser.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@NgModule({
    declarations: [AdduserComponent],
    imports: [
      CommonModule,
      FormsModule
    ]
  })
  export class AdduserModule { }
  