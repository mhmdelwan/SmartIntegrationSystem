console.clear();
const uls = document.querySelectorAll("nav ul");
const links = [...document.querySelectorAll("nav a")];
const light = document.querySelector("nav .tubelight");
let activeIndex = 0;
let currentIndex = 0;
let increment = 1;
links.forEach((link, index) => 
{
	if (links[index].classList.contains("active"))
    {
		light.style.left = `${links[index].offsetLeft + light.offsetWidth / 4}px`;
	}
	link.addEventListener("click", (e) => 
    {
		activeIndex = index;
		let t = setInterval(() => 
        {
			if (activeIndex > currentIndex) increment = 1;
			else if (activeIndex < currentIndex) increment = -1;
			currentIndex += increment;

			links[currentIndex].classList.add("active");
			if (currentIndex != -1)
				links[currentIndex - increment].classList.remove("active");

			if (currentIndex == activeIndex) 
            {
				e.target.classList.add("active");
				increment = 0;
				clearInterval(t);
			}
		}, 50);
		light.style.left = `${e.target.offsetLeft + light.offsetWidth / 4}px`;
	});
});







let btn = document.getElementById('btn');
window.onscroll = function(){
  if(scrollY >= 100){
	btn.style.display = 'block';
  } else {
	btn.style.display = 'none';
  }
}
btn.onclick = function(){
  scroll({
	left: 0,
	top: 0,
	behavior: "smooth"
  })
}




var textWrapper = document.querySelector('.ml3');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: '.ml3 .letter',
    opacity: [0,1],
    easing: "easeInOutQuad",
    duration: 2250,
    delay: (el, i) => 150 * (i+1)
  }).add({
    targets: '.ml3',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });


  
var imgList = Array.from(document.querySelectorAll('.item img'));
var lightBoxContainer = document.getElementById('lightbox-container');
var lightBoxItem = document.getElementById('lightbox-item')
var currentSlideIndex;
var nextBtn = document.getElementById('nextBtn');
var prevBtn = document.getElementById('prevBtn');
var closeBtn = document.getElementById('closeBtn');

for(var i = 0; i<imgList.length; i++)
{
    imgList[i].addEventListener('click' , function(e)
    {
        lightBoxContainer.classList.replace('d-none' , 'd-flex')
        var imgSrc = e.target.getAttribute('src');
        currentSlideIndex = imgList.indexOf(e.target);
        console.log(currentSlideIndex);
        lightBoxItem.style.backgroundImage = `url(${imgSrc})`
    })
}


function nextSlide()
{
    currentSlideIndex++;

    if(currentSlideIndex > imgList.length -1)
    {
        currentSlideIndex = 0;
    }

    var imgSrc = imgList[currentSlideIndex].getAttribute('src');
    lightBoxItem.style.backgroundImage = `url(${imgSrc})`

}

nextBtn.addEventListener('click' , nextSlide )



function prevSlide()
{
    currentSlideIndex--;

    if(currentSlideIndex < 0)
    {
        currentSlideIndex = imgList.length -1;
    }

    var imgSrc = imgList[currentSlideIndex].getAttribute('src');
    lightBoxItem.style.backgroundImage = `url(${imgSrc})`

}
prevBtn.addEventListener('click' , prevSlide);


function closeSlide()
{
    lightBoxContainer.classList.add('d-none');
}

closeBtn.addEventListener('click' , closeSlide);