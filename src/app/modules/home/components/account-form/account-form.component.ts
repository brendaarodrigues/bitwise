import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { CustomValidators } from 'src/app/core/utils/custom-validators';

@Component({
  selector: 'app-account-form',
  templateUrl: './account-form.component.html',
  styleUrls: ['./account-form.component.scss'],
})
export class AccountFormComponent implements OnInit {
  accountForm!: FormGroup;

  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
    this.accountForm = this.fb.group({
      cpf: ['', [Validators.required, Validators.maxLength(11), CustomValidators.cpfValidator]],
    });
  }

  get cpf(): AbstractControl | null {
    return this.accountForm.get('cpf');
  }
}
