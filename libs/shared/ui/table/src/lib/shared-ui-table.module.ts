import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NzTableModule } from 'ng-zorro-antd/table';

import { NuTableComponent } from './table.component';

@NgModule({
  declarations: [
    NuTableComponent,
  ],
  imports: [
    CommonModule,
    NzTableModule,
  ],
  exports: [NuTableComponent],
})
export class SharedUiTableModule {}
