import createNubank from 'nubank'
const Nubank = createNubank()

Nubank.getLoginToken({
    password: '',
    login: ''
}).then(r => console.log(r + 'Im in'))