module.exports = {
    '@tags': ['google'],
    'Google advanced search: Bruce lee'(browser) {
        const mainQuery = "Bruce lee";
        const mainQueryInputSelector = 'input[name="as_q"]';
        
        const languageDropdownOpernerSelector = '#lr_button';
        const languageDropdownValueSelector = '.goog-menuitem[value="lang_hy"]';
        browser
            .url('https://www.google.com/advanced_search')
            .setValue(mainQueryInputSelector, mainQuery)
            .click(languageDropdownOpernerSelector)
            .click(languageDropdownValueSelector)
            .saveScreenshot('tests_output/google.png')
    }
}       