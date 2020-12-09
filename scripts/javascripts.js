// loops through main images and nests them under thumb-bar
function create_thumbBar(){
    let x = document.getElementsByTagName('img');
    let y = document.getElementById('thumb-bar');
    for (i=0;i<5;i++){
        y.appendChild(x[i]);
    }
}

function update_image(pic){
    let x = document.getElementById('displayed-img');
    if (pic.src != undefined){
    x.src=pic.src;
    }
}

function show_buttons(){
    document.getElementById('form').classList.add('show');
}

function change_effect(){
    let x = document.getElementById('effect');
    let y = document.getElementById('displayed-img');
    if(x.value =='blur'){
        if(y.src.indexOf('pic1')>-1){
            y.src='images/pic1B.jpg';
        } else if (y.src.indexOf('pic2')>-1){
            y.src='images/pic2B.jpg';
        } else if (y.src.indexOf('pic3')>-1){
            y.src='images/pic3B.jpg';
        } else if (y.src.indexOf('pic4')>-1){
            y.src='images/pic4B.jpg';
        } else{
            y.src='images/pic5B.jpg';
        }
    } else{
        alert('Input other than \'blur\' was entered!');
    }
    x.value = '';
}

function main(){
    create_thumbBar();
    const ThumbHover = document.getElementById('thumb-bar');
    ThumbHover.addEventListener('mouseover',function(){
        let target =event.target||event.srcElement;
        update_image(target);
        show_buttons();
    })

    const Submit = document.getElementsByTagName('button');
    Submit[0].addEventListener('click',change_effect);
}

main();