let btn = document.getElementById('btnBuscar');

btn.addEventListener('click', function() {

    const contenedor = document.getElementById('contenedor');
    let dato = document.getElementById('inputBuscar').value;
    let url = 'https://images-api.nasa.gov/search?q=' + dato;

    contenedor.innerHTML =``;

    fetch(url)
    .then(response => response.json())
    .then(data => {

        data.collection.items.forEach(element => {

            let imageUrl = element.links[0].href;
            let title = element.data[0].title;
            let desc = element.data[0].description;
            let date = element.data[0].date_created;
            const div = document.createElement('div');
            div.classList.add('grid-tile');

            div.innerHTML= `
                <div style="background-image: url(${imageUrl}); background-size: cover; background-position: center; width: 100%; height: 120px;">
                </div>
                <div class="title">
                    <h3>${title}</h3>
                </div>
                <div class="description">
                    <p>${desc}</p>
                </div>
                <p class="date">${date}</p>
            `;

            contenedor.appendChild(div);
        });
    })
})
