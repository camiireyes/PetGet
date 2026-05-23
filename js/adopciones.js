const names = [
"Max","Luna","Rocky","Milo","Charlie","Simba","Nala","Toby","Coco","Leo",
"Buddy","Daisy","Zeus","Thor","Bella","Lucy","Oliver","Chloe","Jack","Loki",
"Kiara","Bruno","Rex","Maya","Kira","Oreo","Nina","Bobby","Sasha","Tom",
"Jerry","Apollo","Shadow","Ginger","Pepper","Blue","Ruby","Sam","Hunter","Layla",
"Zoe","Prince","Mocha","Lucky","Angel","Rocco","Mimi","Bambi","Dusty","Fluffy"
];

const dogImgs = [
"https://cdn.pixabay.com/photo/2014/08/21/14/51/dog-423398_1280.jpg",
"https://cdn.pixabay.com/photo/2023/11/30/07/04/shetland-sheepdog-8420917_1280.jpg",
"https://cdn.pixabay.com/photo/2015/11/17/13/13/puppy-1047521_1280.jpg",
"https://cdn.pixabay.com/photo/2016/12/13/05/15/puppy-1903313_1280.jpg",
"https://cdn.pixabay.com/photo/2016/07/15/15/55/dachshund-1519374_1280.jpg",
"https://cdn.pixabay.com/photo/2018/03/18/18/06/australian-shepherd-3237735_1280.jpg",
"https://cdn.pixabay.com/photo/2023/03/02/14/46/pit-bull-7825554_1280.jpg",
"https://cdn.pixabay.com/photo/2016/05/09/10/42/weimaraner-1381186_1280.jpg",
"https://cdn.pixabay.com/photo/2019/08/19/07/45/corgi-4415649_1280.jpg",
"https://cdn.pixabay.com/photo/2025/06/20/10/47/dog-9670619_1280.jpg",
"https://cdn.pixabay.com/photo/2022/01/13/10/24/dog-6934895_1280.jpg",
"https://cdn.pixabay.com/photo/2022/04/29/00/27/puppy-7162203_1280.jpg",
"https://cdn.pixabay.com/photo/2023/01/03/16/00/dog-7694676_1280.jpg"
];

const catImgs = [
"https://cdn.pixabay.com/photo/2024/10/16/16/14/cat-9125207_1280.jpg",
"https://cdn.pixabay.com/photo/2015/01/31/12/36/cat-618470_1280.jpg",
"https://cdn.pixabay.com/photo/2024/01/29/20/40/cat-8540772_1280.jpg",
"https://cdn.pixabay.com/photo/2023/06/29/12/28/cats-8096304_1280.jpg",
"https://cdn.pixabay.com/photo/2017/02/15/12/12/cat-2068462_1280.jpg",
"https://cdn.pixabay.com/photo/2019/04/02/16/11/cat-4098058_1280.jpg",
"https://cdn.pixabay.com/photo/2012/11/26/13/58/cat-67345_1280.jpg",
"https://cdn.pixabay.com/photo/2016/11/18/21/57/animal-1837067_1280.jpg",
"https://cdn.pixabay.com/photo/2015/02/25/17/56/cat-649164_1280.jpg",
"https://cdn.pixabay.com/photo/2022/12/31/14/32/cat-7688749_1280.jpg",
"https://cdn.pixabay.com/photo/2015/02/14/10/16/cat-636172_1280.jpg",
"https://cdn.pixabay.com/photo/2015/11/16/22/14/cat-1046544_1280.jpg",
"https://cdn.pixabay.com/photo/2017/03/27/14/09/black-cat-2178983_1280.jpg"
];

const birdImgs = [
"https://cdn.pixabay.com/photo/2023/11/06/06/50/parrot-8368951_1280.png",
"https://cdn.pixabay.com/photo/2019/09/14/08/37/red-green-parakeet-4475484_1280.jpg",
"https://cdn.pixabay.com/photo/2022/06/12/01/57/bird-7257165_1280.jpg",
"https://cdn.pixabay.com/photo/2023/03/10/18/35/parakeet-7842920_1280.jpg",
"https://cdn.pixabay.com/photo/2019/03/17/07/26/bird-4060407_1280.jpg",
"https://cdn.pixabay.com/photo/2023/01/20/10/14/parakeet-7731329_1280.jpg",
"https://cdn.pixabay.com/photo/2020/02/16/17/58/nature-4854378_1280.jpg",
"https://cdn.pixabay.com/photo/2019/09/14/08/40/green-parakeet-4475493_1280.jpg",
"https://cdn.pixabay.com/photo/2020/05/19/11/47/parrot-5190385_1280.jpg",
"https://cdn.pixabay.com/photo/2014/01/14/16/30/parakeet-244785_1280.jpg",
"https://cdn.pixabay.com/photo/2020/02/25/08/35/nature-4878315_1280.jpg",
"https://cdn.pixabay.com/photo/2022/10/09/09/09/bird-7508612_1280.jpg"

];

const fishImgs = [
"https://cdn.pixabay.com/photo/2018/03/06/14/12/fish-3203498_1280.jpg",
"https://cdn.pixabay.com/photo/2022/07/11/11/01/fishes-7314666_1280.jpg",
"https://cdn.pixabay.com/photo/2014/06/30/08/02/zitronenfalter-fish-380037_1280.jpg",
"https://cdn.pixabay.com/photo/2022/08/09/13/38/fish-7375042_1280.jpg",
"https://cdn.pixabay.com/photo/2023/05/23/07/05/royal-gramma-basslet-8012082_1280.jpg",
"https://cdn.pixabay.com/photo/2022/07/11/11/01/fishes-7314666_1280.jpg",
"https://cdn.pixabay.com/photo/2021/08/13/07/11/siamese-fighting-fish-6542427_1280.jpg",
"https://cdn.pixabay.com/photo/2021/01/14/20/32/fish-5917864_1280.jpg",
"https://cdn.pixabay.com/photo/2016/12/31/21/22/discus-fish-1943755_1280.jpg",
"https://cdn.pixabay.com/photo/2020/10/12/20/57/aquarium-5650174_1280.jpg",
"https://cdn.pixabay.com/photo/2014/06/23/06/00/longhorn-cowfish-375110_1280.jpg",
"https://cdn.pixabay.com/photo/2025/06/27/07/30/clownfish-9683275_1280.jpg"

];

const personalities = [
"Juguetón y energético",
"Tranquilo y cariñoso",
"Curioso y activo",
"Protector y leal",
"Sociable y amigable"
];

const pets = [];

let dogIndex = 0;
let catIndex = 0;
let birdIndex = 0;
let fishIndex = 0;

for(let i=0; i<50; i++){

    let type, image, badge;

    if(i % 4 === 0){
        type = "terrestre";
        image = dogImgs[dogIndex];
        badge = "Perro";
        dogIndex++;
    }
    else if(i % 4 === 1){
        type = "terrestre";
        image = catImgs[catIndex];
        badge = "Gato";
        catIndex++;
    }
    else if(i % 4 === 2){
        type = "aereo";
        image = birdImgs[birdIndex];
        badge = "Ave";
        birdIndex++;
    }
    else{
        type = "acuatico";
        image = fishImgs[fishIndex];
        badge = "Pez";
        fishIndex++;
    }

    if(!image){
        image = "https://via.placeholder.com/500?text=Sin+imagen";
    }

    pets.push({
        id:i+1,
        name:names[i],
        type,
        badge,
        description:"Listo para encontrar un hogar lleno de amor",
        personality:personalities[i % personalities.length],
        health:"Vacunado y en buen estado", 
        image
    });
}

const container = document.getElementById("petsContainer");
const searchInput = document.getElementById("searchInput");

let currentFilter = "todos";

function renderPets(data){
    container.innerHTML = "";

    if(data.length === 0){
        container.innerHTML = "<h4 class='text-center'>No hay resultados 😢</h4>";
        return;
    }

    data.forEach(pet=>{
        container.innerHTML += `
        <div class="col-md-4 col-lg-3">
            <div class="card pet-card">
                <div class="img-wrapper position-relative">
                    <img src="${pet.image}" loading="lazy">
                    <span class="pet-badge">${pet.badge}</span>
                </div>
                <div class="card-body text-center">
                    <h5>${pet.name}</h5>
                    <p>${pet.description}</p>
                    <button class="btn btn-adopt w-100" onclick="openModal(${pet.id})">
                        Ver más
                    </button>
                </div>
            </div>
        </div>`;
    });
}

function filterPets(type){
    currentFilter = type;
    applyFilters();
}

document.querySelectorAll(".btn-filter").forEach(btn=>{
    btn.addEventListener("click",()=>{
        document.querySelectorAll(".btn-filter").forEach(b=>b.classList.remove("active"));
        btn.classList.add("active");
        filterPets(btn.dataset.filter);
    });
});

function applyFilters(){
    let filtered = pets;

    if(currentFilter !== "todos"){
        filtered = filtered.filter(p=>p.type === currentFilter);
    }

    const search = searchInput.value.toLowerCase();

    if(search){
        filtered = filtered.filter(p =>
            p.name.toLowerCase().includes(search)
        );
    }

    renderPets(filtered);
}

searchInput.addEventListener("keyup", applyFilters);

function openModal(id){
    const pet = pets.find(p=>p.id === id);

    document.getElementById("modalTitle").innerText = pet.name;
    document.getElementById("modalImg").src = pet.image;
    document.getElementById("modalDesc").innerText = pet.description;
    document.getElementById("modalPersonality").innerText = pet.personality;
    document.getElementById("modalHealth").innerText = pet.health;
    document.getElementById("modalSpecial").innerText = pet.special;

    new bootstrap.Modal(document.getElementById("petModal")).show();
}

let secret = "";
document.addEventListener("keydown",(e)=>{
    secret += e.key.toLowerCase();
    if(secret.includes("magic")){
        window.location.href = "magicas.html";
    }
});

renderPets(pets);



// CAMBIAR A FORMULARIO
function showForm(){
    document.getElementById("viewInfo").style.display = "none";
    document.getElementById("viewForm").style.display = "block";
}

// RESET MODAL
function resetModal(){
    document.getElementById("viewInfo").style.display = "block";
    document.getElementById("viewForm").style.display = "none";
    document.getElementById("viewSuccess").style.display = "none";
}

// SUBMIT FORM
document.addEventListener("submit", function(e){
    if(e.target.id === "adoptionForm"){
        e.preventDefault();

        document.getElementById("viewForm").style.display = "none";
        document.getElementById("viewSuccess").style.display = "block";
    }
});

// MODIFICAR openModal
function openModal(id){
    const pet = pets.find(p=>p.id === id);

    document.getElementById("modalTitle").innerText = pet.name;
    document.getElementById("modalImg").src = pet.image;
    document.getElementById("modalDesc").innerText = pet.description;
    document.getElementById("modalPersonality").innerText = pet.personality;
    document.getElementById("modalHealth").innerText = pet.health;
    document.getElementById("modalSpecial").innerText = pet.special;

    // AUTOFILL
    document.getElementById("petName").value = `${pet.name} (${pet.badge})`;

    resetModal();

    new bootstrap.Modal(document.getElementById("petModal")).show();
}