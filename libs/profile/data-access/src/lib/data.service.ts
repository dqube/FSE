import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lookup, LookupService } from '@fse/lookup';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private http: HttpClient, private lookupService: LookupService) { }

 
  getUser() {
    return this.http.get<{ firstName: string; lastName: string }>(
      'assets/data/user.json'
    );
  }

  getFields() {
    return this.http.get<FormlyFieldConfig[]>('assets/data/form.json');
  }

  getAllLookups() {
    return this.http.get<lookup[]>('assets/data/lookup.json');
  }

  public bindLookups(fields: FormlyFieldConfig[]) {
    const lookups: lookup[] = [];
    this.extractLookups(fields, lookups);
    return this.getAllLookups().pipe(
      map(allLookups =>
        allLookups.filter(m =>
          lookups.some(n => n.categoryId == m.categoryId))),
      map(filteredLookups => {
        this._bindLookups(fields, filteredLookups);
        return fields;
      }));
  }

  _bindLookups(
    fields: FormlyFieldConfig[],
    lookups: lookup[]
  ) {
    fields.forEach((f) => {
      if (f.fieldGroup && f.fieldGroup.length > 0) {
        this._bindLookups(f.fieldGroup, lookups);
      }
      if (f.templateOptions?.['lookup']) {
        const templateOptions = f.templateOptions;
        f.templateOptions.options = lookups.filter(
          
          (lookup) => lookup.categoryId === templateOptions?.['lookup']?.['categoryId']
        );
      }
    });
  }

  public extractLookups(fields: FormlyFieldConfig[], lookups: lookup[]) {
    fields.forEach((f) => {
      if (f.fieldGroup && f.fieldGroup.length > 0) {
        this.extractLookups(f.fieldGroup, lookups);
      }
      if (f.templateOptions) {
        const templateOptions = f.templateOptions;
        if (templateOptions?.['lookup']) {
          lookups.push(templateOptions['lookup']);
        }
      }
    });
  }

  bindEvents(fields: FormlyFieldConfig[]) {
    fields.map((f) => {
      if (f.type === 'number') {
        // const numbr :NumberFormly=f.templateOptions?.['number'];
        // const numbr =this.helpr.bindFields(f);
        // f.templateOptions['number'] =numbr;

        console.log();
      }
      console.log(f);
      return f;
    });
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
}