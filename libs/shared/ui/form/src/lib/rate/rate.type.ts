import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FieldType, FieldTypeConfig } from '@ngx-formly/core';

@Component({
  selector: 'formly-field-rate',
  template: `
    <nz-rate
      [formControl]="formControl"
      [formlyAttributes]="field"
      [nzAllowClear]="to['rate']?.allowClear"
      [nzAllowHalf]="to['rate']?.allowHalf"
      [nzCharacter]="to['rate']?.character"
      [nzCount]="to['rate']?.count"
      [nzTooltips]="to['rate']?.tooltips"
      (nzOnBlur)="to['rate']?.onBlur && to['rate']?.onBlur($event)"
      (nzOnFocus)="to['rate']?.onFocus && to['rate']?.onFocus($event)"
      (nzOnHoverChange)="
        to['rate']?.onHoverChange && to['rate']?.onHoverChange($event)
      "
      (nzOnKeyDown)="to['rate']?.onKyeDown && to['rate']?.onKyeDown($event)"
    ></nz-rate>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormlyFieldRate extends FieldType<FieldTypeConfig> {}
