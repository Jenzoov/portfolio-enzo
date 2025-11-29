/* --- GESTION DE LA GALERIE (Page Veille) --- */
function openModal(...images) {
    const modal = document.getElementById("galleryModal");
    const container = document.querySelector(".modal-content");
    
    if (modal && container) {
        // 1. Vider le contenu précédent
        container.innerHTML = '';

        // 2. Ajouter chaque image
        images.forEach(src => {
            const img = document.createElement("img");
            img.src = src;
            img.classList.add("modal-img");
            container.appendChild(img);
        });

        // 3. Afficher la modale
        modal.style.display = "block";
    }
}

function closeModal() {
    const modal = document.getElementById("galleryModal");
    if (modal) modal.style.display = "none";
}

/* --- GESTION DU CODE SQL (Page Stage) --- */
function openSqlModal() {
    const modal = document.getElementById("sqlModal");
    if (modal) modal.style.display = "block";
}

function closeSqlModal() {
    const modal = document.getElementById("sqlModal");
    if (modal) modal.style.display = "none";
}

/* --- FERMETURE GÉNÉRALE (Clic en dehors) --- */
window.onclick = function(event) {
    // Si on clique sur le fond sombre (la classe 'modal'), on ferme tout
    if (event.target.classList.contains('modal')) {
        event.target.style.display = "none";
    }
}