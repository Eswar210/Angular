import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent {
  constructor(private route:Router){}
  user:any;
  // ngOnInit() {
  //   if (localStorage.getItem('sign')==null){
  //     this.route.navigateByUrl('/');
  //   }
  //   else{
  //     this.user=(JSON.parse(localStorage.getItem('sign') || '')).username;
  //     console.log(this.user);
  //   }
  //   }
}
