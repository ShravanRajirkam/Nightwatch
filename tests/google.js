module.exports = {
    '@tags': ['google'],
    'Google advanced search: Bruce lee'(browser) {
        const mainQuery = "Bruce lee";
        const mainQueryInputSelector = 'input[name="as_q"]';
        
        const languageDropdownOpernerSelector = '#lr_button';
        const languageDropdownValueSelector = '.goog-menuitem[value="lang_hy"]';

        const lastUpdatedOpenerSelector = '#as_qdr_button';
        const lastUpdatedValueSelector = '.goog-menuitem[value="m"]';

        const submitButtonSelector = '.jfk-button[type="submit"]'
        browser
            .url('https://www.google.com/advanced_search')
            .setValue(mainQueryInputSelector, mainQuery)

            .click(languageDropdownOpernerSelector)
            .click(languageDropdownValueSelector)

            .click(lastUpdatedOpenerSelector)
            .click(lastUpdatedValueSelector)

            .click(submitButtonSelector)

            .saveScreenshot('tests_output/google.png')
    }
}       