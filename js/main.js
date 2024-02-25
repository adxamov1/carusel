var elBox = document.querySelector('.box')

var count = 0
function fnPrevious(){
    if(count > 0){
        count = count - 1
    }
    elBox.style.transform = `translateX(-${600 * count}px)`
}
function fnNext(){
    if(count < 6){
    count = count + 1
    }
    elBox.style.transform = `translateX(-${600 * count}px)`
}