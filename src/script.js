let select1 = document.getElementById('robo1')
let select2 = document.getElementById('robo2')
let tech1 = document.getElementById('robo1_tech')
let tech2 = document.getElementById('robo2_tech')
let robots = []

const renderItems = (data) => {
    data.forEach(item => {
        const { id, title, size, weight, teacher, team } = item

        let list_elem = document.createElement('option')
        list_elem.setAttribute('value', id)
        list_elem.textContent = title
        select1.append(list_elem)

        let list_elem2 = document.createElement('option')
        list_elem2.setAttribute('value', id)
        list_elem2.textContent = title
        select2.append(list_elem2)

        str1 = `<h3>Характеристики: ${title}</h3>
        <ul>
            <li>Размер: ${size}</li>
            <li>Вес: ${weight}</li>
            <li>Команда: ${team}</li>
            <li>Педагог: ${teacher}</li>
        </ul>`
        robots[id] = str1
    })
}
fetch('src/robots.json')
    .then((response) => response.json())
    .then((data) => {
        renderItems(data);
    })
    .catch((error) => {
        console.log(error);
    })


select1.addEventListener('change', () => {
    tech1.innerHTML = robots[select1.value]
})

select2.addEventListener('change', () => {
    tech2.innerHTML = robots[select2.value]
})