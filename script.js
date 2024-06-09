const parentContainer= document.querySelector('.read-more-container');

parentContainer.addEventListener('click', event=>{
    const current= event.target;

    const isReadMorBtn = current.className.includes('read-more-btn');
    if(!isReadMorBtn) return;

    const currentText =event.target.parentNode.querySelector('.read-more-text');
    // const currentText =event.target.parentNode.querySelector('.read-more-btn');
    currentText.classList.toggle('read-more-text--show');

    current.textContent= current.textContent.includes('Read More') ? "Read Less..." : "Read More...";
})

// skill circle
const circles= document.querySelectorAll('.circle');
circles.forEach(elem=>{
    var dots=elem.getAttribute("data-dots");
    var marked= elem.getAttribute("data-percent");
    var percent= Math.floor(dots*marked/100);
    var points="";
    var rotate= 360 / dots;

    for(let i=0; i<dots; i++){
        points += `<div class="points" style="--i:${i}; --rot:${rotate}deg"></div>`;
    }
    elem.innerHTML = points;

    const pointsMarked = elem.querySelectorAll('.points')
    for(let i=0; i<percent; i++){
        pointsMarked[i].classList.add('marked')
    }
})









