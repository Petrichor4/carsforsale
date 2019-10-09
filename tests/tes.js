var cars =
    module.exports = {
        beforeEach: browser => {
            cars = browser.page.carObjects()
            cars.navigate()
        },
        after: browser => {
            browser.end()
        },
        'sign in': browser => {
            //clicking on the sign in button and signing in using the given info.
            var data = {
                user: 'tjones@msn.com',
                pass: 'QApasstest'
            }
            cars.signIn(data)
                .expect.element('@signIn').to.contain.text('Tom J')
        },
        'search': browser => {
            //using the search feature to look for a specific car that is less than $5,000
            cars.search()
                .useXpath()
            cars.waitForElementVisible('(//div[@class="pricing__price"])[2]')
            cars.getText('(//div[@class="pricing__price"])[2]', function (result) {
                let price = (result.value)
                cars.verify.ok(price < '$5,000', `The ID (${price})is less than 5000`)
            })
        },
        'filter': browser => {
            //
        }
    }