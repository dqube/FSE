import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot, Resolve, RouterStateSnapshot
} from '@angular/router';
import { LookupService } from '@fse/lookup';
import { FormdataService } from '@fse/profile/data';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { Observable, withLatestFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DetailResolver implements Resolve<any> {
  constructor(private dataService: FormdataService, private lookup: LookupService) {
   
  }

resolve (route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<[unknown, FormlyFieldConfig[]]> {
  // const libraryId = route.params['id'];
  return this.dataService.getUser().pipe(
    withLatestFrom(
      this.dataService.getFields()
    )
  );
}
}
