const container = document.querySelector('#container');

const redpara = document.createElement('p');
redpara.textContent = "Hey I'm red!";
redpara.style.color = 'red';

const hthree = document.createElement('h3');
hthree.textContent = "I'm a blue h3!";
hthree.style.color = 'blue';

const div = document.createElement('div');
div.style.cssText = 'border: black solid 8px; background-color: pink;';
div.classList.add('newdiv');

container.appendChild(redpara);
container.appendChild(hthree);
//container.appendChild(div);
//const newdiv = document.querySelector('.newdiv');

const hone = document.createElement('h1');
hone.textContent = "I'm in a div";

const p = document.createElement('p');
p.textContent = "ME TOO";

div.appendChild(hone);
div.appendChild(p);
container.appendChild(div);

const btn2 = document.querySelector('#btn2');
btn2.onclick = () => alert("Hello World");

const btn3 = document.querySelector('#btn3');
btn3.addEventListener('click', () => {
  alert("Hello World");
});

const btn4 = document.querySelector('#btn4');
btn4.addEventListener('click', function (e) {
    console.log(e.target);
    e.target.style.background = 'lightblue';
  });


const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        alert(button.id);
    });
});
