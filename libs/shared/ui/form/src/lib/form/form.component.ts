/* eslint-disable @angular-eslint/component-selector */
import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output
} from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig, FormlyFormOptions } from '@ngx-formly/core';

@Component({
  selector: 'app-form',
  template: `
  
    <form nz-form [nzLayout]="nzLayout" [formGroup]="form" (ngSubmit)="submit()">
      <formly-form
        [form]="form"
        [model]="model"
        [fields]="fields"
      ></formly-form>
      <button nz-button nzType="primary" type="submit">Submit</button>
      <button nz-button nzType="primary" type="reset">Reset</button>
    </form>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormlyFormComponent implements OnInit {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  constructor() {}

  @Input()
  form!: FormGroup;

  @Input() model: unknown;

  @Input()
  fieldGroup!: FormlyFieldConfig[];
  @Input()
  fields!: FormlyFieldConfig[];

  @Input()
  options!: FormlyFormOptions;
  layout!: string;

  @Output() fieldsChange = new EventEmitter<FormlyFieldConfig[]>();
  @Output() modelChange: EventEmitter<unknown> = new EventEmitter();
  @Output() formSubmit: EventEmitter<unknown> = new EventEmitter();
  ngOnInit(): void {
    this.layout = this.options?.formState?.['layout'];
  }
  get nzLayout() {
    return this.options?.formState?.['layout'] || 'vertical';
  }
 
  submit() {
  //  console.log(this.headers);
    //if (this.form.valid) {
    this.formSubmit.emit(this.model);
    // }
  }
  headeractions(name: string) {
    console.log('header clicked');
    console.log(name);
  }
}
