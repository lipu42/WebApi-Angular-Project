import { Component, OnInit } from '@angular/core';
import{ User} from '../shared/user.model';
import { NgForm } from '@angular/forms';
import{UserService} from '../shared/user.service';
import { ToastrModule, ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  user: User;
  emailPattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$";

  constructor(private userSerivce:UserService,private toastr: ToastrService) { }

  ngOnInit(): void {

    this.resetForm();
  }

  resetForm(form?: NgForm){
    if(form != null)
    form.reset();
    this.user = {
      FirstName:'',
      LastName:'',
      Email:'',
      UserName:'',
      Password:''

    }
  }

  OnSubmit(form : NgForm){
     this.userSerivce.registerUser(form.value)
           .subscribe((data:any) => {
             if(data.Succeeded==true)
             {
              this.resetForm(form);
              this.toastr.success("User Registration Successful!","User Registration")
             }
             else{
               this.toastr.error(data.Errors[0]);
             }
             
     })
  }

}
