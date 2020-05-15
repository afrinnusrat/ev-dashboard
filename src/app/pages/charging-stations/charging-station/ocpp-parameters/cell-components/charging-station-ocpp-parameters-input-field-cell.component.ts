import { Component, Injectable, Input } from '@angular/core';
import { CellContentTemplateDirective } from 'app/shared/table/cell-content-template/cell-content-template.directive';
import { OcppParameter } from 'app/types/ChargingStation';

@Component({
  selector: 'app-charging-station-ocpp-parameters-input-field-cell',
  template: `
    <ng-container *ngIf="row.id !== customOcppParameterRowID">
      <span class="text-right" >{{row.key}}</span>
    </ng-container>
    <ng-container *ngIf="row.id === customOcppParameterRowID">
    <input id="key" name="key" class="form-control text-line"
      [class.table-warning]="key.invalid && (key.dirty || key.touched)"
      required [placeholder]="'chargers.charger_param_key' | translate"
      [ngModel]="row['key']" #key="ngModel" (ngModelChange)= "valueChanged($event)"
      type="text">
      <mat-error *ngIf="key.invalid && (key.dirty || key.touched)"
        role="alert" class="mat-error">
        <div *ngIf="key.errors.required" class="table-mat-error text-left">
          {{'general.mandatory_field' | translate}}
        </div>
      </mat-error>
    </ng-container>
  `,
})
@Injectable()
export class ChargingStationOcppParametersInputFieldCellComponent extends CellContentTemplateDirective {
  public static CUSTOM_OCPP_PARAMETER_ID = 'CustomOcppParameter';
  @Input() public row!: OcppParameter;
  public customOcppParameterRowID = ChargingStationOcppParametersInputFieldCellComponent.CUSTOM_OCPP_PARAMETER_ID;

  public valueChanged(value: string) {
    this.row.key = value;
    this.componentChanged.emit(value);
  }
}
