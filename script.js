const verificarPalindromo = () => {
    const fraseInput = document.getElementById('frase');
    const frase = fraseInput.value.trim();

    if (frase === '') {
        document.getElementById('resultado').innerText = 'Por favor, introduce una frase.';
        return;
    }
    
    const caracteresInvalidos = /[^a-zA-Z0-9\s]/;
    if (caracteresInvalidos.test(frase)) {
        document.getElementById('resultado').innerText = 'Solo se permiten letras y números.';
        return;
    }

    const fraseSinEspacios = frase.toLowerCase().replace(/[^a-z0-9]/g, '');
    const invertido = [...fraseSinEspacios].reverse().join('');
    const resultado = (fraseSinEspacios === invertido) ? 'Es un palíndromo' : 'No es un palíndromo';
    
    document.getElementById('resultado').innerText = resultado;
};
