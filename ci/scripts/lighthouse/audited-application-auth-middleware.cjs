const puppeteer = require('puppeteer')

const SIGNIN_FORM_ELEMENT_SLUG_TO_PUPPETEER_HTML_ELEMENT_SELECTOR = {
    EMAIL_INPUT: 'input[id="input-email"]',
    PASSWORD_INPUT: 'input[id="input-password"]',
    SIGNIN_BUTTON: 'input[id="button-signin"]'
}

const signInCredentials = {
    email: "", // ⚠️ To alter ⚠️
    password: "" // ⚠️ To alter ⚠️
}

const SIGNIN_BASE_URL = "" // ⚠️ To alter ⚠️
const SIGNIN_PATH = "" // ⚠️ To alter ⚠️

module.exports = async function () {
    const browser = await puppeteer.launch({

        args: ['--no-sandbox']
    })

    const page = await browser.newPage()

    await page.goto(
        SIGNIN_BASE_URL + SIGNIN_PATH
    )

    await page.type(
        SIGNIN_FORM_ELEMENT_SLUG_TO_PUPPETEER_HTML_ELEMENT_SELECTOR.EMAIL_INPUT,
        signInCredentials.email
    )

    await page.type(
        SIGNIN_FORM_ELEMENT_SLUG_TO_PUPPETEER_HTML_ELEMENT_SELECTOR.PASSWORD_INPUT,
        signInCredentials.password
    )

    await page.click(
        SIGNIN_FORM_ELEMENT_SLUG_TO_PUPPETEER_HTML_ELEMENT_SELECTOR.SIGNIN_BUTTON
    )

    await page.waitForNavigation()

    await browser.close()
}
