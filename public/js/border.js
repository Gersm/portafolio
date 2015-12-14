$(function(){
   var $browser = $.browser.name;
   var $version = $.browser.versionNumber;
   if ($browser == "android" && $version <= 4) {
      $("body").addClass("no-support-border");
   }
   // alert("mi navegador es: " + $browser + " y la version es: " + $version);
})
