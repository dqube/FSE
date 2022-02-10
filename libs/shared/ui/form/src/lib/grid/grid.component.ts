import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FieldType } from '@ngx-formly/core';

@Component({
  selector: 'formly-field-grid',
  template: `
    <div
      nz-row
      nzType="flex"
      [nzJustify]="to?.['justify']"
      [nzAlign]="to?.['align']"
      [nzGutter]="to?.['gutter']"
    >
      <ng-container *ngFor="let item of field.fieldGroup">
        <formly-field
          nz-col
          [nzFlex]="item?.templateOptions?.grid?.flex || to?.flex"
          [nzSpan]="item?.templateOptions?.grid?.span || to?.span"
          [nzOffset]="item?.templateOptions?.grid?.offset || to?.offset"
          [nzOrder]="item?.templateOptions?.grid?.order || to?.order"
          [nzPull]="item?.templateOptions?.grid?.pull || to?.pull"
          [nzPush]="item?.templateOptions?.grid?.push || to?.push"
          [nzXs]="item?.templateOptions?.grid?.xs || to?.xs"
          [nzSm]="item?.templateOptions?.grid?.sm || to?.sm"
          [nzMd]="item?.templateOptions?.grid?.md || to?.md"
          [nzLg]="item?.templateOptions?.grid?.lg || to?.lg"
          [nzXl]="item?.templateOptions?.grid?.xl || to?.xl"
          [nzXXl]="item?.templateOptions?.grid?.xxl || to?.xxl"
          [field]="item"
        ></formly-field>
      </ng-container>
    </div>
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormlyGridComponent extends FieldType {
  get control(): FormControl {
    return this.formControl as FormControl;
  }
}
