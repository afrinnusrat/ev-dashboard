import { ButtonAction } from 'app/types/GlobalType';
import { ButtonColor, TableActionDef } from 'app/types/Table';

import { TableAction } from './table-action';

export class TableMultiSyncAction implements TableAction {
  private action: TableActionDef = {
    id: ButtonAction.MULTI_SYNC,
    type: 'dropdown-button',
    icon: 'sync',
    color: ButtonColor.PRIMARY,
    name: 'general.synchronize',
    tooltip: 'general.tooltips.synchronize',
    isDropdownMenu: true,
    dropdownActions: [],
  };

  constructor(dropdownActions: TableActionDef[]) {
    this.action.dropdownActions = dropdownActions;
  }

  public getActionDef(): TableActionDef {
    return this.action;
  }
}
