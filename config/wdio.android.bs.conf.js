require('dotenv').config();
const { config: sharedConfig } = require('./wdio.shared.conf');

const browserstackConfig = Object.assign({}, sharedConfig, {
    // Overwrite credentials cleanly
    user: process.env.BROWSERSTACK_USER,
    key: process.env.BROWSERSTACK_KEY,

    // Define explicit W3C capabilities
    capabilities: [{
        platformName: 'Android',
        'appium:automationName': 'UiAutomator2',
        'appium:autoGrantPermissions': true,
        'appium:app': 'ColorNoteApp',
        
        'bstack:options': {
            deviceName: 'Google Pixel 5',
            osVersion: '11.0', 
            realMobile: 'true'   
        }
    }],

    // Explicitly overwrite the services array to completely drop local Appium
    services: [
        ['browserstack', {
            browserstackLocal: false
        }]
    ]
});

// Explicitly scrub out legacy parameters that break the W3C parsing validation
delete browserstackConfig.desiredCapabilities;
delete browserstackConfig.capabilities.desiredCapabilities;

exports.config = browserstackConfig;
