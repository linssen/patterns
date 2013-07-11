"use-strict";

module.exports = function(grunt) {
    grunt.initConfig({
        paths: {
            app: {
                styles: "./static/_application/styles/",
                scripts: "./static/_application/scripts/"
            },
            styles: "./static/styles",
            scripts: "./static/scripts"
        },
        watch: {
            styles: {
                files: [
                    "<%= paths.app.styles %>**/*.scss"
                ],
                tasks: ["sass:dev"]
            }
        },
        sass: {
            dev: {
                options: {
                    style: "expanded"
                },
                files: {
                    "<%= paths.app.styles %>dist/patterns.css": "<%= paths.app.styles %>**/*.scss"
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('dev', ['sass']);
};
