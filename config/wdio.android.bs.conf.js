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
    './test/specs/add-note.spec.js'
],

// ============
// Capabilities
// ============
config.capabilities = [{
    // capabilities for Browser web tests on an Android Emulator
    'platformName': 'Android',
    'appium:automationName': 'UiAutomator2',
    'appium:autoGrantPermissions': true,
    'appium:app': 'ColorNoteApp',
    
    'bstack:options':{
     'deviceName': 'Google Pixel 5',
     'osVersion': '11.0',    
    },   

}

],

// Test runner services
// Services take over a specific job you don't want to take care of. They enhance
// your test setup with almost no effort. Unlike plugins, they don't add new
// commands. Instead, they hook themselves up into the test process.
config.services = ['browserstack' ];


exports.config = config;
