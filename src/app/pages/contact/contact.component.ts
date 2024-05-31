import { CommonModule, NgClass } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, NgClass],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
})
export class ContactComponent implements OnInit {
  contacForm!: FormGroup;
  constructor(private formBuilder: FormBuilder) {
    this.contacForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      message: ['', [Validators.required, Validators.minLength(10)]],
    });
  }

  enviar(event: Event) {
    event.preventDefault();
    console.log(this.contacForm.value);
  }

  ngOnInit(): void {}

  hasErrors(field: string, typeError: string) {
    return (
      this.contacForm.get(field)?.hasError(typeError) &&
      this.contacForm.get(field)?.touched
    );
  }
}
