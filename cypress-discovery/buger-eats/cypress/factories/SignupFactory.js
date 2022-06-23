var faker = require('faker')

export default{

    deliver: function(){

        var firstName = faker.name.firstName()
        var lastName = faker.name.lastName()

         var data = {
            name: `${firstName} ${lastName}`,
            cpf: '00000017488',
            email: faker.internet.email(firstName),
            whatsapp: '2199999999',

            address: {
                postalcode: '21361120',
                street: 'Rua Aracua',
                number: '02',
                details: 'apto 201',
                district: 'Vaz Lobo',
                city_state: 'Rio de Janeiro/RJ'
            },

            delivery_method: 'Moto',
            cnh: 'cnh-digital.jpg'
        }

        return data
    }
}