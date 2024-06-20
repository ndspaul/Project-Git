import { Component } from '@angular/core';
import { FormBuilder, FormGroup,Validators } from '@angular/forms';

@Component({
	selector: 'app-register',
	templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
	myForm: FormGroup;
  submitted = false;

	constructor(private fb: FormBuilder) {
    this.myForm = this.fb.group({
			firstName: ['', [Validators.required]],
			lastName: ['', [Validators.required]],
      email:['',[Validators.required,Validators.email]],
      password:['',[Validators.required,Validators.minLength(8)]],
      confirmPassword:['',[Validators.required]]
		}, {
      Validators:this.passwordMatchValidation
    }
  );
   }

	ngOnInit() {
		
	}
  passwordMatchValidation(form: FormGroup) {
    const password = form.get('password');
    const confirmPassword = form.get('confirmPassword');

    if (password?.value !== confirmPassword?.value) {
      return{ mismatch: true };
    } else {
      return null;
    }
  }
  
  submit(){
    console.log(this.myForm.value);
    this.submitted=true;
  }
  reset(){
    this.submitted=false;
    this.myForm.reset()
  }
}