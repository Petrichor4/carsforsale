var cars =
    module.exports = {
        beforeEach: browser => {
            cars = browser.page.carObjects()
            cars.navigate()
                .api.maximizeWindow()
        },
        after: browser => {
            browser.end()
        },
        // 'sign in': browser => {
        //     //clicking on the sign in button and signing in using the given info.
        //     var data = {
        //         user:'tjones@msn.com',
        //         pass:'QApasstest'
        //     }
        //     cars.signIn(data)
        //     .expect.element('@signIn').to.contain.text('Tom J')
        // },
        // 'search': browser => {
        //     //using the search feature to look for a specific car that is less than $5,000
        //     cars.search()
        //         .useXpath()
        //     cars.waitForElementVisible('(//div[@class="pricing__price"])[2]')
        //     cars.getText('(//div[@class="pricing__price"])[2]', function (result) {
        //         console.log(JSON.stringify(result))
        //         let price = (result.value)
        //         cars.verify.ok(price < '$5,000', `The ID (${price})is less than 5000`)
        //     })
        // },
        // 'sign in': browser => {
        //     //clicking on the sign in button and signing in using the given info.
        //     var data = {
        //         user: 'tjones@msn.com',
        //         pass: 'QApasstest'
        //     }
        //     cars.signIn(data)
        //         .expect.element('@signIn').to.contain.text('Tom J')
        // },
        // 'search': browser => {
        //     //using the search feature to look for a specific car that is less than $5,000
        //     cars.search()
        //         .useXpath()
        //     cars.waitForElementVisible('(//div[@class="pricing__price"])[2]')
        //     cars.getText('(//div[@class="pricing__price"])[2]', function (result) {
        //         let price = (result.value)
        //         cars.verify.ok(price < '$5,000', `The ID (${price})is less than 5000`)
        //     })
        // },
        'filter': browser => {
            //
            cars.filter()
                .useXpath()
                .expect.element('(//h4[@class="display-inline-block"])[1]').to.contain.text('Buick Enclave')
            cars.expect.element('(//li[@class="specs-miles-container hidden-xs"])[1]').to.contain.text('New')
            cars.getText('(//ul[@class="dealer-location list-unstyled hidden-xs"])[1]', function (result) {
                let location = (result.value)
                cars.verify.ok(location < '50', `The ID (${location})is less than 50 miles away`)
                console.log('getText result', result.value)
            })
        }
    }