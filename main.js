prediction_1="";


Webcam.set
({
width:350,
height:300,
image_format:'png',
png_quality:90
});

camera=document.getElementById("camera");
Webcam.attach('#camera');

function take_snapshot()
{
Webcam.snap(function(data_uri){
    document.getElementById("result").innerHTML='<img id="cptured_image" src="'+ data_uri+'"/>';
});
}

console.log('ml5 version:', ml5.version);

classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/4_b2p1SKB/model.json',model_loded);

function model_loded()
{
    console.log('model is loaded');
}

function check(){
    img=document.getElementById("captured_image");
    classifier.classify(img,gotResult);
}

function speak()
{
    var synth=window.speechSynthesis;
    speak_data_1=tospeak;
    var utterThis=new SpeechSynthesisUtterance(speak_data_1);
    synth.speak(utterThis);
}

function gotResult(error,results){
    if(error){console.error(error);
    }
 else{
     console.log(results);
     
     document.getElementById("result_guesture_name").innerHTML=results[0].label;
     prediction_1=results[0].label;
    
   tospeak="";
    if(results[0].label=="Victory"){
        tospeak="victory";
        document.getElementById("guesture_emoji").innerHTML="&#9996;";
    }
    if(results[0].label=="Nice"){
        tospeak="nice";
           document.getElementById("guesture_emoji").innerHTML="&#128076;";
   }
   if(results[0].label=="Hello"){
    tospeak="hello";
       document.getElementById("guesture_emoji").innerHTML="&#128075;";
   }
   
 
 speak() ; 
  
}
}