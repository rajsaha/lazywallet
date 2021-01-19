/* craco.config.js */
const path = require(`path`);

module.exports = {
    webpack: {
        alias: {
            '@': path.resolve(__dirname, 'src/'),
            '@Components': path.resolve(__dirname, 'src/components'),
            '@Helper': path.resolve(__dirname, 'src/helper'),
            '@Pages': path.resolve(__dirname, 'src/pages'),
        }
    },
};