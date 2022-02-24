import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lookup, LookupService } from '@fse/lookup';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { forkJoin, mergeMap, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FormdataService {
  constructor(private http: HttpClient, private lookupService: LookupService) {}

  getUserData(): Observable<any> {
    return forkJoin([this.getUser(), this.getFields()]);
  }
  getFieldsMultiple() {
    this.http
      .get<FormlyFieldConfig[]>('assets/data/form.json')
      .pipe(mergeMap((fields) => this.lookupService.bindLookup(fields)))
      .subscribe((result) => console.log('merged: ', result));
   
  }
  getUser() {
    return this.http.get<{ firstName: string; lastName: string }>(
      'assets/data/user.json'
    );
  }

  getFields() {
    return this.http.get<FormlyFieldConfig[]>('assets/data/form.json');
  }
  getLookup() {
    return this.http.get<lookup[]>('assets/data/lookup.json');
  }
  bindLookups(fields: FormlyFieldConfig[]): FormlyFieldConfig[] {
    console.log('---- from bind lookups----');
    const lookups: lookup[] = this._extractLookups(fields);
    console.log(lookups);
    console.log('---- from bind lookups ends----');
    // ToDo: need to get the lookup json and fill it in formlyfield
    // const serverLookups:lookup[] = this.getLookup().subscribe(); 
    this._bindLookups(fields, lookups);
    return fields;
  }
  private _bindLookups(
    fields: FormlyFieldConfig[],
    lookups: lookup[]
  ): FormlyFieldConfig[] {
    fields.forEach((f) => {
      if (f.fieldGroup && f.fieldGroup.length > 0) {
        this.bindLookups(f.fieldGroup);
      }
      if (f.templateOptions?.['lookup']) {
        const templateOptions = f.templateOptions;
        f.templateOptions.options = lookups.filter(
          (lookup) => lookup.categoryId === templateOptions?.['lookup']?.['id']
        );
      }
    });
    return fields;
  }
  private _extractLookups(fields: FormlyFieldConfig[]): lookup[] {
    const lookups: lookup[] = [];
    fields.forEach((f) => {
      if (f.fieldGroup && f.fieldGroup.length > 0) {
        console.log(f.fieldGroup);
        this._extractLookups(f.fieldGroup);
      }
      if (f.templateOptions) {
        const templateOptions = f.templateOptions;
        if (templateOptions?.['lookup']) {
          lookups.push(templateOptions['lookup']);
        }
      }
    });

    return lookups;
  }
  bindEvents(fields: FormlyFieldConfig[]) {
    fields.map((f) => {
      if (f.type === 'number') {
        // const numbr :NumberFormly=f.templateOptions?.['number'];
        // const numbr =this.helpr.bindFields(f);
        //  console.log(numbr);
        // f.templateOptions['number'] =numbr;

        console.log();
      }
      console.log(f);
      return f;
    });
  }
  getCitities() {
    return [
      {
        value: 1,
        label: 'chennai',
      },
      {
        value: 2,
        label: 'madurai',
      },
    ];
  }
  getoptions() {
    return [
      {
        value: 'zhejiang',
        label: 'Zhejiang',
        children: [
          {
            value: 'hangzhou',
            label: 'Hangzhou',
            children: [
              {
                value: 'xihu',
                label: 'West Lake',
                isLeaf: true,
              },
            ],
          },
          {
            value: 'ningbo',
            label: 'Ningbo',
            isLeaf: true,
          },
        ],
      },
      {
        value: 'jiangsu',
        label: 'Jiangsu',
        children: [
          {
            value: 'nanjing',
            label: 'Nanjing',
            children: [
              {
                value: 'zhonghuamen',
                label: 'Zhong Hua Men',
                isLeaf: true,
              },
            ],
          },
        ],
      },
    ];
  }
  getNodes() {
    return [
      {
        title: 'parent 1',
        key: '100',
        children: [
          {
            title: 'parent 1-0',
            key: '1001',
            children: [
              { title: 'leaf 1-0-0', key: '10010', isLeaf: true },
              { title: 'leaf 1-0-1', key: '10011', isLeaf: true },
            ],
          },
          {
            title: 'parent 1-1',
            key: '1002',
            children: [{ title: 'leaf 1-1-0', key: '10020', isLeaf: true }],
          },
        ],
      },
    ];
  }
  getCheckboxOptions() {
    return [
      {
        label: 'Apple',
        value: 'Apple',
        disabled: true,
        checked: true,
      },
      {
        label: 'Pear',
        value: 'Pear',
        disabled: true,
      },
      {
        label: 'Orange',
        value: 'Orange',
      },
    ];
  }
  getRadioOptions() {
    return [
      { label: 'Apple', value: 'Apple', disabled: false },
      { label: 'Pear', value: 'Pear', disabled: false },
      { label: 'Orange', value: 'Orange' },
    ];
  }
  getFruits() {
    return [
      {
        label: 'Apple',
        value: 'Apple',
        disabled: true,
      },
      {
        label: 'Apple2',
        value: 'Apple2',
        disabled: true,
        hide: true,
      },
      {
        label: 'Pear',
        value: 'Pear',
        disabled: false,
      },
      {
        label: 'Orange',
        value: 'Orange',
      },
    ];
  }
}
