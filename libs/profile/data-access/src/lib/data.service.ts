import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lookup, LookupService } from '@fse/lookup';
import { Profile, ProfileVM } from '@fse/profile/model';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  profileapi = 'https://profileapi20220304100041.azurewebsites.net/api/Profile';
  adminapi = 'https://adminapi20220304095234.azurewebsites.net/api/Admin';

  httpHeader = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  constructor(private http: HttpClient, private lookupService: LookupService) {}

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
  search(data: {
    EmpId: string;
    Name: string;
    skill: string;
  }): Observable<Profile[]> {
    return this.http.post<Profile[]>(this.adminapi + '/search/', data);
  }

  getAll(): Observable<Profile[]> {
    return this.http.get<Profile[]>(this.adminapi + '/getall');
  }
  getProfile(id: string): Observable<Profile> {
    return this.http.get<Profile>(this.profileapi + '/' + id);
  }
  create(profile: Profile){
    return this.http.post(this.profileapi + '/', profile);
  }
  update(profile: Profile): Observable<Profile> {
    return this.http.put<Profile>(this.profileapi + '/', profile);
  }
  public bindLookups(fields: FormlyFieldConfig[]) {
    const lookups: lookup[] = [];
    this.extractLookups(fields, lookups);
    return this.getAllLookups().pipe(
      map((allLookups) =>
        allLookups.filter((m) =>
          lookups.some((n) => n.categoryId == m.categoryId)
        )
      ),
      map((filteredLookups) => {
        this._bindLookups(fields, filteredLookups);
        return fields;
      })
    );
  }
  
  _bindLookups(fields: FormlyFieldConfig[], lookups: lookup[]) {
    fields.forEach((f) => {
      if (f.fieldGroup && f.fieldGroup.length > 0) {
        this._bindLookups(f.fieldGroup, lookups);
      }
      if (f.templateOptions?.['lookup']) {
        const templateOptions = f.templateOptions;
        f.templateOptions.options = lookups.filter(
          (lookup) =>
            lookup.categoryId === templateOptions?.['lookup']?.['categoryId']
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
  initProfile() {
    return {
      email: '',
      empId: '',
      mobile: '',
      name: '',
      skills: [
        { name: 'HTML, CSS and Javascript', proficiency: 0, isTechnical: true },
        { name: 'Angular', proficiency: 0, isTechnical: true },
        { name: 'React', proficiency: 0, isTechnical: true },
        { name: 'ASP.NET Core', proficiency: 0, isTechnical: true },
        { name: 'Restful', proficiency: 0, isTechnical: true },
        { name: 'Entity Framework', proficiency: 0, isTechnical: true },
        { name: 'Git', proficiency: 0, isTechnical: true },
        { name: 'Docker', proficiency: 0, isTechnical: true },
        { name: 'Jenkins', proficiency: 0, isTechnical: true },
        { name: 'Azure', proficiency: 0, isTechnical: true },
        { name: 'Spoken', proficiency: 0, isTechnical: false },
        { name: 'Aptitude', proficiency: 0, isTechnical: false },
        { name: 'Communication', proficiency: 0, isTechnical: false },
      ],
    };
  }
  mapToProfile(profileVm: ProfileVM): Profile {
    const profile: Profile = this.initProfile();
    profile.email = profileVm.email;
    profile.empId = profileVm.empId;
    profile.name = profileVm.name;
    profile.mobile = profileVm.mobile;
    profile.skills[0].proficiency = profileVm.tech1;
    profile.skills[1].proficiency = profileVm.tech2;
    profile.skills[2].proficiency = profileVm.tech3;
    profile.skills[3].proficiency = profileVm.tech4;
    profile.skills[4].proficiency = profileVm.tech5;
    profile.skills[5].proficiency = profileVm.tech6;
    profile.skills[6].proficiency = profileVm.tech7;
    profile.skills[7].proficiency = profileVm.tech8;
    profile.skills[8].proficiency = profileVm.tech9;
    profile.skills[9].proficiency = profileVm.tech10;
    profile.skills[10].proficiency = profileVm.nontech1;
    profile.skills[11].proficiency = profileVm.nontech2;
    profile.skills[12].proficiency = profileVm.nontech3;
    return profile;
  }
  mapToProfileVM(profile: Profile): ProfileVM {
    const profileVm: ProfileVM = {
      email: profile.email,
      empId: profile.empId,
      name: profile.name,
      mobile: profile.mobile,
      tech1: profile.skills[0].proficiency,
      tech2: profile.skills[1].proficiency,
      tech3: profile.skills[2].proficiency,
      tech4: profile.skills[3].proficiency,
      tech5: profile.skills[4].proficiency,
      tech6: profile.skills[5].proficiency,
      tech7: profile.skills[6].proficiency,
      tech8: profile.skills[7].proficiency,
      tech9: profile.skills[8].proficiency,
      tech10: profile.skills[9].proficiency,
      nontech1: profile.skills[10].proficiency,
      nontech2: profile.skills[11].proficiency,
      nontech3: profile.skills[12].proficiency,
    };
    return profileVm;
  }
}
