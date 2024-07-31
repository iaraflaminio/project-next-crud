
# CRUD Application with Next.js and Firebase

## English Version

[Read the English version](#english-version)

## Versão em Português

[Leia a versão em português](#versão-em-português)

---

# <a id="english-version">English Version</a>
This is a CRUD application built with Next.js, using Firebase as the backend. The project follows the lessons from the [Cod3r](https://www.cod3r.com.br/) Web Development course.

### Features
- Add, update, delete, and list clients.
- Integrated with Firebase for database operations.
- Responsive design with Tailwind CSS

### Technologies Used
- **Next.js**
- **Firebase**
- **TypeScript**
- **Tailwind CSS**

### Prerequisites
- Node.js
- npm or yarn
- Firebase (account and project configuration)

### Setup and Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/iaraflaminio/project-next-crud.git

2. Navigate to the project directory:
    ```bash
    cd project-next-crud

3. Install the dependencies:
    ```bash
    npm install
    # or
    yarn install

4. Configure Firebase
- Rename the .env.local.example file to .env.local
- Add your Firebase configuration to the .env.local file:
    ```bash
    NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key
    NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_auth_domain
    NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id

5. Run the development server:
    ```bash
    npm run dev
    #or
    yarn dev

6. Or build the project:
    ```bash
    npm run build

7. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## References
- [Cod3r Web Development Course](https://www.cod3r.com.br/courses/web-moderno)
- [Next.js Documentation](https://nextjs.org/docs)
- [Firebase Documentation](https://firebase.google.com/docs)
- [Tailwind Documentation](https://v2.tailwindcss.com/docs)

---
# Screenshots
### Adding a New Client / Adicionando um Novo Cliente
<img src="https://github.com/user-attachments/assets/239d59a1-4a39-4b53-8bcf-382acd67b855" alt="New Client" width="500"/>

### Deleting a Client / Deletando um Cliente
<img src="https://github.com/user-attachments/assets/7d74d620-6c22-4349-a523-68a686e68629" alt="Delete" width="500"/>

### Editing a Client / Editando um Cliente
<img src="https://github.com/user-attachments/assets/90a69a5a-648b-48a4-a3bb-eededec582d4" alt="Edit" width="500"/>

---

# <a id="versao-em-portugues">Versão em Português</a>
Esta é uma aplicação CRUD construída com Next.js, usando o Firebase como backend. O projeto segue as lições do curso de Desenvolvimento Web da [Cod3r](https://www.cod3r.com.br/).

### Funcionalidades
- Adicionar, atualizar, deletar e listar clientes.
- Integrado com o Firebase para operações de banco de dados.
- Design responsivo com Tailwind CSS.

### Tecnologias Utilizadas
- **Next.js**
- **Firebase**
- **TypeScript**
- **Tailwind CSS**

### Pré-requisitos
- Node.js
- npm ou yarn
- Firebase (conta e configuração do projeto)

### Configuração e Instalação
1. Clone o repositório:
   ```bash
   git clone https://github.com/iaraflaminio/project-next-crud.git

2. Navegue até o diretório do projeto:
    ```bash
    cd project-next-crud

3. Instale as dependências:
    ```bash
    npm install
    # ou
    yarn install

4. Configure o Firebase
- Renomeie o arquivo .env.local.example para .env.local
- Adicione sua configuração do Firebase ao arquivo .env.local:
    ```bash
    NEXT_PUBLIC_FIREBASE_API_KEY=sua_api_key
    NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=seu_auth_domain
    NEXT_PUBLIC_FIREBASE_PROJECT_ID=seu_project_id

5. Execute o servidor de desenvolvimento:
    ```bash
    npm run dev
    # ou
    yarn dev

6. Ou construa o projeto:
    ```bash
    npm run build

7. Abra [http://localhost:3000](http://localhost:3000) com seu navegador para ver o resultado.

## Referências
- [Curso de Desenvolvimento Web da Cod3r](https://www.cod3r.com.br/courses/web-moderno)
- [Documentação do Next.js](https://nextjs.org/docs)
- [Documentação do Firebase](https://firebase.google.com/docs)
- [Documentação do Tailwind](https://v2.tailwindcss.com/docs)
