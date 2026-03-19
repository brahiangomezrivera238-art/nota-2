// Publicaciones iniciales con imágenes espectaculares
const initialPosts = [
    {
        id: 1,
        titulo: "Cyberpunk 2077: ¿El mejor RPG ahora?",
        contenido: "Tras la actualización 2.0 y el DLC Phantom Liberty, el juego es una obra maestra.",
        categoria: "Reseñas",
        img: "https://images.unsplash.com/photo-1605898835373-02f740d05d1d?auto=format&fit=crop&q=80&w=800",
        fecha: "2026-03-15"
    },
    {
        id: 2,
        titulo: "Nueva RTX 5090 filtrada",
        contenido: "Los rumores indican que será un 70% más rápida que la generación anterior.",
        categoria: "Hardware",
        img: "https://images.unsplash.com/photo-1591488320449-011701bb6704?auto=format&fit=crop&q=80&w=800",
        fecha: "2026-03-18"
    }
];

let posts = JSON.parse(localStorage.getItem('gp_posts')) || initialPosts;

// LÓGICA LOGIN
document.getElementById('loginForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const u = document.getElementById('username').value;
    const p = document.getElementById('password').value;

    if(u === 'admin' && p === '1234') {
        sessionStorage.setItem('gp_logged', 'true');
        checkAuth();
    } else {
        document.getElementById('loginError').style.display = 'block';
    }
});

function checkAuth() {
    const isLogged = sessionStorage.getItem('gp_logged');
    const loginSec = document.getElementById('login-section');
    const editorSec = document.getElementById('editor-section');

    if(isLogged) {
        loginSec.style.display = 'none';
        editorSec.style.display = 'block';
    } else {
        loginSec.style.display = 'block';
        editorSec.style.display = 'none';
    }
    renderPosts();
}

function logout() {
    sessionStorage.removeItem('gp_logged');
    window.location.reload();
}

// LÓGICA PUBLICACIONES
document.getElementById('postForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const newP = {
        id: Date.now(),
        titulo: document.getElementById('postTitle').value,
        contenido: document.getElementById('postContent').value,
        img: document.getElementById('postImg').value,
        categoria: document.getElementById('postCategory').value,
        fecha: new Date().toLocaleDateString()
    };
    posts.unshift(newP);
    localStorage.setItem('gp_posts', JSON.stringify(posts));
    e.target.reset();
    renderPosts();
});

function renderPosts() {
    const container = document.getElementById('postsContainer');
    const filter = document.getElementById('filterCategory').value;
    container.innerHTML = '';

    posts.filter(p => filter === 'todos' || p.categoria === filter).forEach(p => {
        container.innerHTML += `
            <article class="news-card">
                <img src="${p.img}" class="news-img" alt="Img">
                <div class="news-body">
                    <span class="badge">${p.categoria}</span>
                    <h3 style="margin: 10px 0;">${p.titulo}</h3>
                    <p style="color: #ccc; font-size: 0.9rem;">${p.contenido}</p>
                    <div style="display:flex; justify-content:space-between; align-items:center; margin-top:20px;">
                        <small style="color: #666;">📅 ${p.fecha}</small>
                        ${sessionStorage.getItem('gp_logged') ? `<button onclick="deletePost(${p.id})" style="color:var(--accent); background:none; border:none; cursor:pointer;">Eliminar</button>` : ''}
                    </div>
                </div>
            </article>
        `;
    });
}

function deletePost(id) {
    if(confirm("¿Borrar post?")) {
        posts = posts.filter(p => p.id !== id);
        localStorage.setItem('gp_posts', JSON.stringify(posts));
        renderPosts();
    }
}

document.getElementById('filterCategory').addEventListener('change', renderPosts);
checkAuth();