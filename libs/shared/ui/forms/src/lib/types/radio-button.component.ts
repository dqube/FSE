import { Component, ChangeDetectionStrategy, ViewEncapsulation } from '@angular/core';
import { FieldType, FieldTypeConfig } from '@ngx-formly/core';

@Component({
  selector: 'nu-formly-field-radio-button',
  preserveWhitespaces: false,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <nz-radio-group
      [formControl]="formControl"
      [nzName]="nzName"
      [nzDisabled]="nzDisabled"
      (nzSize)="nzSize"
      (nzButtonStyle)="nzButtonStyle">
        <label
          nz-radio-button
          [nzAutoFocus]="nzAutoFocus"
          *ngFor="let option of to.options | formlySelectOptions: field | async"
          [nzDisabled]="option.disabled"
          [nzValue]="option.value">
            {{ option.label }}
        </label>
    </nz-radio-group>
  `,
})
export class FormlyFieldRadioButtonComponent extends FieldType<FieldTypeConfig> {
  override defaultOptions = {
    templateOptions: { options: [] },
  };

  get nzName(): string {
    return this.to!['nzName'];
  }

  get nzDisabled(): boolean {
    return this.to!['nzDisabled'] || false;
  }

  get nzSize(): string {
    return this.to!['nzSize'] || 'default';
  }

  get nzButtonStyle(): string {
    return this.to!['nzButtonStyle'] || 'solid';
  }

  get nzAutoFocus(): boolean {
    return this.to!['nzAutoFocus'] || false;
  }
}
