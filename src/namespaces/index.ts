/// <reference path="validaEmail.ts" />
/// <reference path="validaUrl.ts" />

const email = "abc@mail.com"
const emailIsValid = new Validacao.EmailValidator().isAcceptable(email)
console.log(`o email '${email}' é válido?\t\t${emailIsValid ? "Sim." : "Não."}`)

const url = "https://www.google.com"
const urlIsValid = new Validacao.UrlValidator().isAcceptable(url)
console.log(`a url '${url}' é válida?\t${urlIsValid ? "Sim." : "Não."}`)
