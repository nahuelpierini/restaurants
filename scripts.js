document.addEventListener("DOMContentLoaded", function() {
    const categorias = document.querySelectorAll(".category");
    const categoriaTitulo = document.getElementById("categoriaTitulo");
    const restaurantesSection = document.getElementById("restaurantes");

    const data = {
        spanish: [
            {
                nombre: "Los Granainos",
                img: "images/los_granainos.png",
                especialidad: "Fish",
                ranking: "Excelent",
                link: "https://www.google.com/maps/place/Bar+Los+Grana%C3%ADnos+(Cala+de+Mijas)/@36.4981042,-4.6891748,17z/data=!3m1!4b1!4m6!3m5!1s0xd731fcad28519e9:0x31b4c68f4c706985!8m2!3d36.4980999!4d-4.6865999!16s%2Fg%2F11c0r5z1zv?entry=ttu"
            },
            {
                nombre: "Utopia",
                img: "images/utopia.png",
                especialidad: "Fish, gourmet",
                ranking: "Excelent",
                link: "https://www.google.com/maps/place/UTOPIA/@36.4997641,-4.6866457,18.5z/data=!4m10!1m2!2m1!1sutopia!3m6!1s0xd731e34bf059563:0xb6e3285f2d771d0b!8m2!3d36.5001895!4d-4.6852941!15sCgZ1dG9waWFaCCIGdXRvcGlhkgEDYmFy4AEA!16s%2Fg%2F11c7vtmvs9?entry=ttu"
            },
            {
                nombre: "El Torreon",
                img: "images/el_torreon.png",
                especialidad: "Fish",
                ranking: "Excelent",
                link: "https://www.google.com/maps/place/Restaurante+El+Torre%C3%B3n/@36.5030053,-4.6787514,3a,75y,90t/data=!3m8!1e2!3m6!1sAF1QipMyZIvqIhj6uWMthvObJ82rfR0al-WHnT7TrM3n!2e10!3e12!6shttps:%2F%2Flh5.googleusercontent.com%2Fp%2FAF1QipMyZIvqIhj6uWMthvObJ82rfR0al-WHnT7TrM3n%3Dw203-h152-k-no!7i4032!8i3024!4m11!1m2!2m1!1schiringuito!3m7!1s0xd72584973de187f:0x67860686295ab025!8m2!3d36.5029852!4d-4.6787353!10e5!15sCgtjaGlyaW5ndWl0b1oNIgtjaGlyaW5ndWl0b5IBGG1lZGl0ZXJyYW5lYW5fcmVzdGF1cmFudJoBI0NoWkRTVWhOTUc5blMwVkpRMEZuU1VOTE9YVTNRVVpuRUFF4AEA!16s%2Fg%2F1hc1jwxdp?entry=ttu"
            }
        ],
        chiringuito: [
            {
                nombre: "Merendero Pepe 'El Bombo'",
                img: "images/el_bombo.png",
                especialidad: "Espeto sardina, fish",
                ranking: "OK",
                link: "https://www.google.com/maps/place/Merendero+Pepe+'El+Bombo'/@36.4952591,-4.6895638,3a,75y,90t/data=!3m8!1e2!3m6!1sAF1QipPZ5Ou0Gbtnhsa7BjAk-EAEapjpyYBduFDeQ68A!2e10!3e12!6shttps:%2F%2Flh5.googleusercontent.com%2Fp%2FAF1QipPZ5Ou0Gbtnhsa7BjAk-EAEapjpyYBduFDeQ68A%3Dw203-h114-k-no!7i3840!8i2160!4m7!3m6!1s0xd731fb590064b79:0x25c1ad849f02c5c6!8m2!3d36.4951705!4d-4.68963!10e5!16s%2Fg%2F11ckvb3nvt?entry=ttu"
            },
            {
                nombre: "La Familia Beach Club",
                img: "images/la_familia_beach_clob.png",
                especialidad: "Espeto sardina, fish",
                ranking: "OK",
                link: "https://www.google.com/maps/place/La+Familia+Beach+Club/@36.4945757,-4.6905552,18.5z/data=!4m10!1m2!2m1!1schiringuito!3m6!1s0xd731fb5bf527339:0xdf79a312d954f0f4!8m2!3d36.494168!4d-4.6901515!15sCgtjaGlyaW5ndWl0b1oNIgtjaGlyaW5ndWl0b5IBGG1lZGl0ZXJyYW5lYW5fcmVzdGF1cmFudJoBJENoZERTVWhOTUc5blMwVkpRMEZuU1VSUGJqbHFkRjlSUlJBQuABAA!16s%2Fg%2F1tgzcpzw?entry=ttu"
            }
        ],
        japanese: [
            {
                nombre: "Tako Boy",
                img: "images/tako_boy.png",
                especialidad: "Takoyaki, rammen, not sushi",
                ranking: "Excelent",
                link: "https://www.google.com/maps/place/Restaurante+Japon%C3%A9s+-+TAKO+BOY/@36.5481138,-4.6229311,15z/data=!4m10!1m2!2m1!1scomida+japonesa!3m6!1s0xd72e2453f61b565:0x2f3556e1c7ba2ccb!8m2!3d36.5513347!4d-4.615066!15sCg9jb21pZGEgamFwb25lc2FaESIPY29taWRhIGphcG9uZXNhkgETamFwYW5lc2VfcmVzdGF1cmFudJoBI0NoWkRTVWhOTUc5blMwVkpRMEZuU1VOQ2VqbERlR1YzRUFF4AEA!16s%2Fg%2F11c0rpmfm7?entry=ttu"
            }
        ],
        burger: [
            {
                nombre: "Dak Burger",
                img: "images/dak.png",
                especialidad: "Gourmet burger",
                ranking: "Excelent",
                link: "https://www.google.com/maps/place/Dak+Burger/@36.5079227,-4.686758,17z/data=!4m6!3m5!1s0xd731f4bf14ec351:0xe2a308d1790e6538!8m2!3d36.5080391!4d-4.6850199!16s%2Fg%2F11jp04679c?entry=ttu"
            }
        ],
        pizza: [
            {
                nombre: "Pizza Nono",
                img: "images/pizza_nono.png",
                especialidad: "Italian pizza",
                ranking: "OK",
                link: "https://www.google.com/maps/place/Pizza+Nonno/@36.5009366,-4.6842705,16z/data=!4m10!1m2!2m1!1spizzeria!3m6!1s0xd731e3484c5b7c5:0x624cf4e1e874fc5!8m2!3d36.5010355!4d-4.6843912!15sCghwaXp6ZXJpYVoKIghwaXp6ZXJpYZIBEHBpenphX3Jlc3RhdXJhbnSaASRDaGREU1VoTk1HOW5TMFZKUTBGblNVUmFjMlUzTW5GM1JSQULgAQA!16s%2Fg%2F11g6hvvs0y?entry=ttu"
            }
        ],
        cocktail: [
            {
                nombre: "Bar lo del Nanet",
                img: "images/bar_lo_del_nanet.png",
                especialidad: "Cocktail",
                ranking: "Good",
                link: "https://www.google.com/maps/place/Bar+Lo+Del+Nanet/@36.504256,-4.6758238,3a,75y,90t/data=!3m8!1e2!3m6!1sAF1QipPugMyB_J_rAqma8WIEyyveUvtVouzQNTMBP-2l!2e10!3e12!6shttps:%2F%2Flh5.googleusercontent.com%2Fp%2FAF1QipPugMyB_J_rAqma8WIEyyveUvtVouzQNTMBP-2l%3Dw203-h114-k-no!7i1920!8i1080!4m7!3m6!1s0xd731e3a7b6779e7:0x3e064dae326f4684!8m2!3d36.5041584!4d-4.675617!10e5!16s%2Fg%2F11b_31mjvq?entry=ttu"
            }
        ]
    };

    categorias.forEach(categoria => {
        categoria.addEventListener("click", function() {
            const tipo = this.getAttribute("data-tipo");
            categoriaTitulo.textContent = tipo.toUpperCase() + " FOOD " ;
            restaurantesSection.innerHTML = "";

            if (data[tipo]) {
                data[tipo].forEach(restaurante => {
                    const restaurantDiv = document.createElement('div');
                    restaurantDiv.classList.add('restaurant');
                    restaurantDiv.innerHTML = `
                        <h2>${restaurante.nombre}</h2>
                        ${restaurante.img ? `<img src="${restaurante.img}" alt="${restaurante.nombre}" />` : ''}
                        <p>Speciality: ${restaurante.especialidad}</p>
                        <p>Punctuation: ${restaurante.ranking}</p>
                        <a href="${restaurante.link ? restaurante.link : '#'}" target="_blank" class="btn">${restaurante.link ? 'Google Maps' : 'NO GOOGLE MAPS'}</a>
                    `;
                    restaurantesSection.appendChild(restaurantDiv);
                });
            } else {
                restaurantesSection.innerHTML = "<p>There aren't restaurants in this category.</p>";
            }
        });
    });
});
