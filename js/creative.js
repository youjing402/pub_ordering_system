$(document).ready(function() {
    $('.item-card').click(function() {
        $('#item-collection').addClass("hidden");
        $('#item-detailed').removeClass("hidden");
		
		$('.drink-description').text(bear[0].description);
		$('.drink-name').text(bear[0].name);
    });

     $('.close-btn').click(function() {
        $('#item-collection').removeClass("hidden");
        $('#item-detailed').addClass("hidden");
    });
});
