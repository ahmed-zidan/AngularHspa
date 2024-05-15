import { Component } from '@angular/core';
import { User } from '../../Models/User-Model';
import { FormsModule } from '@angular/forms';
import { UserServiceService } from '../../Services/user-service.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  user:User=new User();
  constructor(public service:UserServiceService,public toastr:ToastrService,public route:Router){

  }
    submitForm() {
     let res =  this.service.login(this.user);
     if(res == true){
      this.toastr.success('user login successfully','Success');
      localStorage.setItem('token',this.user.Name);
      this.route.navigate(['/']);
     }else{
      this.toastr.error('invalid user');
     }
  }
  cancel(){

  }



}
