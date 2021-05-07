function doFirst(){
    // hamburger btn
    $("button.burgerbtn").on("click", function (e) {
      e.preventDefault();
      $("div.overlaymenu").fadeIn();
    }); 

    // 關閉popup
    $("a.closebtn").on("click", function (e) {
      e.preventDefault();
      $("div.overlaymenu").fadeOut();
    });
}window.addEventListener('load',doFirst);
    