import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { UpgradeModule } from '@angular/upgrade/static';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { routeParamsProvider } from './ajs-upgraded-providers';
import { PhoneListComponent } from './phone-list/phone-list.component';
import { PhoneDetailComponent } from './phone-detail/phone-detail.component';
import { Phone } from './core/phone/phone.service';
import { CheckmarkPipe } from './core/checkmark/checkmark.pipe';

@NgModule({
  imports: [
    BrowserModule,
    UpgradeModule,
    HttpModule,
    FormsModule
  ],
  providers: [
  	Phone,
    routeParamsProvider
  ],
  declarations: [
    PhoneListComponent,
    PhoneDetailComponent,
    CheckmarkPipe
  ],
  entryComponents: [
    PhoneListComponent,
    PhoneDetailComponent
  ]
})
export class AppModule {
	constructor(private upgrade: UpgradeModule) { }

	ngDoBootstrap() {
		this.upgrade.bootstrap(document.documentElement, ['phonecatApp']);
	}

}