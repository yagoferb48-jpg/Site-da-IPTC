// --- MENU FIXO AO ROLAR ---
const header = document.querySelector(".cabecalho");

window.addEventListener("scroll", () => {
    header.classList.toggle("fixo", window.scrollY > 30);
});

// --- ROLAGEM SUAVE ---
document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("click", (e) => {
        e.preventDefault();
        const id = link.getAttribute("href");
        const alvo = document.querySelector(id);

        window.scrollTo({
            top: alvo.offsetTop - 80,
            behavior: "smooth"
        });
    });
});

// --- ENVIO DO FORMULÁRIO PARA WHATSAPP ---
const btn = document.querySelector("#btn-whats");
const nome = document.querySelector(".nome input");
const pedido = document.querySelector(".oracao textarea");

// COLOQUE AQUI O NÚMERO DA IGREJA!
const numeroIgreja = "5531999999999"; 

btn.addEventListener("click", (event) => {
    event.preventDefault();

    if (nome.value.trim() === "" || pedido.value.trim() === "") {
        alert("Preencha seu nome e o seu pedido de oração.");
        return;
    }

    const mensagem = `🙏 *Pedido de Oração*%0A%0A👤 *Nome:* ${nome.value}%0A📖 *Pedido:* ${pedido.value}`;
    const link = `https://wa.me/${numeroIgreja}?text=${mensagem}`;

    window.open(link, "_blank");

    nome.value = "";
    pedido.value = "";
});

// --- ANIMAÇÃO DO BOTÃO ---
btn.addEventListener("mousedown", () => btn.style.transform = "scale(0.95)");
btn.addEventListener("mouseup", () => btn.style.transform = "scale(1)");
