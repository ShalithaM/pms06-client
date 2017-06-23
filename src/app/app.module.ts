/*
 * module registering
 */
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SinglePensionInformationModule } from './Components/SinglePensionerInformationComplonent/app.singlePensionInformation.module';
import { AppComponent } from './Components/RootComponent/app.component';
import { DataTableModule } from 'angular2-datatable';
import { PensionersInformationsModule } from './Components/PensionersInformationComponent/app.pensioners.informations.module';
/*
 * component registering
 */
import { NavBarComponent } from './Components/NavigationBarComponent/app.navbar.component';
import { DashboardComponent } from './Components/DashBoardComponent/app.dashboard.component';
import { LocationNavigatorComponent } from './Components/DashBoardComponent/LocationNavigatorComponent/app.locationNavigator.component';
import { LoginComponent } from './Components/LoginComponent/app.login.component';
/*
 * import routes
 */
import {AppRoutes} from './Routes/app.routes.definition';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    DashboardComponent,
    LocationNavigatorComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NgbModule,
    SinglePensionInformationModule,
    DataTableModule,
    PensionersInformationsModule,
    RouterModule.forRoot(AppRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
