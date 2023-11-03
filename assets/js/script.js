$(document).ready(function () {

    // for mobile dropdown menu --->
    $('.mobile_menu_btn').click(function () {
        $('.mobile_menu').toggle();
    });

    // click functionality for Add Survey button
    $(".btn_addSurvey").click(function () {
        var tooltip = $(this).next(".cta_addSurvey_tooltip");

        var spaceAtBottom = $(window).height() - ($(this).offset().top + $(this).outerHeight());
  
        if (spaceAtBottom < tooltip.outerHeight()) {

            tooltip.css({ top: "auto", bottom: $(this).outerHeight() + "px" });

        } else {
            
            tooltip.css({ top: $(this).outerHeight() + "px", bottom: "auto" });
        }

        $(".cta_addSurvey_tooltip").not(tooltip).slideUp(350);

        tooltip.slideToggle(350);
    });

    // survey click event = when click three dots 
    $(".survey_tooltip--Dots").click(function () {
        var dropdown = $(this).closest(".survey_tooltip_blk").find("#survey_tooltip--dropdown");
        dropdown.toggle();
    });


    // edit question offcanvas 
    //this is for future code -------
    // $('.open_edit_question_offcanvas').click(function(){
    //     $('.edit_question_offcanvas , .edit_question_offcanvas_overlay').addClass('active');
    // })
    
    // $('.close_edit_question_overlay').click(function(){
    //     $('.edit_question_offcanvas, .edit_question_offcanvas_overlay').removeClass('active');
    // })

    // edit pill variable ------------
    $('.pill_variable_open').click(function(){
        $('.pill_editId_input , .pill_select_open , .pwd_btn_blk,.pill_idText').toggle();
    })

    $('.pwd_save_click, .pwd_cancel_click').click(function(){
        $('.pill_editId_input , .pill_select_open , .pwd_btn_blk,.pill_idText').toggle();
    })




    // edit pill variable ----------------
    $('.survey_pill').click(function(){
        var pill = $(this).closest(".survey_question__blk").find(".pill_dropdown_wrapper");

        pill.toggle();
    })

      // pill for everywhere ----------------
      $('.survey_pill').click(function(){
        var pill = $(this).closest(".custom_pill__blk").find(".pill_dropdown_wrapper");

        pill.toggle();
    })


    // accordion ----------------

    $('.accordion_click_blk').click(function(e){
        e.preventDefault();
        $(this).closest('.survey_parent_li').find('.survey__answer_area,.accordion_close,.accordion_open').toggle();
    });


    // check answer  --------------------

    $('.answer_click_blk').click(function(e){
        e.preventDefault();
        $(this).closest('.answer_single_child').find('.ban_answer,.check_answer').toggle();

        $(this).closest('.answer_single_child').find('.given_answer,.optional_answer, .edit_answer ,.delete_answer').toggleClass('active');
    });


    //-------------------------

    $('.optional_answer').click(function(e){
        e.preventDefault();
        $(this).closest('.answer_single_child').find('.modify_answer').toggle();
    });


    // edit answer ------------

    $('.edit_answer').click(function(e){
        e.preventDefault();
        $(this).closest('.answer_single_child').find('.given_answer,.edited_version_answer').toggle();
    });

    $('.yes_click_edit, .no_click_edit').click(function(e){
        e.preventDefault();
        $(this).closest('.answer_single_child').find('.given_answer,.edited_version_answer').toggle();
    });


    // delete answer ----------

    $('.delete_answer').click(function(e){
        e.preventDefault();
        $(this).closest('.answer_single_child').find('.given_answer,.permanently_delete_answer').toggle();
    });

    $('.yes_delete_answer, .no_delete_answer').click(function(e){
        e.preventDefault();
        $(this).closest('.answer_single_child').find('.given_answer,.permanently_delete_answer').toggle();
    });


    // history offcanvas ------
    $('.open_history_offcanvas').click(function(){
        $('.history_offcanvas , .offcanvas_overlay').addClass('active');
    })
    
    $('.survey_tooltip--x').click(function(){
        $('.history_offcanvas, .offcanvas_overlay').removeClass('active');
    })

    // survey popUp modal ------
    $('.restore_survey').click(function(){
        $('.restore_survey_popUp , .modal_overlay').addClass('active');
    })
    
    $('.close_modal').click(function(){
        $('.restore_survey_popUp , .modal_overlay').removeClass('active');
    })

    // settings offcanvas area js 
    $('.offcanvas_open').click(function(){
        $('.offcanvas_area , .offcanvas_overlay').addClass('active');
    })
    
    $('.survey_tooltip--x').click(function(){
        $('.offcanvas_area, .offcanvas_overlay').removeClass('active');
    })


});

