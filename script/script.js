const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    loop: true,
    navigation: {
        nextEl: '#arrow-right',
        prevEl: '#arrow-left',
    }
});

let categoryBlocks = document.getElementsByClassName("latest-works__block1__categories__category");
let theWorksBlocks = document.getElementsByClassName("latest-works__block1-2__the-works-blocks");
for(let i=0;i<categoryBlocks.length;i++){
    categoryBlocks[i].addEventListener('click', () => {
        switch(i){
            case 0: 
                for(let i=0;i<theWorksBlocks.length;i++){
                    theWorksBlocks[i].style.display = "flex";
                }
            break;
            case 1:
                for(let i=0;i<theWorksBlocks.length;i++){
                    theWorksBlocks[i].style.display = "none";
                }
                document.getElementById("the-works__block1").style.display = "flex";
            break;
            case 2: 
                for(let i=0;i<theWorksBlocks.length;i++){
                    theWorksBlocks[i].style.display = "none";
                }
                document.getElementById("the-works__block2").style.display = "flex";
            break;
            case 3:
                for(let i=0;i<theWorksBlocks.length;i++){
                    theWorksBlocks[i].style.display = "none";
                }
                document.getElementById("the-works__block3").style.display = "flex";
            break;
            case 4:
                for(let i=0;i<theWorksBlocks.length;i++){
                    theWorksBlocks[i].style.display = "none";
                }
                document.getElementById("the-works__block4").style.display = "flex";
        }
        for(let i=0;i<categoryBlocks.length;i++){
            categoryBlocks[i].classList.remove("latest-works__block1__categories__category-active");
        }
        this.classList.add("latest-works__block1__categories__category-active");
    })
}
let navbarBlocks = document.getElementsByClassName("in-page1__logo-navbar__navbar__block");
for(let i=0;i<navbarBlocks.length; i++){
    navbarBlocks[i].addEventListener('click', () => {
        switch(i){
            case 0:
            document.getElementById('latest-works').scrollIntoView({behavior: "smooth", block: "start"});
            break;
            case 1:
                document.getElementById('we-are-sqwd').scrollIntoView({behavior: "smooth", block: "center"});
            break;
            case 2:
                document.getElementById('services').scrollIntoView({behavior: "smooth", block: "center"});
            break;
            case 3:
                document.getElementById('latest-works').scrollIntoView({behavior: "smooth", block: "start"});
            break;
            case 4:
                document.getElementById('footer-top').scrollIntoView({behavior: "smooth", block: "center"});
            break;
        }
    })   
}