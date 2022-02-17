/* eslint-disable @angular-eslint/component-selector */
import { Component } from '@angular/core';
import { NuColumn, NuData } from '@fse/ui/table';

@Component({
  selector: 'profile-list',
  template: `
   <nu-table [columns]="columns" [data]="data"></nu-table>
  `,
  styles: [
  ]
})
export class ListComponent {
  columns: NuColumn[] = [
    {
      name: 'c1',
      key: 'id',
      sortable: true,
      style: { color: 'red' },
      width: '50px'
    },
    {
      name: 'c2',
      key: 'name',
      hidden: () => {
        return false;
      }
    },
  ];

  data: NuData[] = [
    {
      id: 1,
      name: 'Xiao Ming'
    },
    {
      id: 2,
      name: 'Xiao Wang'
    }
  ];

}
