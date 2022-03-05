import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { DataAccessModule } from '@fse/profile/data';
import { FormlyNgZorroModule } from '@fse/ui/form';
import { NgZorroModule } from '@fse/ui/zorro';
import { EditComponent } from './edit.component';
import { EditResolver } from './edit.resolver';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    FormlyNgZorroModule,
    DataAccessModule,
    NgZorroModule,
    RouterModule.forChild(
      [
        { path: '',  component: EditComponent , resolve: {
          fieldData: EditResolver
        }},
      ]
    )
  ],
  declarations: [
    EditComponent
  ]
})
export class ProfileFeatureEditModule {}
