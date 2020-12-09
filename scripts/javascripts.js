// loops through main images and nests them under thumb-bar
function create_thumbBar(){
    let x = document.getElementsByClassName('thumb');
    let y = document.getElementById('thumb-bar')
    for (i=0;i<5;i++){
        console.log(x[i].src)
        y.appendChild(x[i])
    }
}

function update_image(pic){
    let x = document.getElementById('displayed-img')
    if (pic.src != undefined){
    x.src=pic.src;
    }
}

function main(){
    create_thumbBar();
    const ThumbHover = document.getElementById('thumb-bar');
    ThumbHover.addEventListener('mouseover',function(){
        let target =event.target||event.srcElement;
        update_image(target);
    })
}

main();