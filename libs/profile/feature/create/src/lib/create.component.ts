import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { lookup } from '@fse/lookup';
import { DataService } from '@fse/profile/data';
import { Profile, ProfileVM } from '@fse/profile/model';
import { FormlyFieldConfig, FormlyFormOptions } from '@ngx-formly/core';

@Component({
  selector: 'fse-create',
  template: `
   <nz-page-header nzTitle="Profile"><nz-page-header-extra>        
        <button nz-button nzType="primary">Add New Profile</button>
      </nz-page-header-extra></nz-page-header>
 <app-form  [form]="form" [model]="model" [options] = "options"
    [fields]="fields" (formSubmit)="onSubmit($event)"></app-form>
  `,
  styles: [
  ]
})
export class CreateComponent implements OnInit {

  form = new FormGroup({});
  model!: ProfileVM;
  profile!: Profile;
  constructor(private dataService: DataService,private route: ActivatedRoute) {
   // this.getFields();
  }
  options: FormlyFormOptions = {
    formState: {
      labelWidth: '25px',
      layout: 'vertical',
    },
  };
  fields: FormlyFieldConfig[] = [];
  
  lookups: lookup[] = [];
  
  ngOnInit() {
    this.model = this.route.snapshot.data['fieldData'][1];
   // this.fields = this.mapFields(this.route.snapshot.data['fieldData'][0]);
   this.fields = this.route.snapshot.data['fieldData'][0];
   //this.profile =this.dataService.initProfile()
   //console.log(this.profile)
  }
 
  /**
   * Adjust the JSON fields loaded from the server.
   */
 
  bindDate(value: boolean) {
    console.log(value);
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  onSubmit(evt :unknown): void {
    console.log('After Mapping');
    this.profile =this.dataService.mapToProfile(this.model);
        
        
        //console.log(JSON.stringify(this.profile))
        this.dataService.create(this.profile).subscribe((data) => {
          console.log('After save');
          console.log(data)
         
        });;
//         this.profile.skills= [
// { proficiency : this.model.tech1, name :'', isTechnical :true },
// { proficiency : this.model.tech2, name :'', isTechnical :true }
//         ]

       
    console.log(JSON.stringify(this.model, null, 2));
  }
}

