import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { DataAccessModule } from '@fse/profile/data';
import { FormlyNgZorroModule } from '@fse/ui/form';
import { NgZorroModule } from '@fse/ui/zorro';
import { DetailComponent } from './detail.component';
import { DetailResolver } from './detail.resolver';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    FormlyNgZorroModule,
    DataAccessModule,
    NgZorroModule,
    RouterModule.forChild(
      [
        { path: '',  component: DetailComponent , resolve: {
          fieldData: DetailResolver
        }},
      ]
    )
  ],
  declarations: [
    DetailComponent
  ]
})
export class DetailModule {}
