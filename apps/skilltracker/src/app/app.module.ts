import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { SharedUiShellModule } from '@fse/web/shell';
import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';

const routes: Routes = [
 
    {
      path: '',
      loadChildren:async () =>
        (await import('@fse/profile/shell').then(
          m => m.ShellModule
        ))
    }
   
];
@NgModule({
  declarations: [AppComponent, NxWelcomeComponent],
  imports: [
    BrowserModule,
   SharedUiShellModule,
    RouterModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
