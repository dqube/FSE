import { Component, ChangeDetectionStrategy, ViewEncapsulation, TemplateRef } from '@angular/core';
import { FieldType, FieldTypeConfig } from '@ngx-formly/core';

@Component({
  selector: 'nu-formly-field-alert',
  preserveWhitespaces: false,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <nz-alert
      [nzBanner]="nzBanner"
      [nzCloseable]="nzCloseable"
      [nzCloseText]="nzCloseText"
      [nzDescription]="nzDescription"
      [nzMessage]="nzMessage"
      [nzShowIcon]="nzShowIcon"
      [nzIconType]="nzIconType"
      [nzType]="nzType"
      (nzOnClose)="to['nzOnClose'] && to['nzOnClose()']">
    </nz-alert>
  `,
})
export class FormlyFieldAlertComponent extends FieldType<FieldTypeConfig> {
  get nzBanner(): boolean {
    return this.to?.['nzBanner'] || false;
  }

  get nzCloseable(): boolean {
    return this.to?.['nzCloseable'];
  }

  get nzCloseText(): string | TemplateRef<void> {
    return this.to?.['nzCloseText'];
  }

  get nzDescription(): string | TemplateRef<void> {
    return this.to?.['nzDescription'];
  }

  get nzMessage(): string | TemplateRef<void> {
    return this.to?.['nzMessage'];
  }

  get nzShowIcon(): boolean {
    return this.to?.['nzShowIcon'] || false;
  }

  get nzIconType(): string {
    return this.to?.['nzIconType'];
  }

  get nzType(): 'success' | 'info' | 'warning' | 'error' {
    return this.to?.['nzType'] || 'info';
  }
}
