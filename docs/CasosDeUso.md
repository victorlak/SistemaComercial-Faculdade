# Casos de Uso - Sistema de Gerenciamento para Barbearia

Documentação completa dos casos de uso do sistema de gerenciamento para barbearia.

## Índice de Casos de Uso

1. [Validar ID e Senha](#validar-id-e-senha)
2. [Cadastrar Funcionário](#cadastrar-funcionário)
3. [Cadastrar Serviço](#cadastrar-serviço)
4. [Registrar Serviço Realizado](#registrar-serviço-realizado)
5. [Visualizar Relatório Financeiro](#visualizar-relatório-financeiro)
6. [Consultar Ganhos Pessoais](#consultar-ganhos-pessoais)
7. [Desativar Funcionário](#desativar-funcionário)
8. [Ativar Funcionário](#ativar-funcionário)
9. [Desativar Serviço](#desativar-serviço)
10. [Ativar Serviço](#ativar-serviço)
11. [Recuperar Senha](#recuperar-senha)
12. [Gerenciar Banco de Dados](#gerenciar-banco-de-dados)

---

### Validar ID e Senha
**Interação**: 3, última modificação: 03 de maio feita por Igor Xisto Ferreira  
**Ator primário**: Sistema  
**Objetivo no contexto**: Validar as informações do usuário ao tentar logar no sistema.  

**Pré-condições**:
- O usuário deve estar devidamente cadastrado.
- O usuário deve ter acesso à interface de login.

**Quem aciona**: O funcionário/Administrador decide logar no sistema informando seus dados.  

**Cenário**:
1. O funcionário acessa a tela de login.
2. O funcionário insere e-mail e senha.
3. O sistema busca os dados informados no banco de dados.
4. O sistema confere se os dados são válidos.
5. O sistema informa se o login foi bem-sucedido ou não.

**Exceções**:
- As credenciais estão incorretas.

**Prioridade**: Prioridade alta, a ser implementada juntamente com outras funcionalidades básicas.  
**Quando disponível**: Primeiro incremento.  
**Frequência de uso**: Frequência alta.  
**Canal com o autor**: Pela interface do aplicativo mobile.  
**Atores secundários**: Servidor de autenticação.  
**Canais com os atores secundários**: Via internet.  

**Perguntas abertas**:
- O sistema permitirá login com redes sociais ou contas do Google e Apple no futuro?

---

### Cadastrar Funcionário
**Interação**: 1, última modificação: 17 de abril feita por Igor Xisto Ferreira  
**Ator primário**: Administrador  
**Objetivo no contexto**: Cadastrar um novo barbeiro/funcionário no sistema.  

**Pré-condições**:
- O administrador deve estar logado.

**Quem aciona**: O administrador deseja adicionar um funcionário.  

**Cenário**:
1. O administrador acessa a opção "Funcionários".
2. Clica em "Novo Funcionário".
3. Preenche os dados: nome, e-mail, senha (CPF ou senha aleatória enviada por e-mail).
4. Clica em "Cadastrar".
5. O sistema salva os dados e envia um e-mail.

**Exceções**:
- E-mail já cadastrado ou inválido.

**Prioridade**: Prioridade alta, a ser implementada no primeiro incremento.  
**Quando disponível**: Primeiro incremento.  
**Frequência de uso**: Frequência moderada.  
**Canal com o autor**: Pela interface do aplicativo mobile.  
**Atores secundários**: Banco de dados.  
**Canais com os atores secundários**: Via internet.  

**Perguntas abertas**:
- O funcionário poderá alterar sua senha?

---

### Cadastrar Serviço
**Interação**: 1, última modificação: 17 de abril feita por Igor Xisto Ferreira  
**Ator primário**: Administrador  
**Objetivo no contexto**: Cadastrar serviços como cortes, barba, etc., com seus respectivos valores.  

**Pré-condições**:
- O administrador deve estar logado.

**Quem aciona**: O administrador deseja adicionar um novo serviço.  

**Cenário**:
1. Acessa o menu "Serviços".
2. Clica em "Novo Serviço".
3. Preenche nome, valor, descrição, comissão.
4. Clica em "Salvar".
5. O sistema registra o novo serviço.

**Exceções**:
- Serviço com nome duplicado.
- Campos obrigatórios vazios.

**Prioridade**: Prioridade alta, a ser implementada no primeiro incremento.  
**Quando disponível**: Primeiro incremento.  
**Frequência de uso**: Frequência baixa.  
**Canal com o autor**: Pela interface do aplicativo mobile.  
**Atores secundários**: Banco de dados.  
**Canais com os atores secundários**: Via internet.  

**Perguntas abertas**:
- Serviços poderão ser desativados sem exclusão?

---

### Registrar Serviço Realizado
**Interação**: 1, última modificação: 17 de abril feita por Igor Xisto Ferreira  
**Ator primário**: Barbeiro/Funcionário  
**Objetivo no contexto**: Registrar um serviço prestado (ex: corte de cabelo) para cálculo de comissão.  

**Pré-condições**:
- O funcionário deve estar cadastrado.
- O serviço deve estar cadastrado previamente.
- O funcionário deve estar logado.

**Quem aciona**: O funcionário acessa o sistema após realizar um serviço.  

**Cenário**:
1. O funcionário faz login no sistema.
2. Seleciona a opção "Registrar Serviço".
3. O sistema exibe a lista de serviços cadastrados.
4. O funcionário seleciona o serviço realizado.
5. (Opcional) Preenche observações ou forma de pagamento.
6. Clica em "Registrar".
7. O sistema salva os dados e atualiza o histórico.

**Exceções**:
- Serviço inexistente ou não cadastrado.
- Funcionário não logado.

**Prioridade**: Prioridade alta, a ser implementada no primeiro incremento.  
**Quando disponível**: Primeiro incremento.  
**Frequência de uso**: Frequência alta.  
**Canal com o autor**: Pela interface do aplicativo mobile.  
**Atores secundários**: Banco de dados remoto.  
**Canais com os atores secundários**: Via internet.  

**Perguntas abertas**:
- Será permitido editar registros após o envio?

---

### Visualizar Relatório Financeiro
**Interação**: 1, última modificação: 17 de abril feita por Igor Xisto Ferreira  
**Ator primário**: Administrador  
**Objetivo no contexto**: Gerar relatórios financeiros por período, por funcionário ou por serviço.  

**Pré-condições**:
- O administrador deve estar logado.
- Devem existir registros no período selecionado.

**Quem aciona**: O administrador deseja analisar o desempenho financeiro.  

**Cenário**:
1. Acessa o menu "Relatórios".
2. Seleciona tipo e intervalo de tempo.
3. Clica em "Gerar Relatório".
4. Visualiza os dados e pode exportar.

**Exceções**:
- Nenhum dado encontrado.
- Falha ao gerar ou exportar relatório.

**Prioridade**: Prioridade moderada, a ser implementada no segundo incremento.  
**Quando disponível**: Segundo incremento.  
**Frequência de uso**: Frequência moderada.  
**Canal com o autor**: Pela interface do aplicativo mobile.  
**Atores secundários**: Banco de dados.  
**Canais com os atores secundários**: Via internet.  

**Perguntas abertas**:
- Os relatórios poderão ser enviados por e-mail?

---

### Consultar Ganhos Pessoais
**Interação**: 1, última modificação: 17 de abril feita por Igor Xisto Ferreira  
**Ator primário**: Funcionário  
**Objetivo no contexto**: Consultar o total acumulado em comissões e serviços prestados.  

**Pré-condições**:
- O funcionário deve estar logado.
- Devem existir registros de serviços.

**Quem aciona**: O funcionário deseja saber quanto ganhou.  

**Cenário**:
1. Acessa a área "Meus Ganhos".
2. Escolhe o período desejado.
3. O sistema exibe serviços, total e comissão.

**Exceções**:
- Nenhum serviço registrado.

**Prioridade**: Prioridade alta, a ser implementada no primeiro incremento.  
**Quando disponível**: Primeiro incremento.  
**Frequência de uso**: Frequência alta.  
**Canal com o autor**: Pela interface do aplicativo mobile.  
**Atores secundários**: Banco de dados.  
**Canais com os atores secundários**: Via internet.  

**Perguntas abertas**:
- O sistema poderá gerar comprovantes de ganhos?

---

### Desativar Funcionário
**Interação**: 1, última modificação: 3 de maio feita por Igor Xisto Ferreira  
**Ator primário**: Administrador  
**Objetivo no contexto**: Impedir temporariamente o acesso de um funcionário ao sistema.  

**Pré-condições**:
- O administrador deve estar logado.

**Quem aciona**: O administrador deseja desativar um funcionário.  

**Cenário**:
1. Acessa a lista de funcionários.
2. Seleciona o funcionário.
3. Clica em "Desativar".
4. O sistema atualiza o status do funcionário para inativo.

**Exceções**:
- Funcionário já desativado.

**Prioridade**: Alta  
**Quando disponível**: Primeiro incremento  
**Frequência de uso**: Baixa  
**Canal com o autor**: Interface do aplicativo mobile  
**Atores secundários**: Banco de dados  
**Canais com os atores secundários**: Via internet  

**Perguntas abertas**:
- Funcionários desativados podem ser reativados com os mesmos dados?

---

### Ativar Funcionário
**Interação**: 1, última modificação: 3 de maio feita por Igor Xisto Ferreira  
**Ator primário**: Administrador  
**Objetivo no contexto**: Reativar um funcionário previamente desativado.  

**Pré-condições**:
- O administrador deve estar logado.

**Quem aciona**: O administrador deseja ativar um funcionário.  

**Cenário**:
1. Acessa a lista de funcionários inativos.
2. Seleciona o funcionário.
3. Clica em "Ativar".
4. O sistema atualiza o status do funcionário para ativo.

**Exceções**:
- Funcionário já ativo.

**Prioridade**: Alta  
**Quando disponível**: Primeiro incremento  
**Frequência de uso**: Baixa  
**Canal com o autor**: Interface do aplicativo mobile  
**Atores secundários**: Banco de dados  
**Canais com os atores secundários**: Via internet  

**Perguntas abertas**:
- Há um limite de reativações por funcionário?

---

### Desativar Serviço
**Interação**: 1, última modificação: 3 de maio feita por Igor Xisto Ferreira  
**Ator primário**: Administrador  
**Objetivo no contexto**: Retirar um serviço do catálogo sem excluí-lo.  

**Pré-condições**:
- O administrador deve estar logado.

**Quem aciona**: O administrador deseja desativar um serviço.  

**Cenário**:
1. Acessa a lista de serviços.
2. Seleciona o serviço.
3. Clica em "Desativar".
4. O sistema atualiza o status do serviço para inativo.

**Exceções**:
- Serviço já desativado.

**Prioridade**: Alta  
**Quando disponível**: Primeiro incremento  
**Frequência de uso**: Moderada  
**Canal com o autor**: Interface do aplicativo mobile  
**Atores secundários**: Banco de dados  
**Canais com os atores secundários**: Via internet  

**Perguntas abertas**:
- Nenhuma no momento

---

### Ativar Serviço
**Interação**: 1, última modificação: 3 de maio feita por Igor Xisto Ferreira  
**Ator primário**: Administrador  
**Objetivo no contexto**: Reativar um serviço previamente desativado.  

**Pré-condições**:
- O administrador deve estar logado.

**Quem aciona**: O administrador deseja ativar um serviço.  

**Cenário**:
1. Acessa a lista de serviços inativos.
2. Seleciona o serviço.
3. Clica em "Ativar".
4. O sistema atualiza o status do serviço para ativo mantendo o histórico.

**Exceções**:
- Serviço já ativo.

**Prioridade**: Alta  
**Quando disponível**: Primeiro incremento  
**Frequência de uso**: Moderada  
**Canal com o autor**: Interface do aplicativo mobile  
**Atores secundários**: Banco de dados  
**Canais com os atores secundários**: Via internet  

**Perguntas abertas**:
- Nenhuma no momento

---

### Recuperar Senha
**Interação**: 1, última modificação: 3 de maio feita por Igor Xisto Ferreira  
**Ator primário**: Funcionário/Administrador  
**Objetivo no contexto**: Permitir que o funcionário recupere o acesso ao sistema em caso de esquecimento da senha.  

**Pré-condições**:
- O e-mail do funcionário deve estar cadastrado no sistema.
- Deve haver acesso à internet.

**Quem aciona**: O funcionário esqueceu a senha e deseja redefini-la.  

**Cenário**:
1. O funcionário acessa a tela de login.
2. Clica em "Esqueci minha senha".
3. Informa o e-mail cadastrado.
4. O sistema envia um link para redefinição de senha.
5. O funcionário acessa o link e cria uma nova senha.
6. O sistema confirma a alteração.

**Exceções**:
- E-mail não cadastrado.
- Falha no envio do e-mail.

**Prioridade**: Prioridade alta, a ser implementada no primeiro incremento.  
**Quando disponível**: Primeiro incremento.  
**Frequência de uso**: Frequência moderada.  
**Canal com o autor**: Pela interface do aplicativo mobile.  
**Atores secundários**: Sistema de envio de e-mails.  
**Canais com os atores secundários**: Via internet.  

**Perguntas abertas**:
- Será exigido algum tipo de verificação adicional para redefinir a senha?

---

### Gerenciar Banco de Dados
**Interação**: 1, última modificação: 3 de maio feita por Igor Xisto Ferreira  
**Ator primário**: Sistema  
**Objetivo no contexto**: Estabelecer e manter a conexão com o banco de dados para operações como login, cadastro, e consulta de dados.  

**Pré-condições**:
- O sistema deve estar em funcionamento.
- A conexão com a internet deve estar ativa.

**Quem aciona**: Qualquer funcionalidade do sistema que necessite acessar ou alterar dados.  

**Cenário**:
1. O sistema realiza uma operação (ex: login, cadastro, consulta).
2. Verifica se há conexão com o banco de dados.
3. Envia ou solicita os dados necessários.
4. Recebe os dados ou confirma o salvamento.

**Exceções**:
- Falha na conexão com o banco de dados.
- Tempo de resposta excedido.
- Dados inconsistentes ou inválidos.

**Prioridade**: Prioridade alta, necessário para todas as demais funcionalidades.  
**Quando disponível**: Primeiro incremento.  
**Frequência de uso**: Frequência constante.  
**Canal com o autor**: Através da infraestrutura do sistema.  
**Atores secundários**: Banco de dados.  
**Canais com os atores secundários**: Via internet.  

**Perguntas abertas**:
- Será utilizado banco de dados em nuvem ou local?

---
