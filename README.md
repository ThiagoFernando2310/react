Projeto desenvolvido como parte de uma tarefa. O objetivo é criar uma aplicação em React com Vite, que consuma a API do GitHub, exiba dados de usuários e repositórios, e implemente navegação entre páginas utilizando o React Router DOM.

---

## 🧰 Tecnologias utilizadas

| Tecnologia         | 
|--------------------|
| *React*          | 
| *Vite*           |
| *TypeScript*     | 
| *Tailwind CSS*   | 
| *ESLint*         |
| *TanStack Query* |
| *React-Router-DOM* |
| *Jotai*          |

---

## :hammer: Funcionalidades do Projeto
### 🔹 Página 1 - *Dados* (/)
- Tela inicial que pede o login do usuário.
- Contém botão para acessar a tela de *inicio*.
- 
### 🔹 Página 2 - *Início* (/inicio)
- Tela de entrada que dá boas-vindas ao usuário.
- Contém botão para acessar a tela de *Requisições*.

### 🔹 Página 3 - *Requisições* (/requisicoes)
- Mostra os dados do usuário do GitHub digitado na tela anterior.
- Dados exibidos:
  - Foto de perfil
  - Nome
  - Login
  - Bio
  - Email
  - Total de repositórios públicos
  - Link para o perfil completo
- Mostra os *5 repositórios públicos* do usuário.
  - Para cada repositório:
    - Nome (com link clicável)
    - Descrição
    - Data de criação
    - Última atualização

### 🔹 Página 4 - *Playground* (/playground/:codigo)
- Mostra um texto personalizado com base no código digitado na URL.
- Exemplo:
  - Acessando /playground/123 → Exibe: "Código na URL: 123"

---

## 💡 Observações importantes

- A busca do usuário do GitHub é feita pelo *login* (ex: octocat, thiagods01, etc).
- Caso o nome informado não exista, uma mensagem de erro será exibida.
- A chamada à API do GitHub é feita usando o useQuery do *TanStack Query* dentro de um hook customizado.
- O nome de usuário é mantido em um estado global com *Jotai* para ser acessado entre as páginas.
