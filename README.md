Projeto OMDBAPI

Projeto para teste feito por Rodrigo Blefari Gonçalves

**Importante:** 
    O site OMDBAPI foi desenvolvido seguindo o princípio de design Mobile First, o que significa que a interface foi projetada inicialmente para dispositivos móveis e posteriormente adaptada para telas maiores, como tablets e desktops. Isso proporciona uma melhor experiência de usuário em dispositivos móveis, onde a navegação e a interação são priorizadas.

**Documentação do Sistema OMDBAPI**

*Visão Geral*

*O sistema OMDBAPI é uma aplicação web desenvolvida para fornecer informações sobre filmes usando a API pública OMDBAPI. Ele permite aos usuários visualizarem uma lista de filmes, filtrar os filmes em tempo real, mudar o layout da visualização dos filmes e ver detalhes de cada filme, incluindo informações detalhadas fornecidas pela API OMDBAPI.*

*Funcionalidades Principais*

    Tela Home: Exibe uma lista de filmes populados a partir do JSON Service através do MovieService. Oferece duas funcionalidades dinâmicas: filtragem em tempo real dos filmes com base no título e alteração do layout do componente movie-card para uma visualização mais dinâmica.

    Detalhes do Filme: Ao clicar em "ver detalhes", o usuário é redirecionado para a página de detalhes do filme. Esta página faz uma requisição à API pública de teste do OMDBAPI, utilizando o imdbId para obter informações detalhadas sobre o filme. O sistema utiliza uma promise para tratar a resposta da requisição e exibir possíveis erros ao usuário, por meio de um snackbar.

*Fluxo de Funcionamento*

    Tela Home: Ao acessar a aplicação, o usuário é direcionado para a tela home, onde a lista de filmes é exibida.

    Filtragem de Filmes: O usuário pode filtrar os filmes em tempo real digitando caracteres na barra de busca. A lista de filmes é atualizada dinamicamente conforme o usuário digita.

    Mudança de Layout: O usuário pode alterar o layout do componente movie-card para uma visualização mais dinâmica, proporcionando uma experiência personalizada.

    Detalhes do Filme: Ao clicar em um filme, o usuário é redirecionado para a página de detalhes do filme, onde todas as informações disponíveis sobre o filme são exibidas de forma dinâmica e escalável.

*Recursos Utilizados*

    Pipeline: Utilizado para gerar os ratings dos filmes de forma automatizada e padronizada.
    SCSS: Utilização de recursos como @Mixin, @include e variáveis para cores, proporcionando uma estilização mais organizada e reutilizável.
    
**Documentação de Teste do Código**

*Nesta seção, documentaremos os testes relacionados aos componentes e serviços do aplicativo.*

*O AppComponent foi testado?*
    
*Imports*
    Deve importar o HomeComponent: O componente deve importar o HomeComponent para ser utilizado na aplicação.
    Deve importar o RouterOutlet: O componente deve importar o RouterOutlet para gerenciar a navegação entre as páginas.
    Deve importar o RouterModule: O componente deve importar o RouterModule para configurar as rotas da aplicação.

*Verificação de HTML*
    Deve navegar para a página inicial ao clicar no logo: O logo no AppComponent deve ser clicável e ao ser clicado, deve redirecionar para a página inicial.
    Deve renderizar o logo: O AppComponent deve conter o elemento do logo.
    Deve conter o elemento do logo: O AppComponent deve conter o elemento do logo.

*O HomeComponent foi testado?*
    Deve criar o componente corretamente: O HomeComponent deve ser criado corretamente.

*Verificação de HTML*
    Deve conter a entrada de filtro com o ID "filter": O HomeComponent deve conter uma entrada de filtro com o ID "filter".
    Deve conter um botão clicável: O HomeComponent deve conter um botão clicável.

*Formulário de Filtro*
    Deve chamar a função filterResults com as três primeiras letras do título do filme: O formulário de filtro deve chamar a função filterResults com as três primeiras letras do título do filme.
    Deve filtrar os filmes por título: O formulário de filtro deve filtrar os filmes por título.

*Deve o Movie Service ser testado?*
    
*Deve obter getMovieByImdbID e respostas?*
    Deve exibir snackbar e navegar para a raiz se o status for 401: O serviço deve exibir um snackbar e navegar para a raiz se o status da resposta for 401.
    Deve exibir snackbar e navegar para a raiz se a solicitação falhar: O serviço deve exibir um snackbar e navegar para a raiz se a solicitação de busca de filme por ID falhar.
    Deve buscar filme por imdbID usando apiUrlOmdb e apiKey do ambiente: O serviço deve buscar o filme pelo imdbID utilizando a apiUrlOmdb e a apiKey do ambiente.

*Deve obter getMovieList e respostas?*
    Deve buscar a lista de filmes usando apiUrlMovies do ambiente: O serviço deve buscar a lista de filmes utilizando a apiUrlMovies do ambiente.
    Deve retornar um array vazio: O serviço deve retornar um array vazio se a lista de filmes estiver vazia.

*Deve inicializar tudo?*
    Deve ser criado corretamente: O serviço deve ser criado corretamente.
    Deve conter Router: O serviço deve conter o Router.
    Deve conter SnackbarService: O serviço deve conter o SnackbarService.
    Deve conter apiUrlOmdb definido: O serviço deve conter apiUrlOmdb definido no ambiente.
    Deve conter apiUrlMovies definido: O serviço deve conter apiUrlMovies definido no ambiente.
    Deve conter apiKey definido: O serviço deve conter apiKey definido no ambiente.

🛠️ **Pré-requisitos**

Certifique-se de ter o Node.js e o Angular CLI instalados em seu sistema. Você pode instalá-los a partir do site oficial do Node.js (https://nodejs.org/) e do Angular CLI (https://cli.angular.io/).

🚀 **Passos**

*1. Clone este repositório em sua máquina local:*
    git clone https://github.com/seu-usuario/omdbapi.git

*2. Navegue até o diretório do projeto:*
    cd omdbapi

*3. Instale as dependências do projeto:*
    npm install

*4. Instale JsonServer para simular postes pré cadastrados*
    npm install json-server

*5. Pegue uma apiKey para alterar em enviaroment*
    site: http://www.omdbapi.com/apikey.aspx


*6. Altere a variavel de ambiente apiKey*
    src\environments\environment.ts

*7. Inicie o servidor db.json com posts pré cadastrados para simular uma api da base de dados*
    json-server --watch db.json

*4. Inicie o servidor de desenvolvimento:*
    ng serve

*5. Abra seu navegador para ver o projeto em execução.*
    http://localhost:4200/

🛠️ **Testes**
        *1- ferramenta de análise de código estática*
            ng lint
        *2- ferramenta de Teste de Components, services, pipes etc*
            ng test
  
***Tecnologias Utilizadas**

- Angular: Framework para construção de interfaces de usuário.
  - Version: 17.2.0

- Express: Framework para aplicativos da web do Node.js.

  - Version: 4.18.2

- RxJS: Biblioteca para programação reativa.

  - Version: 7.8.0

- Node.js: Ambiente de tempo de execução JavaScript.

  - Version: (Versão não especificada)

- TypeScript: Superset tipado de JavaScript.

  - Version: 5.3.2

- Karma: Test Runner para JavaScript.

  - Version: 6.4.0

- Jasmine: Framework de teste de comportamento para JavaScript.

  - Version: 5.1.0

- ESLint: Ferramenta de linting para JavaScript.
  - Version: 8.56.0

Este projeto utiliza várias outras dependências que podem ser encontradas no arquivo package.json.
