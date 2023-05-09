var slideImg = document.getElementById("heroImage")
var secondSlideImg = document.getElementById("heroImage2");
var quoteText = document.getElementById("quoteText");
var prevComment = document.getElementById("prevComment");
var nextComment = document.getElementById("nextComment");
var commentText = document.getElementById("comment");
var commentIndex = 1;
var username = document.getElementById("username");
const bar = document.getElementById("bar");
const nav = document.getElementById("nav-bar");
const close = document.getElementById("close");



//ScrollReveal({ reset: true });
// ScrollReveal().reveal('.work-img');

class coms{
    constructor(name, comment) {
        this.name = name;
        this.comment = comment;
    }
}

bar.addEventListener('click', () => {
    nav.classList.add("active");

});

close.addEventListener('click', () => {
    nav.classList.remove("active");
});

loadFirstComment
prevComment.addEventListener("click", loadPreviousComment);
nextComment.addEventListener("click", loadNextComment);

var images = new Array(
    "img/slides/slide1.png",
    "img/slides/slide2.jpg",
    "img/slides/slide3.jpg",
    "img/slides/slide4.jpg",
    "img/slides/slide5.jpg",
    "img/slides/slide6.jpg",
    "img/slides/slide7.jpg",
    "img/slides/slide8.jpg",
    "img/slides/slide9.jpg",
    "img/slides/slide10.jpg",
)

var quotes = new Array(
    "\"In Photography, there is a reality so subtle that it becomes more real than reality\"",
    "\"There is one thing the photograph must contain the humanity of the moment.\"",
    "\"Taking pictures is savoring life intensely, every hundredth of a second.\"",
    "\"The best thing about a picture is that it never changes, even when the people in it do.\"",
    "\"What I like about photographs is that they capture a moment that’s gone forever, impossible to reproduce.\"",
    "\"Look and think before opening the shutter. The heart and mind are the true lens of the camera.\"",
    "\"Photography is a love affair with life.\"",
    "\"When I have a camera in my hand, I know no fear.\"",
    "\"Photography takes an instant out of time, altering life by holding it still.\"",
    "\"Photography is a language more universal than words.\""
)


var commentList = new Array("");
commentList.push(new coms("Chimamanda ononda", "I would define Sample photo studio as the best equipment in the hands of the best photographers, higly recomended for high quality photos"
))
commentList.push(new coms("Onuh Onyinye","Photographers at sample are creative, all i can say is it was the best photo studio i have stepped foot into"
))
commentList.push(new coms("Emmanuel fidas", "Wow i never expected to have such a great experience"
))
commentList.push(new coms("Amber smith","I marvel at how much effort photographers at sample put into creating someting amazing"
))



var len = images.length;
var i = 0;

function slider() {
    if (i > len-1) {
        i = 0;
    }

    slideImg.src = images[i];

    quoteText.innerText = quotes[i];
    i++;

    console.log("screen height: " + window.innerWidth)

    setTimeout('slider()', 6000)
}




function loadPreviousComment() {
    console.log(commentList[1].comment);
    if (commentIndex == 1) {

    }
    else {
        commentIndex--;
        commentText.innerText = commentList[commentIndex].comment;
        username.innerText = commentList[commentIndex].name;
    }

}

function loadFirstComment() {
    console.log("loaded first comment")
    commentIndex = 1;
    commentText.innerText = commentList[commentIndex].comment;
    username.innerText = commentList[commentIndex].name;
}

function loadNextComment() {
    if (commentIndex >= commentList.length -1) {
        commentIndex = 1;
    }
    else {
        commentIndex++;
    }

    commentText.innerText = commentList[commentIndex].comment;
    username.innerText = commentList[commentIndex].name;

}