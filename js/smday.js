  (function($){
     
     "use strict"; 

   $(function(){
        var options = {
          useEasing : true, 
          useGrouping : true, 
          separator : ',', 
          decimal : '.', 
          prefix : '', 
          suffix : '' 
        };
        
        var twitterCount = 0;
        
        $.get('https://3uglvu7ksf.execute-api.us-east-1.amazonaws.com/dev/tweetercount', function(data){
            twitterCount = data.count;
            var demo = new CountUp("animate-count", 0, twitterCount, 0, 2.5, options);
            
            
            
            $('<img/>').attr('src', 'http://iappreciate.lk/img/bg_image.jpg').load(function() {
            $(this).remove();
            $('.bg-main').css('background-image', 'url(http://iappreciate.lk/img/bg_image.jpg)');
            $('.loader-bg').fadeOut("slow");
                setTimeout(function () {
                    demo.start();  
                    $('body').removeClass('no-scroll');   
                }, 500);  
            });
            
            
            
            
            
        });
        
        

        $(window).scroll(function(e){
             if($(this).scrollTop()>300){
                    $(".twitter-textbox-text").typed({
                        strings: ["I like to Appreciate", "<b>#IAppreciate</b> Harindu's awesome work^500 with flood relief through Red Cross^600 - nominating <b>@Achini^600, @Prasanna^250, @Charana^500</b> to keep appreciating!^600 <b>:)</b>"],
                        typeSpeed: 0.4,
                        contentType: 'html'
                    });
             }
        });
    });
  
  })(jQuery);