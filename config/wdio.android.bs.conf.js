require('dotenv').config();
const { config } = require('./wdio.shared.conf')


// ==================
// BrowserStack Credentials
// ==================
config.user = process.env.BROWSERSTACK_USER;
config.key = process.env.BROWSERSTACK_KEY;

// ==================
// Specify Test Files
// ==================
config.specs = [
    'C:\\Users\\Craig\\Desktop\\Appium\\webdriverio-appium-v8\\test\\specs\\add-note.spec.js'
],

// ============
// Capabilities
// ============
config.capabilities = [{
    // capabilities for Browser web tests on an Android Emulator
    'platformName': 'Android',
    'deviceName': 'Google Pixel 3',
    'platformVersion': '10.0',
    'automationName': 'UiAutomator2',
    'app': 'bs://2d885f8d86beba030c35e12bbcf4c274a9239713',
    'autoGrantPermissions': true
}

],

// Test runner services
// Services take over a specific job you don't want to take care of. They enhance
// your test setup with almost no effort. Unlike plugins, they don't add new
// commands. Instead, they hook themselves up into the test process.
config.services = ['browserstack' ];


exports.config = config;