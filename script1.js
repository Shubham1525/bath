	window._wpemojiSettings = {"baseUrl":"https:\/\/s.w.org\/images\/core\/emoji\/13.0.1\/72x72\/","ext":".png","svgUrl":"https:\/\/s.w.org\/images\/core\/emoji\/13.0.1\/svg\/","svgExt":".svg","source":{"concatemoji":"https:\/\/www.scudo.co.uk\/wp-includes\/js\/wp-emoji-release.min.js?ver=5.6"}};
			!function(e,a,t){var r,n,o,i,p=a.createElement("canvas"),s=p.getContext&&p.getContext("2d");function c(e,t){var a=String.fromCharCode;s.clearRect(0,0,p.width,p.height),s.fillText(a.apply(this,e),0,0);var r=p.toDataURL();return s.clearRect(0,0,p.width,p.height),s.fillText(a.apply(this,t),0,0),r===p.toDataURL()}function l(e){if(!s||!s.fillText)return!1;switch(s.textBaseline="top",s.font="600 32px Arial",e){case"flag":return!c([127987,65039,8205,9895,65039],[127987,65039,8203,9895,65039])&&(!c([55356,56826,55356,56819],[55356,56826,8203,55356,56819])&&!c([55356,57332,56128,56423,56128,56418,56128,56421,56128,56430,56128,56423,56128,56447],[55356,57332,8203,56128,56423,8203,56128,56418,8203,56128,56421,8203,56128,56430,8203,56128,56423,8203,56128,56447]));case"emoji":return!c([55357,56424,8205,55356,57212],[55357,56424,8203,55356,57212])}return!1}function d(e){var t=a.createElement("script");t.src=e,t.defer=t.type="text/javascript",a.getElementsByTagName("head")[0].appendChild(t)}for(i=Array("flag","emoji"),t.supports={everything:!0,everythingExceptFlag:!0},o=0;o<i.length;o++)t.supports[i[o]]=l(i[o]),t.supports.everything=t.supports.everything&&t.supports[i[o]],"flag"!==i[o]&&(t.supports.everythingExceptFlag=t.supports.everythingExceptFlag&&t.supports[i[o]]);t.supports.everythingExceptFlag=t.supports.everythingExceptFlag&&!t.supports.flag,t.DOMReady=!1,t.readyCallback=function(){t.DOMReady=!0},t.supports.everything||(n=function(){t.readyCallback()},a.addEventListener?(a.addEventListener("DOMContentLoaded",n,!1),e.addEventListener("load",n,!1)):(e.attachEvent("onload",n),a.attachEvent("onreadystatechange",function(){"complete"===a.readyState&&t.readyCallback()})),(r=t.source||{}).concatemoji?d(r.concatemoji):r.wpemoji&&r.twemoji&&(d(r.twemoji),d(r.wpemoji)))}(window,document,window._wpemojiSettings);



window.dataLayer = window.dataLayer || [];
			function gtag(){dataLayer.push(arguments);}
			gtag('js', new Date());
			gtag('config', 'UA-175682909-5');
		</script>

			<script>
        // conditionizr.com
        // configure environment tests
        conditionizr.config({
            assets: 'https://www.scudo.co.uk/wp-content/themes/scudo2015',
            tests: {}
        });


window.addEventListener("load", function(){
window.cookieconsent.initialise({
  "palette": {
    "popup": {
      "background": "#000",
			"text": "#fff"
    },
    "button": {
      "background": "#fff",
			"text": "#000"
    }
  },
	"showLink": false,
  "content": {
    "message": "We use cookies to offer you a better browsing experience, analyse site traffic and personalise content. By continuing to browse our website, you consent to our use of cookies. <a aria-label='learn more about cookies' role=button tabindex='0' class='cc-link' href='https://www.scudo.co.uk/privacy-policy/#cookie'>Learn more</a>",
		"dismiss": "OK"
  }
})});

jQuery(document).ready(function($) {

  if($( ".toggle-switch" ).length > 0){
    $( ".toggle-switch" ).click(function() {

      $(this).toggleClass("active");
      $(this).next('.toggle-panel').slideToggle("medium");

    });

    var hash = window.location.hash.slice(1);

    if(hash) {

      $('h2.' + hash ).trigger('click');

    }
  }

});


/* <![CDATA[ */
var nfi18n = {"ninjaForms":"Ninja Forms","changeEmailErrorMsg":"Please enter a valid email address!","changeDateErrorMsg":"Please enter a valid date!","confirmFieldErrorMsg":"These fields must match!","fieldNumberNumMinError":"Number Min Error","fieldNumberNumMaxError":"Number Max Error","fieldNumberIncrementBy":"Please increment by ","fieldTextareaRTEInsertLink":"Insert Link","fieldTextareaRTEInsertMedia":"Insert Media","fieldTextareaRTESelectAFile":"Select a file","formErrorsCorrectErrors":"Please correct errors before submitting this form.","formHoneypot":"If you are a human seeing this field, please leave it empty.","validateRequiredField":"This is a required field.","honeypotHoneypotError":"Honeypot Error","fileUploadOldCodeFileUploadInProgress":"File Upload in Progress.","fileUploadOldCodeFileUpload":"FILE UPLOAD","currencySymbol":"$","fieldsMarkedRequired":"Fields marked with an <span class=\"ninja-forms-req-symbol\">*<\/span> are required","thousands_sep":",","decimal_point":".","siteLocale":"en_GB","dateFormat":"d\/m\/Y","startOfWeek":"1","of":"of","previousMonth":"Previous Month","nextMonth":"Next Month","months":["January","February","March","April","May","June","July","August","September","October","November","December"],"monthsShort":["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],"weekdays":["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],"weekdaysShort":["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],"weekdaysMin":["Su","Mo","Tu","We","Th","Fr","Sa"]};
var nfFrontEnd = {"adminAjax":"https:\/\/www.scudo.co.uk\/wp-admin\/admin-ajax.php","ajaxNonce":"e094bb0f2e","requireBaseUrl":"https:\/\/www.scudo.co.uk\/wp-content\/plugins\/ninja-forms\/assets\/js\/","use_merge_tags":{"user":{"address":"address","textbox":"textbox","button":"button","checkbox":"checkbox","city":"city","confirm":"confirm","date":"date","email":"email","firstname":"firstname","html":"html","hidden":"hidden","lastname":"lastname","listcheckbox":"listcheckbox","listcountry":"listcountry","listimage":"listimage","listmultiselect":"listmultiselect","listradio":"listradio","listselect":"listselect","liststate":"liststate","note":"note","number":"number","password":"password","passwordconfirm":"passwordconfirm","product":"product","quantity":"quantity","recaptcha":"recaptcha","shipping":"shipping","spam":"spam","starrating":"starrating","submit":"submit","terms":"terms","textarea":"textarea","total":"total","unknown":"unknown","zip":"zip","hr":"hr"},"post":{"address":"address","textbox":"textbox","button":"button","checkbox":"checkbox","city":"city","confirm":"confirm","date":"date","email":"email","firstname":"firstname","html":"html","hidden":"hidden","lastname":"lastname","listcheckbox":"listcheckbox","listcountry":"listcountry","listimage":"listimage","listmultiselect":"listmultiselect","listradio":"listradio","listselect":"listselect","liststate":"liststate","note":"note","number":"number","password":"password","passwordconfirm":"passwordconfirm","product":"product","quantity":"quantity","recaptcha":"recaptcha","shipping":"shipping","spam":"spam","starrating":"starrating","submit":"submit","terms":"terms","textarea":"textarea","total":"total","unknown":"unknown","zip":"zip","hr":"hr"},"system":{"address":"address","textbox":"textbox","button":"button","checkbox":"checkbox","city":"city","confirm":"confirm","date":"date","email":"email","firstname":"firstname","html":"html","hidden":"hidden","lastname":"lastname","listcheckbox":"listcheckbox","listcountry":"listcountry","listimage":"listimage","listmultiselect":"listmultiselect","listradio":"listradio","listselect":"listselect","liststate":"liststate","note":"note","number":"number","password":"password","passwordconfirm":"passwordconfirm","product":"product","quantity":"quantity","recaptcha":"recaptcha","shipping":"shipping","spam":"spam","starrating":"starrating","submit":"submit","terms":"terms","textarea":"textarea","total":"total","unknown":"unknown","zip":"zip","hr":"hr"},"fields":{"address":"address","textbox":"textbox","button":"button","checkbox":"checkbox","city":"city","confirm":"confirm","date":"date","email":"email","firstname":"firstname","html":"html","hidden":"hidden","lastname":"lastname","listcheckbox":"listcheckbox","listcountry":"listcountry","listimage":"listimage","listmultiselect":"listmultiselect","listradio":"listradio","listselect":"listselect","liststate":"liststate","note":"note","number":"number","password":"password","passwordconfirm":"passwordconfirm","product":"product","quantity":"quantity","recaptcha":"recaptcha","shipping":"shipping","spam":"spam","starrating":"starrating","submit":"submit","terms":"terms","textarea":"textarea","total":"total","unknown":"unknown","zip":"zip","hr":"hr"},"calculations":{"html":"html","hidden":"hidden","note":"note","unknown":"unknown"}},"opinionated_styles":""};
/* ]]> */




jQuery(document).ready(function($){
  $("a[rel*=lightbox]").colorbox({initialWidth:"30%",initialHeight:"30%",maxWidth:"90%",maxHeight:"90%",opacity:0.8});
  $(".lbp_secondary").colorbox({speed:300,innerWidth:"50%",initialWidth:"30%",initialHeight:"40%",maxWidth:"90%",maxHeight:"90%",opacity:0.5});
});



jQuery(document).ready(function ($) {

			//homepage scroller
			$('#header-slider').maximage({

				cycleOptions: {
					speed: 3000, // Set the speed for CSS transitions in jQuery.maximage.css (lines 30 - 33)
					timeout: 8000,
					prev: '#arrow_left',
					next: '#arrow_right'
				},

				//backgroundSize: 'contain'

		});


		});




