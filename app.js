$(function() {
  console.log('loaded');
  //getDataFromApi();
  makeSounds();
});



function makeSounds() {

  var multiPlayer = new Tone.MultiPlayer(["ukeTones/A.mp3", "ukeTones/C#.mp3"],
function(){
	//if an array is passed in, the samples are referenced to by index

});



    $('button').click( function(e) {
      console.log('click');
      multiPlayer.start(1);
    });
};
