"use strict"

window.addEventListener('load', function() { 
  
showMoreBtn.addEventListener('click', (e)=>{
    e.preventDefault();
  if(nothingHide){
    hideShown(3);
  } else{
    showHidden(1);
  }
    });
    
  });

//Кнопка для тригера спрятать/скрыть
let showMoreBtn = document.querySelector(".tags-list__btn-link");
//проверка осталось ли что-то что можно скрыть
let nothingHide = false;

// showCount -сколько прятать за раз ;
function showHidden(showCount){
//список с классом и модификатором ".tags-list__item._hide-tag"
  let showMoreItem = document.querySelectorAll(".tags-list__item._hide-tag");
  if(showMoreItem.length>1){
  let partOfItems = Array.from(showMoreItem).slice(0, showCount);
  partOfItems.forEach((el) => {el.classList.remove("_hide-tag")});
  let count = showMoreItem.length;
    } else if(showMoreItem.length==1){
        //коллекцию в массив
        let b = Array.from(showMoreItem);
        b[0].classList.remove("_hide-tag");
        showMoreBtn.innerText= "Свернуть";
        nothingHide = true;
    }
}
// hideCount -сколько показать;
function hideShown(hideCount){
    //список из того, что прячем ".tags-list__item"
  let hideShownItem = document.querySelectorAll(".tags-list__item"); 
  if(hideShownItem.length>0){
  let lastShown = hideShownItem.length;
//   console.log(lastShown);
  let partOfItems = Array.from(hideShownItem).slice(lastShown-hideCount, lastShown);
  partOfItems.forEach((el) => {el.classList.add("_hide-tag")});
  showMoreBtn.innerText= "Показать ещё"
  nothingHide = false;
  }
}

