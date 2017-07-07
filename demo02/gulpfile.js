// Get needed text from html
var gulp = require('gulp');
var fontmin = require('gulp-fontmin');
function minifyFont(text, cb) {
    gulp
        .src('src/*.ttf')
        .pipe(fontmin({
            text: text
        }))
        .pipe(gulp.dest('dest/font'))
        .on('end', cb);
}

gulp.task('fonts', function(cb) {

    var buffers = [];

    gulp
        .src('./src/index.html')
        .on('data', function(file) {
            buffers.push(file.contents);
        })
        .on('end', function() {
            var text = Buffer.concat(buffers).toString('utf-8');
            minifyFont(text, cb);
        });

});