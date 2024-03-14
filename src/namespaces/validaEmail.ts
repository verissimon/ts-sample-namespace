/// <reference path="Validacao.ts" />

namespace Validacao {
  
  const emailRegex: RegExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

  export class EmailValidator implements StringValidator {
    isAcceptable(s: string) {
      return emailRegex.test(s)
    }
  }
}
