function startClassification()
{
    navigator.mediaDevices.getUserMedia({ audio:true});
    classifier = m15.soundClassifier('https://teachablemachine.withgoogle.com/models/2qMyVLM4Vc/', modelReady);

}
function modelReady(){
    classifier.classify(gotResult);
}