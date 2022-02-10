import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FormlyModule } from '@ngx-formly/core';
import { FormlySelectModule } from '@ngx-formly/core/select';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzInputNumberModule } from 'ng-zorro-antd/input-number';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzRadioModule } from 'ng-zorro-antd/radio';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzSwitchModule } from 'ng-zorro-antd/switch';
import { NzSliderModule } from 'ng-zorro-antd/slider';
import { NzEmptyModule } from 'ng-zorro-antd/empty';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzAlertModule } from 'ng-zorro-antd/alert';
import { NzRateModule } from 'ng-zorro-antd/rate';
import { NzUploadModule } from 'ng-zorro-antd/upload';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { NzTreeSelectModule } from 'ng-zorro-antd/tree-select';
import { NzCalendarModule } from 'ng-zorro-antd/calendar';
import { NzCascaderModule } from 'ng-zorro-antd/cascader';
import { NzTimePickerModule } from 'ng-zorro-antd/time-picker';
import { NzTransferModule } from 'ng-zorro-antd/transfer';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';

import { FormlyWrapperFormFieldComponent } from './wrappers/wrapper-form-field.component';
import { FormlyWrapperFormFieldVerticalComponent } from './wrappers/wrapper-form-field-vertical.component';
import { FormlyFieldCheckboxComponent } from './types/checkbox.component';
import { FormlyFieldInputComponent } from './types/input.component';
import { FormlyFieldSelectComponent } from './types/select.component';
import { FormlyFieldTextareaComponent } from './types/textarea-component';
import { FormlyFieldRadioComponent } from './types/radio.component';
import { FormlyFieldRadioButtonComponent } from './types/radio-button.component';
import { FormlyFieldSwitchComponent } from './types/switch.component';
import { FormlyFieldSliderComponent } from './types/slider.component';
import { FormlyFieldTabsComponent } from './types/tabs.component';
import { FormlyFieldEmptyComponent } from './types/empty.component';
import { FormlyFieldDividerComponent } from './types/divider.component';
import { FormlyFieldAlertComponent } from './types/alert.component';
import { FormlyFieldRateComponent } from './types/rate.component';
import { FormlyFieldUploadComponent } from './types/upload.component';
import { FormlyFieldButtonComponent } from './types/button.component';
import { FormlyFieldTreeSelectComponent } from './types/tree-select.component';
import { FormlyFieldCascaderComponent } from './types/cascader.component';
import { FormlyFieldTimePickerComponent } from './types/time-picker.component';
import { FormlyFieldTransferComponent } from './types/transfer.component';
import { FormlyFieldDatePickerComponent } from './types/date-picker.component';

const FORMLY_FIELD_COMPONENTS = [
  FormlyFieldCheckboxComponent,
  FormlyFieldInputComponent,
  FormlyFieldSelectComponent,
  FormlyFieldTextareaComponent,
  FormlyFieldRadioComponent,
  FormlyFieldRadioButtonComponent,
  FormlyFieldSwitchComponent,
  FormlyFieldSliderComponent,
  FormlyFieldTabsComponent,
  FormlyFieldEmptyComponent,
  FormlyFieldDividerComponent,
  FormlyFieldAlertComponent,
  FormlyFieldRateComponent,
  FormlyFieldUploadComponent,
  FormlyFieldButtonComponent,
  FormlyFieldTreeSelectComponent,
  FormlyFieldCascaderComponent,
  FormlyFieldTimePickerComponent,
  FormlyFieldTransferComponent,
  FormlyFieldDatePickerComponent,
];

const NG_ZORRO_MODULES = [
  NzSelectModule,
  NzInputModule,
  NzInputNumberModule,
  NzCheckboxModule,
  NzRadioModule,
  NzSwitchModule,
  NzSliderModule,
  NzTabsModule,
  NzEmptyModule,
  NzLayoutModule,
  NzFormModule,
  NzDividerModule,
  NzAlertModule,
  NzRateModule,
  NzUploadModule,
  NzButtonModule,
  NzToolTipModule,
  NzTreeSelectModule,
  NzCalendarModule,
  NzCascaderModule,
  NzTimePickerModule,
  NzTransferModule,
  NzDatePickerModule,
];

const NG_ZORRO_FORMLY_CONFIG = {
  types: [
    { name: 'tabs', component: FormlyFieldTabsComponent, },
    { name: 'checkbox', component: FormlyFieldCheckboxComponent, wrappers: ['form-field'] },
    { name: 'select', component: FormlyFieldSelectComponent, wrappers: ['form-field'] },
    { name: 'input', component: FormlyFieldInputComponent, wrappers: ['form-field'] },
    { name: 'textarea', component: FormlyFieldTextareaComponent, wrappers: ['form-field'] },
    { name: 'radio', component: FormlyFieldRadioComponent, wrappers: ['form-field'] },
    { name: 'radio-button', component: FormlyFieldRadioButtonComponent, wrappers: ['form-field'] },
    { name: 'switch', component: FormlyFieldSwitchComponent, wrappers: ['form-field'] },
    { name: 'slider', component: FormlyFieldSliderComponent, wrappers: ['form-field'] },
    { name: 'empty', component: FormlyFieldEmptyComponent, wrappers: ['form-field'] },
    { name: 'divider', component: FormlyFieldDividerComponent, wrappers: ['form-field'] },
    { name: 'alert', component: FormlyFieldAlertComponent, wrappers: ['form-field'] },
    { name: 'rate', component: FormlyFieldRateComponent, wrappers: ['form-field'] },
    { name: 'button', component: FormlyFieldButtonComponent, wrappers: ['form-field'] },
    { name: 'cascader', component: FormlyFieldCascaderComponent, wrappers: ['form-field'] },
    { name: 'time-picker', component: FormlyFieldTimePickerComponent, wrappers: ['form-field'] },
    { name: 'transfer', component: FormlyFieldTransferComponent, wrappers: ['form-field'] },
    { name: 'date-picker', component: FormlyFieldDatePickerComponent, wrappers: ['form-field'] },
    // TODO: ng-zorro-antd v10.1.0: https://github.com/NG-ZORRO/ng-zorro-antd/pull/6574
    // { name: 'tree-select', component: FormlyFieldTreeSelectComponent, wrappers: ['form-field'] },
    // TODO: ng-zorro-antd v10.1.0: https://github.com/ngx-formly/ngx-formly/issues/2549
    // { name: 'upload', component: FormlyFieldUploadComponent, wrappers: ['form-field'] },
  ],
  wrappers: [
    { name: 'form-field', component: FormlyWrapperFormFieldComponent },
    { name: 'form-field-vertical', component: FormlyWrapperFormFieldVerticalComponent },
  ],
};

@NgModule({
  declarations: [
    ...FORMLY_FIELD_COMPONENTS,
    FormlyWrapperFormFieldComponent,
    FormlyWrapperFormFieldVerticalComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormlySelectModule,
    ...NG_ZORRO_MODULES,
    FormlyModule.forRoot(NG_ZORRO_FORMLY_CONFIG),
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    FormlyModule,
  ],
})
export class SharedUiFormsModule {}
