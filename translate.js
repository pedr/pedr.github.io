
const text = { skills: [`
            <h2>Competências</h2>
            <ul>
              <li>HTML/CSS</li>
              <li>Javascript</li>
              <li>Inglês</li>
              <li>Linux, vim</li>
              <li>Conhecimentos básicos de Java, POO, git e Node.js</li>
            </ul>
            `, `
            <h2>Skills</h2>
            <ul>
              <li>HTML/CSS</li>
              <li>Javascript</li>
              <li>English </li>
              <li>Linux, vim</li>
              <li>Basic knowledge on Java, OOP, git and Node.js</li>
            </ul>`],
            aboutMe: [
            `<h2>Sobre</h2>
            <p>
              Meu nome é Pedro, sou estudante de Sistemas de Informação pelo Insituto Federal Catarinense e tenho 25 anos.     
              Eu sempre tive interesse por tecnologia, mas apenas comecei a aprender a programar há no ano passado. 
              Em 2017 decidi prestar o vestibular para o IFC após meus primeiros contatos com programação 
              nos cursos onlines, aka MOOC's (Massive Online Open Courses). O meu primeiro MOOC foi <a href="https://courses.edx.org/courses/course-v1:HarvardX+CS50+X/course/"">
              Introduction to Computer Science</a> disponibilizado pela Harvard, onde aprendi que adoro resolver problemas e 
              que quero fazer isso pelo resto da minha vida. 
            </p>
            <p>
              Depois desse, houveram outros:
              <ul>
                <li><a href="https://www.edx.org/course/introduction-to-computer-science-and-programming-using-python">
                  Introduction to Computer Science and Programming with Python</a>, disponibilizado pela MIT</li>
                <li><a href="https://www.edx.org/course/how-code-simple-data-ubcx-htc1x">How to Code: Simple Data</a>
                  , um curso baseado em uma linguagem funcional, disponibilizado pela Universidade da Colúmbia Britânica</li>
                <li>Object-Oriented Programming with Java <a href="http://moocfi.github.io/courses/2013/programming-part-1/">Part 1</a>
                  e <a href="http://moocfi.github.io/courses/2013/programming-part-2/">2</a> disponibilizado por uma universidade finlandesa chamada Helsinki</li>
              </ul> 
            </p>
            <p>
              Depois desses cursos comecei a ficar mais interessado por tecnologias da web e agora estou estudando HTML/CSS e Javascript.
              Atualmente estou lendo <a href="http://eloquentjavascript.net/">Eloquent Javascript</a> e aprendendo como construir API's com Node.js
            </p>`,
            `<h2>About me</h2>
            <p>
              My name is Pedro, I'm a college student of Information System on Instituo Federal Catarinense and I'm 25 years old.
              I've always been interested on technology, but I only started to learn how to code last year. In 2017 I decided to ingress on
              IFC after my first contact with coding on online courses, aka MOOC (Massive Online Open Courses). My first MOOC was 
              <a href="https://courses.edx.org/courses/course-v1:HarvardX+CS50+X/course/"">Introduction to Computer Science</a>,
              provided by Harvard, it was when I realized that I love to solve problems and that I want to do that for the rest of my life.
            </p>
            <p>
              I also made others MOOC's courses like:
              <ul>
                <li><a href="https://www.edx.org/course/introduction-to-computer-science-and-programming-using-python">
                  Introduction to Computer Science and Programming with Python</a>, provided by MIT</li>
                <li><a href="https://www.edx.org/course/how-code-simple-data-ubcx-htc1x">How to Code: Simple Data</a>
                  , a course based on a functional language, provided by University of British Columbia </li>
                <li>Object-Oriented Programming with Java <a href="http://moocfi.github.io/courses/2013/programming-part-1/">Part 1</a>
                  and <a href="http://moocfi.github.io/courses/2013/programming-part-2/">2</a> by the Finnish university Helsinki</li>
              </ul> 
            </p>
            <p>
              After that I started to get more interested on web technologies and right now I'm studying HTML/CSS and Javascript. 
              Right now I'm reading <a href="http://eloquentjavascript.net/">Eloquent Javascript</a> and learning how API's work with Node.js
            </p>`
            ]
}

const headerContent = ['Skills', 'Competências', 'About me', 'Sobre', 'Contact', 'Contato'];
const animation = 'transition';
const animationDuration = 300;

var ptEn = 0; // en = 0; pt = 1;
let buttons = document.querySelectorAll('button');

buttons.forEach( button => {
  button.addEventListener('click', (event, button) => {
    let parent = event.target.parentNode.id;
    let btn = event.target;
    translate(btn, parent);
  })
});

let s = document.getElementById('btnSkills');
let s1 = document.getElementById('skills');
translate(s, s1.id);

let m = document.getElementById('btnAboutMe');
let m1 = document.getElementById('aboutMe');
translate(m, m1.id);

function translate(btn, nome) {
  let textArea = document.getElementById(nome);
  console.log(textArea + '\n' + nome);
  textArea.classList.add(animation);
  setTimeout( () => {
    textArea.classList.remove(animation);
  }, animationDuration);

  let content;
  if (btn.innerHTML == 'PT') {
    content = text[nome][0];
    btn.innerHTML = 'EN';
    ptEn = 1;
  } else {
    content = text[nome][1];
    btn.innerHTML = 'PT';
    ptEn = 0;
  }

  let changeContent = document.getElementById(nome + '-text');
  changeContent.innerHTML = content;
  changeHeader();
}

function changeHeader() {
  let header = document.getElementsByTagName("header");
  let li = header[0].querySelectorAll('li');
  li.forEach( (ele, i) => {
      console.log(ele);
      ele.innerHTML = headerContent[i * 2 + ptEn].toUpperCase();
    }
  )
};
