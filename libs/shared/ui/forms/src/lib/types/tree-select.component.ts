import { Component, ChangeDetectionStrategy, ViewEncapsulation, TemplateRef } from '@angular/core';
import { FieldType, FieldTypeConfig } from '@ngx-formly/core';
import { NzTreeNodeOptions, NzTreeNode } from 'ng-zorro-antd/tree';

@Component({
  selector: 'nu-formly-field-tree-select',
  preserveWhitespaces: false,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <nz-tree-select
      [class.ng-dirty]="showError"
      [formControl]="formControl"
      [formlyAttributes]="field"
      [nzAllowClear]="nzAllowClear"
      [nzPlaceHolder]="nzPlaceHolder"
      [nzDisabled]="nzDisabled"
      [nzShowIcon]="nzShowIcon"
      [nzShowSearch]="nzShowSearch"
      [nzNotFoundContent]="nzNotFoundContent"
      [nzDropdownMatchSelectWidth]="nzDropdownMatchSelectWidth"
      [nzDropdownStyle]="nzDropdownStyle"
      [nzDropdownClassName]="nzDropdownClassName"
      [nzMultiple]="nzMultiple"
      [nzHideUnMatched]="nzHideUnMatched"
      [nzSize]="nzSize"
      [nzCheckable]="nzCheckable"
      [nzCheckStrictly]="nzCheckStrictly"
      [nzShowExpand]="nzShowExpand"
      [nzShowLine]="nzShowLine"
      [nzAsyncData]="nzAsyncData"
      [nzNodes]="nzNodes"
      [nzDefaultExpandAll]="nzDefaultExpandAll"
      [nzExpandedKeys]="nzExpandedKeys"
      [nzDisplayWith]="nzDisplayWith"
      [nzMaxTagCount]="nzMaxTagCount"
      [nzMaxTagPlaceholder]="nzMaxTagPlaceholder"     
      (nzExpandChange)="to['nzExpandChange'] && to['nzExpandChange($event)']">
    </nz-tree-select>
  `,
})
export class FormlyFieldTreeSelectComponent extends FieldType<FieldTypeConfig> {
  get nzAllowClear(): boolean {
    return this.to!['nzAllowClear'];
  }

  get nzPlaceHolder(): string {
    return this.to!['nzPlaceHolder'];
  }

  get nzDisabled(): boolean {
    return this.to!['nzDisabled'];
  }

  get nzShowIcon(): boolean {
    return this.to!['nzShowIcon'];
  }

  get nzShowSearch(): boolean {
    return this.to!['nzShowSearch'];
  }

  get nzNotFoundContent(): string {
    return this.to!['nzNotFoundContent'];
  }

  get nzDropdownMatchSelectWidth(): boolean {
    return this.to!['nzDropdownMatchSelectWidth'] || true;
  }

  get nzDropdownStyle(): { [key: string]: string; } {
    return this.to!['nzDropdownStyle'];
  }

  get nzDropdownClassName(): string {
    return this.to!['nzDropdownClassName'];
  }

  get nzMultiple(): boolean {
    return this.to!['nzMultiple'];
  }

  get nzHideUnMatched(): boolean {
    return this.to!['nzHideUnMatched'];
  }

  get nzSize(): 'large' | 'small' | 'default' {
    return this.to!['nzSize'] || 'default';
  }

  get nzCheckable(): boolean {
    return this.to!['nzCheckable'];
  }

  get nzCheckStrictly(): boolean {
    return this.to!['nzCheckStrictly'];
  }

  get nzShowExpand(): boolean {
    return this.to!['nzShowExpand'] || true;
  }

  get nzShowLine(): boolean {
    return this.to!['nzShowLine'];
  }

  get nzAsyncData(): boolean {
    return this.to!['nzAsyncData'];
  }

  get nzNodes(): NzTreeNodeOptions[] {
    return this.to!['nzNodes'] || [];
  }

  get nzDefaultExpandAll(): boolean {
    return this.to!['nzDefaultExpandAll'];
  }

  get nzExpandedKeys(): string[] {
    return this.to!['nzExpandedKeys'];
  }

  get nzDisplayWith(): (node: NzTreeNode) => string {
    return this.to!['nzDisplayWith'];
  }

  get nzMaxTagCount(): number {
    return this.to!['nzMaxTagCount'];
  }

  get nzMaxTagPlaceholder(): TemplateRef<{ $implicit: NzTreeNode[] }> {
    return this.to!['nzMaxTagPlaceholder'];
  }

  get nzTreeTemplate(): TemplateRef<{ $implicit: NzTreeNode }> {
    return this.to!['nzTreeTemplate'];
  }

  get nzVirtualHeight(): string {
    return this.to!['nzVirtualHeight'];
  }

  get nzVirtualItemSize(): number {
    return this.to!['nzVirtualItemSize'] || 28;
  }

  get nzVirtualMaxBufferPx(): number {
    return this.to!['nzVirtualMaxBufferPx'] || 500;
  }

  get nzVirtualMinBufferPx(): number {
    return this.to!['nzVirtualMinBufferPx'] || 28;
  }

  get nzBackdrop(): boolean {
    return this.to!['nzBackdrop'];
  }
}
