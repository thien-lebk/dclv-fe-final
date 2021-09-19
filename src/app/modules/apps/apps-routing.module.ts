import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { extract } from '@app/core';
import { AppListComponent } from './app-list/app-list.component';
import { AppCreateComponent } from '../app-create/app-create.component';
import { AppsDetailComponent } from './apps-detail/apps-detail.component';

const routes: Routes = [
  // Module is lazy loaded, see app-routing.module.ts
  {
    path: 'list',
    component: AppListComponent,
    data: { title: extract('List Application') }
  },
  {
    path: 'create',
    component: AppCreateComponent,
    data: { title: extract('Create Application') }
  },
  {
    path: 'detail',
    component: AppsDetailComponent,
    data: { title: extract('Create Application') }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppsRoutingModule {}
