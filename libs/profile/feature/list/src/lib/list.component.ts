/* eslint-disable @angular-eslint/component-selector */
import { Component } from '@angular/core';
import { DataService } from '@fse/profile/data';
import { Profile } from '@fse/profile/model';
import { NuColumn, NuData } from '@fse/ui/table';

@Component({
  selector: 'profile-list',
  template: `
    <nz-page-header nzTitle="Profiles" *ngIf="profiles"
      ><nz-page-header-extra>
        <button nz-button nzType="primary">Add New Profile</button>
      </nz-page-header-extra></nz-page-header
    >
    <nz-table nzShowSizeChanger [nzData]="profiles" >
      <thead>
        <tr>
          <th nzColumnKey="empId">Associate ID</th>
          <th nzColumnKey="name">Gender</th>
          <th nzColumnKey="email">Email</th>
          <th nzColumnKey="mobile">Mobile</th>
        </tr>
      </thead>
      <tbody>
        <tr *ngFor="let data of profiles">
          <td>{{ data.empId }}</td>
          <td>{{ data.name }}</td>
          <td>{{ data.email }}</td>
          <td>{{ data.mobile }}</td>
        </tr>
      </tbody>
    </nz-table>
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
    // dataService.getProfile('CTS7001').subscribe((data) => {
    //   console.log(data);
    //   this.profile = data;
    // });
    // const data = { EmpId: 'CTS7001', Name: '', skill: '' };
    // dataService.search(data).subscribe((data) => {
    //   console.log('from search');
    //   console.log(data)
    //   this.profiles = data;
    //   this.data=data;
    // });
    dataService.getAll().subscribe((data) => {
      console.log(JSON.stringify(data));
      
      this.profiles = data;
      console.log(' after mapping');
      console.log(this.profiles);
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


}
