import { Component, ChangeDetectionStrategy, ViewEncapsulation, TemplateRef } from '@angular/core';
import { FieldType, FieldTypeConfig } from '@ngx-formly/core';

@Component({
  selector: 'nu-formly-field-divider',
  preserveWhitespaces: false,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <nz-divider
      [nzDashed]="nzDashed"
      [nzType]="nzType"
      [nzText]="nzText"
      [nzOrientation]="nzOrientation">
    </nz-divider>
  `,
})
export class FormlyFieldDividerComponent extends FieldType<FieldTypeConfig> {
  get nzDashed(): boolean {
    return this.to!['nzDashed'] || false;
  }

  get nzType(): 'horizontal' | 'vertical' {
    return this.to!['nzType'] || 'horizontal';
  }

  get nzText(): string | TemplateRef<void> {
    return this.to!['nzText'];
  }

  get nzOrientation(): 'center' | 'left' | 'right' {
    return this.to!['nzOrientation'] || 'center';
  }
}
