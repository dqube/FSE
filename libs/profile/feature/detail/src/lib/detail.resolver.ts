import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot, Resolve, RouterStateSnapshot
} from '@angular/router';
import { LookupService } from '@fse/lookup';
import { FormdataService } from '@fse/profile/data';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { mergeMap, Observable, withLatestFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DetailResolver implements Resolve<any> {
  constructor(private dataService: FormdataService, private lookupService: LookupService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<[FormlyFieldConfig[], unknown]> {
    return this.dataService.getFields().pipe(
      mergeMap(fields =>
        this.dataService.bindLookups(fields)
      ),
      withLatestFrom(
        this.dataService.getUser()
      ));
  }
}
