// voluntarios.js

function abrirFormulario() {
    resetVoluntarioModal();
    new bootstrap.Modal(document.getElementById("voluntarioModal")).show();
}

function resetVoluntarioModal() {
    document.getElementById("vFormView").style.display = "block";
    document.getElementById("vSuccessView").style.display = "none";
    const form = document.getElementById("voluntarioForm");
    if (form) form.reset();
}

document.addEventListener("submit", function (e) {
    if (e.target.id === "voluntarioForm") {
        e.preventDefault();
        document.getElementById("vFormView").style.display = "none";
        document.getElementById("vSuccessView").style.display = "block";
    }
});

// Reset al cerrar el modal
document.addEventListener("DOMContentLoaded", function () {
    const modal = document.getElementById("voluntarioModal");
    modal.addEventListener("hidden.bs.modal", function () {
        resetVoluntarioModal();
    });
});