const legendsList = document.querySelector('.main-grid-legends');
const classList = document.querySelector('.main-grid-classes');

showLegends();

function showLegends() {
    fetch('http://localhost:8000/legends')
        .then(res => res.json())
        .then(legends => {

            classList.innerHTML = '';
            classList.style.display = 'none';

            legends.forEach(legend => {
                const li = document.createElement('li');

                const h3 = document.createElement('h3');
                h3.classList.add('legend-name');
                h3.textContent = legend.name;

                const pClass = document.createElement('p');
                pClass.classList.add('legend-class');
                pClass.textContent = legend.class;

                const pDesc = document.createElement('p');
                pDesc.classList.add('legend-desc');
                pDesc.textContent = legend.desc;

                const ul = document.createElement('ul');
                ul.classList.add('legend-perks');

                const liPassive = document.createElement('li');
                liPassive.classList.add('passive');
                liPassive.textContent = legend.passive;

                const liActive = document.createElement('li');
                liActive.classList.add('active');
                liActive.textContent = legend.active;

                const liUltimate = document.createElement('li');
                liUltimate.classList.add('ultimate');
                liUltimate.textContent = legend.ultimate;

                ul.appendChild(liPassive);
                ul.appendChild(liActive);
                ul.appendChild(liUltimate);

                li.appendChild(h3);
                li.appendChild(pClass);
                li.appendChild(pDesc);
                li.appendChild(ul);

                legendsList.appendChild(li);
            });

        });
}


const classBtn = document.getElementById('classBtn');

function showClasses() {
    fetch('http://localhost:8000/legends/classes')
        .then(res => res.json())
        .then(classes => {
            legendsList.innerHTML = '';
            legendsList.style.display = 'none';

            const classListUl = document.createElement('ul');
            classListUl.classList.add('class-list');
            
            classes.forEach(class_ => {
                const classListItem = document.createElement('li');
                classListItem.textContent = class_;
                classListUl.appendChild(classListItem);
            });
            classList.appendChild(classListUl);
        });
}


classBtn.addEventListener('click', () => {
    if (legendsList.style.display === 'none') {
        legendsList.style.display = 'block';
        showLegends();
    } else {
        classList.style.display = 'block';
        showClasses();
    }
});