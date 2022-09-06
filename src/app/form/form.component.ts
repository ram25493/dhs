import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent {

  state = ['Maharashtra', 'Delhi', 'Banglore', 'pune']
  userForm!: FormGroup;
  constructor(private fb: FormBuilder) {
   }

  ngOnInit(): void {
    this.userForm = this.fb.group({
      firstName: ['',Validators.required],
      lastName: ['',Validators.required],
      email: ['',[Validators.required,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
      pass: ['',Validators.required],
      add: ['',Validators.required],
      add2: ['',Validators.required],
      city: ['',Validators.required],
      state: ['',Validators.required],
      zip: ['',Validators.required]
    });
  }

  get firstName() { return this.userForm.get('firstName')!; }
  get email() { return this.userForm.get('email')!; }
  get pass() { return this.userForm.get('pass')!; }
  get zip() { return this.userForm.get('zip')!; }



  onSubmit(): void {
    if (this.userForm.invalid) {
      alert("Fill Form First");
      return;
  }
    // Process checkout data here
    console.log('Form Submitted with value: ', this.userForm.value);
    this.userForm.reset();
  }
  }


