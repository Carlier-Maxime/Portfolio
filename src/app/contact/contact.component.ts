import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  form: FormGroup;
  name: FormControl = new FormControl("", [Validators.required,Validators.maxLength(100)]);
  email: FormControl = new FormControl("", [Validators.required,Validators.email]);
  message: FormControl = new FormControl("",[Validators.required,Validators.maxLength(1000)]);
  honeypot: FormControl = new FormControl("");
  submitted: boolean = false;
  isLoading: boolean = false;
  responseMessage: string = "";

  constructor(private formBuilder: FormBuilder, private http: HttpClient) {
    this.form = this.formBuilder.group({
      name: this.name,
      email: this.email,
      message: this.message,
      honeypot: this.honeypot
    });
  }

  ngOnInit(): void {
  }

}
