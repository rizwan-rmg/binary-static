var formId = '#virtual-acc-form',
    element = {
        form: formId,
        emailInput: formId + ' input[type=email]',
        passwordInput: formId + ' input[type=password]',
        signinButton: formId + ' input[type=submit]'
    };

module.exports = {

    "createAccountSuccess": function (browser) {

        var randomStr = browser.globals.randomStr(5),
            randomEmail = 'binarytest-' + randomStr + '@mailinator.com';

        browser
            .url(browser.globals.url)
            .waitForElementVisible(element.form, 5000)
            .setValue(element.emailInput, randomEmail)
            .setValue(element.passwordInput, randomStr)
            .click(element.signinButton)
            .pause(5000)
            .assert.containsText('body', 'Welcome')
        .end();
    }
};