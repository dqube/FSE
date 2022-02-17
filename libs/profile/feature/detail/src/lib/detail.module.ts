import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { FormlyNgZorroModule } from '@fse/ui/form';
import { NgZorroModule } from '@fse/ui/zorro';
import { DetailComponent } from './detail.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    FormlyNgZorroModule,
    NgZorroModule,
    RouterModule.forChild(
      [
        { path: '',  component: DetailComponent },
      ]
    )
  ],
  declarations: [
    DetailComponent
  ]
})
export class DetailModule {}
