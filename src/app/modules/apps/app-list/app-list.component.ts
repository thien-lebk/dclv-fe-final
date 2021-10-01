import { Component, OnInit } from '@angular/core';
import {
  AppItemTypeEnum,
  AppListItemDto
} from '@app/modules/apps/_modal/app-list-item-dto';
import { AppCreateService } from '@app/modules/app-create/_services/app-create-service';
import { AppcreateDto } from '@app/modules/app-create/_modal/app-create-dto';
import { LoadingService } from '@app/shared/loader/_services/loading-services';

@Component({
  selector: 'dc-app-list',
  templateUrl: './app-list.component.html',
  styleUrls: ['./app-list.component.scss']
})
export class AppListComponent implements OnInit {
  listItem: AppcreateDto[] = [];
  curList = [];
  currItem = {
    name: 'Client name',
    mode: 'Develop'
  };
  isOpenUserPopup = false;

  hoverCopyContent = 'Copy';
  constructor(
    private app$: AppCreateService,
    private loadingService: LoadingService
  ) {}
  changeSeachForm(data: any): void {
    const e = data.target.value;
    this.listItem = this.curList.filter(ele => {
      return ele.name.indexOf(e) !== -1 || ele.schema_name.indexOf(e) !== -1;
    });
  }

  changeItem(name: any, schema: any): void {
    this.currItem.name = name;
    this.currItem.mode = schema;
  }
  ngOnInit(): void {
    const client = localStorage.getItem('client');
    this.loadingService.startLoading();
    this.app$.getListApp(client).subscribe(data => {
      this.listItem = data.results;
      this.loadingService.stopLoading();
    });
  }
}
