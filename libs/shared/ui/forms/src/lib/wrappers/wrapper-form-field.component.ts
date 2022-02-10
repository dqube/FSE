import { Component, ChangeDetectionStrategy, ViewEncapsulation } from '@angular/core';
import { FieldWrapper } from '@ngx-formly/core';

@Component({
  selector: 'nu-formly-wrapper-form-field',
  preserveWhitespaces: false,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <nz-form-item>
      <ng-container *ngIf="to.label && to['hideLabel'] !== true">
        <nz-form-label
          [nzSpan]="(!to['layout'] || to['layout'] === 'horizontal') ? 4 : null"
          [nzRequired]="to.required && to['hideRequiredMarker'] !== true"
          [nzFor]="id">
            {{ to.label }}
        </nz-form-label>
      </ng-container>
      <nz-form-control
        [nzSpan]="(!to['layout'] || to['layout'] === 'horizontal') ? 20 : null"
        [nzValidateStatus]="errorState"
        [nzErrorTip]="errorTpl">
          <ng-container #fieldComponent></ng-container>
          <ng-template #errorTpl let-control>
            <formly-validation-message [field]="field"></formly-validation-message>
          </ng-template>
      </nz-form-control>
    </nz-form-item>
  `,
})

export class FormlyWrapperFormFieldComponent extends FieldWrapper {
  get errorState() {
    return this.showError ? 'error' : '';
  }
}
