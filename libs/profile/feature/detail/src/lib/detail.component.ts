import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { lookup, LookupService } from '@fse/lookup';
import { FormdataService } from '@fse/profile/data';
import { FormlyFieldConfig, FormlyFormOptions } from '@ngx-formly/core';

@Component({
  selector: 'fse-detail',
  template: `
  <div *ngIf="fields" > 
  <!-- <formly-form
  [model]="model"
  [fields]="fields"
  [options]="options"
  [form]="form">
</formly-form> -->
<app-form  [form]="form" [model]="model" [options] = "options"
    [fields]="fields" (formSubmit)="onSubmit($event)"></app-form>
  </div>
  `,
  styles: [],
})
export class DetailComponent implements OnInit {
  form = new FormGroup({});
  model: any = {};
  constructor(private dataService: FormdataService, private lookup: LookupService) {}
  options: FormlyFormOptions = {
    formState: {
      labelWidth: '25px',
      layout: 'vertical',
    },
  };
  fields: FormlyFieldConfig[] = []
  // fields: FormlyFieldConfig[] = [
  //   {
  //     key: 'password',
    
  //     fieldGroup: [
  //       {
  //         key: 'password',
  //         type: 'input',
  //         templateOptions: {
  //           type: 'password',
  //           label: 'Password',
  //           required: true,
  //         },
  //       },
  //       {
  //         key: 'passwordConfirm',
  //         type: 'input',
  //         templateOptions: {
  //           type: 'password',
  //           label: 'Confirm Password',
  //           required: true,
  //         },
  //       },
  //     ],
  //   },
  //   {
  //     type: 'date-picker',
  //     templateOptions: {
  //       type: 'range',
  //       hideLabel: true,
  //     }
  //   },
  //   {
  //     type: 'transfer',
  //     templateOptions: {
  //       hideLabel: true,
  //       nzDataSource: [
  //         { key: '1', title: 'content1', disabled: false },
  //         { key: '2', title: 'content2', disabled: true },
  //         { key: '3', title: 'content3', disabled: false },
  //         { key: '4', title: 'content4', disabled: true },
  //         { key: '5', title: 'content5', disabled: false },
  //       ],
  //       nzTitles: ['Source', 'Target'],
  
  //     }
  //   },
  //   {
  //     type: 'time-picker',
  //     defaultValue: new Date(),
  //     templateOptions: {
  //       hideLabel: true,
  //       nzDefaultOpenValue: new Date(0, 0, 0, 0, 0, 0),
  //     }
  //   },
  //   {
  //     type: 'cascader',
  //     defaultValue: ['zhejiang', 'hangzhou', 'xihu'],
  //     wrappers: ['form-field-vertical'],
  //     templateOptions: {
  //       hideLabel: true,
  //       nzOptions: [
  //         {
  //           value: 'zhejiang',
  //           label: 'Zhejiang',
  //           children: [
  //             {
  //               value: 'hangzhou',
  //               label: 'Hangzhou',
  //               children: [
  //                 {
  //                   value: 'xihu',
  //                   label: 'West Lake',
  //                   isLeaf: true
  //                 }
  //               ]
  //             },
  //             {
  //               value: 'ningbo',
  //               label: 'Ningbo',
  //               isLeaf: true
  //             }
  //           ]
  //         },
  //         {
  //           value: 'jiangsu',
  //           label: 'Jiangsu',
  //           children: [
  //             {
  //               value: 'nanjing',
  //               label: 'Nanjing',
  //               children: [
  //                 {
  //                   value: 'zhonghuamen',
  //                   label: 'Zhong Hua Men',
  //                   isLeaf: true
  //                 }
  //               ]
  //             }
  //           ]
  //         }
  //       ]
  //     }
  //   },
  //   {
  //     type: 'button',
  //     wrappers: ['form-field-vertical'],
  //     templateOptions: {
  //       hideLabel: true,
  //       options: [
  //         {
  //           label: 'aa',
  //           nzType: 'primary',
  //           nzLoading: true,
  //         },
  //         {
  //           label: 'bb',
  //           disabled: true,
  //         }
  //       ],
  //     }
  //   }, {
  //     type: 'rate',
  //     defaultValue: 2.5,
  //     templateOptions: {
  //       nzAllowHalf: true,
    
  //     },
  //   }, {
  //     type: 'alert',
  //     templateOptions: {
  //       nzType: 'success',
  //     },
    
  //   }, {
  //     type: 'empty',
    
  //   }, {
  //     key: 'input',
  //     type: 'input',
  //     defaultValue: 'aaa',
  //     wrappers: ['form-field-vertical'],
  //     templateOptions: {
  //       label: 'Input',
  //       placeholder: 'please input.',
  //       required: true,
  //     },
   
  //     validators: {
  //       required: {
        
  //         message: () => 'required',
  //       },
  //     },
  //   },
  //   {
  //     key: 'checkbox',
  //     type: 'checkbox',
  //     wrappers: ['form-field-vertical'],
  //     templateOptions: {
  //       label: 'Checkbox',
  //       hideLabel: false,
  //       options: [
  //         {
  //           label: 'aa',
  //           value: 'aa',
  //         },
  //         {
  //           label: 'bb',
  //           value: 'bb',
  //           disabled: true,
  //         }
  //       ],
  //     }
  //   },
  //   {
  //     key: 'select',
  //     type: 'select',
  //     defaultValue: 'aa',
  //     wrappers: ['form-field-vertical'],
  //     templateOptions: {
  //       label: 'Select',
  //       options: [
  //         {
  //           label: 'aa',
  //           value: 'aa',
  //         },
  //         {
  //           label: 'bb',
  //           value: 'bb',
  //           disabled: true,
  //         }
  //       ],
  //     }
  //   },
  //   {
  //     key: 'radio',
  //     type: 'radio',
  //     wrappers: ['form-field-vertical'],
  //     defaultValue: 'aa',
  //     templateOptions: {
  //       label: 'Radio',
  //       options: [
  //         {
  //           label: 'aa',
  //           value: 'aa',
  //         },
  //         {
  //           label: 'bb',
  //           value: 'bb',
  //         }
  //       ],
  //     },
  //   },
  //   {
  //     key: 'radio-button',
  //     type: 'radio-button',
  //     wrappers: ['form-field-vertical'],
  //     defaultValue: 'aa',
  //     templateOptions: {
  //       label: 'Radio Button',
  //       options: [
  //         {
  //           label: 'aa',
  //           value: 'aa',
  //         },
  //         {
  //           label: 'bb',
  //           value: 'bb',
  //         }
  //       ],
  //     },
  //   },
  //   {
  //     key: 'switch',
  //     type: 'switch',
  //     wrappers: ['form-field-vertical'],
  //     templateOptions: {
  //       label: 'Switch',
  //     }
  //   },
  //   {
  //     key: 'slider',
  //     type: 'slider',
  //     wrappers: ['form-field-vertical'],
  //     templateOptions: {
  //       label: 'Slider',
  //     }
  //   },
  // ];
  lookups: lookup[] = [];
  // fields: FormlyFieldConfig[] = [
  //   {
  //     key: 'email',
  //     type: 'input',
  //     templateOptions: {
  //       label: 'Email address',
  //       placeholder: 'Enter email',
  //       required: true,
  //     }
  //   }
  // ];
  ngOnInit(): void {
    // this.dataService.getFieldsMultiple();
    this.getFields();
  }

  getFields(): void {
    this.dataService.getUserData().subscribe(([model, fields]) => {
      this.form = new FormGroup({});
      this.model = model;
      console.log(fields)
      this.fields = this.mapFields(fields);
    });
   
  }
  /**
   * Adjust the JSON fields loaded from the server.
   */
  mapFields(fields: FormlyFieldConfig[]) {
    return fields.map((f) => {
    
      if (f.fieldGroup) {
        f.fieldGroup.forEach((f) => this.bindEvents(f));
      }
      this.bindEvents(f);
      return f;
    });
  }

  private bindEvents(f: FormlyFieldConfig) {
    if (f.type === 'number' && f.templateOptions && !f.templateOptions?.['number']) {
      f.templateOptions['number']['parser'] = (value: string): string => {
        return value.replace(' %', '');
      };
      f.templateOptions['number']['modelChange'] = (
        value: string | number
      ): string | number => {
        return value;
      };
    }
    if (f.type === 'tree-select' && f.templateOptions && !f.templateOptions?.['treeSelect']) {
      f.templateOptions['treeSelect']['nodes'] = this.dataService.getNodes();
    }
    if (f.type === 'radio' && f.templateOptions) {
      f.templateOptions['options'] = this.dataService.getRadioOptions();
    }
    if (
      f.key === 'city' &&
      f.type === 'autoComplete' &&
      f.templateOptions?.['autoComplete']
    ) {
      f.templateOptions['autoComplete']['dataSource'] =
        this.dataService.getCitities();
    }
    if (f.key === 'cascader' && f.type === 'cascader' && f.templateOptions) {
      f.templateOptions['options'] = this.dataService.getoptions();
      f.templateOptions['cascader']['modelChange'] = (value: any[]) => {
        console.log(value);
      };
      f.templateOptions['cascader']['visibleChange'] = (visible:any[]) => {
        console.log(visible);
      };
      f.templateOptions['cascader']['selectionChange'] = (value:any[]) => {
        console.log(value);
      };
    }
    if (f.key === 'checkbox' && f.type === 'checkbox' && f.templateOptions) {
      f.templateOptions['options'] = this.dataService.getCheckboxOptions();
    }
    if (f.key === 'fruit' && f.type === 'select' && f.templateOptions) {
      f.templateOptions['options'] = this.dataService.getFruits();
    }
    if (
      f.key === 'transfer' &&
      f.type === 'transfer' &&
      f.templateOptions?.['transfer']
    ) {
      // f.templateOptions['transfer']['dataSource'] = this.list;
      // f.templateOptions['transfer']['resutlMap'] = (items: TransferItem[]) => {
      //   return items.map((x) => x['key']);
      // };
    }
    if (f.type === 'date' && f.templateOptions?.['date']) {
      // f.templateOptions['date']['onOpenChange'] = "this.bindDate(true)";
      f.templateOptions['date']['onOpenChange'] = (value: boolean) => {
        this.bindDate(value);
      };
      f.templateOptions['date']['onOk'] = (value: boolean) => {
        console.log(value);
      };
    }
    if (f.type === 'rangeDate' && f.templateOptions?.['range']) {
      f.templateOptions['range']['onOpenChange'] = (value: boolean) => {
        console.log(value);
      };
      f.templateOptions['range']['onOk'] = (value: boolean) => {
        console.log(value);
      };
    }
    if (f.type === 'time' && f.templateOptions?.['time']) {
      // f.templateOptions['time']['onOpenChange'] = (value: boolean) => {
      //   console.log(value);
      // }
      // f.templateOptions['time']['onOk'] = (value: boolean) => {
      //   console.log(value);
      // }
    }
    if (f.type === 'checkbox2' && f.templateOptions?.['checkbox']) {
      ('// Not working need to check');
      // f.templateOptions.change: (value: boolean) => {
      //   console.log(value);
      // };
    }
    // console.log('Bind events')
    // console.log(f.key);
    // console.log(f);
  }

  bindDate(value: boolean) {
    console.log(value);
  }

  onSubmit(evt :any) {
    console.log(JSON.stringify(this.model, null, 2));
  }
}
