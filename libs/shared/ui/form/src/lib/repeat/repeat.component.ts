import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit
} from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FieldArrayType } from '@ngx-formly/core';

@Component({
  selector: 'formly-field-repeat',
  template: `
    <ng-container
      *ngFor="let item of field.fieldGroup; index as index; last as last"
    >
      <formly-field [field]="item"></formly-field>
    </ng-container>
    <a
      *ngIf="to['addBtnIcon'] || to['addBtnText']"
      nz-button
      type="button"
      nzSize="default"
      nzType="dashed"
      [nzBlock]="to['addBtnBlock']"
      (click)="add(undefined, this.field.defaultValue, { markAsDirty: false })"
    >
      <i *ngIf="to['addBtnIcon']" nz-icon [nzType]="to['addBtnIcon']"></i>
      <span *ngIf="to['addBtnText']">{{to['addBtnText']}}</span>
    </a>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormlyRepeatComponent extends FieldArrayType implements OnInit {
  constructor(private cdr: ChangeDetectorRef) {
    super();
  }

  ngOnInit(): void {
    Object.assign(this.field.templateOptions, {
      add: (
        index: number,
        model?: any,
        options: { markAsDirty: boolean } = { markAsDirty: false },
      ) => {
        this.insert.call(this, index, model, options);
      },
      remove: (
        index: number,
        options: { markAsDirty: boolean } = { markAsDirty: false },
      ) => {
        this.remove.call(this, index, options);
        this.addWhenEmpty();
        this.cdr.detectChanges();
      },
    });
    this.form.valueChanges.subscribe(() => {
      this.cdr.detectChanges();
    })
  }

  private addWhenEmpty(): void {
    if (this.to['notAllowEmpty'] && !this.model?.length) {
      this.add(undefined, this.field.defaultValue, { markAsDirty: false });
    }
  }

  insert(
    index: number,
    model: any = null,
    options: { markAsDirty: boolean } = { markAsDirty: false },
  ): void {
    this.add(index, model, options);
    const ac = this.formControl.get(index.toString());
    if (ac as FormGroup) {
      const group = ac as FormGroup;
      Object.keys(group.controls).forEach((key) => {
        const control = group.get(key);
        control?.markAsUntouched();
        control?.markAsPristine();
        control?.updateValueAndValidity();
      });
      group.markAsPristine();
      group.updateValueAndValidity();
    } else {
      ac?.markAsUntouched();
      ac?.markAsPristine();
      ac?.updateValueAndValidity();
    }
  }
}
