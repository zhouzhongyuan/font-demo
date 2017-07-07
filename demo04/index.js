var fontSpider = require('font-spider');

fontSpider.spider([__dirname + '/src/index.html'], {
    silent: false
}).then(function(webFonts) {
    return fontSpider.compressor(webFonts, {backup: true});
}).then(function(webFonts) {
    console.log(webFonts);
}).catch(function(errors) {
    console.error(errors);
});