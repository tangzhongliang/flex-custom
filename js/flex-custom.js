function HandleWeight(){
	$('[direction]').each(function(index, el) {
		var p = el;
		var weightDirectionRow = $(p).attr('direction')!='column';
		var pWidth = $(p).innerWidth();
		var pHeight = $(p).innerHeight();
		var weightSum = 0;
		var notWeightWidth = 0;
		var notWeightHeight = 0;
		$(p).children('[weight]').each(function(index, el) {
			weightSum = weightSum+ parseInt($(el).attr('weight'));
		});
		if(weightSum==0){
			return;
		}
		var spaceWidth = 0;
		if(weightDirectionRow&&$(p).children().length>=2){
			var left1 = $($(p).children()[0]).offset().left -parseInt($($(p).children()[0]).css('margin-left'));
			var w = $($(p).children()[0]).outerWidth();
			var left2 = $($(p).children()[1]).offset().left -parseInt($($(p).children()[0]).css('margin-left'));
			spaceWidth = left2-left1-w;
		}
		
		$(p).children().each(function(index, el) {
			if(!$(el).attr('weight')){
				if(weightDirectionRow){
					notWeightWidth = notWeightWidth+$(el).outerWidth();
				}else{
					notWeightHeight = notWeightHeight+$(el).outerHeight();
				}
			}
		});
		$(p).children('[weight]').each(function(index, el) {
			var weight = parseInt($(el).attr('weight'));
			if(weightDirectionRow){
				var w = weight*(pWidth-notWeightWidth-($(p).children().length-1)*spaceWidth)/weightSum;
				$(el).width(w);
			}else{
				var h = weight*(pHeight-notWeightHeight)/weightSum;
				$(el).height(h);
			}

		});
	});
}
function initFlex(){
	HandleWeight();
	$(window).on('resize',function(){
		HandleWeight();
	});
}
