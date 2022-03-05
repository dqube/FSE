import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { lookup } from '@fse/lookup';
import { DataService } from '@fse/profile/data';
import { Profile, ProfileVM } from '@fse/profile/model';
import { FormlyFieldConfig, FormlyFormOptions } from '@ngx-formly/core';

@Component({
  selector: 'fse-detail',
  template: `
<nz-page-header nzTitle="Profile"><nz-page-header-extra>        
        <button nz-button nzType="primary">Add New Profile</button>
      </nz-page-header-extra></nz-page-header>
 <app-form  [form]="form" [model]="model" [options] = "options"
    [fields]="fields" (formSubmit)="onSubmit($event)"></app-form>

  `,
  styles: [],
})
export class DetailComponent implements OnInit {
  form = new FormGroup({});
  model!: ProfileVM;
  profile!: Profile;
  constructor(private dataService: DataService,private route: ActivatedRoute) {
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
   // this.fields = this.mapFields(this.route.snapshot.data['fieldData'][0]);
   this.fields = this.route.snapshot.data['fieldData'][0];
   //this.profile =this.dataService.initProfile()
   //console.log(this.profile)
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

      f.templateOptions['autoComplete']['dataSource'] =f.templateOptions?.['options']
      //  this.dataService.getCitities();
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
      //f.templateOptions['options'] = this.dataService.getFruits();
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
  onSubmit(evt :unknown): void {
    console.log('After Mapping');
    this.profile =this.dataService.mapToProfile(this.model);
        
        
        //console.log(JSON.stringify(this.profile))
        this.dataService.create(this.profile).subscribe((data) => {
          console.log('After save');
          console.log(data)
         
        });;
//         this.profile.skills= [
// { proficiency : this.model.tech1, name :'', isTechnical :true },
// { proficiency : this.model.tech2, name :'', isTechnical :true }
//         ]

       
    console.log(JSON.stringify(this.model, null, 2));
  }
}
