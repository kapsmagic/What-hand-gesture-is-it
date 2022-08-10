Webcam.set({
    width:350,
    height:300,
    image_format:'png',
    png_quality:90
    });
    
    camera = document.getElementById("camera");
    
    Webcam.attach('#camera');
    
    function take_snapshot()
    {
        Webcam.snap(function(data_uri){
           document.getElementById("result").innerHTML = '<img id="captured_image" src="'+data_uri+'"/>';
        });
    }
    
    console.log('ml5 version:' ,ml5.version );
    classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/v0rG4H7T1/model.json', modelLoded);
    
    function modelLoded()
        {
            console.log('Model Loaded!');
        }
    
        function speak()
            {
                var synth = window.speechSynthesis;
                speak_data_1= "The prediction is" +prediction_1;
                utterThis = new SpeechSynthesisUtterance(speak_data_1);
                synth.speak(utterThis);
            }

            function check()
            {
                img = document.getElementById('captured_image')
                classifier.classify(img, gotResult);
            }

            function gotResult(error,results)
          {
          if (error)
          {
              console.error(error);
          }
          else
          {
            console.log(results);
            document.getElementById("result-gest-name").innerHTML =  results[0].label;
            prediction_1 = results[0].label;
            speak();
            if(results[0].label == "I Agree")
            {
                document.getElementById("update_emoji1").innerHTML =  "&#9994;";
            }
            if(results[0].label == "Amazing")
            {
                document.getElementById("update_emoji1").innerHTML =  "&#128076;";
            }
            if(results[0].label == "Luck")
            {
                document.getElementById("update_emoji1").innerHTML =  "&#129310;";
            }
            if(results[0].label == "Great")
            {
                document.getElementById("update_emoji1").innerHTML =  "&#128077;";
            }
          }
        }
