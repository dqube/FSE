import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
const routes: Routes = [
 
  {
    path: '',
    loadChildren: () =>
      import('@fse/profile/list').then(
        m => m.ListModule
      )
  },
  {
    path: 'create',
    pathMatch:'full',
    loadChildren: () =>
      import('@fse/profile/detail').then(
        m => m.DetailModule
      )
  }
  // { path: '', redirectTo: 'profiles', pathMatch: 'full' },
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  declarations: [
  ],
})
export class ShellModule {}
