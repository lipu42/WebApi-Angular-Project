import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{FormsModule} from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import{ BrowserAnimationsModule} from '@angular/platform-browser/animations';
import{ToastrModule, ToastrService} from 'ngx-toastr';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { UserService } from './shared/user.service';

@NgModule({
  declarations: [
    AppComponent,
    SignUpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()

  ],
  providers: [UserService,ToastrService],
  bootstrap: [AppComponent]
})
export class AppModule { }
