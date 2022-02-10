import { Injectable } from '@angular/core';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { NumberFormly } from '../input';

@Injectable({
  // declares that this service should be created
  // by the root application injector.
  providedIn: 'root',
})
export class FormlyhelperService {


  bindFields(f:FormlyFieldConfig) :FormlyFieldConfig{
    if (f.type=== 'number') {
      const tp= <NumberFormly> {
        width:f.templateOptions?.['number']?.['width'],
        step: f.templateOptions?.['step']?.['step'],
        precision: 1,
        formatter:(value: number) : string =>{
          if (value === null || value === undefined) return null;
          return `${value} %`;
        },
        parser :(value: string) => {
          return value.replace(' %', '');
        },
        modelChange: (value: number) =>{
          console.log('model change')
          console.log(value);
          return;
        }
      }
      f.templateOptions['number']= tp;
     console.log(f.templateOptions);
    }
    return f;
  }
}
