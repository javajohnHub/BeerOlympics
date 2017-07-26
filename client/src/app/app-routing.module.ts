import { NgModule, ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {NoContentComponent} from './components/no-content/no-content';
import {BoardComponent} from './components/board/board.component';
import {AdminComponent} from './components/admin/admin.component';

const routes: Routes = [
  {
    path: '',
    component: BoardComponent
  },
  {
    path: 'admin',
    component: AdminComponent
  },
  { path: '**',    component: NoContentComponent },
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class FrontRoutingModule { }
