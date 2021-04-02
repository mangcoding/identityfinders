async function fetchAnimation(idEl,jsonFile) {
    let response = await fetch(jsonFile);
    let animationData = await response.json();
    document.getElementById(idEl).innerHTML="";
    var params = {
        container: document.getElementById(idEl),
        renderer: 'svg',
        loop: true,
        autoplay: true,
        animationData: animationData
    };
    lottie.loadAnimation(params);
}

function fetchAnim(idEl,animationData) {
    document.getElementById(idEl).innerHTML="";
    var params = {
        container: document.getElementById(idEl),
        renderer: 'svg',
        loop: true,
        autoplay: true,
        animationData: animationData
    };
    lottie.loadAnimation(params);
}