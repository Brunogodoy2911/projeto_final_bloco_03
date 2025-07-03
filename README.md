<div align="center">

#  PharmaShop - Frontend

![Logo do Projeto](https://ik.imagekit.io/brunogodoy/imagens_portfolio/tecnologias_img/react.png?updatedAt=1750703805521)

</div>

## 📖 Sobre o Projeto

**PharmaShop** é o frontend de uma aplicação de e-commerce para uma farmácia, desenvolvido como o Desafio de Performance Goal do Bloco 03 do bootcamp de Desenvolvimento Full Stack Java da **[Generation Brasil](https://brazil.generation.org/)**.

A aplicação foi construída utilizando as mais modernas ferramentas do ecossistema React, como Vite e TypeScript, e consome uma API REST para gerenciar produtos e categorias de forma dinâmica e eficiente. O projeto implementa funcionalidades de CRUD completas, garantindo uma gestão total sobre os dados da farmácia.

---

## 🌐 Deploy

Você pode testar a aplicação ao vivo através do seguinte link:

-   **Link do Deploy:** [https://projeto-final-bloco-03-eta.vercel.app](https://projeto-final-bloco-03-eta.vercel.app)

---

## ✨ Funcionalidades

-   [x] **Home Page:** Apresentação visual da farmácia e seus diferenciais.
-   [x] **Listagem de Produtos:** Visualização de todos os produtos disponíveis em formato de cards.
-   [x] **CRUD de Produtos:**
    -   Criação de novos produtos através de um formulário dedicado.
    -   Edição de produtos existentes com preenchimento automático dos dados.
    -   Exclusão de produtos com confirmação.
-   [x] **CRUD de Categorias:**
    -   Criação, edição e exclusão de categorias.
    -   Listagem de todas as categorias para fácil gerenciamento.
-   [x] **Formulários Reutilizáveis:** Componentes de formulário modulares para criação e edição, tanto de produtos quanto de categorias.
-   [x] **Validação de Dados:** Uso da biblioteca Zod para garantir a integridade dos dados enviados pelos formulários.
-   [x] **Roteamento:** Navegação fluida entre as páginas utilizando React Router DOM.
-   [x] **Responsividade:** Interface adaptável para diferentes tamanhos de tela, construída com Tailwind CSS.

---

## 🚀 Tecnologias Utilizadas

Este projeto foi construído com as seguintes tecnologias:

-   **[React](https://react.dev/)**: Biblioteca para a construção da interface de usuário.
-   **[Vite](https://vitejs.dev/)**: Ferramenta de build de última geração que oferece um desenvolvimento extremamente rápido.
-   **[TypeScript](https://www.typescriptlang.org/)**: Superset do JavaScript que adiciona tipagem estática, aumentando a robustez do código.
-   **[Tailwind CSS](https://tailwindcss.com/)**: Framework CSS utility-first para uma estilização rápida e consistente.
-   **[React Router DOM](https://reactrouter.com/)**: Para gerenciamento de rotas declarativas.
-   **[Axios](https://axios-http.com/)**: Cliente HTTP baseado em Promises para consumir a API.
-   **[Zod](https://zod.dev/)**: Biblioteca para validação de schemas e dados com foco em TypeScript.
-   **[Lucide React](https://lucide.dev/)**: Biblioteca de ícones leve e customizável.

---

## ⚙️ Como Executar o Projeto

Para rodar este projeto localmente, siga os passos abaixo:

1.  **Clone o repositório:**
    ```bash
    git clone [https://github.com/brunogodoy2911/projeto_final_bloco_03.git](https://github.com/brunogodoy2911/projeto_final_bloco_03.git)
    ```

2.  **Navegue até a pasta do projeto:**
    ```bash
    cd projeto_final_bloco_03
    ```

3.  **Instale as dependências:**
    ```bash
    npm install
    ```

4.  **Configure as Variáveis de Ambiente:**
    -   Crie um arquivo chamado `.env` na raiz do projeto.
    -   Adicione a URL da sua API backend. Lembre-se que a variável precisa começar com `VITE_`.

    ```env
    # .env
    VITE_API_URL=[https://sua-api-aqui.onrender.com](https://sua-api-aqui.onrender.com)
    ```

5.  **Execute o projeto:**
    ```bash
    npm run dev
    ```

6.  Abra `http://localhost:5173` (ou a porta indicada no seu terminal) no seu navegador para ver a aplicação.

---

## 🔗 API Backend

Este projeto frontend consome uma API REST construída em Java com Spring Boot, que é responsável por toda a lógica de negócio e persistência de dados.

-   **Repositório do Backend:** `[Link para o repositório do seu backend aqui]`

---

## 👨‍💻 Autor

<div align="center">
    Desenvolvido por <strong>Bruno Godoy</strong> como parte do bootcamp da Generation Brasil.
    <br />
    <a href="https://www.linkedin.com/in/brunogodoydev/">LinkedIn</a> | 
    <a href="https://github.com/brunogodoy2911">GitHub</a>
</div>
