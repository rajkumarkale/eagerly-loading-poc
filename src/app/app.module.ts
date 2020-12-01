import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {appRoutes} from './app-routing.module';
import {RouterModule} from '@angular/router';
import {LoginModule} from './login/login.module';
import {InventoryModule} from './inventory/inventory.module';
import {SecureConfigModule} from './secure-config/secure-config.module';
import {ModelAdminModule} from './model-admin/model-admin.module';
import {ServerAdminModule} from './server-admin/server-admin.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    LoginModule,
    InventoryModule,
    SecureConfigModule,
    ModelAdminModule,
    ServerAdminModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
