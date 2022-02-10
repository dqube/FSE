import { Component, ChangeDetectionStrategy, ViewEncapsulation, TemplateRef } from '@angular/core';
import { FieldType, FieldTypeConfig } from '@ngx-formly/core';

@Component({
  selector: 'nu-formly-field-input',
  preserveWhitespaces: false,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <nz-input-group
      [nzAddOnAfter]="nzAddOnAfter"
      [nzAddOnBefore]="nzAddOnBefore"
      [nzSuffix]="nzSuffix"
      [nzPrefix]="nzPrefix"
      [nzCompact]="nzCompact"
      [nzSearch]="nzSearch"
      [nzSize]="nzSize">
        <input
          *ngIf="to.type !== 'number'; else numberTmp"
          nz-input
          [formControl]="formControl"
          [type]="type"
          [formlyAttributes]="field"
          [class.ng-dirty]="showError"
          [nzSize]="nzSize"
        />
        <ng-template #numberTmp>
          <nz-input-number
            [class.ng-dirty]="showError"
            [nzSize]="nzSize"
            [formControl]="formControl"
            [formlyAttributes]="field">
          </nz-input-number>
        </ng-template>
    <nz-input-group>
  `,
})
export class FormlyFieldInputComponent extends FieldType<FieldTypeConfig> {
  get nzAddOnAfter(): string | TemplateRef<void> {
    return this.to!['nzAddOnAfter'];
  }

  get nzAddOnBefore(): string | TemplateRef<void> {
    return this.to!['nzAddOnBefore'];
  }

  get nzPrefix(): string | TemplateRef<void> {
    return this.to!['nzPrefix'];
  }

  get nzSuffix(): string | TemplateRef<void> {
    return this.to!['nzSuffix'];
  }

  get nzCompact(): boolean {
    return this.to!['nzCompact'];
  }

  get nzSearch(): boolean {
    return this.to!['nzSearch'];
  }

  get type() {
    return this.to.type || 'text';
  }

  get nzSize() {
    return this.to!['nzSize'] || 'default';
  }
}
