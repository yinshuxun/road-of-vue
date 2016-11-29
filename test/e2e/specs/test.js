// For authoring Nightwatch tests, see
// http://nightwatchjs.org/guide#usage

module.exports = {
    'default e2e tests' (browser) {
        browser
            .url('http://localhost:3000/#/')
            .waitForElementVisible('#app', 5000)
            .assert.elementPresent('body')
            .pause(1000)
            .click('a[href="/#/show"]')
            .waitForElementVisible('span[value="1002"]', 5000)
            .pause(1000)
            .click('span[value="1002"]')
        // .assert.containsText('a', 'PLATO')
        // .assert.containsText('a', 'Show')
        // there is no router-view tag in vue 2
        // .assert.elementCount('.router-view', 0)
        .end()
    }
}
