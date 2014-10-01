
//Starts page at bottom with a white FadeIn.
$(window).on("load",function(){
	$('#loading_screen').fadeOut(2000);
	window.scrollTo(0, document.body.clientHeight); 
});

// Canvas

window.onload = function(){
    //canvas init
    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");
    
    //canvas dimensions
    var W = $(".general_container").width();
    var H = window.innerHeight;
    canvas.width = W;
    canvas.height = H;
    
    //snowflake particles
    var mp = 35; //max particles
    var particles = [];
    for(var i = 0; i < mp; i++)
    {
        particles.push({
            x: Math.random()*W, //x-coordinate
            y: Math.random()*H, //y-coordinate
            r: Math.random()*4+1, //radius
            d: Math.random()*mp //density
        })
    }
    
    //Lets draw the flakes
    function draw()
    {
        ctx.clearRect(0, 0, W, H);
        
        ctx.fillStyle = "rgba(0, 0, 0, 0.8)";
        ctx.beginPath();
        for(var i = 0; i < mp; i++)
        {
            var p = particles[i];
            ctx.moveTo(p.x, p.y);
            ctx.arc(p.x, p.y, p.r, 0, Math.PI*2, true);
        }
        ctx.fill();
        update();
    }
    
    //Function to move the snowflakes
    //angle will be an ongoing incremental flag. Sin and Cos functions will be applied to it to create vertical and horizontal movements of the flakes
    var angle = 0;
    function update()
    {
        angle += 0.01;
        for(var i = 0; i < mp; i++)
        {
            var p = particles[i];
            //Updating X and Y coordinates
            //We will add 1 to the cos function to prevent negative values which will lead flakes to move upwards
            //Every particle has its own density which can be used to make the downward movement different for each flake
            //Lets make it more random by adding in the radius
            p.y += Math.cos(angle+p.d) + 1 + p.r/2;
            p.x += Math.sin(angle) * 2;
            
            //Sending flakes back from the top when it exits
            //Lets make it a bit more organic and let flakes enter from the left and right also.
            if(p.x > W+5 || p.x < -5 || p.y > H)
            {
                if(i%3 > 0) //66.67% of the flakes
                {
                    particles[i] = {x: Math.random()*W, y: -10, r: p.r, d: p.d};
                }
                else
                {
                    //If the flake is exitting from the right
                    if(Math.sin(angle) > 0)
                    {
                        //Enter from the left
                        particles[i] = {x: -5, y: Math.random()*H, r: p.r, d: p.d};
                    }
                    else
                    {
                        //Enter from the right
                        particles[i] = {x: W+5, y: Math.random()*H, r: p.r, d: p.d};
                    }
                }
            }
        }
    }
    
    //animation loop
    setInterval(draw, 33);
}



//ScrollMagic Controllers for images, texts, etc.

$(document).ready(function(){
	//Init controller
	var controller = new ScrollMagic();

 	//Animations for Elements: Images and Texts   
    
 	//Section 1

    //Element 1: "grid_text_1"
    
    sceneOptions = {duration: 500, offset: -100};
    new ScrollScene(sceneOptions)
	.addTo(controller)
	.triggerHook("onCenter")
	.triggerElement("#animation_1")
	.setTween(TweenMax.fromTo(".grid_text_2", 1,{x:"0",y:"0", opacity:"1"},{x: "500", y:"100", opacity:"0"}));

	//Element 2: "grid_text_2"
	
	sceneOptions = {duration: 500, offset: -300};
	new ScrollScene(sceneOptions)
	.addTo(controller)
	.triggerHook("onCenter")
	.triggerElement("#animation_1")
	.setTween(TweenMax.fromTo(".grid_image_1", 1,{x:"0",y:"0", opacity:"1"},{x: "-500", y:"-100", opacity:"0"}));

	//Element 3: "caption_img_1"

	sceneOptions = {duration: 800, offset: -200};
	new ScrollScene(sceneOptions)
	.addTo(controller)
	.triggerHook("onCenter")
	.triggerElement("#animation_1")
	.setTween(TweenMax.fromTo(".caption_img_1", 1,{x:"0",y:"0", opacity:"1"},{x: "-500", y:"-100", opacity:"0"}));


	//Section 2

    //Element 4: "grid_image_2"

    sceneOptions = {duration: 500, offset: 400};
    new ScrollScene(sceneOptions)
	.addTo(controller)
	.triggerHook("onCenter")
	.triggerElement("#animation_2")
	.setTween(TweenMax.fromTo(".grid_image_2", 1,{x:"0",y:"0", opacity:"1"},{x: "500", y:"0", opacity:"0"}));

	//Element 6: "grid_text_1"

	sceneOptions = {duration: 600, offset: 500};
	new ScrollScene(sceneOptions)
	.addTo(controller)
	.triggerHook("onCenter")
	.triggerElement("#animation_2")
	.setTween(TweenMax.fromTo(".grid_text_1", 1,{x:"0",y:"0", opacity:"1"},{x: "-500", y:"0", opacity:"0"}));

	//Element 7: "caption_img_2"

	sceneOptions = {duration: 600, offset: 400};
	new ScrollScene(sceneOptions)
	.addTo(controller)
	.triggerHook("onCenter")
	.triggerElement("#animation_2")
	.setTween(TweenMax.fromTo(".caption_img_2", 1,{x:"0",y:"0", opacity:"1"},{x: "-500", y:"0", opacity:"0"}));

	//Section 3

	//Element 8: "grid_image_3"

	sceneOptions = {duration: 600, offset: 500};
	new ScrollScene(sceneOptions)
	.addTo(controller)
	.triggerHook("onCenter")
	.triggerElement("#animation_3")
	.setTween(TweenMax.fromTo(".grid_image_3", 1,{x:"0",y:"0", opacity:"1"},{x: "300", y:"0", opacity:"0"}));

	//Element 9: "grid_image_4"

	sceneOptions = {duration: 600, offset: 500};
	new ScrollScene(sceneOptions)
	.addTo(controller)
	.triggerHook("onCenter")
	.triggerElement("#animation_3")
	.setTween(TweenMax.fromTo(".grid_image_4", 1,{x:"0",y:"0", opacity:"1"},{x: "-300", y:"0", opacity:"0"}));

	//Element 10: "grid_image_5"

	sceneOptions = {duration: 600, offset: 100};
	new ScrollScene(sceneOptions)
	.addTo(controller)
	.triggerHook("onCenter")
	.triggerElement("#animation_3")
	.setTween(TweenMax.fromTo(".grid_image_5", 1,{x:"0",y:"0", opacity:"1"},{x: "-300", y:"0", opacity:"0"}));

	//Element 11: "grid_image_6"

	sceneOptions = {duration: 600, offset: 100};
	new ScrollScene(sceneOptions)
	.addTo(controller)
	.triggerHook("onCenter")
	.triggerElement("#animation_3")
	.setTween(TweenMax.fromTo(".grid_image_6", 1,{x:"0",y:"0", opacity:"1"},{x: "600", y:"0", opacity:"0"}));

	//Section 4

	//Element 12: "grid_image_7"

	sceneOptions = {duration: 600, offset: 100};
	new ScrollScene(sceneOptions)
	.addTo(controller)
	.triggerHook("onCenter")
	.triggerElement("#animation_4")
	.setTween(TweenMax.fromTo(".grid_image_7", 1,{x:"0",y:"0", opacity:"1"},{x: "500", y:"100", opacity:"0"}));

	//Element 13: "grid_image_8"

	sceneOptions = {duration: 600, offset: -100};
	new ScrollScene(sceneOptions)
	.addTo(controller)
	.triggerHook("onCenter")
	.triggerElement("#animation_4")
	.setTween(TweenMax.fromTo(".grid_image_8", 1,{x:"0",y:"0", opacity:"1"},{x: "500", y:"-100", opacity:"0"}));

	//Element 14: "grid_image_9"

	sceneOptions = {duration: 600, offset: -500};
	new ScrollScene(sceneOptions)
	.addTo(controller)
	.triggerHook("onCenter")
	.triggerElement("#animation_4")
	.setTween(TweenMax.fromTo(".grid_image_9", 1,{x:"0",y:"0", opacity:"1"},{x: "-500", y:"-100", opacity:"0"}));

	//Element 15: "grid_image_10"

	sceneOptions = {duration: 600, offset: -500};
	new ScrollScene(sceneOptions)
	.addTo(controller)
	.triggerHook("onCenter")
	.triggerElement("#animation_4")
	.setTween(TweenMax.fromTo(".grid_image_10", 1,{x:"0",y:"0", opacity:"1"},{x: "400", y:"0", opacity:"0"}));

	//Section 5

	//Element 16: "grid_image_11"

	sceneOptions = {duration: 600, offset: 100};
	new ScrollScene(sceneOptions)
	.addTo(controller)
	.triggerHook("onCenter")
	.triggerElement("#animation_5")
	.setTween(TweenMax.fromTo(".grid_image_11", 1,{x:"0",y:"0", opacity:"1"},{x: "-400", y:"0", opacity:"0"}));

	//Element 17: "grid_image_12"

	sceneOptions = {duration: 600, offset: 200};
	new ScrollScene(sceneOptions)
	.addTo(controller)
	.triggerHook("onCenter")
	.triggerElement("#animation_5")
	.setTween(TweenMax.fromTo(".grid_image_12", 1,{x:"0",y:"0", opacity:"1"},{x: "400", y:"-300", opacity:"0"}));

	//Element 18: "grid_image_13"

	sceneOptions = {duration: 600, offset: -100};
	new ScrollScene(sceneOptions)
	.addTo(controller)
	.triggerHook("onCenter")
	.triggerElement("#animation_5")
	.setTween(TweenMax.fromTo(".grid_image_13", 1,{x:"0",y:"0", opacity:"1"},{x: "-600", y:"0", opacity:"0"}));

	//Element 19: "grid_image_14"

	sceneOptions = {duration: 600, offset: -100};
	new ScrollScene(sceneOptions)
	.addTo(controller)
	.triggerHook("onCenter")
	.triggerElement("#animation_5")
	.setTween(TweenMax.fromTo(".grid_image_14", 1,{x:"0",y:"0", opacity:"1"},{x: "600", y:"0", opacity:"0"}));

	//Element 20: "grid_image_14"

	sceneOptions = {duration: 600, offset: -300};
	new ScrollScene(sceneOptions)
	.addTo(controller)
	.triggerHook("onCenter")
	.triggerElement("#animation_5")
	.setTween(TweenMax.fromTo(".grid_image_15", 1,{x:"0",y:"0", opacity:"1"},{x: "0", y:"-500", opacity:"0"}));




	//Animations for Elements: Titles

	//Title 2 

	sceneOptions = {duration: 600, offset: 100};
	new ScrollScene(sceneOptions)
	.addTo(controller)
	.triggerHook("onCenter")
	.triggerElement("#section_3")
	.setTween(TweenMax.fromTo("#title_2", 1,{y:"0",opacity:"1"},{y:"-300",opacity:"0"}));

	//Title 3

	sceneOptions = {duration: 600, offset: 100};
	new ScrollScene(sceneOptions)
	.addTo(controller)
	.triggerHook("onCenter")
	.triggerElement("#section_5")
	.setTween(TweenMax.fromTo("#title_3", 1,{y:"0",opacity:"1"},{y:"-300",opacity:"0"}));
	


	//Action - Hover Images

	$(".grid_image").hover(
		function(){
			$(this).find(".grid_image_info_content").fadeIn();
		},
		function(){
			$(this).find(".grid_image_info_content").fadeOut();
		}
	);

	//Action - Click Contact Button
	$(".btn_contact").on("click", function(){
		$("#contact").slideToggle();
	});

	$(".btn_close_contact").on("click", function(){
		$("#contact").slideToggle();
	});




	if (Modernizr.touch) {
	// configure iScroll
		var myScroll = new IScroll(".general_container",
			{
				// don't scroll horizontal
				scrollX: false,
				// but do scroll vertical
				scrollY: true,
				// show scrollbars
				scrollbars: true,
				// deactivating -webkit-transform because pin wouldn't work because of a webkit bug: https://code.google.com/p/chromium/issues/detail?id=20574
				// if you dont use pinning, keep "useTransform" set to true, as it is far better in terms of performance.
				useTransform: false,
				// deativate css-transition to force requestAnimationFrame (implicit with probeType 3)
				useTransition: false,
				// set to highest probing level to get scroll events even during momentum and bounce
				// requires inclusion of iscroll-probe.js
				probeType: 3
			}
		);

		// overwrite scroll position calculation to use child's offset instead of container's scrollTop();
		//controller.scrollPos(function () {
		//	return -myScroll.y;
		//});

		// thanks to iScroll 5 we now have a real onScroll event (with some performance drawbacks)
		myScroll.on("scroll", function () {
			console.log("hola");
		//	controller.update();
		});

		// add indicators to scrollcontent so they will be moved with it.
		//scene.addIndicators({parent: ".general_container"});
		}


	});





