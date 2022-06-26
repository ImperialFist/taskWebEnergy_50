"use strict"

window.addEventListener('load', function() { 
    cartBtn.addEventListener("click", (e)=>{
        e.preventDefault();
        showSizeGreed();
    });

    closeSgBtn.addEventListener("click", ()=>{
        showSizeGreed();
    });


  });

  //кнопка триггер
  const cartBtn = document.getElementById("cartBtn");
  //само окно с размерами
  const sizeGreed = document.getElementById("size-greed");
  //крестик в окне
  const closeSgBtn = document.getElementById("closeSgBtn");

  //кнопка добавить
    const addBtn = document.querySelectorAll(".option-counter__increse");
  //кнопка отнять
    const removeBtn = document.querySelectorAll(".option-counter__decrese");

 //поле инпута
    const inputCounter = document.querySelectorAll(".option-counter__input");

if(addBtn.length>0){
    addBtn.forEach(elem => {
        elem.addEventListener("click", (e)=>{
                increseCounter(e.target.dataset.counterBtn);
            });
    })

}

if(removeBtn.length>0){
    removeBtn.forEach(elem => {
        elem.addEventListener("click", (e)=>{
             decreseCounter(e.target.dataset.counterBtn);
            });
    })

}


// открытие окна с размерной сеткой
function showSizeGreed(){
    if(sizeGreed){
        sizeGreed.classList.toggle("_active-sg");
    }
}

//увеличиваем счётчик
function increseCounter(id){
    if(sizeGreed){
        const greedInput = document.querySelector(`[data-counter-id="${id}"]`);
        greedInput.value = Number(greedInput.value)+1;

    }
};

//уменьшаем счётчик
function decreseCounter(id){
    if(sizeGreed){
        const greedInput = document.querySelector(`[data-counter-id="${id}"]`);
        if(Number(greedInput.value)>0){
        greedInput.value = Number(greedInput.value)-1;
    }

    }
};

