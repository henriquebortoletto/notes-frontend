# RocketNotes - Frontend

## 💻 Sobre o Projeto

RocketNotes é uma aplicação web para gerenciamento de notas e links úteis. Este é o frontend da aplicação, desenvolvido em React com TypeScript, fornecendo uma interface intuitiva para os usuários gerenciarem suas notas, tags e links.

## 🚀 Tecnologias Utilizadas

- [React](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/)
- [Styled Components](https://styled-components.com/)
- [React Router DOM](https://reactrouter.com/)
- [Axios](https://axios-http.com/)

## 🔧 Funcionalidades

- [x] Autenticação de usuários
- [x] Cadastro de usuários
- [x] Gerenciamento de perfil com upload de avatar
- [x] Criar, listar e excluir notas
- [x] Adicionar links às notas
- [x] Adicionar tags às notas
- [x] Pesquisar notas por título ou tags

## 🛠 Instalação e Configuração

### Pré-requisitos

- Node.js instalado
- NPM ou Yarn instalado
- Git instalado
- API Backend em execução

### Clonando o repositório

```bash
git clone https://github.com/yourusername/rocketnotes-frontend.git

cd rocketnotes-frontend
```

### Instalação

1. Instale as dependências do projeto:

```bash
npm install
```

2. Crie um arquivo `.env` baseado no exemplo:

```bash
cp .env.example .env
```

3. Configure as variáveis de ambiente no arquivo `.env`:

```bash
VITE_KEY_APP=
VITE_KEY_TOKEN=
VITE_API_URL=http://localhost:3001
```

### Executando a aplicação

Para iniciar o servidor de desenvolvimento:

```bash
npm run dev
```

A aplicação estará disponível em `http://localhost:5173`.

## 📁 Estrutura do Projeto

```plaintext
src/
  ├── components/   # Componentes reutilizáveis
  ├── hooks/        # Hooks personalizados do React
  ├── pages/        # Páginas da aplicação
  ├── routes/       # Definições de rotas
  ├── services/     # Serviços de API
  ├── styles/       # Estilos globais e temas
  └── types/        # Definições de tipos TypeScript
```

## 🎨 Guia de Estilo

O projeto utiliza Styled Components com um tema personalizado que inclui:

- Paleta de cores
- Configurações de tipografia
- Escalas de espaçamento
- Estilos específicos de componentes

## 🔒 Autenticação

A aplicação utiliza JWT (JSON Web Token) para autenticação, armazenando o token no localStorage e gerenciando as sessões dos usuários através de um contexto personalizado.
