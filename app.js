//array of photo instances
var puppyPhotos = [];

function puppies(puppyname,filepath){
  this.puppyname = puppyname;
  this.path = filepath;
  this.votes = 0;
  puppyPhotos.push(this);
};

//object instances that go into an array puppyPhotos.
var puppy1 = new puppies('Puppy 1', 'images/pic1.jpeg');
var puppy2 = new puppies('Puppy 2','images/pic2.jpeg');
var puppy3 = new puppies('Puppy 3','images/pic3.jpeg');
var puppy4 = new puppies('Puppy 4','images/pic4.jpeg');
var puppy5 = new puppies('Puppy 5','images/pic5.jpeg');
var puppy6 = new puppies('Puppy 6','images/pic6.jpeg');
var puppy7 = new puppies('Puppy 7','images/pic7.jpeg');
var puppy8 = new puppies('Puppy 8','images/pic8.jpeg');
var puppy9 = new puppies('Puppy 9','images/pic9.jpeg');
var puppy10 = new puppies('Puppy 10','images/pic10.jpeg');
var puppy11 = new puppies('Puppy 11','images/pic11.jpeg');
var puppy12 = new puppies('Puppy 12','images/pic12.jpeg');
//console.log(puppies);

//method to display 2 random photos
var randomImg = function() {
  return (Math.floor(Math.random() * puppyPhotos.length));
};
console.log(randomImg());

/*
var image1 = document.getElementById(option1);
var image2 = document.getElementById(option2);

var randomPhoto1, randomPhoto2;

function compareImg(){
  do {
    randomPhoto1 = randomImg();
    randomPhoto2 = randomImg();

    option1.src = puppies[randomPhoto1].path;
    option2.src = puppies[randomPhoto2].path;
  }
  while (randomPhoto1 === randomPhoto2);

};

compareImg();
*/


/*
//event listener per click
var picButton = document.getElementById('picButton');
picButton.addEventListener('click', addImages);


option1.addEventListener('click', function(){
puppies[randomPhoto1].votes += 1;

addImages();
console.log("option 1 has been clicked" or "option 1 has x clicks");
compareImg();
});
*/

//tally votes per photo
// Tracker Object
  //method to receive and tally votes/ratings that are then stored in the photo instances
  //method to display chart of results
/*
  tracker.method = function() {
  does this thing
  does this other little thing
}
tracker.method 2 = function() {
  does something else
}
tracker.displayImages();
*/



/*

var data = [
  {
  value: images[randIndex1].votes,
  label: ,
  color: ,
  highlight: ,
  }

  {
  value: images[randIndex2].votes,
  label: ,
  color: ,
  highlight: ,
  }

  {
  value: images[randIndex3].votes,
  label: ,
  color: ,
  highlight: ,
  }

];


var context = document.getelementid('favorite').getContext('2d');
var skillsChart = new Chart(context).Pie(data, {
  animationSteps : value,
  animationEasing : value,
  animateRotate : boolean,
  animateScale : boolean,
});

*/


