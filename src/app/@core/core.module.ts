import {ModuleWithProviders, NgModule, Optional, SkipSelf} from '@angular/core';
import {throwIfAlreadyLoaded} from './import.guard';
import {HttpClientModule} from '@angular/common/http';

const Providers: any[] = [];

@NgModule({
  imports: [HttpClientModule],
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    throwIfAlreadyLoaded(parentModule, 'CoreModule');
  }

  static forRoot(): ModuleWithProviders<any> {
    return {
      ngModule: CoreModule,
      providers: [...Providers]
    } as ModuleWithProviders<any>;
  }
}
