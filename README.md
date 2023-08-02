# Trabalho da semana 04 - Gitlab Scrapping

No trabalho dessa semana, vamos produzir módulos capaz de navegar pelos seus projetos no gitlab da raro academy e coletar as informações dos commits dos projetos que você possui acesso garantido.

## Instalação

Todas as bibliotecas necessárias para esta prática já estão adicionadas ao projeto. Desta forma, para iniciar o projeto, basta executar o comando abaixo, estando na pasta raiz deste repositório:

```sh
npm install
```

## comandos

Este projeto nasce com alguns comandos uteis para o desenvolvedor. Abaixo, uma breve descrição deles:

- `build`: comando responsável por transformar o código typescript em javascript, compreensível para o interpretador de node. A princípio, este comando será necessário apenas para o momento da publicação de nosso pacote.
- `start`: executa o processo iniciado no arquivo `src/index.ts`. Este comando é útil para testar se seu código está funcionando corretamente.
- `start:dev`: o mesmo processo de `start`. Este comando, porém, fica escutando todas as alterações que você fizer nos arquivos. Toda alteração percebida deverá rodar novamente o processo. Este comando é útil para o momento de desenvolvimento, pois você não precisará ficar executando o comando `start` a cada alteração.
- `test`: comando utilizado para rodar os testes uma vez apenas. Util também para o momento de publicação deste pacote.
- `test:watch`: comando utilizado para rodar os testes, de forma que a cada vez que seu código for alterado, ele será executado novamente, avaliando assim, a cada mudança, se sua solução está correta.
- `lint`: comando utilizado para avaliar se seu código está seguindo as boas práticas de desenvolvimento. Sugiro que você execute este comando sempre, antes de entregar sua solução. Ele vai garantir que você está fazendo um bom trabalho em qualidade do código entregue.
- `format`: este comando te ajudará garantir que as regras de formatação de código estão sendo seguidas. Rode ele para que todo seu código seja varrido e corrigido automaticamente.

Para executar qualquer um destes comandos, basta você executar, no terminal, o comando `npm run <nome-do-comando>`. Para executar o comando de build, por exemplo, você precisa executar um `npm run build`

## Estrutura do repositório

Este repositório possui dois diretórios principais:

- `src`: pasta onde todas as funções deverão estar implementadas. Você tem liberdade total de escrever quantos módulos (arquivos e pastas de node) que você julgar necessário.
- `test`: pasta onde se localizam os testes de unidade das funções. Falaremos disso no futuro...
- `src/index.ts`: arquivo de ponto de partida do seu projeto. Tudo que você fizer, deverá partir deste arquivo.

## Roteiro proposto

Você deverá utilizar a [API REST](https://docs.gitlab.com/ee/api/rest/) do gitlab, para acessar as informações relacionadas aos seus projetos. Para completar este trabalho, você deverá listar:

- todos os repositórios que você tem acesso
- em cada um dos repositórios, listar as branches 50 primeiras.
- para cada branch, você precisa apresentar os commits
- os commits devem apresentar id, mensagem, autor e data do commit.

## Requisitos técnicos

- você deverá fazer as requisições para a API do gitlab, utilizando um token gerado especificamente para estas consultas
- você deverá utilizar a biblioteca [axios](https://axios-http.com/docs/intro) para as chamadas http para a API
- Você deve utilizar as técnicas de concorrência de promises em ao menos um dos níveis das buscas
- você deve garantir que os commits apresentados para as branches estejam ordenados do mais recente para o mais antigo.
- O relatório deverá ser apresentado em uma estrutura JSON. Você pode decidir se prefere exibir em console (console.log) ou escrever em um arquivo de texto.
- Abaixo, um exemplo de parte do relatório que espera-se que seja apresentado:

```json
[
  // esta lista de projetos deve se repetir para todos os projetos existentes
  {
    "projeto": "turmas-react / react-turma2 / react2-alunos / materiais",
    "id": 393,
    "branches": [
      // este bloco de branches deve se repetir para todas as branches existentes
      {
        "nome": "main",
        "commits": [
          // este bloco de commits deve se repetir para todos os commits existentes
          {
            "id": "99dd0f75aec04c5089c176196fbdd0beaf8b72bd",
            "mensagem": "feat: adiciona comentários complementares\n",
            "autor": "Paulo Fernandes",
            "data": "2023-08-01T21:54:05.000-03:00"
          },
          {
            "id": "67eb1e610b0dc08f73ed56e5192d6b64f39d48f7",
            "mensagem": "feat: adiciona exemplo de leitura de arquivos com callbacks\n",
            "autor": "Paulo Fernandes",
            "data": "2023-08-01T21:23:17.000-03:00"
          }
        ]
      }
    ]
  }
]
```

## Dicas

- Atente-se ao fato de que a API do gitlab é [paginada](https://docs.gitlab.com/ee/api/rest/#pagination). Se um dos repositórios tiver mais que vinte commits, por exemplo, você precisará interagir com esta paginação.
- a consulta de commits permite um filtro de `ref_name`, para listar commits de uma branch específica. Este filtro será muito util para seu projeto
- como gerar um token para utilização na [API](https://docs.gitlab.com/ee/user/profile/personal_access_tokens.html)
- apis úteis:
  - [lista de projetos](https://docs.gitlab.com/ee/api/projects.html): https://git.raroacademy.com.br/api/v4/projects
  - [lista de branches](https://docs.gitlab.com/ee/api/branches.html): https://git.raroacademy.com.br/api/v4/projects/483/repository/branches
  - [lista de commits](https://docs.gitlab.com/ee/api/commits.html): https://git.raroacademy.com.br/api/v4/projects/483/repository/commits

## Sobre a entrega

- Você deverá fazer um fork deste repositório.
- Seu projeto deve ser apresentado na branch `main` do fork deste repositório.
- O avaliador vai considerar que seu projeto se inicia na pasta `src/index.ts`. Dessa forma, garanta que este seja o ponto de partida do seu projeto.
