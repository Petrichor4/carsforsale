var commands = {
    signIn: function (profile) {
        this
            .click('@signIn')
            .waitForElementVisible('@signIn2')
            .click('@signIn2')
            .waitForElementVisible('@userI')
            .clearValue('@userI')
            .setValue('@userI', profile.user)
            .clearValue('@passI')
            .setValue('@passI', profile.pass)
            .click('[value="Login"]')
            .pause(3000)
        return this
    },
    search: function () {
        this
            .waitForElementVisible('[value="Subaru"]')
            .click('[value="Subaru"]')
            .click('[value="Forester"]')
            .useXpath()
            .click('(//option[@value="5000"])[2]')
            .useCss()
            .click('@search')
            .expect.element('[id="results-banner-page-title"]').to.contain.text('Subaru Forester')
        this
            .useXpath()
            .click('(//h4[@class="display-inline-block"])[1]')
            .useCss()
        return this
    },

    scrollDownBy: function (pixels) { //custom command for scrolling down
        this.api.execute(`window.scrollBy(0, ${pixels})`)
        return this
    },

    filter: function (car) {
        this
            .waitForElementVisible('@advSearch')
            .click('@advSearch')
            .click('#searchRadius')
            .click('[value="25"]')
            .clearValue('@zip')
            .setValue('@zip', '22314')
            .click('@newOrUsed')
            .click('#condition-New-label')
            .click('@newOrUsed')
            .click('#Make')
            .click('[value="Buick"]')
            .click('#Model')
            .click('[value="Enclave"]')
            .click('#perform-advanced-search')
            .useXpath()
            .expect.element('(//h4[@itempropname="name"])[1]').to.contain.text('2020 Buick Enclave')
        return this
    }
}
module.exports = {
    url: 'https://www.carsforsale.com',
    commands: [commands],
    elements: {
        signIn: '[id="signInIcon"]',
        favorites: '[title="Favorites"]',
        make: '[name="make"]',
        maxprice: '[name="maxprice"]',
        search: '[class="btn btn-lg btn-block btn-primary shadow-style search-banner-button"]',
        signIn2: { selector: '(//a[@href="/profile"])[2]', locateStrategy: 'xpath' },
        userI: '[id="profileLoginEmail"]',
        passI: '[id="profileLoginPassword"]',
        user: 'tjones@msn.com',
        pass: 'QApasstest',
        advSearch: { selector: '(//a[@href="/advanced-search"])[1]', locateStrategy: 'xpath' },
        zip: '#zipcode',
        newOrUsed: '[data-parent="#accordionCondition"]'

    }
}