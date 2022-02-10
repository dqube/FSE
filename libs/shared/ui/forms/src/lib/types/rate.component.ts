import { Component, ChangeDetectionStrategy, ViewEncapsulation, TemplateRef } from '@angular/core';
import { FieldType, FieldTypeConfig } from '@ngx-formly/core';

@Component({
  selector: 'nu-formly-field-rate',
  preserveWhitespaces: false,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <nz-rate
      [formControl]="formControl"
      [formlyAttributes]="field"
      [nzAllowClear]="nzAllowClear"
      [nzAllowHalf]="nzAllowHalf"
      [nzAutoFocus]="nzAutoFocus"
      [nzCharacter]="nzCharacter"
      [nzCount]="nzCount"
      [nzDisabled]="nzDisabled"
      [nzTooltips]="nzTooltips"
      (nzOnBlur)="to['nzOnBlur'] && to['nzOnBlur($event)']"
      (nzOnFocus)="to['nzOnFocus'] && to['nzOnFocus($event)']"
      (nzOnHoverChange)="to['nzOnHoverChange'] && to['nzOnHoverChange($event)']"
      (nzOnKeyDown)="to['nzOnKeyDown'] && to['nzOnKeyDown($event)']">
    </nz-rate>
  `,
})
export class FormlyFieldRateComponent extends FieldType<FieldTypeConfig> {
  get nzAllowClear(): boolean {
    return this.to!['nzAllowClear'] || true;
  }

  get nzAllowHalf(): boolean {
    return this.to!['nzAllowHalf'] || false;
  }

  get nzAutoFocus(): boolean {
    return this.to!['nzAutoFocus'] || false;
  }

  get nzCharacter(): TemplateRef<void> {
    return this.to!['nzCharacter'];
  }

  get nzCount(): number {
    return this.to!['nzCount'] || 5;
  }

  get nzDisabled(): boolean {
    return this.to!['nzDisabled'] || false;
  }

  get nzTooltips(): string[] {
    return this.to!['nzTooltips'] || [];
  }
}
