import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LookupService } from '@fse/lookup';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { forkJoin, mergeMap, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FormdataService {
  constructor(private http: HttpClient,private lookup: LookupService) {}

  getUserData(): Observable<any> {
    
    return forkJoin([this.getUser(), this.getFields()]);
  }
getFieldsMultiple(){
  this.http
      .get<FormlyFieldConfig[]>('assets/data/form.json')
      .pipe(
        mergeMap((fields) =>  this.lookup.bindLookup(fields)
        )
        
      )
      .subscribe((result) => console.log('merged: ', result));
//   this.httpClient
//   .get('https://jsonplaceholder.typicode.com/posts/1')
//   .pipe(
//     mergeMap((res: any) =>
//       this.httpClient.get(
//         'https://jsonplaceholder.typicode.com/users/' + res.userId
//       )
//     )
//   )
//   .subscribe((authorDetails: any) => {
//     this.userDetails = authorDetails;
//     console.log(authorDetails);
//   });
// this.httpClient
//   .get('https://jsonplaceholder.typicode.com/posts/1')
//   .pipe(
//     switchMap((fields: any) =>
//       this.httpClient
//         .get('https://jsonplaceholder.typicode.com/users/' + fields.userId)
//         .pipe(map((lookup) => ({ fields, lookup })))
//     )
//   )
//   .subscribe((result) => console.log('merged: ', result));
}
  getUser()  {
    return this.http.get<{ firstName: string, lastName: string }>('assets/data/user.json');
  }

  getFields() {      
    return this.http.get<FormlyFieldConfig[]>('assets/data/form.json');
  }
  bindEvents(fields:FormlyFieldConfig[]) {
    fields.map((f) => {
      if (f.type=== 'number') {
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
        "value": 1,
        "label": "chennai"
      },
      {
        "value": 2,
        "label": "madurai"
      }
    ]
  }
  getoptions() {
    return [
    {
      "value": "zhejiang",
      "label": "Zhejiang",
      "children": [
        {
          "value": "hangzhou",
          "label": "Hangzhou",
          "children": [
            {
              "value": "xihu",
              "label": "West Lake",
              "isLeaf": true
            }
          ]
        },
        {
          "value": "ningbo",
          "label": "Ningbo",
          "isLeaf": true
        }
      ]
    },
    {
      "value": "jiangsu",
      "label": "Jiangsu",
      "children": [
        {
          "value": "nanjing",
          "label": "Nanjing",
          "children": [
            {
              "value": "zhonghuamen",
              "label": "Zhong Hua Men",
              "isLeaf": true
            }
          ]
        }
      ]
    }
  ]
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
        "label": "Apple",
        "value": "Apple",
        "disabled": true,
        "checked": true
      },
      {
        "label": "Pear",
        "value": "Pear",
        "disabled": true
      },
      {
        "label": "Orange",
        "value": "Orange"
      }
    ]
  }
  getRadioOptions() {
    return [
      { label: 'Apple', value: 'Apple', disabled: false },
      { label: 'Pear', value: 'Pear', disabled: false },
      { label: 'Orange', value: 'Orange' },
    ]
  }
  getFruits() {
    return [
      {
        "label": "Apple",
        "value": "Apple",
        "disabled": true
      },
      {
        "label": "Apple2",
        "value": "Apple2",
        "disabled": true,
        "hide": true
      },
      {
        "label": "Pear",
        "value": "Pear",
        "disabled": false
      },
      {
        "label": "Orange",
        "value": "Orange"
      }
    ]
  }
}
