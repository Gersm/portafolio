$(function(){
   // DETECTAR SI ES ANDROID 4
   var $browser = $.browser.name;
   var $version = $.browser.versionNumber;
   if ($browser == "android" && $version <= 4) {
      $("body").addClass("no-support-border");
   }
   // alert("mi navegador es: " + $browser + " y la version es: " + $version);


   var $skills = $(".Skills");
   var $skills_i = 1;
   var $n_element = 3;
   var $skills_sig;

   window.setInterval(classnext,2000);
   $skills.on("click",classnext);

   function classnext() {
      if ($skills_i != $n_element) {
         $skills_sig = $skills_i + 1;
         $skills.removeClass("Skills__i" + $skills_i);
         $skills.addClass("Skills__i" + $skills_sig)

         $skills_i = $skills_i + 1;
      } else {
         $skills_sig = 1;
         $skills.removeClass("Skills__i" + $n_element);
         $skills.addClass("Skills__i" + $skills_sig)

         $skills_i = 1;
      }
   }
})
