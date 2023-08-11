const path = require('path')
const { config } = require('./wdio.shared.conf')



    // ====================
    // Runner Configuration
    // ====================
    config.runner = 'local',
    config.port = 4723;


// ==================
// Specify Test Files
// ==================
config.specs = [
    'C:\\Users\\Craig\\Desktop\\Appium\\webdriverio-appium-v8\\test\\specs\\add-note.spec.js'
    //'./test/specs/**/add-note.spec.js'
],

// ============
// Capabilities
// ============
config.capabilities = [{
    // capabilities for Browser web tests on an Android Emulator
    'appium:platformName': 'android',
    'appium:deviceName': 'Pixel 3',
    'appium:platformVersion': '12.0',
    'appium:automationName': 'UiAutomator2',
    'appium:app': path.join(process.cwd(),'\\app\\android\\ColorNote+Notepad.apk'),
    'appium:autoGrantPermissions': true
}],




exports.config = config;