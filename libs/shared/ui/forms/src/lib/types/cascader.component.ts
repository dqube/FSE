import { Component, ChangeDetectionStrategy, ViewEncapsulation, TemplateRef } from '@angular/core';
import { FieldType, FieldTypeConfig } from '@ngx-formly/core';
import { NzCascaderOption, NzShowSearchOptions } from 'ng-zorro-antd/cascader';

@Component({
  selector: 'nu-formly-field-cascader',
  preserveWhitespaces: false,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <nz-cascader
      [class.ng-dirty]="showError"
      [formControl]="formControl"
      [formlyAttributes]="field"
      [nzAllowClear]="nzAllowClear"
      [nzAutoFocus]="nzAutoFocus"
      [nzChangeOn]="nzChangeOn"
      [nzChangeOnSelect]="nzChangeOnSelect"
      [nzColumnClassName]="nzColumnClassName"
      [nzDisabled]="nzDisabled"
      [nzExpandTrigger]="nzExpandTrigger"
      [nzMenuClassName]="nzMenuClassName"
      [nzMenuStyle]="nzMenuStyle"
      [nzNotFoundContent]="nzNotFoundContent"
      [nzLabelProperty]="nzLabelProperty"
      [nzLabelRender]="nzLabelRender"
      [nzOptionRender]="nzOptionRender"
      [nzLoadData]="nzLoadData"
      [nzOptions]="nzOptions"
      [nzPlaceHolder]="nzPlaceHolder"
      [nzShowArrow]="nzShowArrow"
      [nzShowInput]="nzShowInput"
      [nzShowSearch]="nzShowSearch"
      [nzSize]="nzSize"
      [nzValueProperty]="nzValueProperty"
      (nzVisibleChange)="to['nzVisibleChange'] && to['nzVisibleChange($event)']"
      (nzSelectionChange)="to['nzSelectionChange'] && to['nzSelectionChange($event)']">
    </nz-cascader>
  `,
})
export class FormlyFieldCascaderComponent extends FieldType<FieldTypeConfig> {
  get nzAllowClear(): boolean {
    return this.to!['nzAllowClear'];
  }

  get nzAutoFocus(): boolean {
    return this.to!['nzAutoFocus'] || true;
  }

  get nzChangeOn(): (option: any, index: number) => boolean {
    return this.to!['nzChangeOn'];
  }

  get nzChangeOnSelect(): boolean {
    return this.to!['nzChangeOnSelect'];
  }

  get nzColumnClassName(): string {
    return this.to!['nzColumnClassName'];
  }

  get nzDisabled(): boolean {
    return this.to!['nzDisabled'];
  }

  get nzExpandTrigger(): 'click' | 'hover' {
    return this.to!['nzExpandTrigger'] || 'click';
  }

  get nzMenuClassName(): string {
    return this.to!['nzMenuClassName'];
  }

  get nzMenuStyle(): object {
    return this.to!['nzMenuStyle'];
  }

  get nzNotFoundContent(): string | TemplateRef<void> {
    return this.to!['nzNotFoundContent'];
  }

  get nzLabelProperty(): string {
    return this.to!['nzLabelProperty'] || 'label';
  }

  get nzLabelRender(): TemplateRef<any> {
    return this.to!['nzLabelRender'];
  }

  get nzOptionRender(): TemplateRef<{ $implicit: NzCascaderOption, index: number }> {
    return this.to!['nzOptionRender'];
  }

  get nzLoadData(): (option: any, index?: number) => PromiseLike<any> {
    return this.to!['nzLoadData'];
  }

  get nzOptions(): object[] {
    return this.to!['nzOptions'];
  }

  get nzPlaceHolder(): string {
    return this.to!['nzPlaceHolder'];
  }

  get nzShowArrow(): boolean {
    return this.to!['nzShowArrow'] || true;
  }

  get nzShowInput(): boolean {
    return this.to!['nzShowInput'] || true;
  }

  get nzShowSearch(): boolean | NzShowSearchOptions {
    return this.to!['nzShowSearch'];
  }

  get nzSize(): 'large' | 'small' | 'default' {
    return this.to!['nzSize'] || 'default';
  }

  get nzValueProperty(): string {
    return this.to!['nzValueProperty'] || 'value';
  }
}
