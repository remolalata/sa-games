$( document ).ready(function() {

  $("#firstbutton").closest("label").css({'border-bottom' : '2px solid #fff', 'padding-bottom' : '10px'});
  $("#secondbutton").closest("label").css("padding-bottom", "10px")

  $("#firstbutton").click(function() {
    $("#firstradiobutton").css("display", "block");
    $(this).closest("label").css("border-bottom", "2px solid #fff");
    $("#secondbutton").closest("label").css("border-bottom", "2px solid #000");
    $("#secondradiobutton").css("display", "none");
  });

  $("#secondbutton").click(function() {
    $("#firstradiobutton").css("display", "none");
    $(this).closest("label").css("border-bottom", "2px solid #fff");
    $("#firstbutton").closest("label").css("border-bottom", "2px solid #000");
    $("#secondradiobutton").css("display", "block");
  });

  $("#firstbutton-forget").click(function() {
    $("#remo-forget-phone").css("display", "block");
    $(this).closest("label").css("border-bottom", "2px solid #fff");
    $("#secondbutton-forget").closest("label").css("border-bottom", "2px solid #1a1a1a");
    $("#remo-forget-email").css("display", "none");
  });

  $("#secondbutton-forget").click(function() {
    $("#remo-forget-email").css("display", "block");
    $(this).closest("label").css("border-bottom", "2px solid #fff");
    $("#firstbutton-forget").closest("label").css("border-bottom", "2px solid #1a1a1a");
    $("#remo-forget-phone").css("display", "none");
  });

  $('.remo-toggleline').click( function() {
    $(this).toggleClass("remo-collapse-line");
  } );

  $('.ball').hover(function(){
    $('.remo-lotto-hover-wrapper').css('display', 'block');
  }, function() {
    $('.remo-lotto-hover-wrapper').css('display', 'none');
  });

  $('#spCollapseBtn').click(function(){
		var $this = $(this);
		$this.toggleClass('sp-see-more');
		if($this.hasClass('sp-see-more')){
			$this.text('查看更多');
		} else {
			$this.text('看少了');
		}
	});

  $('#mylightbox').featherlight($content, configuration);


});
