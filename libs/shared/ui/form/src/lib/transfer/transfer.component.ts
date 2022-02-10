import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Input,
  OnInit,
  TemplateRef,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core';
import {
  AbstractControl,
  ControlValueAccessor,
  FormGroup,
  NG_VALUE_ACCESSOR,
  ValidationErrors,
  Validator,
} from '@angular/forms';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';
import { OnChangeType, OnTouchedType } from 'ng-zorro-antd/core/types';
import {
  NzTransferComponent,
  TransferChange,
  TransferItem,
  TransferSearchChange,
  TransferSelectChange,
} from 'ng-zorro-antd/transfer';
import { CascaderFormly } from '../cascader';
import { CheckboxFormly } from '../checkbox';
import {
  DateFormly,
  RangeDateFormly,
} from '../date';
import {
  AutocompleteFormly,
  InputFormly,
  InputGroupFormly,
  NumberFormly,
} from '../input';
import { RadioFormly } from '../radio';
import { RateFormly } from '../rate';
import { SelectFormly } from '../select';
import { SliderFormly } from '../slider';
import { SwitchFormly } from '../switch';
import { TimeFormly } from '../time';
import { TransferFormly } from '../transfer';
import { of } from 'rxjs';
import { delay, timeInterval } from 'rxjs/operators';

@Component({
  selector: 'formly-transfer',
  template: `
    <nz-transfer
      #transfer
      [nzDisabled]="nzDisabled"
      [nzDataSource]="nzDataSource"
      [nzTitles]="nzTitles"
      [nzSelectedKeys]="nzSelectedKeys"
      [nzOperations]="nzOperations"
      [nzListStyle]="nzListStyle"
      [nzItemsUnit]="nzItemsUnit"
      [nzItemUnit]="nzItemUnit"
      [nzRenderList]="nzRenderList"
      [nzRender]="nzRender"
      [nzFooter]="nzFooter"
      [nzShowSearch]="nzShowSearch"
      [nzFilterOption]="nzFilterOption"
      [nzSearchPlaceholder]="nzSearchPlaceholder"
      [nzNotFoundContent]="nzNotFoundContent"
      [nzTargetKeys]="nzTargetKeys"
      (nzChange)="change($event)"
      (nzSelectChange)="selectChange($event)"
      (nzSearchChange)="searchChange($event)"
      style="flex: auto;"
    ></nz-transfer>
  `,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: TransferComponent,
      multi: true,
    },
  ],
})
export class TransferComponent
  extends NzTransferComponent
  implements OnInit, ControlValueAccessor
{
  @ViewChild('transfer', { static: true }) transfer: NzTransferComponent;

  @Input() resultMap: (items: TransferItem[]) => any[];

  onChange: OnChangeType = () => {};
  onTouched: OnTouchedType = () => {};
  // private cdr: ChangeDetectorRef
  writeValue(obj: any): void {
    setTimeout(() => {
      this.nzTargetKeys = obj;
      (this['cdr'] as ChangeDetectorRef).markForCheck();
      this.onChange(this.transfer.rightDataSource);
    }, 0);
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
  setDisabledState?(isDisabled: boolean): void {
    this.nzDisabled = isDisabled;
  }

  change(value: TransferChange) {
    if (this.resultMap instanceof Function) {
      this.onChange(this.resultMap(this.transfer.rightDataSource));
    } else {
      this.onChange(this.transfer.rightDataSource);
    }
  }

  selectChange(value: TransferSelectChange) {
    this.nzSelectChange.emit(value);
  }

  searchChange(value: TransferSearchChange) {
    this.nzSearchChange.emit(value);
  }

  ngOnInit(): void {}
}
