# Pacificus & Associados

Pacificus & Associados é um modelo de site desenvolvido para escritórios de advocacia, construído com TypeScript, React.js, Next.js, Firebase e estilizado com Tailwind CSS.

## Funcionalidades

### Rotas

O site possui as seguintes rotas:

- **Home**: Página inicial com uma visão geral do escritório e seus serviços.
- **Áreas de Atuação**: Informações detalhadas sobre as áreas de atuação do escritório, destacando seus serviços e expertise.
- **Time**: Perfil dos advogados associados, incluindo suas especialidades, formação e atribuições.
- **Contatos**: Formulário de contato e informações de contato do escritório.
- **Ética e Código de Conduta**: Diretrizes éticas e código de conduta seguidos pelo escritório.
- **Página 404**: Página de erro do escritório com links para todas as rotas.

### Responsividade

O site é totalmente responsivo para todos os tipos de tela, seguindo o método mobile first. Ele se adapta de forma elegante a dispositivos móveis, tablets e desktops.

### Armazenamento Seguro de Informações

Agora, as informações de contato enviadas pelo cliente através do formulário são cuidadosamente armazenadas em um banco de dados no Firebase Firestore. Isso garante a segurança e a integridade dos dados, permitindo seu acesso para uso futuro.

### Organização de Componentes

Os componentes estão organizados por pastas, facilitando a manutenção e expansão do projeto:

- **Home**: Componentes específicos da página inicial.
- **Navigation**: Componentes de navegação, incluindo cabeçalho e rodapé.
- **Team**: Componentes relacionados ao perfil dos advogados associados.
- **Template**: Componentes gerais utilizados em várias páginas do site.

### Ícones SVG

Os ícones utilizados são SVGs retirados do site [Hero Icons](https://heroicons.com/) e exportados como funções nos componentes. Isso permite uma fácil customização e escalabilidade dos ícones.

### Dados Gerados

As informações sobre as áreas de atuação do escritório são baseadas em artigos e/ou geradas por inteligência artificial, garantindo dados relevantes e atualizados.

Os nomes e informações dos advogados associados também foram gerados com inteligência artificial, mas são fictícios para proteger a privacidade.

### Otimização de Imagens

Todas as imagens do site estão otimizadas para melhorar o carregamento da página, garantindo uma experiência de usuário mais rápida e suave.

## Licença

Este projeto está licenciado sob a [Licença MIT](https://opensource.org/licenses/MIT).
