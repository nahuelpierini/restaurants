document.addEventListener("DOMContentLoaded", function() {
    const categorias = document.querySelectorAll(".category");
    const categoriaTitulo = document.getElementById("categoriaTitulo");
    const restaurantesSection = document.getElementById("restaurantes");

    const data = {
        española: [
            {
                nombre: "Utopia",
                img: "images/utopia.png",
                especialidad: "Paella",
                link: "https://www.google.com/maps/place/UTOPIA/@36.4997641,-4.6866457,18.5z/data=!4m10!1m2!2m1!1sutopia!3m6!1s0xd731e34bf059563:0xb6e3285f2d771d0b!8m2!3d36.5001895!4d-4.6852941!15sCgZ1dG9waWFaCCIGdXRvcGlhkgEDYmFy4AEA!16s%2Fg%2F11c7vtmvs9?entry=ttu"
            },
            {
                nombre: "Los Granainos",
                img: "images/los_granainos.png",
                especialidad: "Tapas variadas",
                link: "https://www.google.com/maps/place/Bar+Los+Grana%C3%ADnos+(Cala+de+Mijas)/@36.4981042,-4.6891748,17z/data=!3m1!4b1!4m6!3m5!1s0xd731fcad28519e9:0x31b4c68f4c706985!8m2!3d36.4980999!4d-4.6865999!16s%2Fg%2F11c0r5z1zv?entry=ttu"
            }
        ],
        japonesa: [
            {
                nombre: "Sushi Sato",
                img: "images/sushi.png",
                especialidad: "Sushi",
                link: "https://ejemplo.com/sushi-sato"
            }
        ],
        burger: [
            {
                nombre: "Dak Burguer",
                img: "images/dak.png",
                especialidad: "Hamburguesas gourmet",
                link: "https://www.google.com/maps/place/Dak+Burger/@36.5079227,-4.686758,17z/data=!4m6!3m5!1s0xd731f4bf14ec351:0xe2a308d1790e6538!8m2!3d36.5080391!4d-4.6850199!16s%2Fg%2F11jp04679c?entry=ttu"
            }
        ],
        pizzas: [
            {
                nombre: "Pizza Place",
                img: "images/pizza.png",
                especialidad: "Pizza italiana",
                link: ""
            }
        ]
    };

    categorias.forEach(categoria => {
        categoria.addEventListener("click", function() {
            const tipo = this.getAttribute("data-tipo");
            categoriaTitulo.textContent = "Restaurantes de " + tipo.charAt(0).toUpperCase() + tipo.slice(1);
            restaurantesSection.innerHTML = "";

            if (data[tipo]) {
                data[tipo].forEach(restaurante => {
                    const restaurantDiv = document.createElement('div');
                    restaurantDiv.classList.add('restaurant');
                    restaurantDiv.innerHTML = `
                        <h2>${restaurante.nombre}</h2>
                        ${restaurante.img ? `<img src="${restaurante.img}" alt="${restaurante.nombre}" />` : ''}
                        <p>Especialidad: ${restaurante.especialidad}</p>
                        <a href="${restaurante.link ? restaurante.link : '#'}" target="_blank" class="btn">${restaurante.link ? 'Google Maps' : 'No posee página web'}</a>
                    `;
                    restaurantesSection.appendChild(restaurantDiv);
                });
            } else {
                restaurantesSection.innerHTML = "<p>No hay restaurantes disponibles en esta categoría.</p>";
            }
        });
    });
});
