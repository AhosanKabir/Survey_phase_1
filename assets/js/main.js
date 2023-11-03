
$(document).ready(function () {
  
  // tooltips for dots 
  // $("#survey_tooltip--Dots").click(function () {
  //   $("#survey_tooltip--dropdown").toggle();
  // });

  // offcanvas area js 
  $('.offcanvas_open').click(function(){
    $('.offcanvas_area , .offcanvas_overlay').addClass('active');
  })
  
  $('.survey_tooltip--x').click(function(){
    $('.offcanvas_area, .offcanvas_overlay').removeClass('active');
  })

  // history offcanvas 
  $('.open_history_offcanvas').click(function(){
    $('.history_offcanvas , .offcanvas_overlay').addClass('active');
  })
  
  $('.survey_tooltip--x').click(function(){
    $('.history_offcanvas, .offcanvas_overlay').removeClass('active');
  })


  // survey popUp modal 
  $('.restore_survey').click(function(){
    $('.restore_survey_popUp , .modal_overlay').addClass('active');
  })
  
  $('.close_modal').click(function(){
    $('.restore_survey_popUp , .modal_overlay').removeClass('active');
  })


 
  // mobile menu 
  $('.mobile_menu_btn').click(function () {
    $('.mobile_menu').toggle();
  });


  $('.file_upload_btn').click(function () {
    $('.Show_default_media').toggle();
    $('.show_fileUpload_media').toggle();
  });

  $('.file_cancel_btn').click(function(){
    $('.Show_default_media').toggle();
    $('.show_fileUpload_media').toggle();
  })

  $(".checkBox").click(function () {

    $(this).closest(".settings_click_wrapper").toggleClass("checked");

    var $wrapper = $(this).closest(".settings_click_wrapper");
    $wrapper.find(".settings_list_text, .checkEvent_area").toggleClass("checked");
  });
  


  //== dropdown when click three dots ==

  $(".cta_addSurvey").click(function () {
      var tooltip = $(this).next(".cta_addSurvey_tooltip");
      
      // Check if there's enough space at the bottom
      var spaceAtBottom = $(window).height() - ($(this).offset().top + $(this).outerHeight());

      if (spaceAtBottom < tooltip.outerHeight()) {
          // Not enough space at the bottom, position the tooltip above the element
          tooltip.css({ top: "auto", bottom: $(this).outerHeight() + "px" });
      } else {
          // Enough space at the bottom, position the tooltip below the element
          tooltip.css({ top: $(this).outerHeight() + "px", bottom: "auto" });
      }

      // Close all other tooltips
      $(".cta_addSurvey_tooltip").not(tooltip).slideUp(350);

      // Toggle the display of the clicked tooltip
      tooltip.slideToggle(350);
  });
});
