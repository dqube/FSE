import { Component, ChangeDetectionStrategy, ViewEncapsulation } from '@angular/core';
import { FieldType, FieldTypeConfig } from '@ngx-formly/core';

@Component({
  selector: 'nu-formly-field-switch',
  preserveWhitespaces: false,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <nz-switch
      [class.ng-dirty]="showError"
      [formControl]="formControl"
      [formlyAttributes]="field"
      [nzCheckedChildren]="to['nzCheckedChildren']"
      [nzUnCheckedChildren]="to['nzUnCheckedChildren']"
      [nzDisabled]="nzDisabled"
      [nzSize]="nzSize"
      [nzLoading]="nzLoading"
      [nzControl]="nzControl">
    </nz-switch>
  `,
})
export class FormlyFieldSwitchComponent extends FieldType<FieldTypeConfig> {
  get nzDisabled() {
    return this.to!['nzDisabled'] || false;
  }

  get nzSize() {
    return this.to!['nzSize'] || 'default';
  }

  get nzLoading() {
    return this.to!['nzLoading'] || false;
  }

  get nzControl() {
    return this.to!['nzControl'] || false;
  }
}
