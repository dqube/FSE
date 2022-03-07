import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot, Resolve, RouterStateSnapshot
} from '@angular/router';
import { LookupService } from '@fse/lookup';
import { DataService } from '@fse/profile/data';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { mergeMap, Observable, withLatestFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EditResolver implements Resolve<unknown> {
  constructor(private dataService: DataService, private lookupService: LookupService) {
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<[FormlyFieldConfig[], unknown]> {
    const id = route.params['id']
    return this.dataService.getFields().pipe(
      mergeMap(fields =>
        this.dataService.bindLookups(fields)
      ),
      withLatestFrom(        
        this.dataService.getProfile(id)
      ));
  }
}
