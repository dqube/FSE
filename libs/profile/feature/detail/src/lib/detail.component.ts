import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { lookup } from '@fse/lookup';
import { FormdataService } from '@fse/profile/data';
import { FormlyFieldConfig, FormlyFormOptions } from '@ngx-formly/core';

@Component({
  selector: 'fse-detail',
  template: `

 <app-form  [form]="form" [model]="model" [options] = "options"
    [fields]="fields" (formSubmit)="onSubmit($event)"></app-form>

  `,
  styles: [],
})
export class DetailComponent implements OnInit {
  form = new FormGroup({});
  model: unknown = {};
  constructor(private dataService: FormdataService,private route: ActivatedRoute) {
   // this.getFields();
  }
  options: FormlyFormOptions = {
    formState: {
      labelWidth: '25px',
      layout: 'vertical',
    },
  };
  fields: FormlyFieldConfig[] = [];
  
  lookups: lookup[] = [];
  
  ngOnInit() {
    this.model = this.route.snapshot.data['fieldData'][1];
    this.fields = this.mapFields(this.route.snapshot.data['fieldData'][0]);
  }
 
  /**
   * Adjust the JSON fields loaded from the server.
   */
  mapFields(fields: FormlyFieldConfig[]) {
    return fields.map((f) => {
    
      if (f.fieldGroup) {
        console.log(f)
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

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  onSubmit(evt :unknown) {
    console.log(JSON.stringify(this.model, null, 2));
  }
}
