import { Component } from '@angular/core';
import { PasswordValidationService } from '../services/password-validation.service';

@Component({
  selector: 'app-password-strength',
  templateUrl: './password-strength.component.html',
  styleUrls: ['./password-strength.component.scss']
})

export class PasswordStrengthComponent {
  password: string = '';
  sectionColors: string[] = ['gray', 'gray', 'gray'];

  constructor(private passwordStrengthService: PasswordValidationService) {}

  checkPasswordStrength() {
    this.sectionColors = this.passwordStrengthService.checkPasswordStrength(this.password);
  }
};
