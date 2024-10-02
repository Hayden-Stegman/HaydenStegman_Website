gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

const track = document.getElementById("image-track");
const counter = document.getElementById("counter");
const cardCount = document.getElementsByClassName("image").length;
const filmViewFinder = document.getElementById("film-view-finder");

// Calculate Once Values
const scrollMin = (100 / cardCount) / 2;
const scrollMax = (100 - scrollMin);

window.onmousedown = e => {
    track.dataset.mouseDownAt = e.clientX;
}

window.onmousemove = e => {
    // If the mouse is not down, dont do anything.
    if(track.dataset.mouseDownAt === "0" ) return;

    // Calculate the distance from where the mouseDown started to where it is now.
    // maxDelta = Calcuate the distance needed to travel for the whole track to scroll, equal to half the width of the screen.
    const mouseDelta = parseFloat(track.dataset.mouseDownAt) - e.clientX;
    const maxDelta = window.innerWidth / 2;

    // Get the percentage of the total scoll needed for the track that has been done, add it to the precentage of the previous scroll. Constrain it to the limit.
    const percentage = (mouseDelta / maxDelta) * -100,
        nextPercentageUnconstrained = parseFloat(track.dataset.prevPercentage) + percentage,
        nextPercentage = Math.max(Math.min(nextPercentageUnconstrained, -scrollMin), -scrollMax);

    // Update the dataset to contain the new percentage, apply the transform.
    track.dataset.percentage = nextPercentage;
    track.style.transform = 'translate(' + nextPercentage +'%, -50%)';

    // Update the Counter
    let cardNumber = Math.round(cardCount * (Math.abs(nextPercentage) / 100) + 0.5);
    cardNumber = Math.max(Math.min(cardNumber, 6), 1);
    counter.innerText = cardNumber;

    // Get all images and move parralx with the scroll
    for(const image of document.querySelectorAll(".image")) {
        image.style.objectPosition = (nextPercentage + 100) + '% 50%';
    }
}
window.onmouseup = () => {
    track.dataset.mouseDownAt = "0";
    track.dataset.prevPercentage = track.dataset.percentage; 
}