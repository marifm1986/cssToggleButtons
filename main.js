// var heros = ['Sajjad', 'Shahadat', 'Arif', 'Asif', 'Mehboob'];
// someHeros = heros.slice(0,3);

// var btnData = document.getElementById("url").innerHTML;


// document.getElementById("btnHome").onclick = function(){
//     alert("you clicked " + btnData)
// }

// document.onkeypress = function(event){
//    console.log(event.keyCode)
// }
// var btn_home = document.getElementById("btnHome");
// var btn_about = document.getElementById("btnAbout");
// btn_home.onclick = function(){
//     btn_home.style.backgroundColor = 'red';
//     btn_home.style.color = 'white';
//     btn_about.style.color = 'green';
//     btn_about.style.width = '100px';
//     }

// var brother = ['Sajjad', 'Shahadat', 'Arif', 'Asif', 'Mehboob'];
// for (var a = 0; a < brother.length; a++){
//     console.log(brother[a]);
//     document.getElementById("url").innerHTML = brother[a];
// }

// var name = 'Arif';

// console.log(name? "you name is " + name : "your name is noting");

document.getElementById("itemList").onchange = () => {
    var selectField = document.getElementById("itemList");
    var selectedOption = selectField.options.selectedIndex;
    var selectedValue = selectField.options[selectedOption];
    document.getElementById("selectedItem").innerHTML = selectedValue.innerHTML;

}

var check = document.getElementsByName("meal");
for (var a = 0; a < check.length; a++) {
    check[a].onchange = () => {
       
        document.getElementById("selectedItem").innerHTML = "<ul>";

for (var b = 0; b <check.length; b++){
    if(check[b].checked){
        document.getElementById("selectedItem").innerHTML += "<li>" + check[b].value + "</li>" ;
        console.log(check[b].value);
    }
}
        document.getElementById("selectedItem").innerHTML += "</ul>";

    }
}



var myContents = [
    {
    'contentTitle': 'Digital Marketing',
    'contentText': 'Lorem ipsum dolor sit amet consectetur adipiscing elit pulvinar natoque pretium pellentesque cubilia, sociosqu ad nisi facilisis tristique hendrerit vestibulum imperdiet interdum turpis arcu, augue posuere cum sollicitudin cursus montes euismod integer libero sociis duis. Duis gravida arcu sagittis dictum commodo euismod neque consequat tristique, quis etiam maecenas semper fusce cras lectus dictumst class, non urna convallis'
    },
    {
    'contentTitle': 'Front-End Developement',
    'contentText': 'sociis fringilla auctor massa magnis. Tortor est cras aenean ut venenatis aliquam blandit, sociis cursus fringilla natoque imperdiet turpis, curabitur ridiculus massa suspendisse praesent felis. Praesent non ullamcorper at fames fringilla nunc potenti gravida, malesuada integer purus vehicula arcu dapibus t'
    },
    {
    'contentTitle': 'Back-End Developement',
    'contentText': 'Nisl sapien urna class leo interdum accumsan pellentesque justo, aliquam ullamcorper scelerisque habitasse vivamus nisi praesent lobortis pharetra, placerat vehicula taciti nulla eros lacinia enim. Dignissim hac lectus massa elementum ligula urna congue mus velit, cursus fermentum ultrices eleifend eu conubia orci mattis, eget nibh placerat sodales sociis posuere platea per. Pellentesque mus hac diam maecenas cum molestie posuere sodales, malesuada risus aliquet congue platea tempor'
    },
    {
    'contentTitle': 'Back-End Developement',
    'contentText': 'Nisl sapien urna class leo interdum accumsan pellentesque justo, aliquam ullamcorper scelerisque habitasse vivamus nisi praesent lobortis pharetra, placerat vehicula taciti nulla eros lacinia enim. Dignissim hac lectus massa elementum ligula urna congue mus velit, cursus fermentum ultrices eleifend eu conubia orci mattis, eget nibh placerat sodales sociis posuere platea per. Pellentesque mus hac diam maecenas cum molestie posuere sodales, malesuada risus aliquet congue platea tempor'
    }
];


var backButton = document.getElementById("backBtn");
var nextButton = document.getElementById("nextBtn");
var titleContent = document.getElementById("titleArea");
var textContent = document.getElementById("contentArea");
var contentCounter = myContents.length;
document.getElementById("counter").innerHTML = contentCounter;

var currentContent = document.getElementById("counterOf");

var currentContent = 0;

nextButton.onclick = function(){
    if(currentContent == (myContents.length - 1)){
        currentContent = 1
    }else{

        currentContent ++ ;
    }
  document.getElementById("counterOf").innerHTML = currentContent + " /"  ;
    var title = myContents[currentContent].contentTitle;
    var text = myContents[currentContent].contentText;
    titleContent.innerHTML = title;
    textContent.innerHTML = text;
}
backButton.onclick = function(){
    if(currentContent == 1){
        currentContent = myContents.length - 1
    }else{

        currentContent --;
    }



    document.getElementById("counterOf").innerHTML = currentContent + " /"  ;
    var title = myContents[currentContent].contentTitle;
    var text = myContents[currentContent].contentText;
    titleContent.innerHTML = title;
    textContent.innerHTML = text;
}

