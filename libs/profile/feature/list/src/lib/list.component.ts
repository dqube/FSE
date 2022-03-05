/* eslint-disable @angular-eslint/component-selector */
import { Component } from '@angular/core';
import { DataService } from '@fse/profile/data';
import { Profile } from '@fse/profile/model';
import { NuColumn, NuData } from '@fse/ui/table';

@Component({
  selector: 'profile-list',
  template: `
    <nz-page-header nzTitle="Profiles"
      ><nz-page-header-extra>
        <button nz-button nzType="primary">Add New Profile</button>
      </nz-page-header-extra></nz-page-header
    >
    <nu-table [columns]="columns" [data]="data"></nu-table>
  `,
  styles: [],
})
export class ListComponent {
  /**
   *
   */

  profiles: Profile[] = [];
  data: NuData[] = [];
  profile: Profile = {
    name: '',
    email: '',
    empId: '',
    mobile: '',
    skills: [],
  };
  constructor(private dataService: DataService) {
    dataService.getProfile('CTS469001').subscribe((data) => {
      console.log(data);
      this.profile = data;
    });
    const data = { EmpId: 'CTS469001', Name: '', skill: '' };
    dataService.search(data).subscribe((data) => {
      console.log('from search');
      console.log(data)
      this.profiles = data;
      this.data=data;
    });
  }
  columns: NuColumn[] = [
    {
      name: 'Emp Id',
      key: 'empId',
      sortable: true,
      width: '100px',
    },
    {
      name: 'Name',
      key: 'name',
    },
  ];
  
  // data: NuData[] = [
  //   {
  //     EmpId: 1,
  //     Name: 'Xiao Ming',
  //   },
  //   {
  //     EmpId: 2,
  //     Name: 'Xiao Wang',
  //   },
  // ];
}
