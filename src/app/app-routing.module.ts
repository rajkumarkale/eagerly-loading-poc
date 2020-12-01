import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './login/login/login.component';
import {InventoryComponent} from './inventory/inventory/inventory.component';
import {SecureConfigComponent} from './secure-config/secure-config/secure-config.component';
import {ModelAdminComponent} from './model-admin/model-admin/model-admin.component';
import {ServerAdminComponent} from './server-admin/server-admin/server-admin.component';

export const appRoutes: Routes = [
  {
    path: '', children: [
      {path: '', pathMatch: 'full', redirectTo: 'login' },
      {path: 'login', component: LoginComponent},
      {path: 'inventory', component: InventoryComponent},
      {path: 'secureConfig', component: SecureConfigComponent},
      {path: 'modelAdmin', component: ModelAdminComponent},
      {path: 'serverAdmin', component: ServerAdminComponent}
    ]
  }
];
