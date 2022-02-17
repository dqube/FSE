import {
  AfterViewInit, ChangeDetectionStrategy, Component, ViewChild
} from '@angular/core';
import { FieldType, FieldTypeConfig } from '@ngx-formly/core';
import { NzSliderComponent } from 'ng-zorro-antd/slider';


@Component({
  selector: 'formly-field-slider',
  template: `
    <nz-slider
      #slider
      [formControl]="formControl"
      [formlyAttributes]="field"
      [nzDots]="to['slider']?.dots"
      [nzIncluded]="to['slider']?.included"
      [nzMax]="to['slider']?.max"
      [nzMin]="to['slider']?.min"
      [nzRange]="to['slider']?.range"
      [nzStep]="to['slider']?.step"
      [nzTipFormatter]="to['slider']?.tipFormatter"
      [nzVertical]="to['slider']?.vertical"
      [nzReverse]="to['slider']?.reverse"
      [nzTooltipVisible]="to['slider']?.tooltipVisible"
      (nzOnAfterChange)="
        to['slider']?.onAfterChange && to['slider']?.onAfterChange($event)
      "
    ></nz-slider>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormlyFieldSlider extends FieldType<FieldTypeConfig> implements AfterViewInit {
  @ViewChild('slider', { static: false })
  slider!: NzSliderComponent;

  ngAfterViewInit(): void {
    if (this.to['slider']?.marks) {
      this.slider.nzMarks = this.to['slider']?.marks;
    }
  }
}
