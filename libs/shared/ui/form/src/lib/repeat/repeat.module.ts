import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { FormlyRepeatActionComponent } from './repeat-action.component';
import { FormlyRepeatComponent } from './repeat.component';

@NgModule({
  declarations: [
    FormlyRepeatComponent,
    FormlyRepeatActionComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NzButtonModule,
    NzIconModule,
    FormlyModule.forChild({
      types: [
        {
          name: 'repeat',
          component: FormlyRepeatComponent,
          defaultOptions: {
            className: 'ant-col  ant-col-12',
            defaultValue: {}
          }
        },
        {
          name: 'repeat-action',
          component: FormlyRepeatActionComponent,
        },
      ],
    }),
  ],
})
export class FormlyRepeatModule { }
