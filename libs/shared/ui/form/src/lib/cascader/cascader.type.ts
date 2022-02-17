import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FieldType, FieldTypeConfig } from '@ngx-formly/core';

@Component({
  selector: 'formly-field-cascader',
  template: `
    <nz-cascader
      #cascader
      [nzPlaceHolder]="nzPlaceHolder"
      [nzOptions]="nzOptions"
      [formControl]="formControl"
      [formlyAttributes]="field"
      [nzAllowClear]="to['cascader']?.allowClear"
      [nzAutoFocus]="to['cascader']?.autoFocus"
      [nzBackdrop]="to['cascader']?.backdrop"
      [nzChangeOnSelect]="to['cascader']?.changeOnSelect"
      [nzExpandTrigger]="to['cascader']?.nzExpandTrigger"
      [nzLabelProperty]="to['cascader']?.labelProperty"
      [nzLabelRender]="to['cascader']?.labelRender"
      [nzMenuClassName]="to['cascader']?.menuClassName"
      [nzMenuStyle]="to['cascader']?.menuStyle"
      [nzNotFoundContent]="to['cascader']?.notFoundContent"
      [nzOptionRender]="to['cascader']?.optionRender"
      [nzShowSearch]="to['cascader']?.showSearch"
      [nzSuffixIcon]="to['cascader']?.suffixIcon"
      [nzValueProperty]="to['cascader']?.valueProperty"
      [nzChangeOn]="to['cascader']?.changeOn"
      [nzColumnClassName]="to['cascader']?.columnClassName"
      [nzExpandIcon]="to['cascader']?.expandIcon"
      [nzLoadData]="to['cascader']?.loadData"
      (nzClear)="to['cascader']?.clear && to['cascader']?.clear()"
      
      (nzVisibleChange)="
        to['cascader']?.visibleChange && to['cascader'].visibleChange($event)
      "
      (nzSelectionChange)="
        to['cascader']?.selectionChange && to['cascader'].selectionChange($event)
      "
    ></nz-cascader>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormlyFieldCascader extends FieldType<FieldTypeConfig> {
  get nzOptions(): object[] {
    return this.to!['nzOptions'];
  }
  get nzPlaceHolder(): string {
    return this.to!['nzPlaceHolder'];
  }
}
