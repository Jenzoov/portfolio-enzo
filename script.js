/* --- DONNÉES DE LA VEILLE (Textes + Images) --- */
const toolsData = {
    'google': {
        title: "Google Alerts",
        intro: "Mon outil principal pour la veille passive sur des mots-clés précis.",
        images: [
            { src: 'images/google_1.webp', desc: "<strong>Configuration :</strong> Je définis ici mes mots-clés stratégiques (ex: 'JavaScript', 'Rust vs C++')." },
            { src: 'images/google_2.webp', desc: "<strong>Réception :</strong> Je reçois un condensé quotidien par email, ce qui m'évite de chercher l'info manuellement." },
            { src: 'images/google_3.webp', desc: "<strong>Exemple :</strong> Email d'exemple de réception de news." }
        ],
        rex: "Google Alerts est très rapide à installer et est très pratique mais donne des sources pas toujours fiables et recherche exactement le mot saisi."
    },
    'zotero': {
        title: "Zotero & Connector",
        intro: "L'outil le plus complet disposant d'une extension.",
        images: [
            { src: 'images/zotero_2.webp', desc: "<strong>Flux RSS :</strong> Récupération d'un flux RSS en bas d'un site web ." },
            { src: 'images/zotero_1.webp', desc: "<strong>Bibliothèque :</strong> Ajout d'une bibliothèque via l'URL d'un flux RSS." },
            { src: 'images/zotero_3.webp', desc: "<strong>Résultat :</strong> Toutes les news disponible grâve au flux RSS." },
            { src: 'images/zotero_4.webp', desc: "<strong>Zotero Connector :</strong> Avec l'extension je peux rajouter des articles intéressant dans Zotero directement depuis le navigateur." }
        ],
        rex: "Zotero offre la possibilité d'ajouter des notes et des tags, ce qui m'aide à structurer mes lectures et à retrouver rapidement l'information pertinente. L'utilisation d'un flux RSS permet d'alimenter automatiquement ma bibliothèque."
    },
    'diigo': {
        title: "Diigo",
        intro: "Outil de 'Social Bookmarking' pour le travail sur le texte même des articles.",
        images: [
            { src: 'images/diigo_1.png', desc: "<strong>Annotation :</strong> Je peux surligner du texte et poser des post-it virtuels directement sur les pages web." }
        ],
        rex: "Diigo permet d'annoter directement les passages clés, mais il n'est pas très poussé car c'est une extension."
    },
    'feedbro': {
        title: "Feedbro",
        intro: "Lecteur RSS local intégré au navigateur.",
        images: [
            { src: 'images/feedbro_1.png', desc: "<strong>Flux locaux :</strong> Rapide et privé, idéal pour suivre des blogs techniques spécifiques sans créer de compte." }
        ],
        rex: "Feedbro est une extension permettant de suivre un flux RSS, elle est très rapide à installer et ne nécessite pas de création de compte, mais Zotero reste meilleur et plus complet."
    },
    'feedly': {
        title: "Feedly",
        intro: "Agrégateur RSS sur mobile et desktop.",
        images: [
            { src: 'images/feedly_1.png', desc: "<strong>Sources :</strong> Permet de suivre des sources proposées." },
            { src: 'images/feedly_2.png', desc: "<strong>Lecture :</strong> Interface épurée facilitant la lecture rapide des news." }
        ],
        rex: "Feedly permet de centraliser ma veille sur une seule plateforme accessible partout mais il ne fait pas mieux que Zotero qui est plus complet."
    },
    'inoreader': {
        title: "Inoreader",
        intro: "Alternative puissante pour la gestion avancée des flux.",
        images: [
            { src: 'images/inoreader_1.jpg', desc: "<strong>Interface Pro :</strong> Permet des filtres plus poussés et une gestion dense de l'information." }
        ],
        rex: "Inoreader m'a offert des options de filtrage avancées qui m'ont aidé à réduire le bruit dans ma veille. La possibilité de créer des règles personnalisées a optimisé mon flux d'informations."
    }
};

/* --- GESTION DE LA MODALE VEILLE --- */
function openModal(toolId) {
    const modal = document.getElementById("galleryModal");
    const container = document.querySelector(".modal-content");
    const data = toolsData[toolId];

    /* DANS openModal(toolId) */

if (modal && container && data) {
    // 1. Génération des images (inchangé)
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

    // 2. Génération du REX (Uniquement si data.rex existe)
    // On ajoute un conteneur spécifique 'modal-rex-box'
    let rexHtml = '';
    if (data.rex) {
        rexHtml = `
            <div class="modal-rex-box">
                <h3>💡 Mon Retour d'Expérience</h3>
                <p>${data.rex}</p>
            </div>
        `;
    }

    // 3. Injection du HTML
    container.innerHTML = `
        <div class="modal-header">
            <h2>${data.title}</h2>
            <p class="modal-intro">${data.intro}</p>
        </div>
        
        <div class="modal-body-list">
            ${itemsHtml}
        </div>
        
        ${rexHtml}
    `;
    
    modal.style.display = "block";
    document.body.style.overflow = "hidden";
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

/* --- FONCTION DE TRI DES NEWS --- */
function sortNews(criteria) {
    const container = document.getElementById('newsContainer');
    const items = Array.from(container.getElementsByClassName('news-item'));
    const buttons = document.querySelectorAll('.btn-sort');

    // 1. Gestion de l'apparence des boutons (Active state)
    buttons.forEach(btn => btn.classList.remove('active'));
    // On cible le bouton cliqué pour lui mettre la classe active
    event.currentTarget.classList.add('active');

    // 2. Logique de tri
    items.sort((a, b) => {
        if (criteria === 'default') {
            // Tri par numéro (ex: "1ère news")
            const numA = parseInt(a.querySelector('.news-number').innerText);
            const numB = parseInt(b.querySelector('.news-number').innerText);
            return numA - numB;
        } 
        else if (criteria === 'date') {
            // Tri par date (ex: "05/03/25")
            // On extrait la date du texte "Date : 05/03/25 | Source..."
            const getDate = (el) => {
                const text = el.querySelector('.news-meta').innerText;
                const dateStr = text.match(/\d{2}\/\d{2}\/\d{2}/)[0]; // Récupère "dd/mm/yy"
                const parts = dateStr.split('/');
                // Crée une date (20 + année, mois - 1, jour)
                return new Date('20' + parts[2], parts[1] - 1, parts[0]);
            };
            // Tri du plus récent au plus ancien (b - a)
            return getDate(b) - getDate(a);
        } 
        else if (criteria === 'category') {
            // Tri par Bornage (ex: "🛡️ Sécurité & Robustesse")
            const getCat = (el) => el.querySelector('.bornage').innerText.trim();
            return getCat(a).localeCompare(getCat(b));
        }
    });

    // 3. Réinjection des éléments triés dans le DOM
    // (Cela déplace les éléments, ça ne les recrée pas, donc c'est performant)
    container.innerHTML = "";
    items.forEach(item => container.appendChild(item));
}

/* --- FONCTION DE FILTRAGE PAR BORNAGE --- */
function filterNews(category) {
    const container = document.getElementById('newsContainer');
    const items = Array.from(container.getElementsByClassName('news-item'));

    items.forEach(item => {
        // On récupère le texte du bornage (ex: "🛡️ Sécurité...")
        // .trim() enlève les espaces inutiles au début et à la fin
        const itemCategory = item.querySelector('.bornage').innerText.trim();

        // LOGIQUE : 
        // 1. Si on a choisi "all" -> on affiche tout
        // 2. Sinon, on vérifie si le bornage contient le texte choisi
        if (category === 'all' || itemCategory.includes(category.trim())) {
            item.style.display = 'flex'; // Affiche l'élément
            // On met 'flex' car tes news-item sont définies en flexbox ou grid
        } else {
            item.style.display = 'none'; // Cache l'élément
        }
    });
}