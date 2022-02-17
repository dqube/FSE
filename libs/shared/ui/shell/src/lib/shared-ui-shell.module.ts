import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IconDefinition } from '@ant-design/icons-angular';
import * as AllIcons from '@ant-design/icons-angular/icons';
import { en_US, NZ_I18N } from 'ng-zorro-antd/i18n';
import { NZ_ICONS } from 'ng-zorro-antd/icon';
import { FooterModule } from './footer/footer.module';
import { HeaderModule } from './header/header.module';
import { CommonComponent } from './layout/common/common.component';
import { FullComponent } from './layout/full/full.component';
import { LayoutModule } from './layout/layout.module';

const antDesignIcons = AllIcons as {
  [key: string]: IconDefinition;
};
const icons: IconDefinition[] = Object.keys(antDesignIcons).map(key => antDesignIcons[key])
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
  providers: [ { provide: NZ_I18N, useValue: en_US }, { provide: NZ_ICONS, useValue: icons } ]
})
export class SharedUiShellModule {}
