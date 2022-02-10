import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailComponent } from './detail.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
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
