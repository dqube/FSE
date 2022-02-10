import {
  ChangeDetectionStrategy, Component,
  Input, OnInit, ViewChild,
  ViewEncapsulation
} from '@angular/core';
import {
  ControlValueAccessor, NG_VALUE_ACCESSOR
} from '@angular/forms';
import { OnChangeType, OnTouchedType } from 'ng-zorro-antd/core/types';
import {
  NzUploadComponent,
  NzUploadFile
} from 'ng-zorro-antd/upload';

@Component({
  selector: 'formly-upload',
  template: `
    <nz-upload
      [nzAction]="nzAction"
      [nzAccept]="nzAccept"
      [nzDirectory]="nzDirectory"
      [nzBeforeUpload]="nzBeforeUpload"
      [nzCustomRequest]="nzCustomRequest"
      [nzData]="nzData"
      [(nzFileList)]="nzFileList"
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
      [nzIconRender]="nzIconRender"
      [nzFileListRender]="nzFileListRender"
      [nzType]="nzType"
      (nzFileListChange)="fileListChange($event)"
    >
      <button nz-button type="button">
        <i nz-icon nzType="upload"></i>
        {{ text }}
      </button>
    </nz-upload>
  `,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: UploadComponent,
      multi: true,
    },
  ],
})
export class UploadComponent
  extends NzUploadComponent
  implements OnInit, ControlValueAccessor
{
  @ViewChild('upload', { static: true })
  transfer!: NzUploadComponent;

  /**
   * @default 点击上传
   */
  @Input()  text = 'Click Upload';
  @Input()
  resultMap!: (items: NzUploadFile[]) => any[];

  onChange: OnChangeType = () => {};
  onTouched: OnTouchedType = () => {};
  writeValue(obj: any): void {}
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
  setDisabledState?(isDisabled: boolean): void {
    this.nzDisabled = isDisabled;
  }

  fileListChange(list: NzUploadFile[]) {
    this.nzFileListChange.emit(list);
  }

  // change(value: NzUploadChangeParam) {
  //   this.nzChange.emit(value);
  //   if (['removed', 'success'].includes(value?.type)) {
  //     if (this.resultMap instanceof Function) {
  //       this.onChange(
  //         this.resultMap(value.fileList.filter((x) => x.status === 'done'))
  //       );
  //     } else {
  //       this.onChange(value.fileList.filter((x) => x.status === 'done'));
  //     }
  //   }
  // }

}
