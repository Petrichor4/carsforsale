var cars = {}

var pickFromSelect = (pageObjects, select, option) => {
    pageObjects
        .click(`${select} ${option}`)
}

var clickButtonByText = (pageObjects, text) => {
    pageObjects
        .api.useXpath(`//button[contains(text(), '${text}')]`)
        .click()
        .useCss()
}

module.exports = {
    beforeEach: browser => {
        cars = browser.pageObjects.carObjects()
        cars.navigave()
    },
    after: browser=>{
        cars.end()
    },
    'Filter Test' :browser =>{
        clickButtonByText(cars, "Advanced Search ")
        pickFromSelect(cars, "#searchRadius", "[value='10 miles']")
        cars.clearValue('#zipcode')
        api.useXpath()
        cars.pickFromSelect(cars, "('//a')[16]", "[value='New']")
        useCss()
        clickButtonByText(cars, "Search ")


    }
}