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
        user:'tjones@msn.com',
        pass: 'QApasstest',

    }
}