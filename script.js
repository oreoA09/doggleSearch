'use strict';

function getDogImage(max) {
  fetch(`https://dog.ceo/api/breeds/image/random/`+ max)
    .then(response => response.json())
    .then(responseJson => displayImages(responseJson));
}

// function getBreedImage(breed) {
//   fetch(`https://dog.ceo/api/breed/${breed}/images`)//${}is a template string
//     .then(response => response.json())
//     .then(responseJson => displayImages(responseJson));
// }

function watchForm() {
  $('#maxform').submit(event => {
    // console.log(event)
    event.preventDefault();
    const max= event.target.max.value
    getDogImage(max);
  });
}

// function breedForm() {
//   $('#breedform').submit(event => {
//     // console.log(event)
//     event.preventDefault();
//     const breed= event.target.breed.value
//     getDogImage(breed);
//   });
// }

function displayImages(responseJson){
  console.log(responseJson)
//reads the data from the fetch and creates an html
  $("#result").html("")//clears the results div
  responseJson.message.forEach(url=>{//loops thru the arr
    $("#result").append(`
    <img src="${url}">
    `)//appends image to results div
  })
}

$(function() {
  console.log('App loaded! Waiting for submit!');
  watchForm();
  // breedForm();
});
