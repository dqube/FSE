import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SharedUiTableModule } from '@fse/ui/table';
import { NgZorroModule } from '@fse/ui/zorro';
import { ListComponent } from './list.component';

@NgModule({
  imports: [
    CommonModule,
    SharedUiTableModule,
    FormsModule,
    ReactiveFormsModule,
    NgZorroModule,
    RouterModule.forChild([{ path: '', component: ListComponent }]),
  ],
  declarations: [ListComponent],
})
export class ListModule {}
