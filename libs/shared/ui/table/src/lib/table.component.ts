import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
  ViewEncapsulation,
} from '@angular/core';

import { NuColumn, NuData } from './table.interfaces';

@Component({
  selector: 'nu-table',
  exportAs: 'nuTable',
  preserveWhitespaces: false,
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  templateUrl: './table.component.html',
})
export class NuTableComponent implements OnInit, OnChanges {

  @Input() columns: NuColumn[] = [];
  @Input() data: NuData[] = [];

  nuColumns: NuColumn[] = [];
  nuData: NuData[] = [];

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges) {
    const { columns, data } = changes;
    if (columns) {
      this.nuColumns = columns.currentValue;
    }

    if (data) {
      this.nuData = data.currentValue;
    }
  }

  thSort(sortName: string, value: any): void {
    const data = [...this.nuData];
    this.nuData = data.sort((a, b) =>
      value === 'ascend'
        ? a[sortName] > b[sortName]
          ? 1
          : -1
        : b[sortName] > a[sortName]
          ? 1
          : -1
    );
  }
}
