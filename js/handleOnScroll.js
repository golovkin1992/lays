//Функция отслеживания элементов при скролле
function isVisibleBlock(el) {
   			var elementBoundary = el.getBoundingClientRect();
     		var top = elementBoundary.top;
    		var bottom = elementBoundary.bottom;
    		var height = elementBoundary.height;
    		return ((top + height >= 0) && (height + window.innerHeight >= bottom));
		}

		var animateBlocks = ["about-col-1", "about-col-2", "lays-col-1", "lays-col-2"];
		//автоматическая анимация  нижних блоков  
    if (document.documentElement.clientWidth <= 1200)
			{
				for (var i = 0 ; i <= animateBlocks.length-1; i++) {
				var currentBlock = document.getElementsByClassName(animateBlocks[i]);
        console.log(currentBlock);
				currentBlock[0].classList.add("js-scroll-animate");
  				}
  			}
    var TempScrollTop = 0; 
    window.onscroll =  function handleScroll() {
   		 var updownElem = document.querySelector('.menu');
   		 var currentScrollY = window.pageYOffset || document.documentElement.scrollTop;
	         //анимация блоков при скролле
      		for (var i = 0 ; i <= animateBlocks.length-1; i++) {
      			var currentBlock = document.querySelectorAll("."+animateBlocks[i])[0];
				if (isVisibleBlock(currentBlock)) {
				var currentBlock = document.getElementsByClassName(animateBlocks[i]);
				currentBlock[0].classList.add("js-scroll-animate");
  				}		
  			}
  				//Скрытие мобильного меню при скролле вниз
          if (TempScrollTop < currentScrollY) {
            updownElem.classList.remove("js-menu-open");
            updownElem.classList.add("js-scroll-down");
           TempScrollTop = currentScrollY;
            } 
          else if (TempScrollTop > currentScrollY)
       			{	
       				TempScrollTop = currentScrollY;
       				updownElem.classList.remove("js-scroll-down");		
       			} 
    }