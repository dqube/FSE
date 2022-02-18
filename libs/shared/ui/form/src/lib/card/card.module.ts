import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormlyModule } from '@ngx-formly/core';
import { NzCardModule } from 'ng-zorro-antd/card';
import { FormlyFieldCard } from './card.type';

@NgModule({
  declarations: [FormlyFieldCard],
  imports: [
    CommonModule,
    NzCardModule,
    FormlyModule.forChild({
      wrappers: [{ name: 'card', component: FormlyFieldCard, types: ['card'] }],
    }),
  ],
})
export class FormlyNzCardModule {}
