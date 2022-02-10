import { DatePipe } from '@angular/common';
import { Component, ChangeDetectionStrategy, ViewEncapsulation, TemplateRef } from '@angular/core';
import { Observable, of } from 'rxjs';
import { FieldType, FieldTypeConfig } from '@ngx-formly/core';
import { TransferItem, TransferCanMove } from 'ng-zorro-antd/transfer';

@Component({
  selector: 'nu-formly-field-transfer',
  preserveWhitespaces: false,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <nz-transfer
      [class.ng-dirty]="showError"
      [formlyAttributes]="field"
      [nzDataSource]="nzDataSource"
      [nzDisabled]="nzDisabled"
      [nzTitles]="nzTitles"
      [nzOperations]="nzOperations"
      [nzListStyle]="nzListStyle"
      [nzItemUnit]="nzItemUnit"
      [nzItemsUnit]="nzItemsUnit"
      [nzRenderList]="nzRenderList"
      [nzRender]="nzRender"
      [nzFooter]="nzFooter"
      [nzShowSearch]="nzShowSearch"
      [nzFilterOption]="nzFilterOption"
      [nzSearchPlaceholder]="nzSearchPlaceholder"
      [nzNotFoundContent]="nzNotFoundContent"
      [nzCanMove]="nzCanMove"
      [nzSelectedKeys]="nzSelectedKeys"
      [nzTargetKeys]="nzTargetKeys"
      (nzChange)="to['nzChange'] && to['nzChange($event)']"
      (nzSearchChange)="to['nzSearchChange'] && to['nzSearchChange($event)']"
      (nzSelectChange)="to['nzSelectChange'] && to['nzSelectChange($event)']">
    </nz-transfer>
  `,
})
export class FormlyFieldTransferComponent extends FieldType<FieldTypeConfig> {
  get nzDataSource(): TransferItem[] {
    return this.to!['nzDataSource'] || [];
  }

  get nzDisabled(): boolean {
    return this.to!['nzDisabled'];
  }

  get nzTitles(): string[] {
    return this.to!['nzTitles'] || ['', ''];
  }

  get nzOperations(): string[] {
    return this.to!['nzOperations'] || ['', ''];
  }

  get nzListStyle(): object {
    return this.to!['nzListStyle'];
  }

  get nzItemUnit(): string {
    return this.to!['nzItemUnit'];
  }

  get nzItemsUnit(): string {
    return this.to!['nzItemsUnit'];
  }

  get nzRenderList(): Array<TemplateRef<void> | null> {
    return this.to!['nzRenderList'] || [null, null];
  }

  get nzRender(): TemplateRef<void> {
    return this.to!['nzRender'];
  }

  get nzFooter(): TemplateRef<void> {
    return this.to!['nzFooter'];
  }

  get nzShowSearch(): boolean {
    return this.to!['nzShowSearch'];
  }

  get nzFilterOption(): (inputValue: string, item: TransferItem) => boolean {
    return this.to!['nzFilterOption'];
  }

  get nzSearchPlaceholder(): string {
    return this.to!['nzSearchPlaceholder'];
  }

  get nzNotFoundContent(): string {
    return this.to!['nzNotFoundContent'];
  }

  get nzCanMove(): (arg: TransferCanMove) => Observable<TransferItem[]> {
    return this.to!['nzCanMove'] || ((arg: TransferCanMove) => of(arg.list));
  }

  get nzSelectedKeys(): string[] {
    return this.to!['nzSelectedKeys'];
  }

  get nzTargetKeys(): string[] {
    return this.to!['nzTargetKeys'];
  }
}
