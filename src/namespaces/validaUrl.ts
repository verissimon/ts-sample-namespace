/// <reference path="Validacao.ts" />

namespace Validacao {

  const urlRegex: RegExp = /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/
  
  export class UrlValidator implements StringValidator {
    isAcceptable(s: string) {
      return urlRegex.test(s)
    }
  }
}
