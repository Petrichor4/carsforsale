var wizard = {}
​
var pickFromSelect = (page, select, option) => {
    page.click(`${select} ${option}`)
}
​
var clickButtonByText = function (page, text) {
    page
        .api.useXpath()
        .click(`//button[contains(text(), '${text}')]`)
        .useCss()
}
​
module.exports = {
    beforeEach: browser => {
        wizard = browser.page.homeLoanWizard()
        wizard.navigate()
    },
    after: browser => {
        browser.end()
    },
    "fill out form": browser => {
        clickButtonByText(wizard, "Get Started")
        pickFromSelect(wizard, "#loanTypes", "[value='Refinance']")
        clickButtonByText(wizard, "Next")
        wizard.setValue("@city", "Peoa, UT")
        clickButtonByText(wizard, "Next")
        clickButtonByText(wizard, "Rental Property")
        clickButtonByText(wizard, "Yes")
        clickButtonByText(wizard, "No")
        wizard
            .setValue("@price", "$500,000.00")
            .setValue("@down", "$1.00")
        clickButtonByText(wizard, "Next")
        clickButtonByText(wizard, "Excellent")
        clickButtonByText(wizard, "No")
        wizard.setValue("@addressOne", "123 Main St")
        wizard.setValue("@addressThree", "Peoa, UT 84061")
        clickButtonByText(wizard, "Next")
        wizard.setValue("@firstName", "AJ")
        wizard.setValue("@lastName", "Larson")
        wizard.setValue("@email", "aj@devmounta.in")
        clickButtonByText(wizard, "Next")
        wizard.pause()
    }
}