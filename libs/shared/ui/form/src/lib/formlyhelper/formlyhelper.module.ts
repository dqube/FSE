import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FormlyhelperService } from './formlyhelper.service';

@NgModule({
    declarations: [],
    
    imports: [
      CommonModule,
      ReactiveFormsModule,
 
    ],
    exports: [],
    providers: [
      FormlyhelperService // should add here
    ]
  })
  export class FormlyHelperModule {}
  