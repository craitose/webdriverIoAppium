require('dotenv').config();
const { config } = require('./wdio.shared.conf');

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
];

// ============
// Capabilities - Restored to your original flat format
// ============
config.capabilities = [{
    alwaysMatch: {
        platformName: 'Android',
        deviceName: 'Google Pixel 6',     // Updated target
        platformVersion: '12.0',          // Updated target
        automationName: 'UiAutomator2',
        app: 'ColorNoteApp',
        autoGrantPermissions: true,
        'browserstack.wdioService': '8.14.3'
    }
}];

exports.config = config;
