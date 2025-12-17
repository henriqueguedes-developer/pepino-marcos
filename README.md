📅 Gerenciador de Eventos (Next.js 15+)

Sistema de gerenciamento de eventos desenvolvido como desafio técnico. O projeto permite visualizar, buscar e cadastrar eventos, utilizando uma arquitetura moderna com **Next.js 15 (App Router)** e **Server Components**.

## 🚀 Tecnologias

- **Framework:** Next.js 15.0+ (App Router)
- **Linguagem:** TypeScript
- **Estilização:** Tailwind CSS
- **Estado Global:** React Context API (Auth Mock)
- **API:** Next.js API Routes (Backend Mockado)
- **Validação:** HTML5 nativo + FormData

## ⚙️ Funcionalidades

- [x] **Listagem de Eventos:** Renderização no servidor (SSR) para melhor SEO e performance.
- [x] **Busca:** Filtragem por nome ou categoria via URL Search Params.
- [x] **Detalhes:** Rotas dinâmicas (`/events/[id]`) com dados atualizados.
- [x] **Cadastro:** Formulário integrado com API Mock (POST).
- [x] **Autenticação Simulada:** Login/Logout via Context API.
- [x] **Design Responsivo:** Layout fluido para Mobile e Desktop.

## 📦 Como rodar o projeto

1. **Clone o repositório:**
   ```bash
   git clone [https://github.com/SEU-USUARIO/event-manager-next.git](https://github.com/SEU-USUARIO/event-manager-next.git)
   cd event-manager-next
Instale as dependências:

Bash

npm install
Rode o servidor de desenvolvimento:

Bash

npm run dev
Acesse: abra http://localhost:3000 no seu navegador.

📂 Estrutura do Projeto
src/
├── app/              # Rotas e Páginas (App Router)
│   ├── api/          # Rotas de API (Backend Mock)
│   ├── events/       # Rotas de Eventos (Detalhes e Novo)
│   └── page.tsx      # Página Inicial
├── components/       # Componentes reutilizáveis (Header, Cards, Inputs)
├── contexts/         # Gerenciamento de estado (Auth)
├── data/             # Persistência de dados em memória
├── services/         # Camada de integração com API (Fetch)
├── types/            # Definições de Tipos TypeScript
└── styles/           # Estilos globais
📝 Notas do Desenvolvedor
Persistência de Dados: Como este é um desafio técnico sem banco de dados externo, a persistência é feita em memória. Se o servidor reiniciar, os dados voltam ao estado inicial.

Next.js 15: O projeto utiliza estritamente as novas convenções do Next 15, como await params em rotas dinâmicas e cache: 'no-store' para dados em tempo real.

Feito com 💙 por [Seu Nome]


---

### 🚀 Tarefa Bônus: DOC-01 – Arquivo SQL de Referência

**Prioridade:** 🟧 P1
**Objetivo:** Mostrar que você sabe SQL, mesmo não usando banco de dados no projeto.

Crie a pasta `database` na raiz e dentro dela o arquivo `events.sql`.

```sql
-- Arquivo de referência para futura migração para PostgreSQL

CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) UNIQUE NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE events (
  id SERIAL PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  location VARCHAR(255) NOT NULL,
  date DATE NOT NULL,
  category VARCHAR(100) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Exemplo de Insert
INSERT INTO events (title, location, date, category) 
VALUES ('Workshop Next.js', 'Online', '2025-10-10', 'Educação');