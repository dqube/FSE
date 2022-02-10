import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormlyModule } from '@ngx-formly/core';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { FormlyFieldInputGroup } from './input-group.type';

@NgModule({
  declarations: [FormlyFieldInputGroup],
  imports: [
    CommonModule,
    NzInputModule,
    NzFormModule,
    FormlyModule.forRoot({
      // types: [
      //   {
      //     name: 'input-group',
      //     component: FormlyFieldInputGroup,
      //     defaultOptions: {
      //       templateOptions: {},
      //     },
      //     wrappers: ['form-field'],
      //   },
      // ],
      wrappers: [
        {
          name: 'input-group',
          component: FormlyFieldInputGroup,
        },
      ],
    }),
  ],
})
export class FormlyNzInputGroupModule {}
