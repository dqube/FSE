import { Component, ChangeDetectionStrategy, ViewEncapsulation } from '@angular/core';
import { FieldWrapper } from '@ngx-formly/core';

@Component({
  selector: 'nu-formly-wrapper-form-field-vertical',
  preserveWhitespaces: false,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
   <div nz-form [nzLayout]="'vertical'">
      <nz-form-item>
        <ng-container *ngIf="to.label && to['hideLabel'] !== true">
          <nz-form-label [nzSpan]="null" [nzRequired]="to['required'] && to['hideRequiredMarker'] !== true" [nzFor]="id">
            {{ to.label }}
          </nz-form-label>
        </ng-container>
        <nz-form-control [nzSpan]="null" [nzValidateStatus]="errorState" [nzErrorTip]="errorTpl">
          <ng-container #fieldComponent></ng-container>
          <ng-template #errorTpl let-control>
            <formly-validation-message [field]="field"></formly-validation-message>
          </ng-template>
        </nz-form-control>
      </nz-form-item>
    <div>
  `,
})

export class FormlyWrapperFormFieldVerticalComponent extends FieldWrapper {
  get errorState() {
    return this.showError ? 'error' : '';
  }
}
