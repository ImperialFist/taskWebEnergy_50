"use strict"

window.addEventListener('load', function() { 
    showFilterBtn.addEventListener("click", (e)=>{
        openNav()
    });

    filterBtnBack.addEventListener("click", (e)=>{
        closeNav()
    });

    filterBtnClose.addEventListener("click", (e)=>{
        closeNav()
    });


  });

const showFilterBtn = document.querySelector("#showFilterBtn");
const filterBtnBack = document.querySelector("#filter__back");
const filterBtnClose = document.querySelector("#filter__close");
const bodyClass = document.querySelector(".body");





function openNav() {

    const filterBlock = document.getElementsByClassName("hero__filter");
    const filterHeader = document.querySelector(".filter__mobile-btns");
        // проверяем наличие блока с фильтром
    if(filterBlock){
        filterBlock[0].style.width = "268px";
        //маска для body
        bodyClass.classList.add("_active-canvas");
    }

    if(filterHeader){
        filterHeader.classList.add("_active-filter");
    }
    
  }
  

  function closeNav() {
    const filterBlock = document.getElementsByClassName("hero__filter");
    const filterHeader = document.querySelector(".filter__mobile-btns");

    filterBlock[0].style.width = "0";
    //убираем маску у body
    bodyClass.classList.remove("_active-canvas");
    filterHeader.classList.remove("_active-filter");

  }