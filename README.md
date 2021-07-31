# PROJETO API COOK MASTER 👨‍🍳

- CRUD de uma API REST de Receitas, utilizando estrutura MSC (model, service e controller)

- Possível fazer o cadastro e login do usuário, apenas esse usúario poderá acessar, modificar e deletar as receitas que cadastrou.

- Desenvolvido para criar um token de autenticação, autenticar rotas do Express com o Node, usando o JWT. Dessa forma, é possível fazer o upload, salvar e consultar arquivos no servidor através de uma API REST.
  <br></br>

# ROTAS E ENDPOINTS

<p align="center">

### EXIBIR TODOS OS USUÁRIOS

  <img src="./gifs/GET-ALL-USERS.gif" />

**`VERBO: GET | ROTA: http://localhost:3000/users`**
<br></br>

---

### EXIBIR USUÁRIO PELO ID

  <img src="./gifs/GET-USER-BY-ID.gif" />

**`VERBO: GET | ROTA: http://localhost:3000/users/:idUser`**
<br></br>

---

### EXIBIR TODAS RECEITAS

  <img src="./gifs/GET-ALL-RECIPES.gif" />

**`VERBO: GET | ROTA: http://localhost:3000/recipes`**
<br></br>

---

### EXIBIR IMAGEM DA RECEITA

  <img src="./gifs/GET-READ-RECIPE-IMAGE.gif" />

**`VERBO: GET | ROTA: http://localhost:3000/images/:idImage`**
<br></br>

---

### CRIAR UM USUÁRIO PARA CLIENTE E ADMIN

  <img src="./gifs/POST-CREATE-USER.gif" />

**`VERBO: POST | ROTA: http://localhost:3000/user`**
<br></br>

**`VERBO: POST | ROTA: http://localhost:3000/users/admin`**
<br></br>

---

### CRIAR UMA RECEITA

  <img src="./gifs/POST-CREATE-RECIPE.gif" />

**`VERBO: POST | ROTA: http://localhost:3000/recipes`**
<br></br>

---

### CRIAR TOKEN DE AUTENTICAÇÃO

  <img src="./gifs/POST-LOGIN-TOKEN.gif" />

**`VERBO: POST | ROTA: http://localhost:3000/login`**
<br></br>

---

### ATUALIZAR UMA RECEITA PELO ID

  <img src="./gifs/PUT-UPDATE-RECIPE.gif" />

**`VERBO: PUT | ROTA: http://localhost:3000/recipes/:idRecipe`**
<br></br>

---

### ATUALIZAR IMAGEM DE UMA RECEITA

  <img src="./gifs/PUT-UPDATE-RECIPE-IMAGE.gif" />

**`VERBO: PUT | ROTA: http://localhost:3000/recipes/:idRecipe/image`**
<br></br>

---

### DELETAR UMA RECEITA

  <img src="./gifs/DELETE-RECIPE.gif" />

**`VERBO: DELETE | ROTA: http://localhost:3000/recipes/:idRecipe`**
<br></br>

</p>

---

# TECNOLOGIAS UTILIZADAS 💻

- **NODE**
- **NODEMON**
- **EXPRESS**
- **MONGODB**
- **JWT**
- **MULTER**
  <br></br>

---

# INSTRUÇÕES IMPORTANTES 📝

## COMO BAIXAR O PROJETO:

1. Clone o repositório:
   - **`git clone git@github.com:ANDREHORMAN1994/PROJECT-28-NODE-CookMaster.git`**
2. Entre na pasta do repositório que você acabou de clonar:
   - **`cd PROJECT-28-NODE-CookMaster`**
     <br></br>

## COMO RODAR O PROJETO:

1. Necessário ter o **`Node`**, **`NPM`** instalados e o servidor do **`MongoDB`** ativo:
   - Abra o terminal na raiz do Projeto
   - Rode o comando **`npm install`** para instalar as dependências
   - Rode o servidor com o comando **`npm run debug`**
   - Recomendado ter o **`Insomnia`** ou **`Postman`** para testar todas requisições
     <br></br>

---

# VQV 🚀
