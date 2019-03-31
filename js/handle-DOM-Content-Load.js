// Прокрутка страницы в начало
	if ('scrollRestoration' in history) { 
    	history.scrollRestoration = 'manual'; 	
		} 
 document.addEventListener("DOMContentLoaded", function()
 { 
  document.body.scrollTop = document.documentElement.scrollTop = 0;
  
  });