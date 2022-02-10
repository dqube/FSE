import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
const routes: Routes = [
 
  {
    path: '',
    loadChildren: () =>
    import('@fse/admin/login').then(
      m => m.LoginModule
    )
  }
  // { path: '', redirectTo: 'profiles', pathMatch: 'full' },
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
})
export class AdminFeatureShellModule {}
