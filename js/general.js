		
		if ('scrollRestoration' in history) { 
    	history.scrollRestoration = 'manual'; 	
		} 
		
		// Прокрутка страницы в начало
		document.addEventListener("DOMContentLoaded", function()
		{	
		document.body.scrollTop = document.documentElement.scrollTop = 0;
		});
		//
	
		//Анимация и отслеживание скролла
		var arr = ["about-col-1", "about-col-2", "lays-col-1", "lays-col-2"];
		
		function isPartiallyVisible(el) {
   			var elementBoundary = el.getBoundingClientRect();
     		var top = elementBoundary.top;
    		var bottom = elementBoundary.bottom;
    		var height = elementBoundary.height;
 
    		return ((top + height >= 0) && (height + window.innerHeight >= bottom));
		}
		if (document.documentElement.clientWidth <= 1000)
			{
				for (var i = 0 ; i <= 3; i++) {
			var some = document.querySelectorAll("."+arr[i])[0];
		
			
				var block = document.getElementsByClassName(arr[i]);
				block[0].classList.add("scroll-animate");
  				
  				
  			}


			} else
		
		window.onscroll = function() {
			for (var i = 0 ; i <= 3; i++) {
			var some = document.querySelectorAll("."+arr[i])[0];
			var scrolled = window.pageYOffset || document.documentElement.scrollTop;
			if (isPartiallyVisible(some)) {
				var block = document.getElementsByClassName(arr[i]);
				block[0].classList.add("scroll-animate");
  				}		
  			}

  		

		}

	var updownElem = document.querySelector('.menu');
	var el = document.getElementsByClassName('menu');
	var pageY = window.pageYOffset || document.documentElement.scrollTop;
    var TempScrollTop = 0;

    window.onscroll = function() {
      var pageY = window.pageYOffset || document.documentElement.scrollTop;
      

          if (TempScrollTop < pageY) {
            updownElem.classList.remove("open");
            updownElem.classList.add("down");
          }
       		else if (TempScrollTop > pageY)
       			{TempScrollTop = pageY
       				updownElem.classList.remove("down");
       				
       			}
       		TempScrollTop = pageY;
    
 
         
      
    }
		//
		//Добавление класса для мобильного меню
	window.addEventListener('DOMContentLoaded', function() {
  var nodes = document.querySelectorAll('.menu');
  var scrolled = window.pageYOffset || document.documentElement.scrollTop;
  [].forEach.call(nodes, function(a) {
    a.addEventListener('click', function(event) {
      event.preventDefault()
      a.classList.toggle("open")
 
    });

  });
});

