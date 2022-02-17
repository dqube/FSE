import { Injectable } from '@angular/core';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { lookup } from './lookup.model';

@Injectable({
  providedIn: 'root'
})
export class LookupService {
  lookups: lookup[] = [];
  codeLookups: lookup[] = [];
  constructor() { }

  // public _getCodeLookup(fields: FormlyFieldConfig[]): lookup[] {
  //   this.extractlookups(fields);
  //   const codeLookups: lookup[] = this.lookups;
  //   this.lookups = null;
  //   return codeLookups;
  // }

  // private extractlookups(fields: FormlyFieldConfig[]) {
  //   fields.forEach((f) => {
  //     if (f.fieldGroup && f.fieldGroup.length > 0) {
  //       this.extractlookups(f.fieldGroup);
  //     }
  //     if (f?.['templateOptions']?.['lookup']) {
  //       const templateOptions = f.templateOptions;
  //       if (templateOptions['lookup']) {
  //         this.lookups.push(<lookup>templateOptions['lookup']);
  //       }
  //     }
  //   });
  // }


  bindLookup(fields: FormlyFieldConfig[] = []) {
    this._getCodeLookup(fields);
    const lookups: lookup[] = this._getLookups(this.codeLookups);
    this._bindLookup(fields, lookups);
    return fields;
  }


  private _bindLookup(fields: FormlyFieldConfig[], lookups: lookup[]) {
    fields.forEach((f) => {
      if (f.fieldGroup && f.fieldGroup.length > 0) {
        this._bindLookup(f.fieldGroup, lookups);
      }
      // if(f.fieldArray){
      //   this._bindLookup(f.fieldArray,lookups);
      // }
      if (f.templateOptions) {
        const templateOptions = f.templateOptions;
        if (templateOptions?.['lookup']?.['options']) {
          f.templateOptions.options = lookups.filter(
            lookup => lookup.categoryId === templateOptions?.['lookup']?.['id']);;
        }
      }
    });
  }

  //this._buildForm( fieldGroup);

  private _getCodeLookup(fields: FormlyFieldConfig[]) {
    fields.forEach((f) => {
      if (f.fieldGroup && f.fieldGroup.length > 0) {
        this._getCodeLookup(f.fieldGroup);
      }
      // if(f.fieldArray){
      //   this._getCodeLookup(f.fieldGroup);
      // }
      if (f.templateOptions) {
        const templateOptions = f.templateOptions;
        if (templateOptions?.['lookup']) {
          this.codeLookups.push(templateOptions['lookup']);
        }
      }
    });
  }



  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  private _getLookups(codeLookups: lookup[] = []): lookup[] {
    return [
      { id: 1, desc: 'test1', categoryId: 1, value: '1', label: 'Inpatient' },
      { id: 2, desc: 'test2', categoryId: 1, value: '2', label: 'Outpatient' },
      { id: 3, desc: 'test2', categoryId: 2, value: '2', label: 'BHInpatient' },
      { id: 4, desc: 'test2', categoryId: 2, value: '2', label: 'BHOutpatient' }
    ]
  }
  // mapFields(fields: FormlyFieldConfig[]) {
  //   return fields.map((f) => {

  //    if(f.fieldGroup) {
  //     f.fieldGroup.forEach((f) => this.bindEvents(f));
  //    }
  //     this.bindEvents(f);    
  //     return f;
  //   });    
  // }


}
