const puppeteer = require('puppeteer')

console.log({
    "process.env": process.env,
    "process.env.URL_OF_SITE_TO_AUDIT_PERFORMANCE": process.env.URL_OF_SITE_TO_AUDIT_PERFORMANCE
})

const SIGNIN_FORM_ELEMENT_SLUG_TO_PUPPETEER_HTML_ELEMENT_SELECTOR = {
    EMAIL_INPUT: 'input[id="input-email"]',
    PASSWORD_INPUT: 'input[id="input-password"]',
    SIGNIN_BUTTON: 'button[id="button-signin"]'
}

const signInCredentials = {
    email: process.env.FROM_CI_CD_PIPELINE_SIGNIN_EMAIL,
    password: process.env.FROM_CI_CD_PIPELINE_SIGNIN_PASSWORD
}

const SIGNIN_URL = process.env.FROM_CI_CD_PIPELINE_SIGNIN_URL

module.exports = async function () {
    const browser = await puppeteer.launch({
        headless: true,
        args: [
            '--no-sandbox',
            '--disable-setuid-sandbox'
        ]
    })

    const page = await browser.newPage()

    console.log({
        component: "await page.goto( " + SIGNIN_URL + " )"
    })

    await page.goto(
        SIGNIN_URL
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
