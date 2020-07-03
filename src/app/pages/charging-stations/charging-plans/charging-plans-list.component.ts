import { Component, OnInit } from '@angular/core';

import { ChargingPlansListTableDataSource } from './charging-plans-list-table-data-source';

@Component({
  selector: 'app-charging-plans-list',
  template: '<app-table [dataSource]="chargingPlansListTableDataSource"></app-table>',
  providers: [ChargingPlansListTableDataSource],
})
export class ChargingPlansListComponent implements OnInit {

  constructor(
    public chargingPlansListTableDataSource: ChargingPlansListTableDataSource,
  ) { }

  public ngOnInit(): void {

  }
}
