let works = document.getElementById('work_loading');
let click = document.getElementById('work_click')

click.onmousedown = function(){
    if(works.style.height = '0'){
        works.style.height = '600px'
        works.style.opacity = '1';
        works.style.display = 'flex';
    }
};

click.onclick = function(){
    if(works.style.height = '600px'){
        works.style.opacity = '0';
        works.style.height = '0';
    }
};





