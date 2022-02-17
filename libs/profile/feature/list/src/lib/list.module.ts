import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedUiTableModule } from '@fse/ui/table';
import { ListComponent } from './list.component';

@NgModule({
  imports: [
    CommonModule,
    SharedUiTableModule,
    RouterModule.forChild([
      { path: '', component: ListComponent },
    ]),
  ],
  declarations: [
    ListComponent
  ]
})
export class ListModule {}
