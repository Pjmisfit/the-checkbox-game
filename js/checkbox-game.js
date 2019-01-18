$(document).ready(function(){ /*uncheck all boxes on load*/
    $('input[type=checkbox]').attr('checked',false);
});

function startGame() {

		window.setTimeout(function(){ 
	  $('#timer').addClass('addttoTimer');/*add animaton to timer after 0secs*/
	}, 0000);


		window.setTimeout(function(){ 
	  $('.divgamecheck').addClass('firstani');
	}, 9000);


		window.setTimeout(function(){
	  $('.divgamecheck').addClass('secondani');
	}, 20000);

		if ($(window).width() < 600) {/*wont run if you resize browser, which is want i need*/
	   		window.setTimeout(function(){
			  $('.divgamecheck').addClass('secondani4mobile');/*add animaton class after 20secs for mobile*/
			}, 20000);
		}
		

		window.setTimeout(function(){
	  $('.divgamecheck').addClass('thirdani');
	}, 45000);

		$('.parent').css({"pointer-events": "auto"}); /*return pointer events to normal*/


	$('input[type="checkbox"]').click(function(){ /*on click*/
		if ($('input[type="checkbox"]').is(':checked')){ /* if checked find number of box checked & all checkbox*/
			var che = $('input[type="checkbox"]:checked').length;
			var all = $('input[type="checkbox"]').length;
			var notche = $('input[type="checkbox"]').not(':checked').length;

		
		$('.boxschecked').text(che  + '  out of ' + all );


		$('.resultchecked').text(che);
		$('.resultnotchecked').text(notche);
		$('.resultall').text(all);
	}
});



/*This code is generating unique id's 4 inputs & 
attaching those ids to the "for" attri. for labels. - PJ
*/

$(function(){
    $("input:checkbox[name='gamecheckbox']").each(function(index){
        var currElem = $(this);
        var nextLabel = currElem.next();
        currElem.attr("id", this.id + index);

        nextLabel.attr("for", nextLabel.attr("for") + index);
    });    
});

/*time to show results*/
window.setTimeout(function(){ 
	$('.overlay').show();
	// alert();
	$('body').css({"overflow": "hidden"});;
	}, 63000);

} 
/*end of start game function*/

/*The count downtimer */

    var mins = 1;  //the number of minutes
    var secs = mins * 60;
    var currentSeconds = 0;
    var currentMinutes = 0;
    /* 
     * The following line has been commented out due to a suggestion left in the comments. The line below it has not been tested. 
     * setTimeout('Decrement()',1000);
     */
    

    function Decrement() {
        currentMinutes = Math.floor(secs / 60);
        currentSeconds = secs % 60;
        if(currentSeconds <= 9) currentSeconds = "0" + currentSeconds;
        secs--;
        document.getElementById("timer").innerHTML = currentMinutes + ":" + currentSeconds;
        if(secs !== -1) setTimeout('Decrement()',1000);
    }

    /*The end :), Now I can sleep. - Pj.*/
	/*Future Pj sorry if I left too much comments, I needed to.*/

	
    /*Start the Game on click*/

 $('.sg').one("click", function(){ /*.one makes the function run oly once*/
  	startGame();
  	setTimeout(Decrement,1000); 
  	$('.sg').hide(); /*Hide start game button on click*/
  });

