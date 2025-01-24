import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-log',
  templateUrl: './log.component.html',
  styleUrls: ['./log.component.css']
})
export class LogComponent {
  signup: FormGroup = new FormGroup({});

  constructor(private f: FormBuilder, private router: Router) {  
    this.signup = f.group({
      password: f.control('', Validators.required),
      uname: f.control('', Validators.required)
    });
  }

  sign() {
    if (this.signup.valid) {
      console.log("Login successful!");
      localStorage.setItem('sign',JSON.stringify({username:this.signup.get('uname')?.value}))
      this.router.navigateByUrl('/nav');
    } else {
      console.log("Invalid credentials or form is incomplete.");
    }
  }
}

