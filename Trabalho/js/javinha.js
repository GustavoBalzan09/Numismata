function Enviar(){
    alert("Cadastro realizado com sucesso!");
}


const stars = document.querySelectorAll('input[name="star"]');
;

stars.forEach(star => {
    star.addEventListener('change', () => {
        const nota = star.id.charAt(star.id.length - 1);
    });
});

