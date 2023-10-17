import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class PasswordValidationService {
  checkPasswordStrength(password: string) {
    const hasLetters = /[a-zA-Z]/.test(password);
    const hasDigits = /\d/.test(password);
    const hasSymbols = /[!@#$%^&*()_+{}\[\]:;<>,.?~\\/\-=]/.test(password);

    if (password.length < 8) {
      return ['red', 'red', 'red'];
    } else if (hasLetters && hasDigits && hasSymbols) {
      return ['green', 'green', 'green'];
    } else if ((hasLetters && hasDigits)
      || (hasDigits && hasSymbols)
      || (hasLetters && hasSymbols)) {
        return ['yellow', 'yellow', 'gray'];
    } else {
      return ['red', 'gray', 'gray'];
    }
  }
};
