import { DatePipe } from '@angular/common';
import { Component, ChangeDetectionStrategy, ViewEncapsulation, TemplateRef } from '@angular/core';
import { FieldType, FieldTypeConfig } from '@ngx-formly/core';
import { NzOptionComponent } from 'ng-zorro-antd/select';

@Component({
  selector: 'nu-formly-field-time-picker',
  preserveWhitespaces: false,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <nz-time-picker
      [class.ng-dirty]="showError"
      [formControl]="formControl"
      [formlyAttributes]="field"
      [nzAllowEmpty]="nzAllowEmpty"
      [nzAutoFocus]="nzAutoFocus"
      [nzClearText]="nzClearText"
      [nzDefaultOpenValue]="nzDefaultOpenValue"
      [nzDisabled]="nzDisabled"
      [nzDisabledHours]="nzDisabledHours"
      [nzDisabledMinutes]="nzDisabledMinutes"
      [nzDisabledSeconds]="nzDisabledSeconds"
      (nzFormat)="nzFormat"
      [nzHideDisabledOptions]="nzHideDisabledOptions"
      [nzHourStep]="nzHourStep"
      [nzMinuteStep]="nzMinuteStep"
      [nzSecondStep]="nzSecondStep"
      [nzOpen]="nzOpen"
      [nzPlaceHolder]="nzPlaceHolder"
      [nzPopupClassName]="nzPopupClassName"
      [nzUse12Hours]="nzUse12Hours"
      [nzSuffixIcon]="nzSuffixIcon"
      (nzOpenChange)="to['nzOpenChange'] && to['nzOpenChange($event)']">
    </nz-time-picker>
  `,
})
export class FormlyFieldTimePickerComponent extends FieldType<FieldTypeConfig>{
  get nzAllowEmpty(): boolean {
    return this.to!['nzAllowEmpty'] || true;
  }

  get nzAutoFocus(): boolean {
    return this.to!['nzAutoFocus'];
  }

  get nzClearText(): string {
    return this.to!['nzClearText'] || 'clear';
  }

  get nzDefaultOpenValue(): Date {
    return this.to!['nzDefaultOpenValue'] || new Date();
  }

  get nzDisabled(): boolean {
    return this.to!['nzDisabled'];
  }

  get nzDisabledHours(): () => number[] {
    return this.to!['nzDisabledHours'];
  }

  get nzDisabledMinutes(): (hour: number) => number[] {
    return this.to!['nzDisabledMinutes'];
  }

  get nzDisabledSeconds(): (hour: number, minute: number) => number[] {
    return this.to!['nzDisabledSeconds'];
  }

  get nzFormat(): DatePipe {
    return this.to!['nzFormat'] || 'HH:mm:ss';
  }

  get nzHideDisabledOptions(): boolean {
    return this.to!['nzHideDisabledOptions'];
  }

  get nzHourStep(): number {
    return this.to!['nzHourStep'] || 1;
  }

  get nzMinuteStep(): number {
    return this.to!['nzMinuteStep'] || 1;
  }

  get nzSecondStep(): number {
    return this.to!['nzSecondStep'] || 1;
  }

  get nzOpen(): boolean {
    return this.to!['nzOpen'];
  }

  get nzPlaceHolder(): string {
    return this.to!['nzPlaceHolder'];
  }

  get nzPopupClassName(): string {
    return this.to!['nzPopupClassName'] || '';
  }

  get nzUse12Hours(): boolean {
    return this.to!['nzUse12Hours'];
  }

  get nzSuffixIcon(): string | TemplateRef<void> {
    return this.to!['nzSuffixIcon'];
  }
}
