import { Component, ChangeDetectionStrategy, ViewEncapsulation } from '@angular/core';
import { FieldType, FieldTypeConfig } from '@ngx-formly/core';

@Component({
  selector: 'nu-formly-field-checkbox',
  preserveWhitespaces: false,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <nz-form-control>
      <label
        nz-checkbox
        [formlyAttributes]="field"
        [formControl]="formControl"
        [nzAutoFocus]="nzAutoFocus"
        *ngFor="let option of to.options | formlySelectOptions: field | async"
        [nzDisabled]="option.disabled"
        [nzValue]="option.value">
          {{ option.label }}
      </label>
    </nz-form-control>
  `,
})
export class FormlyFieldCheckboxComponent extends FieldType<FieldTypeConfig> {
  get nzAutoFocus(): boolean {
    return this.to!['nzAutoFocus'] || false;
  }
}
