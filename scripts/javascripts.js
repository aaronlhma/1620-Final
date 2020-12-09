// loops through main images and nests them under thumb-bar
function create_thumbBar(){
    let x = document.getElementsByClassName('thumb');
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
    if(x.value =='blur'){
        console.log('input was blur');
    }
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