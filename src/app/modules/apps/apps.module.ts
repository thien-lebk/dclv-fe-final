import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppListComponent } from './app-list/app-list.component';
import { RouterModule } from '@angular/router';
import { AppsRoutingModule } from './apps-routing.module';
import { SharedModule } from '../../shared';
import { CountersModule } from '../../blocks/counters/counters.module';
import { FootersModule } from '../../blocks/footers/footers.module';
import { UsualModule } from '../../blocks/usual/usual.module';
import { ActionsModule } from '../../blocks/actions/actions.module';
import { SwiperModule } from 'ngx-swiper-wrapper';
import { ShellModule } from '../../shell/shell.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [AppListComponent],
  imports: [
    CommonModule,
    AppsRoutingModule,
    SharedModule,
    CountersModule,
    FootersModule,
    UsualModule,
    ActionsModule,
    SwiperModule,
    ShellModule,
    NgbModule
  ]
})
export class AppsModule {}
