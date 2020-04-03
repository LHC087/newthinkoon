(function ($) {
  "use strict"; // Start of use strict

  $(document).on("mousewheel DOMMouseScroll", function (e) {
    // jq 获取dom 事件对象要通过originalEvent
    var delta =
      (e.originalEvent.wheelDelta && (e.originalEvent.wheelDelta > 0 ? 1 : -1)) || // chrome & ie
      (e.originalEvent.detail && (e.originalEvent.detail > 0 ? -1 : 1)); // firefox
    if (delta > 0) {
      // 向上滚 
      $("#showmenu").addClass('showupmenu');
    } else if (delta < 0) { // 向下滚 
      $("#showmenu").removeClass('showupmenu');
    }
  });
  var btn = document.getElementById("btn");
  btn.onclick = function () {
    $("#showjoin").removeClass('showjoins');
    $('body').css('overflow', 'hidden');
  }
  $("#btncolse").click(function () {
    $("#showjoin").addClass('showjoins');
    $('body').css('overflow', 'auto');
  });
  //动态边框
  var $animateBorder = $(".animateBorder");
  var str =
    '<div class="bdLeft"></div><div class="bdBottom"></div><div class="bdTop"></div><div class="bdRight"></div>';
  //插入模拟边框的div
  $animateBorder.append(str);
  //动态
  $animateBorder.hover(
    function () {
      $(this)
        .find(".bdLeft,.bdRight")
        .stop()
        .animate({
            height: "100%"
          },
          500
        );
      $(this)
        .find(".bdTop,.bdBottom")
        .stop()
        .animate({
            width: "100%"
          },
          500
        );
    },
    function () {
      $(this)
        .find(".bdLeft,.bdRight")
        .stop()
        .animate({
            height: "0"
          },
          500
        );
      $(this)
        .find(".bdTop,.bdBottom")
        .stop()
        .animate({
            width: "0"
          },
          500
        );
    }
  );
  //图片懒加载
  $(function () {
    $("img.lazy").lazyload({
      effect: "fadeIn",
      threshold: 200,
    });
  });
})(jQuery); // End of use strict