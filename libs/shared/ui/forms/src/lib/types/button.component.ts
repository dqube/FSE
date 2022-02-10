import { Component, ChangeDetectionStrategy, ViewEncapsulation, TemplateRef, ElementRef } from '@angular/core';
import { FieldType, FieldTypeConfig } from '@ngx-formly/core';
import { NzTooltipTrigger } from 'ng-zorro-antd/tooltip';

type NzTooltipPlacement = 'top' | 'left' | 'right' | 'bottom' | 'topLeft' | 'topRight' |
  'bottomLeft' | 'bottomRight' | 'leftTop' | 'leftBottom' | 'rightTop' | 'rightBottom';

@Component({
  selector: 'nu-formly-field-button',
  preserveWhitespaces: false,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <nz-button-group
      [nzSize]="nzSize">
      <<ng-container *ngIf="to.options">
        <span
         *ngFor="let option in to.options"
          nz-tooltip
          [nzTooltipPlacement]="nzTooltipPlacement"
          [nzTooltipTitle]="nzTooltipTitle"
          [nzTooltipTrigger]="nzTooltipTrigger"
          [nzTooltipOrigin]="nzTooltipOrigin"
          [nzTooltipVisible]="nzTooltipVisible"
          (nzTooltipVisibleChange)="to['nzTooltipVisibleChange'] && to['nzTooltipVisibleChange($event)']"
          [nzTooltipMouseEnterDelay]="nzTooltipMouseEnterDelay"
          (nzTooltipMouseLeaveDelay)="nzTooltipMouseLeaveDelay"
          [nzTooltipOverlayClassName]="nzTooltipOverlayClassName"
          [nzTooltipOverlayStyle]="nzTooltipOverlayStyle">
            <button
              nz-button
              [nzGhost]="option.nzGhost"
              [nzLoading]="option.nzLoading"
              [nzShape]="option.nzShape"
              [nzSize]="option.nzSize"
              [nzType]="option.nzType"
              [nzBlock]="option.nzBlock"
              [nzDanger]="option.nzDanger"
              [disabled]="option.disabled"
              (click)="option.click && option.click()">
                {{ option.label }}
            </button>
        </span>
        </ng-container>
    </nz-button-group>
  `,
})
export class FormlyFieldButtonComponent extends FieldType<FieldTypeConfig> {
  override defaultOptions = {
    templateOptions: { options: [] },
  };

  get nzTooltipTitle(): string | TemplateRef<void> {
    return this.to!['nzTooltipTitle'];
  }

  get nzTooltipTrigger(): NzTooltipTrigger {
    return this.to!['nzTooltipTrigger'] || 'hover';
  }

  get nzTooltipPlacement(): NzTooltipPlacement {
    return this.to!['nzTooltipPlacement'] || 'top';
  }

  get nzTooltipOrigin(): ElementRef {
    return this.to!['nzTooltipOrigin'];
  }

  get nzTooltipVisible(): boolean {
    return this.to!['nzTooltipVisible'] || false;
  }

  get nzTooltipMouseEnterDelay(): number {
    return this.to!['nzTooltipMouseEnterDelay'] || 0.15;
  }

  get nzTooltipMouseLeaveDelay(): boolean {
    return this.to!['nzTooltipMouseLeaveDelay'] || false;
  }

  get nzTooltipOverlayClassName(): string {
    return this.to!['nzTooltipOverlayClassName'];
  }

  get nzTooltipOverlayStyle(): object {
    return this.to!['nzTooltipOverlayStyle'];
  }

  get nzSize(): 'large' | 'small' | 'default' {
    return this.to!['nzSize'] || 'default';
  }
}
