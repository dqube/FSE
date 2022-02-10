import { Component, ChangeDetectionStrategy, ViewEncapsulation } from '@angular/core';
import { FieldType, FieldTypeConfig } from '@ngx-formly/core';

@Component({
  selector: 'nu-formly-field-empty',
  preserveWhitespaces: false,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <nz-empty
      [formlyAttributes]="field"
      [nzNotFoundImage]="to['nzNotFoundImage']"
      [nzNotFoundContent]="to['nzNotFoundContent']"
      [nzNotFoundFooter]="to['nzNotFoundFooter']">
    </nz-empty>
  `,
})
export class FormlyFieldEmptyComponent extends FieldType<FieldTypeConfig> { }
