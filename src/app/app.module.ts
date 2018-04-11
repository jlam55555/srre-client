import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

// routing module
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// page components (for routing)
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RequestComponent } from './request/request.component';
import { VolunteerComponent } from './volunteer/volunteer.component';
import { AboutComponent } from './about/about.component'

// insertable components
import { HeaderComponent } from './header/header.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';

// services
import { PageService } from './page.service';
import { ServerService } from './server.service';
import { MissionComponent } from './mission/mission.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PageNotFoundComponent,
    RequestComponent,
    VolunteerComponent,
    HeaderComponent,
    SignInComponent,
    SignUpComponent,
    AboutComponent,
    MissionComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [
    PageService,
    ServerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
