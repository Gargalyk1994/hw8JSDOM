// 1. Необходимо вывести сообщение в консоль "все теги прогрузились", когда все теги будут созданы браузером.
if (document.readyState == 'loading') {
    console.log("все теги прогрузились");
}

// 2. Необходимо вывести сообщение в консоль "страница загрузилась", когда все ресурсы страницы будут загружены.
window.onload = () => console.log("страница загрузилась");


// 3. При клике на какой-либо тег на странице в консоль должно выводиться сообщение наподобие:
// - Класс "super_element" присутствует в элементе "button".
// - сообщение должно определять присутствует или отсутствует класс "super_element"
// - у элемента, а также выводить в нижнем регистре верный тег в данной строке, по
// - которому был совершен клик.
// - Необходимо использовать делегирование.

const btnSuperElem = document.querySelector(".super_element"); 
const wrapperBtns = document.querySelector(".wrapper"); 

wrapperBtns.addEventListener('click', (e) => {
    if (e.target.classList.contains("super_element")) {
        console.log(`Класс ${e.target.classList} присутствует в элементе ${e.target.nodeName.toLowerCase()}`);
        console.log(`Название тега: ${e.target.nodeName.toLowerCase()}`);
    }else{
        console.log('В элементе отсутствует класс "super_element"');
    }
});

// 4. Сделайте, чтобы при наведении на textarea в консоли появлялось сообщение: "Вы навели на textarea."
const textArea = document.querySelector("textarea");

textArea.addEventListener('mouseover', () => {
    console.log("Вы навели на textarea."); // срабатывает при клике а не при наведении
});
// 5. Необходимо повесить событие клика на тег ul. В обработчике события в консоль необходимо выводить текст, который записан внутри элемента кнопки, по которой был произведен клик. Если клик был не по кнопке, то ничего выводить не нужно. Необходимо использовать делегирование.
const listUl = document.querySelector(".list");

listUl.addEventListener('click', (e) => {
    if (e.target.nodeName === 'BUTTON') {
        console.log(e.target.textContent); 
    }
});

// 6. Вопрос: Почему в console.log пишется сначала текст из 5 задания и только потом выводится текст из 3 задания, если мы кликаем по кнопкам в ul? Ответ необходимо написать здесь же, под этим комментарием, своими словами.

//Не отвечу потому что повесил события на разные узлы. Так как 3 задание до безобразия не совпадает с HTML 

// 7. С помощью JS необходимо изменить цвет заднего фона каждого второго тега li.

const itemLi = document.querySelectorAll("li");
console.log(listUl.children[2]);

itemLi.forEach((li) => {
    let count = 1;
    if (count % 2 == 0){
        li.addEventListener('mouseover', () =>{
            li.style.backgroundColor = 'red';
            count++;
        });
    }
    
});

itemLi.forEach((li) => {
    let count = 1;
    if (count % 2 == 0){
        li.addEventListener('mouseout', () =>{
            li.style.backgroundColor = 'transparent';
        });
    }
    count++;
});

// listUl.addEventListener('mouseover', () => {
//     for (let i = 1; i < listUl.length; i++) {
//         if (i % 2 == 0) {
//             itemLi.children[i].style.backgroundColor = 'red';
//             // e.target.style.backgroundColor = 'transparent';
//         }
//     }
// });


// listUl.addEventListener('mouseout', (e) => {
//     for (let i = 1; i < listUl.length; i++) {
//         if (itemLi[i] % 2 == 0) {
//             e.target.style.backgroundColor = 'transparent';
//         }
//     }
// });

