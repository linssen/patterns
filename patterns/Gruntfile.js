"use-strict";

module.exports = function(grunt) {
    grunt.initConfig({
        paths: {
            app: {
                styles: "./static/_application/styles/",
                scripts: "./static/_application/scripts/"
            },
            styles: "./static/styles/",
            scripts: "./static/scripts/"
        },
        watch: {
            styles: {
                files: [
                    "<%= paths.app.styles %>**/*.scss",
                    "<%= paths.styles %>**/*.scss"
                ],
                tasks: ["sass:dev"]
            },
            scripts: {
                files: [
                    "<%= paths.app.scripts %>**/*.js",
                    "<%= paths.scripts %>**/*.js"
                ],
                tasks: ["concat"]
            }
        },
        concat: {
            scripts: {
                files: {
                    "<%= paths.app.scripts %>dist/patterns.js": [
                        "<%= paths.app.scripts %>**/*.js"
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
                    "<%= paths.app.styles %>dist/patterns.css": "<%= paths.app.styles %>screen.scss",
                    "<%= paths.app.styles %>dist/project.css": "<%= paths.styles %>screen.scss"
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('dev', ['sass', 'concat']);
};
