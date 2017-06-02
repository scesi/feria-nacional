import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ModuleWithProviders } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { VideoIntroComponent } from './video-intro/video-intro.component';
import { InfoComponent } from './info/info.component';
import { MapComponent } from './map/map.component';
import { OrganizesComponent } from './organizes/organizes.component';
import { AuspicesComponent } from './auspices/auspices.component';
import { ContactComponent } from './contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    VideoIntroComponent,
    InfoComponent,
    MapComponent,
    OrganizesComponent,
    AuspicesComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
