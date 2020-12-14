console.log('Here are all the available people:', people);

// document ready && click listener
$(readyNow);

function readyNow() {
    console.log('jq loaded');
         
    randomName();
    renderToDom();

    $(document).on('click', '.photoClass', guessPhoto);
    
}    

// create and append div for each

function renderToDom() {
    for (let person of people) {
        $('.container').append(`
            <div>
            <img class="photoClass" data-name="${person.name}" src="https://github.com/${person.githubUsername}.png?size=250" alt="Profile image of ${person.name}">
            </div>
        `);
    }
}

let selectedName;

function randomName() {

    let randomNum = randomNumber(0, (people.length - 1));

		selectedName = people[randomNum].name;
		
		$('#randomName').text(selectedName);

}

function randomNumber(min, max){
    return Math.floor(Math.random() * (1 + max - min) + min);
}

function guessPhoto() {
    let clickedPhoto = $(this);
    console.log(clickedPhoto.data());
	if (clickedPhoto.data().name === selectedName) {
        nailedIt(clickedPhoto);
        setTimeout(unNailedIt, 2000, clickedPhoto);
	} else {
		alert('Try again!');
	}
}

function nailedIt(clickedPhoto) {
    clickedPhoto.addClass('blueBorder');
}

function unNailedIt(clickedPhoto){
    clickedPhoto.removeClass('blueBorder');
    alert('You chose correctly!');
    randomName();
}