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
        'sign in': browser => {
            //clicking on the sign in button and signing in using the given info.
            var data = {
                user:'tjones@msn.com',
                pass:'QApasstest'
            }
            cars.signIn(data)
            .expect.element('@signIn').to.contain.text('Tom J')
        },
        'search': browser =>{
            //
        },
        'filter': browser =>{
            //
        }
    }