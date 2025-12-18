# 🧪 Roteiro de Testes Manuais (QA)

Este documento descreve os cenários de teste manuais para validar as funcionalidades principais do **Gerenciador de Eventos**. 
Como o projeto utiliza dados em memória (mock), estes testes garantem que a lógica de negócio, as validações e o fluxo do usuário estão funcionando conforme esperado.

---

## 🔐 1. Autenticação e Segurança

**Objetivo:** Garantir que apenas usuários autorizados acessem as funcionalidades administrativas.

| Cenário | Ação | Resultado Esperado | Status |
| :--- | :--- | :--- | :--- |
| **Login com Sucesso** | Acessar `/login`, inserir um e-mail válido e a senha `123456`. | Redirecionamento para a Home e exibição do nome do usuário no Header. | ✅ |
| **Senha Incorreta** | Tentar logar com a senha `000000` ou qualquer outra diferente de `123456`. | Exibição de mensagem de erro ("Senha incorreta") e permanência na tela de login. | ✅ |
| **Campos Vazios** | Tentar clicar em "Entrar" sem preencher e-mail ou senha. | Exibição de alerta pedindo o preenchimento dos campos. | ✅ |
| **Logout** | Clicar no botão "Sair" no Header. | O usuário deve ser deslogado e redirecionado para a tela de Login. O Header deve voltar a exibir o botão "Fazer Login". | ✅ |
| **Proteção de Rota** | Tentar acessar `/events/new` via URL sem estar logado. | Redirecionamento automático para `/login`. | ✅ |

---

## 📅 2. Ciclo de Vida do Evento (CRUD)

**Objetivo:** Validar a criação, leitura, atualização (futuro) e exclusão de eventos.

### 2.1 Listagem e Detalhes (Read)
- [ ] **Listagem Inicial:** Ao abrir a Home, os eventos iniciais (mockados) devem aparecer nos Cards.
- [ ] **Visualização de Detalhes:** Clicar em "Ver Detalhes" de um card deve abrir a página `/events/[id]` com as informações corretas (Título, Data, Local, Descrição).

### 2.2 Criação (Create)
1.  Logue no sistema.
2.  Clique em **"+ Criar Evento"**.
3.  Preencha o formulário com dados de teste (ex: "Evento Teste QA").
4.  Clique em Salvar.
    * **Resultado:** Deve redirecionar para a Home.
    * **Validação:** O novo evento ("Evento Teste QA") DEVE aparecer na listagem (verifique a última página se houver paginação).

### 2.3 Exclusão (Delete)
1.  Localize o evento criado no passo anterior ("Evento Teste QA").
2.  **Teste via Card:** Clique no botão "Excluir" (vermelho) direto no card.
3.  **Teste via Detalhes:** Abra os detalhes de outro evento e clique em "Excluir Evento" no final da página.
4.  Confirme o alerta do navegador.
    * **Resultado:** O evento deve desaparecer da lista imediatamente.
    * **Validação:** Ao tentar acessar a URL do evento deletado (ex: `/events/99`), deve retornar página 404 (Não Encontrado).

---

## 🔎 3. Busca e Navegação

**Objetivo:** Validar a filtragem e a paginação dos dados.

| Funcionalidade | Teste | Resultado Esperado |
| :--- | :--- | :--- |
| **Barra de Busca** | Digitar "React" ou "Workshop" no campo de busca. | A lista deve filtrar em tempo real e mostrar apenas eventos correspondentes. |
| **Busca Vazia** | Digitar um termo inexistente (ex: "xyz123"). | Deve exibir a mensagem "Nenhum evento encontrado". |
| **Paginação (Próximo)** | Se houver mais de 6 eventos, clicar em "Próximo". | Deve carregar a página 2 com novos eventos. |
| **Paginação (Anterior)** | Estando na página 2, clicar em "Anterior". | Deve voltar para a página 1. |

---

## ⚠️ Observações Importantes (Limitações do Mock)

* **Persistência Volátil:** Como os dados são armazenados em memória (array JavaScript), **qualquer reinicialização do servidor (restart) ou atualização de página (F5 em dev mode) fará os dados criados desaparecerem**, resetando para o estado inicial do arquivo `src/data/events.ts`.
* Isto é um comportamento esperado para este ambiente de demonstração.

---

> Documento gerado para padronização de testes manuais do Desafio Técnico.