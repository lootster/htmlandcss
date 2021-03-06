function creatBottle() {
    var imgElem = document.createElement('img');
    imgElem.setAttribute('src', 'beer.jpg');
    imgElem.setAttribute("width", "15");
    imgElem.classList.add('small-bottle');
    return (imgElem)
}

var linebreak = "<br>";


function printData(counter) {

    var leftOverBottle = counter - 1;
    var hereElem = document.body.querySelector('#demo');

    //Repeat bottle images based on remaining bottles left
    for (var i = counter; i > 0; i--) {
        var bottleImage = creatBottle();
        hereElem.appendChild(bottleImage);
    }

    //Display the lyrics based on remaining bottles left
    hereElem.innerHTML += linebreak + counter + " bottles of beer on the wall, " + counter + " bottles of beer." + linebreak +
        "Take one down and pass it around, " + leftOverBottle + " bottles of beer on the wall." + linebreak + linebreak;
}

function whileLoop() {
    var counter = 99;
    while (counter > 0) {

        printData(counter);
        linebreak;
        counter--;

        //Display the last sentence of the lyric's if there is no more remaining bottle.
        if (counter == 0) {
            document.write(" No more bottles of beer on the wall, no more bottles of beer." + linebreak + 
            "Go to the store and buy some more, 99 bottles of beer on the wall.")
        }
    }
}

whileLoop();