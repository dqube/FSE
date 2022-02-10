import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormlyModule } from '@ngx-formly/core';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { FormlyGridComponent } from './grid.component';


@NgModule({
  declarations: [
    FormlyGridComponent,
  ],
  imports: [
    CommonModule,
    NzGridModule,
    FormlyModule.forChild({
      types: [
        {
          name: 'grid',
          component: FormlyGridComponent,
          defaultOptions: {
            templateOptions: {
              justify: 'start',
              align: 'top',
              gutter: [16, 16],
            },
          },
        },
      ],
    }),
  ],
})
export class FormlyNzGridModule { }
