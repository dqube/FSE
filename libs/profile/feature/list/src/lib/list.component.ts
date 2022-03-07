/* eslint-disable @angular-eslint/component-selector */
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '@fse/profile/data';
import { Profile } from '@fse/profile/model';
import { Subject } from 'rxjs';

@Component({
  selector: 'profile-list',
  template: `
    <nz-page-header nzTitle="Search Profile" *ngIf="profiles"
      ><nz-page-header-extra>
        <button nz-button nzType="primary" (click)="createProfile()">Add New Profile</button>
      </nz-page-header-extra></nz-page-header
    >
    <div class="seach-container">
      <form [formGroup]="searchForm" (ngSubmit)="search()">
        <div class="form-group">
          <div class="search-options">
            <nz-form-item>
              <nz-form-control>
                <nz-radio-group
                  nzName="radiogroup"
                  formControlName="searchby"
                  nzButtonStyle="solid"
                  (change)="searchForm.value.searchvalue = ''"
                >
                  <label nz-radio nzValue="name">Name</label>
                  <label nz-radio nzValue="id">Asociate Id</label>
                  <label nz-radio nzValue="skill">Skill</label>
                </nz-radio-group>
              </nz-form-control>
            </nz-form-item>
            <div nz-row [nzGutter]="24">
              <div nz-col [nzSpan]="6">
                <nz-form-item *ngIf="searchForm.value.searchby === 'name'">
                  <nz-form-label>Name </nz-form-label>
                  <nz-form-control>
                    <input
                      nz-input
                      placeholder="placeholder"
                      formControlName="searchvalue"
                    />
                  </nz-form-control>
                </nz-form-item>
                <nz-form-item *ngIf="searchForm.value.searchby === 'id'">
                  <nz-form-label>Associate ID </nz-form-label>
                  <nz-form-control>
                    <input
                      nz-input
                      placeholder="placeholder"
                      formControlName="searchvalue"
                    />
                  </nz-form-control>
                </nz-form-item>
                <nz-form-item *ngIf="searchForm.value.searchby === 'skill'">
                  <nz-form-label>Skill </nz-form-label>
                  <nz-form-control>
                    <input
                      nz-input
                      placeholder="placeholder"
                      formControlName="searchvalue"
                    />
                  </nz-form-control>
                </nz-form-item>
                <button nz-button nzType="primary"[disabled]="!searchForm.valid">Search</button>
              </div>
            </div>
          </div>

       
        </div>
      </form>
    </div>
    <nz-table nzShowSizeChanger [nzData]="profiles">
      <thead>
        <tr>
          <th nzColumnKey="empId">Associate ID</th>
          <th nzColumnKey="name">Name</th>
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
          <td>
          <a [routerLink]="['/profiles/edit']"> Edit </a>
          </td>
        </tr>
      </tbody>
    </nz-table>
  `,
  styles: [],
})
export class ListComponent implements OnInit, OnDestroy {
  /**
   *
   */

  profiles: Profile[] = [];
  searchPerformed = false;
  searchForm: FormGroup;
  //profes$: Observable<Profile[]>;
  profile: Profile = {
    name: '',
    email: '',
    empId: '',
    mobile: '',
    skills: [],
  };

  constructor(
    private dataService: DataService,
    private _formBuilder: FormBuilder,
    private router:Router
  ) {
    this.searchForm = _formBuilder.group({
      searchby: ['name', Validators.required],
      searchvalue: ['', Validators.required],
    });
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
  }
  private unsubscribe = new Subject<void>();

  ngOnInit(): void {
    this.getProfiles();
  }
  getProfiles() {
    this.dataService.getAll().subscribe((data) => {
      this.profiles = data;
      console.log(this.profiles);
    });
  }
  ngOnDestroy(): void {
    this.unsubscribe.next();
    // Complete the notifying Observable to remove it
    this.unsubscribe.complete();
  }
  search() {
    const payload = {
      EmpId:
        this.searchForm.value.searchby == 'id'
          ? this.searchForm.value.searchvalue
          : '',
      Name:
        this.searchForm.value.searchby == 'name'
          ? this.searchForm.value.searchvalue
          : '',
      skill:
        this.searchForm.value.searchby == 'skill'
          ? this.searchForm.value.searchvalue
          : '',
    };
    this.dataService.search(payload).subscribe((res) => {
      this.profiles = res;
      this.searchPerformed = true;
    });
  }
  createProfile(){
    this.router.navigate(['profiles/create']);
  }
}
