/* --- DONNÉES DE LA VEILLE (Textes + Images) --- */
const toolsData = {
    'google': {
        title: "Google Alerts",
        intro: "Mon outil principal pour la veille passive sur des mots-clés précis.",
        images: [
            { src: 'images/google_1.webp', desc: "<strong>Configuration :</strong> Je définis ici mes mots-clés stratégiques (ex: 'faille zero-day', 'Rust vs C++')." },
            { src: 'images/google_2.webp', desc: "<strong>Réception :</strong> Je reçois un condensé quotidien par email, ce qui m'évite de chercher l'info manuellement." },
            { src: 'images/google_3.webp', desc: "<strong>Filtrage :</strong> Je limite les résultats aux blogs et actualités pour éviter le bruit des forums." }
        ]
    },
    'zotero': {
        title: "Zotero & Connector",
        intro: "Ma base de connaissances pour archiver et classer les articles techniques.",
        images: [
            { src: 'images/zotero_1.webp', desc: "<strong>Bibliothèque :</strong> Vue d'ensemble de ma base, classée par thématiques (IA, Sécurité, Langages)." },
            { src: 'images/zotero_2.webp', desc: "<strong>Connector :</strong> Un clic dans le navigateur suffit pour enregistrer un article intéressant." },
            { src: 'images/zotero_3.webp', desc: "<strong>Tags :</strong> J'utilise des tags pour retrouver facilement les articles (ex: 'Important', 'A lire')." },
            { src: 'images/zotero_4.webp', desc: "<strong>Notes :</strong> Ajout de notes personnelles directement liées aux sources." },
            { src: 'images/zotero_6.webp', desc: "<strong>Archivage :</strong> Zotero garde une copie (snapshot) de la page web au cas où elle disparaîtrait." }
        ]
    },
    'diigo': {
        title: "Diigo",
        intro: "Outil de 'Social Bookmarking' pour le travail sur le texte même des articles.",
        images: [
            { src: 'images/diigo_1.png', desc: "<strong>Annotation :</strong> Je peux surligner du texte et poser des post-it virtuels directement sur les pages web." }
        ]
    },
    'feedbro': {
        title: "Feedbro",
        intro: "Lecteur RSS local intégré au navigateur.",
        images: [
            { src: 'images/feedbro_1.png', desc: "<strong>Flux locaux :</strong> Rapide et privé, idéal pour suivre des blogs techniques spécifiques sans créer de compte." }
        ]
    },
    'feedly': {
        title: "Feedly",
        intro: "Mon agrégateur RSS principal sur mobile et desktop.",
        images: [
            { src: 'images/feedly_1.png', desc: "<strong>Tableau de bord :</strong> Vue synthétique des articles populaires du jour." },
            { src: 'images/feedly_2.png', desc: "<strong>Lecture :</strong> Interface épurée facilitant la lecture rapide des news." }
        ]
    },
    'inoreader': {
        title: "Inoreader",
        intro: "Alternative puissante pour la gestion avancée des flux.",
        images: [
            { src: 'images/inoreader_1.jpg', desc: "<strong>Interface Pro :</strong> Permet des filtres plus poussés et une gestion dense de l'information." }
        ]
    }
};

/* --- GESTION DE LA MODALE VEILLE --- */
function openModal(toolId) {
    const modal = document.getElementById("galleryModal");
    const container = document.querySelector(".modal-content");
    const data = toolsData[toolId];

    if (modal && container && data) {
        // Construction du HTML interne
        let itemsHtml = data.images.map(item => `
            <div class="modal-item-flex">
                <div class="modal-img-wrapper">
                    <img src="${item.src}" alt="${data.title}">
                </div>
                <div class="modal-text-wrapper">
                    <p>${item.desc}</p>
                </div>
            </div>
        `).join('');

        container.innerHTML = `
            <div class="modal-header">
                <h2>${data.title}</h2>
                <p class="modal-intro">${data.intro}</p>
            </div>
            <div class="modal-body-list">
                ${itemsHtml}
            </div>
        `;
        
        modal.style.display = "block";
        document.body.style.overflow = "hidden"; // Empêche le scroll derrière
    }
}

function closeModal() {
    const modal = document.getElementById("galleryModal");
    if (modal) {
        modal.style.display = "none";
        document.body.style.overflow = "auto";
    }
}

/* --- GESTION AUTRES MODALES (SQL, etc.) --- */
function openSqlModal() {
    const modal = document.getElementById("sqlModal");
    if (modal) modal.style.display = "block";
}
function closeSqlModal() {
    const modal = document.getElementById("sqlModal");
    if (modal) modal.style.display = "none";
}

/* --- FERMETURE AU CLIC EXTÉRIEUR --- */
window.onclick = function(event) {
    if (event.target.classList.contains('modal')) {
        event.target.style.display = "none";
        document.body.style.overflow = "auto";
    }
}