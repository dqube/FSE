import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';
import {ShellFeatureWebShellModule} from '@fse/web/shell'
// const routes: Routes = [
 
//     {
//       path: 'profiles',
//       loadChildren:async () =>
//         (await import('@fse/profile/shell').then(
//           m => m.ShellModule
//         ))
//     }
   
// ];
@NgModule({
  declarations: [AppComponent, NxWelcomeComponent],
  imports: [
    BrowserModule,
    ShellFeatureWebShellModule,
    RouterModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
