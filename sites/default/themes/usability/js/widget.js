/* Use an immediately invoked function to isolate widget variables */
(function(){

  /* Local JQuery variable */
  var jQuery;

  /* Load jQuery if it is not present */
  if (window.jQuery === undefined || window.jQuery.fn.jquery != '1.7.2') {
    var script_tag = document.createElement('script');
    script_tag.setAttribute('type', 'text/javascript');
    script_tag.setAttribute('src',
      "{{ site.baseurl }}/misc/jquery-3.5.0.min.js");

    /* Wait for the script to load */
    if(script_tag.readyState) {
      // For Old versions of IE
      script_tag.onreadystatechange = function() {
        if(this.readyState == 'complete' || this.readyState == 'loaded') {
          scriptLoadHandler();
        }
      };
    } else {
      //Other browsers
      script_tag.onload = scriptLoadHandler;
    }

    // Try to find the head, otherwise default to the documentElement
    (document.getElementsByTagName("head")[0] || document.documentElement).appendChild(script_tag);

  } else {
    /* The site already has jQuery loaded */
    jQuery = window.jQuery;
    main();
  }
  /* Called once jQuery has been loaded */
  function scriptLoadHandler(){
    /* Restore jQuery and window.jQuery to their original values */
    jQuery = window.jQuery.noConflict();
    main();
  }

  /* main - Main function for the voc widget.  This function is called once */
  /* jQuery has been loaded.                                                */
  function main() {
    /* create the voc object */
    window.voc = {
      Survey: survey
    }

    survey = voc.Survey({surveyID: 0});
    survey.loadSurvey();
  }

  /* define the survey module using the revealing module pattern.          */
  function survey(opts){
    var _opts = opts || {};

    var _targetID = _opts.targetID || "survey_target";
    var _pageURL  = _opts.pageURL  || (window.location.origin + window.location.pathname);
    var _surveyID = _opts.surveyID;
    var _this = this;

    /* getters and setters for private variables */
    function getTargetID()         { return _targetID; }
    function getSurveyID()         { return _surveyID; }
    function getPageURL()          { return _pageURL;  }

    function setTargetID(targetID) { _targetID = targetID; }
    function setPageURL(url)       { _pageURL = url; }


    /* loadSurvey(success: FunctionPointer, error: FunctionPointer)       */
    /* Attempt to load the survey with id _surveyID into the DOM element  */
    /* with id _targetID.                                                 */
    function loadSurvey() {
      var _hostname = "comment-app.hhs.gov";
      var _url = "http://"+ _hostname + "/surveys/" + _surveyID + ".json";
      var target = jQuery("#" + _targetID)
      var surveyID = _surveyID
      
      /* get the survey identified by id _surveyID and insert it into the */
      /* DOM element _targetID.                                           */
      jQuery.getJSON(_url, "callback=?&page_url=" + _pageURL, function(data){
        target.html(data.html);
      });

      jQuery(document).on("submit", "#"+_targetID+" form", function(){
      
        // create and post to a hidden iframe to avoid cross-domain POST limitations
        var iframe = jQuery("<iframe>");
        var uniqueString = "surveyPostContainerIframe";
        var form = target.children("form").first();
        
        // add the hidden iframe
        jQuery("body").append(iframe);
        iframe.hide();

        // direct the form post into the iframe's window
        iframe[0].contentWindow.name = uniqueString;
        form.attr("target", uniqueString);
        form.attr("action", 'http://' + _hostname + '/survey_responses');

        // call the native submit, not the jQuery submit wrapper
        // this is to avoid hitting this handler twice (and looping)
        form[0].submit();

        // pull back the thank you page
        jQuery.getJSON("http://" + _hostname + "/surveys/" + _surveyID + "/thank_you_page.json", "callback=?", function(data){
          jQuery("#" + _targetID).html(data.html);
        });

        return false;
      });

      return _this;
    }

    return {
      /* Define the publicly accessible methods */
      getTargetID: getTargetID,
      getSurveyID: getSurveyID,
      getPageURL:  getPageURL,
      setTargetID: setTargetID,
      loadSurvey: loadSurvey
    };
  };

})();

/******************* Survey.js ******************************************/
function show_next_page(page){
  var required_unanswered = false;
  
  required_unanswered = check_for_unanswered_required(page);
  
  if (!required_unanswered){
    jQuery("#page_" + page).hide();
    var next_page = jQuery("#page_" + page + "_next_page").val();
    
    /* Set the prev page on next page */
   set_prev_page(page, next_page);
    
    jQuery("#page_"+ next_page).show();  
    window.location.hash="PAGE_" + next_page;
  } else {
    alert('Please answer all required questions before moving on to the next page.');
  }

}

function show_prev_page(page){
  jQuery("#page_"+page).hide();
  jQuery("#page_"+ jQuery("#page_" + page + "_prev_page").val() ).show();
  window.location.hash = "PAGE_" + page;
}

function set_next_page(current_page, next_page) {
  jQuery("#page_" + current_page + "_next_page").val(next_page);
  jQuery("#page_" + next_page + "_prev_page").val(current_page);
}

function set_prev_page(current_page, prev_page) {
  jQuery("#page_" + prev_page + "_prev_page").val(current_page);
}

function check_for_unanswered_required(page) {
  required = false;
    jQuery("#page_"+page+" input[type=hidden].required_question").each(function(index){
      if(jQuery(this).val() == 'true'){
        question_number = jQuery(this).attr('id').split('_')[1]; // q_{number}_required
        /* if the element is a radio button that is required then check to make sure one is checked */
        if( jQuery(".question_" + question_number + "_answer").attr('type') == "radio" && jQuery(".question_" + question_number + "_answer:checked").length == 0 ) {
          required =  true;
        } else if( jQuery("select.question_" + question_number + "_answer").length > 0 && jQuery(".question_" + question_number + "_answer:selected").length == 0 ) {
          required =  true;
        } else if( jQuery(".question_" + question_number + "_answer").attr('type') == "checkbox" && jQuery(".question_" + question_number + "_answer").length > 0 && jQuery(".question_" + question_number + "_answer:checked").length == 0 ) {
          required =  true;
        } else if( jQuery(".question_" + question_number + "_answer").attr('type') == "text" && jQuery(".question_" + question_number + "_answer").val() == "") {
          required =  true;
        } else if( jQuery(".question_" + question_number + "_answer").attr('type') == "textarea" && jQuery(".question_" + question_number + "_answer").val() == "") {
          required =  true;
        } 
      }
    });
    return required;
}

function validate_before_submit(page){
  if (!check_for_unanswered_required(page)){
    return true;
  } else {
    alert('Please answer all required questions before moving on to the next page.');
    return false;
  }

}
