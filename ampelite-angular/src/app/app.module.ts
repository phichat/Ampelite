import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { CdkTableModule } from '@angular/cdk/table';
import { importType } from '@angular/compiler/src/output/output_ast';

import { MaterialModule } from './modules/material/material.module';
import { AppComponent } from './components/app/app.component';
import { AuthComponent } from './components/auth/auth.component';
import { HomeComponent } from './components/home/home.component';
import { NavmenuComponent } from './components/navmenu/navmenu.component';
import { SigninComponent } from './components/signin/signin.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { AlertComponent } from './components/alert/alert.component';

import { AuthGuard } from './_guards/index';
import { AuthenticationService } from './_services/index'
import { CanActivateViaAuthGuard } from './can-activate-via-auth.guard';
import { NavbarComponent } from './components/navbar/navbar.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'sign-in', component: SigninComponent },
  { path: 'app-navmenu', component: NavmenuComponent },
  // { path: 'home', component: HomeComponent, data: { title: 'Home' } },
  { path: '**', component: NotfoundComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    HomeComponent,
    NavmenuComponent,
    SigninComponent,
    NotfoundComponent,
    AlertComponent,
    NavbarComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    MaterialModule,
    ReactiveFormsModule,
    RouterModule.forRoot(
      appRoutes,
      // { enableTracing: true }
    )


  ],
  providers: [
    AuthenticationService,
    AuthGuard,
    { provide: 'API_URL', useFactory: getBaseUrl }
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }

export function getBaseUrl() {
  return 'http://203.154.45.40';
}
