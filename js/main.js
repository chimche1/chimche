

  
  $(document).ready(function() {
      
      $(window).scroll( function(){
      
          $('#img').each( function(){
              
              var bottom_of_object = $(this).position().top + $(this).outerHeight();
              var bottom_of_window = $(window).scrollTop() + $(window).height();
              
              if( bottom_of_window > bottom_of_object ){
                  
                  $(this).animate({'opacity':'1'},600);
                  
              }
          
           




          }); 
      
      });
      


      $( "#card1" ).animate({
        left: "+=950",
        height:"40px",
        width:"40px",
       
      }, 700, function() {
       
        $(this).delay(90).animate({
            bottom: "+=180",
            height:"350px",
            width:"450px"
        }, 600);

      });





      $( "#card2" ).delay(400).animate({
        left: "+=850",
        height:"40px",
        width:"40px",
        bottom:"200px"
       
      }, 700, function() {
       
        $(this).delay(90).animate({
            bottom: "+=100",
            height:"200px",
            width:"150px"
        }, 600);
      });






      $( "#card3" ).delay(800).animate({
        left: "+=1050",
        height:"40px",
        width:"40px"
      }, 700, function() {
       
        $(this).delay(90).animate({
            bottom: "+=20",
            height:"80px",
        width:"150px"
        });
        $(this).css({"background":"url('img/dribbble.png')"});
      });


      



      $('#paragraph1').delay(1500).animate ({
        opacity:"1",
      }, 800)

      $('button').delay(2000).animate ({
        opacity:"1"
      }, 800)

      $('header').delay(500).animate ({
        opacity:"1"
      }, 1300)

      $('.calculate').delay(2500).animate ({
        opacity:"1",
      } , 1000)




      $('.kartat:nth-child(1)').delay(1900).animate ({
        opacity:"1",
        marginTop:"-60px",
      } ,700, )

      $('.kartat:nth-child(2)').delay(2150).animate ({
        opacity:"1",
        marginTop:"-60px",
      } ,700, )

      $('.kartat:nth-child(3)').delay(2400).animate ({
        opacity:"1",
        marginTop:"-60px",
      } ,700, )


      $('.kartat:nth-child(4)').delay(2650).animate ({
        opacity:"1",
        marginTop:"-60px",
      } ,700, )



      $('.kartat:nth-child(1)').hover(function(){
        $('.htmlicon').toggleClass('htmlicontoggle')
        $('.teksti').toggleClass('tekstitoggle');
      })

      $('.kartat:nth-child(2)').hover(function(){
        $('.cssicon').toggleClass('cssicontoggle')
        $('.teksti2').toggleClass('teksti2toggle');
      })

      $('.kartat:nth-child(3)').hover(function(){
        $('.jsicon').toggleClass('jsicontoggle')
        $('.teksti3').toggleClass('teksti3toggle');
      })

      $('.kartat:nth-child(4)').hover(function(){
        $('.phpicon').toggleClass('phpicontoggle')
        $('.teksti4').toggleClass('teksti4toggle');
      })



  });
  

//   $('ul').append('<div id="slider"></div>');

//   $('ul li a').hover(function(){

//     var left = $(this).parent().position().left;
//     var width = $(this).width();

//     $('#slider').stop().animate({
//         'left' : left,
//         'width' : width
//     });
// });



// var left = $('ul li:first-child a').parent().position().left;
// var width = $('ul li:first-child a').width();
// $('#slider').css({'left' : left, 'width' : width});