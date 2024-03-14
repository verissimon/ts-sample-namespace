namespace Validacao {
  export interface StringValidator {
    isAcceptable(s: string): boolean
  }
  // const emailRegex: RegExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  // export class EmailValidator implements StringValidator {
  //   isAcceptable(s: string) {
  //     return emailRegex.test(s)
  //   }
  // }

  // const urlRegex: RegExp = /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/
  // export class UrlValidator implements StringValidator {
  //   isAcceptable(s: string) {
  //     return urlRegex.test(s)
  //   }
  // }
}
