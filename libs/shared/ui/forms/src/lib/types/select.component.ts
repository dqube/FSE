import { Component, ChangeDetectionStrategy, ViewEncapsulation } from '@angular/core';
import { FieldType, FieldTypeConfig } from '@ngx-formly/core';
import { NzOptionComponent } from 'ng-zorro-antd/select';

@Component({
  selector: 'nu-formly-field-select',
  preserveWhitespaces: false,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <nz-select
      [class.ng-dirty]="showError"
      [formControl]="formControl"
      [formlyAttributes]="field"
      [compareWith]="compareWith"
      [nzAutoClearSearchValue]="nzAutoClearSearchValue"
      [nzAllowClear]="nzAllowClear"
      [nzOpen]="nzOpen"
      [nzAutoFocus]="nzAutoFocus"
      [nzDisabled]="nzDisabled"
      [nzDropdownClassName]="nzDropdownClassName"
      [nzDropdownMatchSelectWidth]="nzDropdownMatchSelectWidth"
      [nzDropdownStyle]="nzDropdownStyle"
      [nzServerSearch]="nzServerSearch"
      [nzFilterOption]="nzFilterOption"
      [nzMaxMultipleCount]="nzMaxMultipleCount"
      [nzMode]="nzMode"
      [nzNotFoundContent]="nzNotFoundContent"
      [nzPlaceHolder]="nzPlaceHolder"
      [nzShowArrow]="nzShowArrow"
      [nzShowSearch]="nzShowSearch"
      [nzSize]="nzSize"
      [nzSuffixIcon]="nzSuffixIcon"
      [nzRemoveIcon]="nzRemoveIcon"
      [nzClearIcon]="nzClearIcon"
      [nzMenuItemSelectedIcon]="nzMenuItemSelectedIcon"
      [nzTokenSeparators]="nzTokenSeparators"
      [nzLoading]="nzLoading"
      [nzMaxTagCount]="nzMaxTagCount"
      [nzMaxTagPlaceholder]="nzMaxTagPlaceholder">
        <nz-option
          *ngFor="let option of to.options | formlySelectOptions: field | async"
          [nzLabel]="option.label"
          [nzValue]="option.value"
          [nzDisabled]="option.disabled"
          [nzCustomContent]="nzCustomContent">
        </nz-option>
    </nz-select>
  `,
})
export class FormlyFieldSelectComponent extends FieldType<FieldTypeConfig> {
  defaultCompareFn = (o1 :any, o2:any) => o1 === o2;
  defaultFilterFn = (input: string, component: NzOptionComponent) => true;

  get compareWith() {
    return this.to!['compareWith'] || this.defaultCompareFn;
  }

  get nzAutoClearSearchValue() {
    return this.to!['nzAutoClearSearchValue'] || false;
  }

  get nzAllowClear() {
    return this.to!['nzAllowClear'] || false;
  }

  get nzOpen() {
    return this.to!['nzOpen'] || false;
  }

  get nzAutoFocus() {
    return this.to!['nzAutoFocus'] || false;
  }

  get nzDisabled() {
    return this.to!['nzDisabled'] || false;
  }

  get nzDropdownClassName() {
    return this.to!['nzDropdownClassName'];
  }

  get nzDropdownMatchSelectWidth() {
    return this.to!['nzDropdownMatchSelectWidth'] || true;
  }

  get nzDropdownStyle() {
    return this.to!['nzDropdownStyle'];
  }

  get nzServerSearch() {
    return this.to!['nzServerSearch'] || false;
  }

  get nzFilterOption() {
    return this.to!['nzFilterOption'] || this.defaultFilterFn;
  }

  get nzMaxMultipleCount() {
    return this.to!['nzMaxMultipleCount'] || Infinity;
  }

  get nzMode() {
    return this.to!['nzMode'] || 'default';
  }

  get nzNotFoundContent() {
    return this.to!['nzNotFoundContent'] || '';
  }

  get nzPlaceHolder() {
    return this.to!['nzPlaceHolder'];
  }

  get nzShowArrow() {
    return this.to!['nzShowArrow'];
  }

  get nzShowSearch() {
    return this.to!['nzShowSearch'] || false;
  }

  get nzSize() {
    return this.to!['nzSize'] || 'default';
  }

  get nzSuffixIcon() {
    return this.to!['nzSuffixIcon'] || '';
  }

  get nzRemoveIcon() {
    return this.to!['nzRemoveIcon'] || '';
  }

  get nzClearIcon() {
    return this.to!['nzClearIcon'] || '';
  }

  get nzMenuItemSelectedIcon() {
    return this.to!['nzMenuItemSelectedIcon'] || '';
  }

  get nzTokenSeparators() {
    return this.to!['nzTokenSeparators'] || [];
  }

  get nzLoading() {
    return this.to!['nzLoading'] || false;
  }

  get nzMaxTagCount() {
    return this.to!['nzMaxTagCount'] || void 0;
  }

  get nzMaxTagPlaceholder() {
    return this.to!['nzMaxTagPlaceholder'];
  }

  get nzCustomContent() {
    return this.to!['nzCustomContent'] || false;
  }
}
