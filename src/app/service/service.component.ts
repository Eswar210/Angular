import { Component } from '@angular/core';
import { FakeService } from '../fake.service';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrl: './service.component.css'
})
export class ServiceComponent {
  p:any;
  constructor(private service:FakeService) { }
  ngOnInit(): void {
    this.service.getData().subscribe(data=>{
      this.p=data;
      });
  }
}
