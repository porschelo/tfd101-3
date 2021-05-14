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
    //登入popup
    $("a.login").on("click", function (e) {
      e.preventDefault();
      $("div.loginpopup").fadeIn();
    });
    
    $("a.close_login_btn").on("click", function (e) {
      e.preventDefault();
      $("div.loginpopup").fadeOut();
    });

    //註冊popup
    
    $("a.gosignup").on("click", function (e) {
      e.preventDefault();
      $("div.loginpopup").fadeOut();
      $("div.signup").fadeIn();
    });

    $("a.close_signup_btn").on("click", function (e) {
      e.preventDefault();
      $("div.signup").fadeOut();
    });

    $("a.gologin").on("click", function (e) {
      e.preventDefault();
      $("div.signup ").fadeOut();
      $("div.loginpopup").fadeIn();
    });


}window.addEventListener('load',doFirst);
    