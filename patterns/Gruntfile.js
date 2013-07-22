"use-strict";

module.exports = function(grunt) {
    grunt.initConfig({
        paths: {
            styles: "./static/styles/",
            scripts: "./static/scripts/"
        },
        watch: {
            styles: {
                files: [
                    "<%= paths.styles %>**/**/*.scss"
                ],
                tasks: ["sass:dev"]
            },
            scripts: {
                files: [
                    "!<%= paths.scripts %>dist/patterns.js",
                    "<%= paths.scripts %>**/*.js",
                ],
                tasks: ["concat"]
            }
        },
        concat: {
            scripts: {
                files: {
                    "<%= paths.scripts %>dist/patterns.js": [
                        "!<%= paths.scripts %>dist/patterns.js",
                        "<%= paths.scripts %>lib/jquery/*js",
                        "<%= paths.scripts %>lib/**/*.js",
                        "<%= paths.scripts %>*.js"
                    ]
                }
            }
        },
        sass: {
            dev: {
                options: {
                    style: "expanded"
                },
                files: {
                    "<%= paths.styles %>dist/patterns.css": "<%= paths.styles %>screen.scss",
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('dev', ['sass', 'concat']);
};
