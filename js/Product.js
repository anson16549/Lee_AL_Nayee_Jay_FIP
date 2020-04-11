(() => {

let imagePromo = document.querySelector('.imagePromo'),
	galleryTitle = document.querySelector('.galleryText h3'),
	galleryCopy = document.querySelector('.galleryText p'),
	imageArea = document.querySelectorAll('.imageArea');

let	imagePromo2 = document.querySelector('.imagePromo2'),
	galleryTitle2 = document.querySelector('.galleryText2 h3'),
	galleryCopy2 = document.querySelector('.galleryText2 p'),
	imageArea2 = document.querySelectorAll('.imageArea2');

let iconArea = document.querySelector('#iconArea'),
	lightBox = document.querySelector('.lightBox'),
	arrowLeft = document.querySelector('#arrowLeft'),
	infroArea = document.querySelector('#infroArea'),
	lightBoxImageArray = document.querySelectorAll('.lightBoxImage'),
	arrowRight = document.querySelector('#arrowRight'),
	closeLightBox = document.querySelector('#closeLightBox'),
	mediaQuery1 = window.matchMedia('(min-width:938px)'),
	body = document.querySelector('body'),
	currentImage = lightBoxImageArray[0],
	counter = 0,
	arrayLength	  		= lightBoxImageArray.length;
	//arrayLength = 0;


const galleryTitleArray = [ "Cold brewery with roasted"," Cakeface","Dandelion's Blonde", ],

	galleryCopyArray = ["Cold Garden Beverage Company is a Calgary-based microbrewery. A love of craft beer and a passing comment in a university classroom planted the idea years ago and the concept has been growing ever since. The brewery has put down roots in the vibrant community of Inglewood, hoping to breathe new life into what was once the brewing district of Calgary. Cold Garden brings a casual and eclectic vibe to the community, along with a lineup of traditional and more...eccentric beers.",

		"A Marzen style lager brewed with real vanilla beans. This beer has a pronounced malty sweet base teeter tottering with a touch of floral, noble hops. The malty base goes on to perform a clown ballet with the vanilla beans resulting in a flavor reminiscent of a birthday cake. An extended lagering process makes this a light drinking session and/or dessert beer. DISCLAIMER: No clowns were harmed in the brewing of Cakeface.",

	"The quintessential light bodied American Blonde Ale. Starts with a touch of upfront malt sweetness that flips to a crisp citrusy finish. This beer is easy drinking for the easy drinker. "],


	 galleryTitleArray2 = [ "Vanilla Cappuccino Porter", "Cakenose" , "Dandelion's Wife"],


	galleryCopyArray2 = ["A west coast, light bodied, hop forward, fruity IPA. One sip is like a citrusy fruit salad to the face, like making out with a cold pineapple on a hot day, and like running naked through the hop fields of the pacific North West. This beer can satisfy the alpha acid heads and the rookie swimmer who needs to give their toes a dip before jumping head first down the hop hole. Turn on, tune in, and hop out.",

		"A farmhouse style Saison brewed with Saskatoon berries. The beer has a kiss of spice up front but moves quickly to a sweet and earthy middle with the Saskatoon berries rolling through at the very end. There is a noticeable but not overwhelming Belgian backbone to the brew that brings it all together. This is a perfect pint to drink when taking a break from a hot day chaffing the wheat or mucking the barns.",

		"An unapologetically malt forward Irish Red Ale. This beer takes a sharp detour off the hop highway and focuses instead on the roasted, toasted, sweet, and neat flavors of the malted barley grain. A blend of caramel and roasted barley gives the Red Smashed In a perfect balance of sweetness and roasted kick. There is a fairy dusting of nearly noble English hops sprinkled in as well just so all that flavor doesn’t get lonely."];


	function changeImage () {
		let ref = this.dataset.ref;
		imagePromo.src = `images/${ref}`;
		let count = this.dataset.count;
		galleryTitle.textContent = galleryTitleArray[count];
		galleryCopy.textContent = galleryCopyArray[count];
	}

	function changeImage2 () {
		//debugger;
		let source = this.dataset.source;
		imagePromo2.src = `images/${source}`;
		let num = this.dataset.num;
		galleryTitle2.textContent = galleryTitleArray2[num];
		galleryCopy2.textContent = galleryCopyArray2[num];
	}

	function showLightBox () {

		if (mediaQuery1.matches){

			lightBox.classList.add('showLightBox');
			body.classList.add('preventScrolling');
			lightBox.scrollIntoView;

		}
	}

	function  hideLightBox () {

		lightBox.classList.remove('showLightBox');
		body.classList.remove('preventScrolling');
	}

	function navigate (direction){

		currentImage.classList.remove('currentImage');
		counter = counter + direction;
		if (direction == -1 && counter < 0) {
			counter = arrayLength - 1;
		}
		if (direction == 1 && !lightBoxImageArray[counter]) {
			counter = 0;

		}
		currentImage = lightBoxImageArray[counter];
		currentImage.classList.add('currentImage');
		//debugger;
	}




imageArea.forEach(image =>{ image.addEventListener('click',changeImage);});

imageArea2.forEach(image2 =>{ image2.addEventListener('click',changeImage2);});


iconArea.addEventListener('click',showLightBox);
closeLightBox.addEventListener('click', hideLightBox);
arrowRight.addEventListener('click', function (e) {navigate(-1);});
arrowLeft.addEventListener('click', function (e) {navigate(1);});



})();
