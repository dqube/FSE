import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot, Resolve, RouterStateSnapshot
} from '@angular/router';
import { LookupService } from '@fse/lookup';
import { FormdataService } from '@fse/profile/data';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { map, Observable, withLatestFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DetailResolver implements Resolve<any> {
  constructor(private dataService: FormdataService, private lookupService: LookupService) {
   
  }

resolve (route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<[FormlyFieldConfig[],unknown]> {
  console.log("from service");
  this.dataService.getFields().pipe(
    map(res=> this.dataService.bindLookups(res))
   // map(res => Object.values(res['payload']))
  ).subscribe(result => console.log(result));
  // const libraryId = route.params['id'];
  return this.dataService.getFields().pipe(
   // concatMap(fields => this.lookup.bindLookup(fields)),
    withLatestFrom(
      this.dataService.getUser()
    )
  );
}
}
