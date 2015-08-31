module.exports = function (grunt) {

    require('load-grunt-tasks')(grunt);

    grunt.initConfig({
        jshint: {
            all: ['invalid.js']
        },
        alert: {
            slack: {
                type: 'slack',
                webhookUrl: process.env.SLACK_HOOK,
                channel: '#builds',
                username: 'Grunt Alert Example',
                iconUrl: '',
                iconEmoji: ':rotating_light:',
                message: 'Build is broken %s',
                log: './slack.log'
            }
        }
    });

    grunt.registerTask('build', ['alert.hook', 'jshint']);
};
