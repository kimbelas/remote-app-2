import { ApplicationRef, DoBootstrap, Injector, NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';
import { createCustomElement } from '@angular/elements';

@NgModule({
  declarations: [AppComponent, NxWelcomeComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule implements DoBootstrap {
  constructor(readonly injector: Injector) {
    const el = createCustomElement(AppComponent, { injector });
    customElements.define('from-remote-component', el);
  }

  // eslint-disable-next-line @angular-eslint/no-empty-lifecycle-method, @angular-eslint/use-lifecycle-interface
  ngDoBootstrap(appRef: ApplicationRef) {
    console.log('do customc boostrap', appRef);
  }
}
