import { Component, OnInit } from '@angular/core';
import {UserServiceService} from "../../services/user-service.service";
import {Router} from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email: string = "";
  password: string = "";
  constructor(private userServiceService :UserServiceService,private router: Router) { }

  ngOnInit(): void {
  }

  login() {
    this.userServiceService.loginUser(this.email, this.password).subscribe({
      next: response => {
        if(response.msg == "fail"){
          alert("Invalid user name and password")
        } else if (response.msg == "The password field is required."){
          alert("The password field is required.")
        } else if (response.msg == "The selected phone is invalid."){
          alert("The phone field is required.")
        } else {
          sessionStorage.setItem("authToken",`${response.msg.token}`);
          console.log(`${response.msg.token}`)
          this.router.navigateByUrl('/profile')
        }
      }
    });
  }

}
