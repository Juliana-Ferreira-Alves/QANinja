import signupPage from '../pages/SignupPage'
import signupFactory from '../factories/SignupFactory'


describe('Signup', () => {

    // beforeEach(function () {
    //     cy.fixture('deliver').then((d) => {
    //         this.deliver = d
    //     })
    // })

    it('User should be deliver ', function () {

       var deliver = signupFactory.deliver()

        signup.go()
        signup.fillForm(deliver)
        signup.submit()

        const expectedMessage = 'Recebemos os seus dados. Fique de olho na sua caixa de email, pois e em breve retornamos o contato.'
        signup.modalContentShouldBe(expectedMessage)


    })

    it('Incorrect document', function () {

        var deliver = signupFactory.deliver()

        deliver.cpf = '000000111ab'

        signup.go()
        signup.fillForm(deliver)
        signup.submit()
        signup.alertMessageShouldBe('Oops! CPF inválido')

    })

    it('Incorrect email', function () {

        var deliver = signupFactory.deliver()

        deliver.email = 'ajf.com.br'

        signup.go()
        signup.fillForm(deliver)
        signup.submit()
        signup.alertMessageShouldBe('Oops! Email com formato inválido.')

    })

     context('Required fields', function(){

         const messages = [
             { field: 'name', output: 'É necessário informar o nome' },
             { field: 'cpf', output: 'É necessário informar o CPF' },
             { field: 'email', output: 'É necessário informar o e-mail' },
             { field: 'postalcode', output: 'É necessário informar o CEP' },
             { field: 'number', output: 'É necessário informar o número do endereço' },
             { field: 'delivery_method', output: 'Selecione o método de entrega' },
             { field: 'cnh', output: 'Adicione uma foto da sua CNH' }
         ]

         before(function(){
             signup.go()
             signup.submit()
         })

        messages.forEach(function(msg){
            it(`${msg.field} is required`, function(){
                signupPage.alertMessageShouldBe(msg.output)
                // signupPage.alertMessageShouldBe(msg.output)
                // signupPage.alertMessageShouldBe(msg.output)
             })
         })
     })
    
    // it('Required fields', function () {

    //     signup.go()
    //     signup.submit()

    //     signup.alertMessageShouldBe('É necessário informar o nome')
    //     signup.alertMessageShouldBe('É necessário informar o CPF')
    //     signup.alertMessageShouldBe('É necessário informar o email')
    //     signup.alertMessageShouldBe('É necessário informar o CEP')
    //     signup.alertMessageShouldBe('É necessário informar o número do endereço')
    //     signup.alertMessageShouldBe('Selecione o método de entrega')
    //     signup.alertMessageShouldBe('Adicione uma foto da sua CNH')

    // })

})




// before(function(){
    //     cy.log('Tudo aqui é executado uma única vez ANTES de TODOS os casos de testes')
    // })

    // beforeEach(function(){
    //     cy.log('Tudo aqui é executado sempre ANTES de cada caso de testes')
    // })

    // after(function(){
    //     cy.log('Tudo aqui é executado uma única vez DEPOIS de TODOS os casos de testes')
    // })

    // afterEach(function(){
    //     cy.log('Tudo aqui é executado sempre DEPOIS de cada caso de testes')
    // })



    
    //Qndo eu quiser realizar o teste somente em um cenário, 
    //é necessário colocar o .only a opós it (it.only).
