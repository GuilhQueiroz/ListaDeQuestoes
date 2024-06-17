// Não está sendo utilizando no projeto, pois estou tendo problemas com o import/export no Node.js
const users = [];

// Função para adicionar um novo usuário
function addUser(nome, email, senha) {
    users.push({ nome, email, senha });
    return `Usuário ${nome} adicionado com sucesso.`;
}

// Função para remover um usuário pelo email
function removeUser(email) {
    const index = users.findIndex(user => user.email === email);
    if (index !== -1) {
        const removedUser = users.splice(index, 1);
        return `Usuário ${removedUser[0].nome} removido com sucesso.`;
    } else {
        return `Usuário com email ${email} não encontrado.`;
    }
}

// Função para atualizar informações do usuário
function updateUser(email, newNome, newEmail, newSenha) {
    const user = users.find(user => user.email === email);
    if (user) {
        user.nome = newNome || user.nome;
        user.email = newEmail || user.email;
        user.senha = newSenha || user.senha;
        return `Usuário ${user.nome} atualizado com sucesso.`;
    } else {
        return `Usuário com email ${email} não encontrado.`;
    }
}

// Função para listar todos os usuários
function listUsers() {
    return users;
}

// Exportando as funções que devem ser visíveis externamente
export { addUser, removeUser, updateUser, listUsers };