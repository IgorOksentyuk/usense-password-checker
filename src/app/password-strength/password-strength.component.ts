import { Component } from '@angular/core';

@Component({
  selector: 'app-password-strength',
  templateUrl: './password-strength.component.html',
  styleUrls: ['./password-strength.component.scss']
})
export class PasswordStrengthComponent {
  password: string = '';
  sectionColors: string[] = ['gray', 'gray', 'gray'];

  checkPasswordStrength() {
    const password = this.password;
    const hasLetters = /[a-zA-Z]/.test(password);
    const hasDigits = /\d/.test(password);
    const hasSymbols = /[!@#$%^&*()_+{}\[\]:;<>,.?~\\/\-=]/.test(password);

    if (password.length < 8) {
      this.sectionColors = ['red', 'red', 'red'];
    } else if (hasLetters && hasDigits && hasSymbols) {
      this.sectionColors = ['green', 'green', 'green'];
    } else if ((hasLetters && hasDigits)
      || (hasDigits && hasSymbols)
      || (hasLetters && hasSymbols)) {
      this.sectionColors = ['yellow', 'yellow', 'gray'];
    } else {
      this.sectionColors = ['red', 'gray', 'gray'];
    }
  }
}
