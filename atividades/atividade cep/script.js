document.addEventListener('DOMContentLoaded', function() {
    const cepInput = document.getElementById('cep');
    const searchCepBtn = document.getElementById('searchCep');
    const addressForm = document.getElementById('addressForm');
    const cepError = document.getElementById('cepError');
    
    // Máscara para o CEP
    cepInput.addEventListener('input', function(e) {
        let value = e.target.value.replace(/\D/g, '');
        if (value.length > 5) {
            value = value.substring(0, 5) + '-' + value.substring(5, 8);
        }
        e.target.value = value;
    });
    
    // Buscar CEP ao clicar no botão ou pressionar Enter
    searchCepBtn.addEventListener('click', buscarCep);
    cepInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            e.preventDefault();
            buscarCep();
        }
    });
    
    function buscarCep() {
        const cep = cepInput.value.replace(/\D/g, '');
        
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
                
                // Preenche os campos do formulário
                document.getElementById('logradouro').value = data.logradouro;
                document.getElementById('bairro').value = data.bairro;
                document.getElementById('localidade').value = data.localidade;
                document.getElementById('uf').value = data.uf;
                document.getElementById('complemento').value = data.complemento || '';
                
                // Foca no campo número após o preenchimento
                document.getElementById('numero').focus();
            })
            .catch(error => {
                cepError.textContent = error.message;
                console.error('Erro ao buscar CEP:', error);
            });
    }
    
    // Validação do formulário
    addressForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Validação simples - você pode adicionar mais validações conforme necessário
        const numero = document.getElementById('numero').value;
        if (!numero) {
            alert('Por favor, preencha o número');
            return;
        }
        
        // Aqui você pode adicionar o código para enviar o formulário
        alert('Endereço cadastrado com sucesso!');
        // addressForm.submit(); // Descomente para enviar o formulário
    });
});