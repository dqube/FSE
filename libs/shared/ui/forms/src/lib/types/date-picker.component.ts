import { DatePipe } from '@angular/common';
import { Component, ChangeDetectionStrategy, ViewEncapsulation, TemplateRef } from '@angular/core';
import { FieldType, FieldTypeConfig } from '@ngx-formly/core';
import { NzOptionComponent } from 'ng-zorro-antd/select';

@Component({
  selector: 'nu-formly-field-time-date',
  preserveWhitespaces: false,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <nz-date-picker
      *ngIf="!to['type'] || to['type'] === 'date'"
      [class.ng-dirty]="showError"
      [formControl]="formControl"
      [formlyAttributes]="field"
      [nzAllowClear]="nzAllowClear"
      [nzAutoFocus]="nzAutoFocus"
      [nzDateRender]="nzDateRender"
      [nzDisabled]="nzDisabled"
      [nzInputReadOnly]="nzInputReadOnly"
      [nzDisabledDate]="nzDisabledDate"
      [nzPopupStyle]="nzPopupStyle"
      [nzDropdownClassName]="nzDropdownClassName"
      [nzSize]="nzSize"
      [nzDefaultPickerValue]="nzDefaultPickerValue"
      [nzSuffixIcon]="nzSuffixIcon"
      [nzDisabledTime]="to['nzDisabledTime']"
      [nzFormat]="to['nzFormat'] || 'yyyy-MM-dd'"
      [nzRenderExtraFooter]="to['nzRenderExtraFooter']"
      [nzShowTime]="to['nzShowTime']"
      [nzShowToday]="to['nzShowToday'] || true"
      [nzPlaceHolder]="to['nzPlaceHolder']"
      (nzOnOk)="to['nzOnOk'] && to['nzOnOk($event)']"
      (nzOnOpenChange)="to['nzOnOpenChange'] && to['nzOnOpenChange($event)']">
    </nz-date-picker>

    <nz-week-picker
      *ngIf="to['type'] === 'week'"
      [class.ng-dirty]="showError"
      [formControl]="formControl"
      [formlyAttributes]="field"
      [nzAllowClear]="nzAllowClear"
      [nzAutoFocus]="nzAutoFocus"
      [nzDateRender]="nzDateRender"
      [nzDisabled]="nzDisabled"
      [nzInputReadOnly]="nzInputReadOnly"
      [nzDisabledDate]="nzDisabledDate"
      [nzPopupStyle]="nzPopupStyle"
      [nzDropdownClassName]="nzDropdownClassName"
      [nzSize]="nzSize"
      [nzDefaultPickerValue]="nzDefaultPickerValue"
      [nzSuffixIcon]="nzSuffixIcon"
      [nzFormat]="to['nzFormat'] || 'yyyy-ww'"
      [nzPlaceHolder]="to['nzPlaceHolder']"
      (nzOnOpenChange)="to['nzOnOpenChange'] && to['nzOnOpenChange($event)']">
    </nz-week-picker>

    <nz-month-picker
      *ngIf="to['type'] === 'month'"
      [class.ng-dirty]="showError"
      [formControl]="formControl"
      [formlyAttributes]="field"
      [nzAllowClear]="nzAllowClear"
      [nzAutoFocus]="nzAutoFocus"
      [nzDateRender]="nzDateRender"
      [nzDisabled]="nzDisabled"
      [nzInputReadOnly]="nzInputReadOnly"
      [nzDisabledDate]="nzDisabledDate"
      [nzPopupStyle]="nzPopupStyle"
      [nzDropdownClassName]="nzDropdownClassName"
      [nzSize]="nzSize"
      [nzDefaultPickerValue]="nzDefaultPickerValue"
      [nzSuffixIcon]="nzSuffixIcon"
      [nzFormat]="to['nzFormat'] || 'yyyy-MM'"
      [nzRenderExtraFooter]="to['nzRenderExtraFooter']"
      [nzPlaceHolder]="to['nzPlaceHolder']"
      (nzOnOpenChange)="to['nzOnOpenChange'] && to['nzOnOpenChange($event)']">
    </nz-month-picker>

    <nz-year-picker
      *ngIf="to['type'] === 'year'"
      [class.ng-dirty]="showError"
      [formControl]="formControl"
      [formlyAttributes]="field"
      [nzAllowClear]="nzAllowClear"
      [nzAutoFocus]="nzAutoFocus"
      [nzDateRender]="nzDateRender"
      [nzDisabled]="nzDisabled"
      [nzInputReadOnly]="nzInputReadOnly"
      [nzDisabledDate]="nzDisabledDate"
      [nzPopupStyle]="nzPopupStyle"
      [nzDropdownClassName]="nzDropdownClassName"
      [nzSize]="nzSize"
      [nzDefaultPickerValue]="nzDefaultPickerValue"
      [nzSuffixIcon]="nzSuffixIcon"
      [nzFormat]="to['nzFormat'] || 'yyyy'"
      [nzRenderExtraFooter]="to['nzRenderExtraFooter']"
      [nzPlaceHolder]="to['nzPlaceHolder']"
      (nzOnOpenChange)="to['nzOnOpenChange'] && to['nzOnOpenChange($event)']">
    </nz-year-picker>

    <nz-range-picker
      *ngIf="to['type'] === 'range'"
      [class.ng-dirty]="showError"
      [formControl]="formControl"
      [formlyAttributes]="field"
      [nzAllowClear]="nzAllowClear"
      [nzAutoFocus]="nzAutoFocus"
      [nzDateRender]="nzDateRender"
      [nzDisabled]="nzDisabled"
      [nzInputReadOnly]="nzInputReadOnly"
      [nzDisabledDate]="nzDisabledDate"
      [nzPopupStyle]="nzPopupStyle"
      [nzDropdownClassName]="nzDropdownClassName"
      [nzSize]="nzSize"
      [nzDefaultPickerValue]="nzDefaultPickerValue"
      [nzSuffixIcon]="nzSuffixIcon"
      [nzDisabledTime]="to['nzDisabledTime']"
      [nzFormat]="to['nzFormat'] || 'yyyy-MM-dd'"
      [nzRanges]="to['nzRanges']"
      [nzRenderExtraFooter]="to['nzRenderExtraFooter']"
      [nzShowTime]="to['nzShowTime']"
      [nzPlaceHolder]="to['nzPlaceHolder']"
      [nzSeparator]="to['nzSeparator'] || '-'"
      (nzOnOk)="to['nzOnOk'] && to['nzOnOk($event)']"
      (nzOnOpenChange)="to['nzOnOpenChange'] && to['nzOnOpenChange($event)']">
    </nz-range-picker>
  `,
})
export class FormlyFieldDatePickerComponent extends FieldType<FieldTypeConfig> {
  get nzAllowClear(): boolean {
    return this.to!['nzAllowClear'] || true;
  }

  get nzAutoFocus(): boolean {
    return this.to!['nzAutoFocus'];
  }

  get nzDateRender(): TemplateRef<Date> | string | ((d: Date) => TemplateRef<Date> | string) {
    return this.to!['nzDateRender'];
  }

  get nzDisabled(): boolean {
    return this.to!['nzDisabled'];
  }

  get nzInputReadOnly(): boolean {
    return this.to!['nzInputReadOnly'];
  }

  get nzDisabledDate(): (current: Date) => boolean {
    return this.to!['nzDisabledDate'];
  }
 
  get nzPopupStyle(): object {
    return this.to!['nzPopupStyle'] || { position: 'relative' };
  }

  get nzDropdownClassName(): string {
    return this.to!['nzDropdownClassName'];
  }

  get nzSize(): 'large' | 'small' {
    return this.to!['nzSize'] || 'default';
  }

  get nzDefaultPickerValue(): Date | Date[] {
    return this.to!['nzDefaultPickerValue'] || null;
  }

  get nzSuffixIcon(): string | TemplateRef<void> {
    return this.to!['nzSuffixIcon'] || 'calendar';
  }
}
