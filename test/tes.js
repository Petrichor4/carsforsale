var cars
module.exports = {
    beforeEach: browser => {
        cars = browser.page.carObjects()
        cars.navigave()
    },
    after: browser=>{
        cars.end()
    },
    'sign in' :browser =>{
        cars
        //clicking on the sign in button and signing in using the given info.
            .signIn({user: 'tjones@msn.com',
            pass:'QApasstest'})
    }
}