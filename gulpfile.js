/**
 * Created by user on 15/10/15.
 */

var gulp = require('gulp'),
    connect = require('gulp-connect');

gulp.task('connect', function(){
    connect.server({
        port: 8888
    });
});

gulp.task('default', ['connect']);