var SpeechRecognition = window.webkitSpeechRecognition;
  
var recognition = new SpeechRecognition();

function start()
{
    document.getElementById("textbox").innerHTML = ""; 
    recognition.start();
} 
 
recognition.onresult = function(event) {

     console.log(event); 

    var Content = event.results[0][0].transcript;

    document.getElementById("textbox").innerHTML = Content;
    console.log(Content);
     if (Content == "take my selfie" )
     {
        console.log("taking selfie ---");
        speak();
     }
}


function speak(){
    var synth = window.speechSynthesis;

    speak_data = "Taking Your Selfie In 5 Seconds"

    var utterThis = new SpeechSynthesisUtterance(speak_data);

    synth.speak(utterThis);

    Webcam.attach(camera);

    setTimeout(function()
    {
        img_id= "selfie1"
  
    speak_data = "Taking your next Selfie in 5 seconds";
    take_snapshot1();
     save();
    }, 5000);
   
    setTimeout(function()
    {
        img_id= "selfie2"
    
    speak_data = "Taking your next Selfie in 10 seconds";
    take_snapshot2();
        save();
    }, 10000);

    setTimeout(function()
    {
        img_id= "selfie3"
    
    speak_data = "Taking your next Selfie in 15 seconds";
    take_snapshot3();
        save();
    }, 15000);
        
}

 
Webcam.set({
    width:360,
    height:250,
    image_format : 'png',
    jpeg_quality:90
});
camera = document.getElementById("camera");

function take_snapshot1(){
    Webcam.snap(function(data_uri1) {
        document.getElementById("result1").innerHTML = '<img id ="selfie1" src="' +data_uri1+ '">'
        
    })
}

function take_snapshot2(){
    Webcam.snap(function(data_uri2) {
        document.getElementById("result2").innerHTML = '<img id ="selfie2" src="' +data_uri2+ '">'
        
    })
}

function take_snapshot3(){
    Webcam.snap(function(data_uri3) {
        document.getElementById("result3").innerHTML = '<img id ="selfie3" src="' +data_uri3+ '">'
        
    })
}

function save()
{
    link1= document.getElementById("link1");
    link2= document.getElementById("link2");
    link3= document.getElementById("link3");
    image1= document.getElementById("selfie1").src;
    image2= document.getElementById("selfie2").src;
    image3= document.getElementById("selfie3").src;
    link1.href = image1;
    link2.href = image2;
    link3.href = image3;
    link1.click();
    link2.click();
    link3.click();
}

