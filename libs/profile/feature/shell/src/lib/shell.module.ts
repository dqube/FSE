import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
const routes: Routes = [
  
  {
    path: '',
    loadChildren: async () =>
    (await import('@fse/profile/list').then(
        m => m.ListModule
      ))
  },
  {
    path: 'create',
    pathMatch:'full',
    loadChildren: async () =>
    (await import('@fse/profile/create').then(
        m => m.ProfileFeatureCreateModule
      ))
  },
  {
    path: 'edit',
    pathMatch:'full',
    loadChildren: async () =>
    (await import('@fse/profile/edit').then(
        m => m.ProfileFeatureEditModule
      ))
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
