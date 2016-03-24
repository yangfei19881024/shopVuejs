import $ from 'zepto'

export default {
  bind () {

    let el = $(this.el)

    var refreshTimer = null,
        boqii_loading = boqii_loading || {};
        refreshTimer = setTimeout(refreshAll, 1e3);

    $(el).on('scroll', function () {
        if (refreshTimer) {
            clearTimeout(refreshTimer);
            refreshTimer = null;
        }
        refreshTimer = setTimeout(refreshAll, 1e3);
    });

    function refreshAll(){

      $.belowthefold = function (element) {
          var fold = $(window).height() + $(window).scrollTop();
          return fold <= $(element).offset().top;
      };

      $.abovethetop = function (element) {
          var top = $(window).scrollTop();
          return top >= $(element).offset().top + $(element).height();
      };

      /*
      *判断元素是否出现在viewport中 依赖于上两个扩展方法
      */
      $.inViewport = function (element) {
          return !$.belowthefold(element) && !$.abovethetop(element)
      };

      boqii_loading.loadImg = function (img) {
          if (!img.attr('src')) {
              var src = img.attr('data-src');
              img.attr('src', src).load(function () {
                  //img.removeAttr('data-src');
              });
          }
      };

      boqii_loading.getInViewportList = function () {
          var list = $(el).find('.lazy'),
              ret = [];
          list.each(function (i) {
              var img = list.eq(i);
              if ($.inViewport(img)) {
                  boqii_loading.loadImg(img);
              }
          });
      };
      boqii_loading.getInViewportList();

    }


  }
}
