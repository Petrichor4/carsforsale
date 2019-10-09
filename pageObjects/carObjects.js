var commands = {
    signIn: function (profile) {
        this
            .click('@signIn')
            .click('@signIn2')
            .clearValue(profile)
        return this
    }
}

module.exports = {
    url: 'https://www.carsforsale.com',
    commands: 'commands',
    elements: {
        signIn: '[id="signInIcon"]',
        favorites: '[title="Favorites"]',
        make: '[name="make"]',
        maxprice: '[name="maxprice"]',
        search: '[class="btn btn-lg btn-block btn-primary shadow-style search-banner-button"]',
        signIn2: '(//a[@href="/profile"])[2]'
    }
}