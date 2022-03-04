/* eslint-disable @angular-eslint/component-selector */
import { Component } from '@angular/core';
import { NuColumn, NuData } from '@fse/ui/table';

@Component({
  selector: 'profile-list',
  template: `
  <nz-page-header nzTitle="Profiles"><nz-page-header-extra>        
        <button nz-button nzType="primary">Add New Profile</button>
      </nz-page-header-extra></nz-page-header>
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
