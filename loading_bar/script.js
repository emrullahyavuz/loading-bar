
const loadingTitle = document.querySelector(".loadingTitle");
const loadingBar1 = document.querySelector(".loadingBar2");




let sonuc = 0;
loadingBar();


function loadingBar() {
    loadingTitle.textContent = `${sonuc}%`;
    loadingBar1.style.width = `${sonuc}%`;
    sonuc++;



    if (sonuc < 101) {
        setTimeout(loadingBar,15)
    }
}