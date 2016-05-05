var cheerio = require('cheerio');
var superagent = require('superagent');
var request = require('request');
var eget = require('eget');

(function getImageUrl(){
  superagent.get('http://d.pr/i/S4ex')
    .end(function (err, sres) {
      if (err) {
        return next(err);
      }
      var $ = cheerio.load(sres.text);
      var item = $("#main-img img").attr('src'); // 获取资源url
      
      console.log(item);
      //
      eget(item);

    });
})();


