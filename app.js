$(function() {
  console.log('loaded');
  //getDataFromApi();
  makeSounds();
});



function makeSounds() {

//   var multiPlayer = new Tone.MultiPlayer(["ukeTones/A.wav", "ukeTones/E.wav"],
// function(){
// 	//if an array is passed in, the samples are referenced to by index
//   //multiPlayer.start(1);
// }).toMaster();



    $('button').click( function(e) {
      console.log('click');
      var multiPlayer = new Tone.MultiPlayer(["ukeTones/A.wav", "ukeTones/E.wav"],
    function(){
    	//if an array is passed in, the samples are referenced to by index
      multiPlayer.start(1);
      console.log('sound');
    }).toMaster();
    });
};
