import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { NgZorroModule } from '@fse/ui/zorro';
import { CommonComponent } from './common/common.component';
import { FullComponent } from './full/full.component';



@NgModule({
  declarations: [
    FullComponent,
    CommonComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
 NgZorroModule,
    RouterModule,
    BrowserAnimationsModule,

  ]
})
export class LayoutModule { }
