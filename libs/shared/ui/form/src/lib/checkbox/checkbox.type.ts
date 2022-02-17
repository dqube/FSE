import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FieldType, FieldTypeConfig } from '@ngx-formly/core';

@Component({
  selector: 'formly-field-checkbox',
  template: `
    <label
      *ngIf="to.type !== 'group'; else group"
      nz-checkbox
      [formControl]="formControl"
      [formlyAttributes]="field"
      [nzIndeterminate]="field.defaultValue === null || field.defaultValue === undefined"
     >{{ to.placeholder }}</label>

    <ng-template #group>
      <!-- <nz-checkbox-group
        [formControl]="formControl"
        [formlyAttributes]="field"
        [ngModel]="to.options"
        *ngFor="let option of to.options | formlySelectOptions: field | async"
        [nzDisabled]="option.disabled"
          {{ option.label }}
      ></nz-checkbox-group> -->
      <label
        nz-checkbox
        [formlyAttributes]="field"
        [formControl]="formControl"
        *ngFor="let option of to.options | formlySelectOptions: field | async"
        [nzDisabled]="option.disabled"
        [nzValue]="option.value">
          {{ option.label }}
      </label>
    </ng-template>
    
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
// eslint-disable-next-line @angular-eslint/component-class-suffix
export class FormlyFieldCheckbox extends FieldType<FieldTypeConfig> { }
