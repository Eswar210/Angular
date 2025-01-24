import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {
  signup: FormGroup;
  new: any[] = [];

  constructor(private f: FormBuilder) {
    this.signup = this.f.group({
      id: f.control('', [Validators.required]),
      status: f.control('', [Validators.required]),
      name: f.control('', [Validators.required])
    });
  }

  sign() {
    this.new.push({
      id: this.signup.value.id,
      status: this.signup.value.status,
      name: this.signup.value.name
    });
  }
}
