var customer = {
    name: 'kiran',
    balance: 2000,
    PanNo: 'MNBVGH2345',
    CreditCards: ['cc1', 'cc2'],
    address: {
        city: 'hyderabad',
        state: 'telangana',
        country: 'India'
    },
    CustomerHis: {
        creditedamt: 5000,
        debitedamt: 3000,
        totaltransaction: 10000
    }
}

console.log(customer.name)

console.log(customer.address.city)

console.log(customer.address)

customer.address.pin=123456;

console.log(customer.address)

console.log(customer.CustomerHis.currentbal='35k')

console.log(customer.CustomerHis)