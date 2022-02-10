import { Component, ChangeDetectionStrategy, ViewEncapsulation } from '@angular/core';
import { FieldType, FieldTypeConfig } from '@ngx-formly/core';

@Component({
  selector: 'nu-formly-field-slider',
  preserveWhitespaces: false,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <nz-slider
      [class.ng-dirty]="showError"
      [formControl]="formControl"
      [formlyAttributes]="field"
      [nzDefaultValue]="to['nzDefaultValue']"
      [nzDisabled]="nzDisabled"
      [nzDots]="nzDots"
      [nzIncluded]="nzIncluded"
      [nzMax]="nzMax"
      [nzMin]="nzMin"
      [nzRange]="nzRange"
      [nzStep]="nzStep"
      [nzTipFormatter]="to['nzTipFormatter']"
      [nzVertical]="nzVertical"
      [nzReverse]="nzReverse"
      [nzTooltipVisible]="nzTooltipVisible">
    </nz-slider>
  `,
})
export class FormlyFieldSliderComponent extends FieldType<FieldTypeConfig> {
  get nzDisabled() {
    return this.to!['nzDisabled'] || false;
  }

  get nzDots() {
    return this.to!['nzDots'] || false;
  }

  get nzIncluded() {
    return this.to!['nzIncluded'] || true;
  }

  get nzMax() {
    return this.to!['nzMax'] || 100;
  }

  get nzMin() {
    return this.to!['nzMin'] || 0;
  }

  get nzRange() {
    return this.to!['nzRange'] || false;
  }

  get nzStep() {
    return this.to!['nzStep'] || 1;
  }

  get nzVertical() {
    return this.to!['nzVertical'] || false;
  }

  get nzReverse() {
    return this.to!['nzReverse'] || false;
  }

  get nzTooltipVisible() {
    return this.to!['nzTooltipVisible'] || 'default';
  }
}
