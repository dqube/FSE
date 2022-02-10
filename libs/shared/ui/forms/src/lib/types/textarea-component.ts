import { Component, ChangeDetectionStrategy, ViewEncapsulation } from '@angular/core';
import { FieldType, FieldTypeConfig } from '@ngx-formly/core';

@Component({
  selector: 'nu-formly-field-texarea',
  preserveWhitespaces: false,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <textarea
      nz-input
      [class.ng-dirty]="showError"
      [formControl]="formControl"
      [formlyAttributes]="field"
      [rows]="to.rows"
      [cols]="to.cols"
      [nzAutosize]="nzAutosize"
      [nzSize]="nzSize">
    </textarea>
  `,
})
export class FormlyFieldTextareaComponent extends FieldType<FieldTypeConfig> {
  get nzAutosize() {
    return this.to!['nzAutosize'] || false;
  }

  get nzSize() {
    return this.to!['nzSize'] || 'default';
  }
}
