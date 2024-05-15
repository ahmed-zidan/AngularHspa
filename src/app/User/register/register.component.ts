import { Component } from '@angular/core';
import { FormBuilder, FormsModule } from '@angular/forms';
import { User } from '../../Models/User-Model';
import { Router } from '@angular/router';
import { UserServiceService } from '../../Services/user-service.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule],
  providers:[UserServiceService],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  user:User = new User();

  constructor(private router:Router,private service:UserServiceService,private toaster:ToastrService){

  }
  submitForm(){
    //JSON.parse(localStorage.getItem('users'));
    //localStorage.setItem('user',JSON.stringify(this.user));
   let res =  this.service.addUser(this.user);
   if(res == this.service.added){
    this.toaster.success('added successfully','success');

   }else{
    this.toaster.error('Name is already exist','failed');

   }
  }
  cancel(){
    this.router.navigate(['/']);
  }
}
