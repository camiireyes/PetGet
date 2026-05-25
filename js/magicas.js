const pets = [
    {
        id: 1,
        name: "Hedwig",
        description: "Lechuza mensajera extremadamente fiel",
        power: "Entrega cartas mágicas",
        personality: "Leal",
        danger: "Bajo",
        image: "https://e00-elmundo.uecdn.es/assets/multimedia/imagenes/2018/01/18/15162951329773.jpg"
    },
    {
        id: 2,
        name: "Fawkes",
        description: "Fénix legendario que renace de sus cenizas",
        power: "Inmortalidad y curación",
        personality: "Majestuoso",
        danger: "Medio",
        image: "https://miro.medium.com/v2/resize:fit:1400/0*9HlppFfCJsrrd2MP.jpg"
    },
    {
        id: 3,
        name: "Niffler",
        description: "Criatura amante de objetos brillantes",
        power: "Detector de tesoros",
        personality: "Travieso",
        danger: "Bajo",
        image: "https://contentful.harrypotter.com/usf1vwtuqyxm/20ieDwbv8anSMKPvtCWRVC/d365b8b9c614ee079d79fdb59b5f9628/niffler_1_1800x1248.png?w=1200&fit=fill&f=top"
    },
    {
        id: 4,
        name: "Esquilax",
        description: "Caballo con cabeza de conejo y cuerpo de conejo",
        power: "Cazador",
        personality: "Travieso",
        danger: "Medio",
        image: "https://pbs.twimg.com/media/EsSgnXPVoAEKuZf?format=jpg&name=900x900"
    }
];

const container = document.getElementById("petsContainer");

function renderPets() {
    container.innerHTML = "";

    pets.forEach(pet => {
        container.innerHTML += `
        <div class="col-md-4">
            <div class="card pet-card magical">

                <div class="img-wrapper">
                    <img src="${pet.image}">
                </div>

                <div class="card-body text-center">
                    <h5>${pet.name}</h5>
                    <p>${pet.description}</p>

                    <button class="btn btn-adopt w-100"
                        onclick="openModal(${pet.id})">
                        Ver criatura 🔮
                    </button>
                </div>

            </div>
        </div>`;
    });
}

function openModal(id) {
    const pet = pets.find(p => p.id === id);

    document.getElementById("modalTitle").innerText = pet.name;
    document.getElementById("modalImg").src = pet.image;
    document.getElementById("modalDesc").innerText = pet.description;
    document.getElementById("modalPersonality").innerText = pet.personality;
    document.getElementById("modalHealth").innerText = pet.health;
    document.getElementById("modalSpecial").innerText = pet.power;

    new bootstrap.Modal(document.getElementById("petModal")).show();
}

renderPets();