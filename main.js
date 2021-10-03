function start(){
    navigator.mediaDevices.getUserMedia({audi: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/6L6btwa_N/model.json', modelReady);
}
function modelReady(){
    classifier.clasify(gotResult);
}
function gotResult(error, results){

}