import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FieldType, FieldTypeConfig } from '@ngx-formly/core';

@Component({
  selector: 'formly-field-switch',
  template: `
    <nz-switch
      [formControl]="formControl"
      [formlyAttributes]="field"
      [nzCheckedChildren]="to['switch']?.checkedChildren"
      [nzUnCheckedChildren]="to['switch']?.unCheckedChildren"
      [nzLoading]="to['switch']?.loading"
      [nzControl]="to['switch']?.control"
     
    ></nz-switch>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormlyFieldSwitch  extends FieldType<FieldTypeConfig> {}
