import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-full',
  template: `
    <p>
      full works!
    </p>
    <router-outlet></router-outlet>
  `,
  styles: [
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FullComponent{

 

}
