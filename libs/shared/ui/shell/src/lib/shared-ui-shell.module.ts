import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FooterModule } from './footer/footer.module';
import { HeaderModule } from './header/header.module';
import { CommonComponent } from './layout/common/common.component';
import { FullComponent } from './layout/full/full.component';
import { LayoutModule } from './layout/layout.module';

@NgModule({
  imports: [
    CommonModule,
    HeaderModule,
    FooterModule,
    LayoutModule,
    RouterModule.forRoot([
      {
        path:'',
        pathMatch:'full',
        redirectTo: 'profiles'
    },
      {
        path:'profiles',
        component : CommonComponent,
        loadChildren: () =>
        import('@fse/profile/shell').then(
          (m) => m.ShellModule
        ),
    },
    {
      path:'admin',
      component : FullComponent,
      loadChildren: () =>
      import('@fse/admin/shell').then(
        (m) => m.AdminFeatureShellModule
      ),
  }
      /* {path: '', pathMatch: 'full', component: InsertYourComponentHere} */
    ]),
  ],
})
export class SharedUiShellModule {}
