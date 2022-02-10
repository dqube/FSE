import { Component, ViewEncapsulation } from '@angular/core';
import { FieldType, FieldTypeConfig } from '@ngx-formly/core';

@Component({
  selector: 'nu-formly-field-tabs',
  preserveWhitespaces: false,
  encapsulation: ViewEncapsulation.None,
  // TODO
  // changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <nz-tabset>
      [nzSelectedIndex]="to.nzSelectedIndex"
      [nzAnimated]="to.nzAnimated"
      [nzSize]="to.nzSize || 'default'"
      [nzTabBarStyle]="to.nzTabBarStyle"
      [nzTabPosition]="to.nzTabPosition || 'top'"
      [nzType]="to.nzType || 'line'"
      [nzTabBarGutter]="to.nzTabBarGutter"
      [nzHideAll]="to.nzHideAll || false"
      [nzShowPagination]="to.nzShowPagination || true"
      [nzLinkRouter]="to.nzLinkRouter || false"
      [nzLinkExact]="to.nzLinkExact || true"
      [nzCanDeactivate]="to.nzCanDeactivate"
      <nz-tab
        *ngFor="let tab of field.fieldGroup;"
        [nzTitle]="tab.templateOptions!['label']?? ''"
        [nzDisabled]="tab.templateOptions?.disabled">
          <formly-field [field]="tab"></formly-field>
      </nz-tab>
    </nz-tabset>
  `,
})
export class FormlyFieldTabsComponent extends FieldType<FieldTypeConfig> { 

}
