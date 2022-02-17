import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';
import { FormlySelectModule } from '@ngx-formly/core/select';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { FormlyNzFormFieldModule } from '../form-field/form-field.module';
import { FormlyFieldCheckbox } from './checkbox.type';


@NgModule({
  declarations: [FormlyFieldCheckbox],
  imports: [
    CommonModule,
    NzCheckboxModule,
    ReactiveFormsModule,
    FormlySelectModule,
    FormlyNzFormFieldModule,

    FormlyModule.forChild({
      types: [
        {
          name: 'checkbox',
          component: FormlyFieldCheckbox,
          wrappers: ['form-field'],
          defaultOptions: {
            className: 'ant-col  ant-col-12',
            templateOptions: {},
          },
        },
        {
          name: 'boolean',
          extends: 'checkbox',
        },
      ],
    }),
  ],
})
export class FormlyNzCheckboxModule {}
