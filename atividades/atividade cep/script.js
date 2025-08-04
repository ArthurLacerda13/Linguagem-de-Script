document.addEventListener('DOMContentLoaded', function() {
    const cepInput = document.getElementById('cep');
    const addressForm = document.getElementById('EnderecoForm');
    const cepError = document.getElementById('cepError');
    const logradouro = document.getElementById('logradouro');
    const bairro = document.getElementById('bairro');
    const localidade = document.getElementById('localidade');
    const uf = document.getElementById('uf');
    const complemento = document.getElementById('complemento');
    const numero = document.getElementById('numero');

    // Máscara para o CEP (apenas números, sem hífen)
    cepInput.addEventListener('input', function(e) {
        let value = e.target.value.replace(/\D/g, '');
        if (value.length > 8) {
            value = value.substring(0, 8);
        }
        e.target.value = value;

        // Limpa os campos se o CEP não estiver completo
        if (value.length < 8) {
            logradouro.value = '';
            bairro.value = '';
            localidade.value = '';
            uf.value = '';
            complemento.value = '';
            numero.value = '';
        }
    });

    // Buscar CEP automaticamente
    cepInput.addEventListener('input', function() {
        const cep = cepInput.value.replace(/\D/g, '');
        if (cep.length === 8) {
            cepError.textContent = '';
            buscarCep(cep);
        }
    });

    //Buscando e Verificando o CEP
    function buscarCep(cep) {
        if (cep.length !== 8) {
            cepError.textContent = 'CEP deve conter 8 dígitos';
            return;
        }
        cepError.textContent = '';
        fetch(`https://viacep.com.br/ws/${cep}/json/`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('CEP não encontrado');
                }
                return response.json();
            })
            .then(data => {
                if (data.erro) {
                    throw new Error('CEP não encontrado');
                }
                logradouro.value = data.logradouro;
                bairro.value = data.bairro;
                localidade.value = data.localidade;
                uf.value = data.uf;
                complemento.value = data.complemento || '';
                numero.focus();
            })
            .catch(error => {
                cepError.textContent = error.message;
                console.error('Erro ao buscar CEP:', error);
            });
    }

    // Validação do formulário
    addressForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const numeroValue = numero.value;
        if (!numeroValue) {
            alert('Por favor, preencha o número');
            return;
        }
        alert('Endereço cadastrado com sucesso!');
    });
});