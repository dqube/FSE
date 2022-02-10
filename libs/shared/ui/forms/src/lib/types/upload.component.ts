import { Component, ChangeDetectionStrategy, ViewEncapsulation, TemplateRef } from '@angular/core';
import { NzUploadFile, UploadFilter, NzUploadTransformFileType } from 'ng-zorro-antd/upload';
import { FieldType, FieldTypeConfig } from '@ngx-formly/core';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'nu-formly-field-upload',
  preserveWhitespaces: false,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <nz-upload
      [class.ng-dirty]="showError"
      [formControl]="formControl"
      [formlyAttributes]="field"
      [nzAccept]="nzAccept"
      [nzAction]="nzAction"
      [nzDirectory]="nzDirectory"
      [nzBeforeUpload]="nzBeforeUpload"
      [nzCustomRequest]="nzCustomRequest"
      [nzData]="nzData"
      [nzDisabled]="nzDisabled"
      [nzFileList]="nzFileList"
      [nzLimit]="nzLimit"
      [nzSize]="nzSize"
      [nzFileType]="nzFileType"
      [nzFilter]="nzFilter"
      [nzHeaders]="nzHeaders"
      [nzListType]="nzListType"
      [nzMultiple]="nzMultiple"
      [nzName]="nzName"
      [nzShowUploadList]="nzShowUploadList"
      [nzShowButton]="nzShowButton"
      [nzWithCredentials]="nzWithCredentials"
      [nzOpenFileDialogOnClick]="nzOpenFileDialogOnClick"
      [nzPreview]="nzPreview"
      [nzPreviewFile]="nzPreviewFile"
      [nzPreviewIsImage]="nzPreviewIsImage"
      [nzRemove]="nzRemove"
      [nzDownload]="nzDownload"
      [nzTransformFile]="nzTransformFile"
      (nzIconRender)="nzIconRender"
      (nzFileListRender)="nzFileListRender"
      (nzChange)="to['nzChange'] && to['nzChange($event)']">
    </nz-upload>
  `,
})
export class FormlyFieldUploadComponent extends FieldType<FieldTypeConfig> {
  get nzAccept(): string {
    return this.to!['nzAccept'];
  }

  get nzAction(): string | ((file: NzUploadFile) => string | Observable<string>) {
    return this.to!['nzAction'];
  }

  get nzDirectory(): boolean {
    return this.to!['nzDirectory'] || false;
  }

  get nzBeforeUpload(): (file: NzUploadFile, fileList: NzUploadFile[]) => boolean | Observable<boolean> {
    return this.to!['nzBeforeUpload'];
  }

  get nzCustomRequest(): (item :any) => Subscription {
    return this.to!['nzCustomRequest'];
  }

  get nzData(): object | ((file: NzUploadFile) => object | Observable<{}>) {
    return this.to!['nzData'];
  }

  get nzDisabled(): boolean {
    return this.to!['nzDisabled'] || false;
  }

  get nzFileList(): NzUploadFile[] {
    return this.to!['nzFileList'];
  }

  get nzLimit(): number {
    return this.to!['nzLimit'] || 0;
  }

  get nzSize(): number {
    return this.to!['nzSize'] || 0;
  }

  get nzFileType(): string {
    return this.to!['nzFileType'];
  }

  get nzFilter(): UploadFilter[] {
    return this.to!['nzFilter'];
  }

  get nzHeaders(): object | ((file: NzUploadFile) => object | Observable<{}>) {
    return this.to!['nzHeaders'];
  }

  get nzListType(): 'text' | 'picture' | 'picture-card' {
    return this.to!['nzListType'] || 'text';
  }

  get nzMultiple(): boolean {
    return this.to!['nzMultiple'] || false;
  }

  get nzName(): string {
    return this.to!['nzName'] || 'file';
  }

  get nzShowUploadList(): boolean | { showPreviewIcon?: boolean, showRemoveIcon?: boolean, showDownloadIcon?: boolean } {
    return this.to!['nzShowUploadList'] || true;
  }

  get nzShowButton(): boolean {
    return this.to!['nzShowButton'] || true;
  }

  get nzWithCredentials(): boolean {
    return this.to!['nzWithCredentials'] || false;
  }

  get nzOpenFileDialogOnClick(): boolean {
    return this.to!['nzOpenFileDialogOnClick'] || true;
  }

  get nzPreview(): (file: NzUploadFile) => void {
    return this.to!['nzPreview'];
  }

  get nzPreviewFile(): (file: NzUploadFile) => Observable<string> {
    return this.to!['nzPreviewFile'];
  }

  get nzPreviewIsImage(): (file: NzUploadFile) => boolean {
    return this.to!['nzPreviewIsImage'];
  }

  get nzRemove(): (file: NzUploadFile) => boolean | Observable<boolean> {
    return this.to!['nzRemove'];
  }

  get nzDownload(): (file: NzUploadFile) => void {
    return this.to!['nzDownload'];
  }

  get nzTransformFile(): (file: NzUploadFile) => NzUploadTransformFileType {
    return this.to!['nzTransformFile'];
  }

  get nzIconRender(): TemplateRef<void> {
    return this.to!['nzIconRender'];
  }

  get nzFileListRender(): TemplateRef<{ $implicit: NzUploadFile[] }> {
    return this.to['nzFileListRender'];
  }
}
