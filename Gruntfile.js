/**
 * Created by Administrator on 2016/4/19.
 */
module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        watch: {
            sass: {
                files: ['sass/**/*.{scss,sass}','sass/_partials/**/*.{scss,sass}'],
                tasks: ['sass:dist']
            }
        },
        sass: {
            dist: {
                files: {
                    'stylesheets/styles.css': 'sass/styles.scss'
                }
            }
        }
    });
    grunt.registerTask('default', ['sass:dist', 'watch']);
    grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
};