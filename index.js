function BMI(){
    var Høyde = document.getElementById('Høyde').value;
    var Vekt = document.getElementById('Vekt').value;
    var bmi = Vekt/(Høyde/100*Høyde/100);
    var bmio = (bmi.toFixed(2));
   

    document.getElementById('result').innerHTML="Your BMI is " + bmio;
}