const API_BASE_URL = 'http://localhost:3000/api/pessoa';

async function createPessoa(event) {
    event.preventDefault(); 

    const nome = document.getElementById('nome').value;
    const cpf = document.getElementById('cpf').value;
    const telefone = document.getElementById('telefone').value;

    try {
        const response = await fetch(API_BASE_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ nome, cpf, telefone })
        });

        if (!response.ok) {
            throw new Error('Erro ao enviar pessoa');
        }

        const data = await response.json();
        document.getElementById('message').textContent = 'Pessoa criada com sucesso!';
        console.log('Pessoa criada:', data);
        
        document.getElementById('formPessoa').reset();
    } catch (error) {
        document.getElementById('message').textContent = 'Erro ao criar pessoa: ' + error.message;
        console.error('Erro:', error);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('formPessoa').addEventListener('submit', createPessoa);
});