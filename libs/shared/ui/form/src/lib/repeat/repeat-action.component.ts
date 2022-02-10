import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormArray } from '@angular/forms';
import { FieldType, FormlyFieldConfig } from '@ngx-formly/core';

type NzLegacyButtonType = 'primary' | 'default' | 'dashed' | 'link' | 'text';

@Component({
  selector: 'formly-field-repeat-action',
  template: `
    <button
      type="button"
      nz-button
      [nzType]="nzType"
      [nzShape]="to['shape']"
      [nzSize]="to['size']"
      [nzGhost]="to['ghost']"
      [nzBlock]="to['block']"
      [nzDanger]="to['danger']"
      [formlyAttributes]="field"
      (click)="onClick()"
    >
      <i *ngIf="to['icon']" nz-icon [nzType]="to['icon']"></i>
      <span *ngIf="to['text']">{{ to['text'] }}</span>
    </button>
  `,
  styles: [
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormlyRepeatActionComponent extends FieldType {
  get nzType(): NzLegacyButtonType|null {
    const type: NzLegacyButtonType|null = [
      'default',
      'primary',
      'dashed',
      'link',
      'text',
    ].includes(this.to.type as string)
      ? (this.to.type as NzLegacyButtonType)
      : null;
    return type;
  }

  findRoot(node: FormlyFieldConfig|undefined, compare: (node: FormlyFieldConfig) => boolean): FormlyFieldConfig|undefined {
    if (node?.parent) {
      if (compare(node.parent)) {
        return node.parent;
      } else {
        return this.findRoot(node.parent, compare);
      }
    } else {
      return undefined;
    }
  }


  onClick(): void {
    const parent = this.findRoot(this.field, (parent: FormlyFieldConfig) => {
      return parent.form instanceof FormArray;
    });
    const root = this.findRoot(this.field, (parent: FormlyFieldConfig) => {
      return parent.type === 'repeat';
    });
    if (root) {
      const index = parseInt(parent?.key as string, 10);
      if (this.to['action'] === 'add') {
        root?.templateOptions?.['add'](index + 1);
      } else if (this.to['action'] === 'copy') {
        root?.templateOptions?.['add'](index + 1, parent?.model);
      } else if (this.to['action'] === 'remove') {
        root?.templateOptions?.['remove'](index);
      }
    }
  }
}
