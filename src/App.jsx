import React, { useState, useEffect, useMemo } from 'react';
import { BookOpen, Code, Terminal, Server, Shield, Layers, Coffee, CheckCircle, ChevronRight, Menu, X, ArrowLeft, Star, Monitor, HelpCircle, CheckSquare, Play, XCircle, Zap, Lightbulb, Cloud, Box, Activity, Lock, GitBranch, Cpu, ExternalLink, Plus, Trash2, Download, Upload, Trophy, Medal } from 'lucide-react';

// --- ÍCONES DE RANKING (SVGs) ---
const RankNovato = ({ className }) => (<svg viewBox="0 0 100 100" className={className} fill="none"><defs><linearGradient id="wood" x1="0" y1="0" x2="100" y2="100"><stop offset="0%" stopColor="#DEB887" /><stop offset="100%" stopColor="#8B4513" /></linearGradient></defs><path d="M50 5 L90 20 V50 C90 75 50 95 50 95 C50 95 10 75 10 50 V20 L50 5Z" fill="url(#wood)" stroke="#5D4037" strokeWidth="4"/><circle cx="50" cy="45" r="10" fill="#5D4037" fillOpacity="0.2"/></svg>);
const RankAprendiz = ({ className }) => (<svg viewBox="0 0 100 100" className={className} fill="none"><defs><linearGradient id="iron" x1="0" y1="0" x2="100" y2="100"><stop offset="0%" stopColor="#E0E0E0" /><stop offset="100%" stopColor="#757575" /></linearGradient></defs><circle cx="50" cy="50" r="35" fill="url(#iron)" stroke="#616161" strokeWidth="3"/><circle cx="50" cy="50" r="28" stroke="#616161" strokeWidth="1" strokeDasharray="3 3"/></svg>);
const RankIniciado = ({ className }) => (<svg viewBox="0 0 100 100" className={className} fill="none"><defs><linearGradient id="bronze" x1="0" y1="0" x2="100" y2="100"><stop offset="0%" stopColor="#CD7F32" /><stop offset="50%" stopColor="#B87333" /><stop offset="100%" stopColor="#8B4500" /></linearGradient></defs><path d="M50 10 L63 38 L93 42 L71 63 L77 93 L50 78 L23 93 L29 63 L7 42 L37 38 Z" fill="url(#bronze)" stroke="#8B4500" strokeWidth="2"/></svg>);
const RankCoder = ({ className }) => (<svg viewBox="0 0 100 100" className={className} fill="none"><defs><linearGradient id="tech" x1="0" y1="0" x2="100" y2="100"><stop offset="0%" stopColor="#4ADE80" /><stop offset="50%" stopColor="#22C55E" /><stop offset="100%" stopColor="#14532D" /></linearGradient></defs><path d="M25 25 H75 L70 55 C70 70 50 75 50 75 C50 75 30 70 30 55 L25 25Z" fill="url(#tech)" stroke="#14532D" strokeWidth="2"/><rect x="48" y="45" width="4" height="10" fill="#DCFCE7" /></svg>);
const RankBuilder = ({ className }) => (<svg viewBox="0 0 100 100" className={className} fill="none"><defs><linearGradient id="gold" x1="0" y1="0" x2="100" y2="100"><stop offset="0%" stopColor="#FCD34D" /><stop offset="50%" stopColor="#F59E0B" /><stop offset="100%" stopColor="#B45309" /></linearGradient></defs><path d="M20 20 H80 V40 C80 60 65 70 50 70 C35 70 20 60 20 40 V20Z" fill="url(#gold)" stroke="#B45309" strokeWidth="2"/><rect x="30" y="85" width="40" height="10" rx="2" fill="#B45309" /></svg>);
const RankStacked = ({ className }) => (<svg viewBox="0 0 100 100" className={className} fill="none"><defs><linearGradient id="diamond" x1="0" y1="0" x2="100" y2="100"><stop offset="0%" stopColor="#E879F9" /><stop offset="50%" stopColor="#A855F7" /><stop offset="100%" stopColor="#6B21A8" /></linearGradient></defs><path d="M35 85 H65 L60 70 H40 Z" fill="#4C1D95" /><path d="M15 15 H85 L75 55 C75 75 50 80 50 80 C50 80 25 75 25 55 L15 15Z" fill="url(#diamond)" stroke="#C026D3" strokeWidth="2"/></svg>);




// --- DADOS DO CURRÍCULO (FIEL AO MARKDOWN) ---
const curriculumData = {
  levels: [
    {
      id: 'nivel-1',
      title: 'Nível 1: Fundamentos',
      description: 'Base sólida em programação, lógica, Java básico e fundamentos web.',
      duration: '8-10 semanas',
      icon: <Coffee className="w-6 h-6" />,
      color: 'blue',
      modules: [
        {
          id: '1.1',
          title: '1.1 Lógica de Programação e Algoritmos',
          summary: 'Fundamentos de lógica, estruturas de controle, algoritmos simples e estruturas de dados básicas.',
          topics: [
            'Variáveis, tipos de dados, operadores',
            'Estruturas condicionais (if/else, switch)',
            'Estruturas de repetição (for, while, do-while)',
            'Funções/métodos: parâmetros, retorno, escopo',
            'Arrays e listas: criação, acesso, manipulação',
            'Algoritmos básicos: busca, ordenação simples (bubble sort, selection sort)',
            'Complexidade algorítmica básica (O(n), O(n²))'
          ],
          practice: [
            'Resolver problemas algorítmicos simples',
            'Implementar estruturas de controle corretamente',
            'Criar funções reutilizáveis',
            'Manipular arrays e listas',
            'Analisar a complexidade de algoritmos simples'
          ],
          bestPractices: [
            { 
              title: 'KISS (Keep It Simple, Stupid)', 
              desc: 'Mantenha soluções simples e diretas. Se você pode resolver com um IF, não use uma estrutura complexa desnecessária.',
              exampleCode: '// Bom\nboolean isEven(int n) { return n % 2 == 0; }' 
            },
            { 
              title: 'DRY (Don\'t Repeat Yourself)', 
              desc: 'Não repita lógica. Se você copiou e colou código 3 vezes, transforme em uma função.',
              exampleCode: 'void log(String msg) { System.out.println(LocalDateTime.now() + ": " + msg); }' 
            },
            { 
              title: 'Nomenclatura Descritiva', 
              desc: 'Nomes de variáveis devem explicar o conteúdo. Evite `x`, `y`, `temp`.',
              exampleCode: 'int diasParaVencimento = 10; // Claro\nint d = 10; // Ruim' 
            },
            {
              title: 'Comentários Úteis',
              desc: 'Comentários apenas quando necessário para explicar "por quê", não "o quê".',
              exampleCode: '// Ruim: i++ // Incrementa i\n// Bom: i++ // Ajusta offset zero-based'
            }
          ],
          exercises: [
             { title: 'Calculadora de IMC', desc: '1. Crie a classe CalculadoraIMC.\n2. Receba peso e altura via Scanner.\n3. Calcule IMC = peso / (altura * altura).\n4. Use if/else para classificar: < 18.5 (Magreza), 18.5-24.9 (Normal), etc.\n5. Imprima o resultado.' },
             { title: 'Jogo de Adivinhação', desc: '1. Gere número aleatório 1-100 (classe Random).\n2. Crie um loop while que pede palpite.\n3. Diga se é Maior ou Menor.\n4. Encerre quando acertar.' },
             { title: 'Lista de Tarefas', desc: '1. Use ArrayList<String>.\n2. Menu: [1] Adicionar [2] Listar [3] Remover [4] Sair.\n3. Trate índice inválido no remover.' },
             { title: 'Ordenador de Nomes', desc: '1. Leia 5 nomes em um vetor.\n2. Implemente Bubble Sort (dois loops for) para ordenar A-Z.\n3. Imprima a lista.' },
             { title: 'Kata FizzBuzz', desc: '1. Loop 1-100.\n2. Divisível por 3: "Fizz".\n3. Por 5: "Buzz".\n4. Ambos: "FizzBuzz".\n5. Senão: Número.' }
          ]
        },
        {
          id: '1.2',
          title: '1.2 Fundamentos de Java',
          summary: 'Sintaxe Java, tipos primitivos, classes, objetos, pacotes, tratamento de exceções.',
          topics: [
            'História e características do Java',
            'JVM, JDK, JRE',
            'Tipos primitivos vs objetos (int vs Integer)',
            'Classes, objetos, instanciação',
            'Construtores, métodos, atributos',
            'Modificadores de acesso (public, private, protected, package)',
            'Pacotes e organização de código',
            'Tratamento de exceções (try-catch-finally, throws)',
            'Exceções checked vs unchecked',
            'String, StringBuilder, StringBuffer',
            'Wrapper classes'
          ],
          practice: [
            'Criar classes e objetos em Java',
            'Organizar código em pacotes',
            'Tratar exceções adequadamente',
            'Usar APIs básicas do Java (String, Collections básicas)',
            'Compilar e executar programas Java via linha de comando'
          ],
          bestPractices: [
            { title: 'Encapsulamento', desc: 'Use private para atributos. Exponha apenas o necessário via getters/setters.', exampleCode: 'private String senha; // Acesso restrito' },
            { title: 'Nomenclatura', desc: 'Classes PascalCase, métodos camelCase.', exampleCode: 'class MinhaClasse {\n  void meuMetodo() {}\n}' },
            { title: 'Pacotes', desc: 'Organize por funcionalidade (feature), não camada.', exampleCode: 'com.app.users (User, Controller, Repo)' },
            { title: 'Tratamento de Exceções', desc: 'Nunca engula exceções (catch vazio). Logue ou relance.', exampleCode: 'catch(Exception e) { e.printStackTrace(); }' }
          ],
          exercises: [
             { title: 'Cadastro de Alunos', desc: '1. Classe Aluno (nome, idade, nota).\n2. Construtor e Getters.\n3. Método boolean aprovado() (nota >= 7).\n4. Teste na Main.' },
             { title: 'Validador de CPF', desc: '1. Método recebe String.\n2. Remove caracteres não numéricos.\n3. Valida tamanho (11).\n4. Aplica lógica de dígitos verificadores.' },
             { title: 'Calculadora com Exceções', desc: '1. Recebe dois números.\n2. Trata ArithmeticException (divisão por zero).\n3. Trata InputMismatchException (letras).' },
             { title: 'Gerenciador de Contatos', desc: '1. Classe Contato (nome, tel).\n2. Classe Agenda com List<Contato>.\n3. Métodos add, remove, search.' },
             { title: 'Conversor de Unidades', desc: '1. Métodos estáticos.\n2. Celsius -> Fahrenheit.\n3. Km -> Milhas.' }
          ]
        },
        {
          id: '1.3',
          title: '1.3 Orientação a Objetos',
          summary: 'Aprofundamento em OOP: herança, polimorfismo, abstração.',
          topics: [
            'Os 4 pilares da OOP: Encapsulamento, Herança, Polimorfismo, Abstração',
            'Interfaces vs classes abstratas',
            'Composição vs herança',
            'Princípio "prefira composição sobre herança"',
            'Modificadores: final, static, abstract',
            'Enums em Java'
          ],
          practice: [
            'Criar hierarquias de classes bem projetadas',
            'Usar interfaces para definir contratos',
            'Aplicar polimorfismo em cenários reais',
            'Decidir entre herança e composição',
            'Criar enums para constantes tipadas'
          ],
          bestPractices: [
            { title: 'SOLID - Single Responsibility', desc: 'Uma classe, uma responsabilidade.', exampleCode: 'Pedido (dados) != PedidoPrinter (impressão).' },
            { title: 'SOLID - Open/Closed', desc: 'Aberta para extensão, fechada para modificação.', exampleCode: 'Novas regras via novas classes.' },
            { title: 'SOLID - Liskov', desc: 'Subclasse deve substituir superclasse sem quebrar.', exampleCode: 'Quadrado não deve herdar de Retângulo se mudar comportamento.' },
            { title: 'Evitar Herança Profunda', desc: 'Máximo 2-3 níveis.', exampleCode: 'Prefira Composição.' }
          ],
          exercises: [
             { title: 'Formas Geométricas', desc: '1. Classe abstrata Forma (area()).\n2. Circulo e Retangulo implementam.\n3. Lista<Forma> calcula área total (Polimorfismo).' },
             { title: 'Veículos', desc: '1. Classe Veiculo.\n2. Carro e Moto estendem.\n3. Sobrescreva acelerar(). Moto empina.' },
             { title: 'Sistema de Pagamento', desc: '1. Interface Pagamento (processar).\n2. Pix, Boleto, Cartao implementam.\n3. Classe Venda aceita qualquer Pagamento.' },
             { title: 'Funcionários', desc: '1. Classe abstrata Funcionario.\n2. Gerente (+bônus), Estagiário.\n3. Calcular folha de pagamento.' },
             { title: 'Notificações', desc: '1. Enum TipoNotificacao (EMAIL, SMS).\n2. Interface Notificacao.\n3. Factory para criar instância.' }
          ]
        },
        {
          id: '1.4',
          title: '1.4 Coleções e Generics',
          summary: 'Collections Framework, Generics, Stream API.',
          topics: [
            'Collections Framework: List, Set, Map',
            'ArrayList vs LinkedList',
            'HashSet vs TreeSet vs LinkedHashSet',
            'HashMap vs TreeMap vs LinkedHashMap',
            'Iterators e enhanced for',
            'Generics: classes genéricas, métodos genéricos, wildcards',
            'Lambda expressions (introdução)',
            'Stream API básica (introdução)'
          ],
          practice: [
            'Escolher a coleção adequada',
            'Usar generics',
            'Iterar eficientemente',
            'Usar lambdas e streams'
          ],
          bestPractices: [
            { title: 'Type Safety', desc: 'Sempre use Generics.', exampleCode: 'List<String> lista = new ArrayList<>();' },
            { title: 'Set vs List', desc: 'Set para únicos, List para ordem/duplicatas.', exampleCode: 'Set<CPF> unicos = new HashSet<>();' },
            { title: 'Interface', desc: 'Declare pela interface.', exampleCode: 'Map<K,V> map = new HashMap<>();' }
          ],
          exercises: [
             { title: 'Agenda com Set', desc: '1. Receba nomes.\n2. Armazene em HashSet.\n3. Verifique que duplicatas sumiram.' },
             { title: 'Dicionário Map', desc: '1. Map<Ingles, Portugues>.\n2. Put palavras.\n3. Get tradução por chave.' },
             { title: 'Filtro Genérico', desc: '1. Classe Filtro<T>.\n2. Método filtrar(List<T>, Predicate<T>).\n3. Retorna lista filtrada.' },
             { title: 'Estatísticas Stream', desc: '1. Lista de notas.\n2. stream().mapToDouble().average().\n3. Exibir média.' },
             { title: 'Estoque Map', desc: '1. Map<Produto, Integer>.\n2. Atualizar quantidade.' }
          ]
        },
        {
          id: '1.5',
          title: '1.5 Fundamentos Web',
          summary: 'HTTP, REST, JSON, Postman.',
          topics: [
            'Arquitetura cliente/servidor',
            'Protocolo HTTP: métodos (GET, POST, PUT, DELETE, PATCH)',
            'Status codes (200, 201, 400, 401, 404, 500, etc.)',
            'Headers HTTP (Content-Type, Authorization, etc.)',
            'REST: princípios, recursos, URIs, stateless',
            'JSON: sintaxe, tipos de dados, aninhamento',
            'Ferramentas: Postman, Insomnia, curl',
            'CORS básico (conceito)'
          ],
          practice: [
            'Fazer requisições HTTP manuais',
            'Interpretar respostas e status',
            'Criar e validar JSON',
            'Usar Postman'
          ],
          bestPractices: [
            { title: 'Verbos HTTP', desc: 'Use corretamente.', exampleCode: 'GET (ler), POST (criar), PUT (atualizar), DELETE (remover).' },
            { title: 'Stateless', desc: 'Servidor não guarda estado da sessão.', exampleCode: 'Envie token em cada request.' },
            { title: 'JSON Style', desc: 'CamelCase nas chaves.', exampleCode: '{ "userId": 1 }' }
          ],
          exercises: [
             { title: 'Explorar API', desc: '1. Postman -> GET jsonplaceholder.typicode.com/posts.\n2. Analise Headers e Body.' },
             { title: 'Documentação', desc: '1. Escreva doc de API fictícia.\n2. Defina rotas e payloads.' },
             { title: 'Validador JSON', desc: '1. Escreva JSON complexo.\n2. Valide em jsonlint.com.' },
             { title: 'Java HttpClient', desc: '1. Use java.net.http.\n2. Faça GET via código.\n3. Printe o body.' },
             { title: 'Mock API', desc: '1. Crie JSONs de resposta mockados para cenários de sucesso/erro.' }
          ]
        },
        {
          id: '1.6',
          title: '1.6 Git e Versionamento',
          summary: 'Git básico, GitHub, branches.',
          topics: [
            'Controle de versão: conceitos e importância',
            'Git: instalação, configuração inicial',
            'Comandos básicos: init, add, commit, status, log',
            'Branches: criar, trocar, merge',
            'GitHub/GitLab: criar repositório, clone, push, pull',
            'Pull Request / Merge Request: conceito e fluxo',
            '.gitignore: quando e como usar',
            'Resolução de conflitos básica'
          ],
          practice: [
            'Criar repositórios',
            'Commits semânticos',
            'Fluxo de branches',
            'Pull Requests',
            'Resolver conflitos'
          ],
          bestPractices: [
            { title: 'Commits Atômicos', desc: 'Uma mudança por commit.', exampleCode: 'git commit -m "Fix login bug"' },
            { title: '.gitignore', desc: 'Não versione binários/configs locais.', exampleCode: '/target, .env' }
          ],
          exercises: [
             { title: 'Repo GitHub', desc: '1. Crie repo.\n2. Git init local.\n3. Remote add e Push.' },
             { title: 'Branching', desc: '1. Checkout -b feature.\n2. Commit.\n3. Merge main.' },
             { title: 'Pull Request', desc: '1. Push branch.\n2. Abra PR no GitHub.\n3. Merge.' },
             { title: 'Conflito', desc: '1. Edite mesma linha em 2 branches.\n2. Merge.\n3. Resolva conflito.' }
          ]
        }
      ]
    },
    {
      id: 'nivel-2',
      title: 'Nível 2: Intermediário',
      description: 'Dominar Spring Boot, criar APIs REST funcionais, trabalhar com banco de dados.',
      duration: '8-10 semanas',
      icon: <Server className="w-6 h-6" />,
      color: 'emerald',
      modules: [
        {
          id: '2.1',
          title: '2.1 Spring Boot - Fundamentos',
          summary: 'Spring Framework, DI, Configuração.',
          topics: [
            'Spring Framework: histórico, ecossistema',
            'Spring Boot: autoconfiguração, starters, Spring Boot CLI',
            'Injeção de Dependência (DI): conceito, @Autowired, @Component, @Service, @Repository',
            'Application Context, Beans, Scopes',
            'Profiles: dev, test, prod',
            'application.properties vs application.yml',
            'Spring Boot Actuator (introdução)'
          ],
          practice: [
            'Criar projeto Spring Boot',
            'Configurar dependências',
            'Usar DI',
            'Configurar profiles'
          ],
          bestPractices: [
            { title: 'Constructor Injection', desc: 'Prefira injetar via construtor.', exampleCode: 'public Service(Repo r) { this.r = r; }' },
            { title: 'Separation of Concerns', desc: 'Controller só roteia, Service tem a lógica.', exampleCode: 'Controller -> Service -> Repository' }
          ],
          exercises: [
             { title: 'Hello World', desc: '1. Spring Initializr.\n2. @RestController.\n3. Return "Ola".' },
             { title: 'Calculadora API', desc: '1. Endpoint recebe params.\n2. Service calcula.\n3. Retorna resultado.' },
             { title: 'Profiles', desc: '1. application-dev.properties.\n2. @Value injeta config específica.' },
             { title: 'Actuator', desc: '1. Adicione dependência.\n2. Acesse /actuator/health.' }
          ]
        },
        {
          id: '2.2',
          title: '2.2 Spring Boot - APIs REST',
          summary: 'Controllers, DTOs, Validação, Tratamento de Erros.',
          topics: [
            '@RestController vs @Controller',
            '@RequestMapping, @GetMapping, @PostMapping, @PutMapping, @DeleteMapping',
            '@PathVariable, @RequestParam, @RequestBody',
            '@ResponseStatus, ResponseEntity',
            'Validação: Bean Validation (@NotNull, @Size, @Email, etc.)',
            '@Valid, @Validated',
            'Tratamento de exceções: @ExceptionHandler, @ControllerAdvice',
            'DTOs (Data Transfer Objects): por que usar, como criar',
            'Mapeamento DTO ↔ Entity (manual e com MapStruct)'
          ],
          practice: [
            'Criar CRUD REST',
            'Validar dados',
            'Tratar erros',
            'Usar DTOs'
          ],
          bestPractices: [
            { title: 'Use DTOs', desc: 'Não exponha @Entity no controller.', exampleCode: 'UserDTO entrada/saida.' },
            { title: 'Status Codes', desc: 'Retorne códigos corretos.', exampleCode: '201 Created, 404 Not Found.' }
          ],
          exercises: [
             { title: 'CRUD Produtos', desc: '1. GET, POST, PUT, DELETE.\n2. Lista em memória.' },
             { title: 'Validação', desc: '1. @NotBlank no DTO.\n2. @Valid no Controller.' },
             { title: 'Erro Global', desc: '1. @ControllerAdvice.\n2. Capture MethodArgumentNotValidException.\n3. JSON limpo.' },
             { title: 'Paginação', desc: '1. Receba page/size.\n2. Retorne fatia da lista.' }
          ]
        },
        {
          id: '2.3',
          title: '2.3 Spring Data JPA',
          summary: 'Persistência, JPA, Hibernate, Migrations.',
          topics: [
            'JPA (Java Persistence API): conceitos, ORM',
            'Entidades: @Entity, @Table, @Id, @GeneratedValue',
            'Relacionamentos: @OneToMany, @ManyToOne, @ManyToMany, @OneToOne',
            'Fetch types: EAGER vs LAZY',
            'Cascade types',
            'Spring Data JPA: interfaces Repository, métodos de query automáticos',
            '@Query, @Modifying, @Transactional',
            'Migrações: Flyway ou Liquibase',
            'Transações: @Transactional, isolamento, propagação básica'
          ],
          practice: [
            'Modelar banco',
            'Relacionamentos',
            'Queries customizadas',
            'Migrações'
          ],
          bestPractices: [
            { title: 'Lazy Loading', desc: 'Use LAZY para coleções.', exampleCode: '@OneToMany(fetch = FetchType.LAZY)' },
            { title: 'Transactional', desc: 'Use em serviços que alteram dados.', exampleCode: '@Transactional' },
            { title: 'N+1', desc: 'Cuidado com N+1 queries.', exampleCode: 'Use JOIN FETCH.' }
          ],
          exercises: [
             { title: 'Biblioteca', desc: '1. Autor 1-N Livro.\n2. Cascade persist.' },
             { title: 'E-commerce', desc: '1. Pedido 1-N Itens.\n2. Item N-1 Produto.' },
             { title: 'Flyway', desc: '1. Adicione dependência.\n2. V1__init.sql.\n3. Rode app.' },
             { title: 'Query Custom', desc: '1. @Query("SELECT ...").\n2. Buscas complexas.' }
          ]
        }
      ]
    },
    {
      id: 'nivel-3',
      title: 'Nível 3: Pleno/Avançado',
      description: 'Arquitetura limpa, testes automatizados e segurança e padrões avançados.',
      duration: '12-14 semanas',
      icon: <Shield className="w-6 h-6" />,
      color: 'purple',
      modules: [
        {
          id: '3.1',
          title: '3.1 Clean Architecture e Hexagonal no Backend',
          summary: 'Camadas, boundaries, ports & adapters, inversão de dependência.',
          topics: [
            'Clean Architecture: camadas (domain, application, infrastructure, adapters)',
            'Hexagonal Architecture: ports & adapters, inside-out',
            'Domain Layer: entidades, value objects, domain services',
            'Application Layer: use cases, application services, DTOs',
            'Infrastructure Layer: repositórios, APIs externas, frameworks',
            'Adapters: controllers (inbound), repositories (outbound)',
            'Dependency Rule: dependências apontam para dentro',
            'Boundaries: como definir e manter'
          ],
          practice: ['Desacoplar domínio', 'Criar ports', 'Inversão de dependência'],
          bestPractices: [
            { title: 'Domínio Puro', desc: 'Sem frameworks no domínio.', exampleCode: 'POJOs apenas.' },
            { title: 'Inversão', desc: 'Infra depende de Domínio.', exampleCode: 'RepoImpl implementa RepoInterface.' }
          ],
          exercises: [
             { title: 'Refatorar Arch', desc: '1. Pacotes: domain, app, infra.\n2. Mover lógica.\n3. Criar Interfaces.' },
             { title: 'Use Case', desc: '1. Classe CriarPedidoUseCase.\n2. Lógica isolada.' },
             { title: 'Adapter', desc: '1. Adapter para API externa (ViaCEP).' }
          ]
        },
        {
          id: '3.2',
          title: '3.2 Specification Pattern e DDD Básico',
          summary: 'Regras complexas, DDD, Value Objects.',
          topics: [
            'Specification Pattern: quando usar, como implementar',
            'Composite Specifications: AND, OR, NOT',
            'DDD: Domain-Driven Design básico',
            'Entidades: identidade única, mutáveis',
            'Value Objects: imutáveis, sem identidade',
            'Agregados: consistência transacional, aggregate root',
            'Domain Services: lógica que não pertence a entidade ou value object',
            'Repositories: abstração de persistência no domain'
          ],
          practice: ['Specification Pattern', 'Value Objects', 'Agregados'],
          bestPractices: [
            { title: 'Value Objects', desc: 'Imutáveis e validados.', exampleCode: 'new CPF("...")' },
            { title: 'Agregado', desc: 'Acesso apenas pela raiz.', exampleCode: 'pedido.addItem()' }
          ],
          exercises: [
             { title: 'Value Object', desc: '1. Classe Email.\n2. Validação no construtor.' },
             { title: 'Specification', desc: '1. Interface Spec.\n2. Regras de desconto.' },
             { title: 'Agregado', desc: '1. Pedido controla Itens.\n2. Lista imutável externa.' }
          ]
        },
        {
          id: '3.3',
          title: '3.3 Testes Unitários - Backend (JUnit, Mockito)',
          summary: 'TDD, JUnit 5, Mockito, cobertura de código.',
          topics: [
            'TDD: Red-Green-Refactor',
            'JUnit 5: @Test, @BeforeEach, @AfterEach, assertions',
            'Mockito: @Mock, @InjectMocks, when().thenReturn(), verify()',
            'Test Doubles: mocks, stubs, spies, fakes',
            'Testes de Services: mockar repositories',
            'Testes de Controllers: MockMvc (Spring)',
            'Cobertura: JaCoCo, métricas (linha, branch, método)',
            'Testes parametrizados: @ParameterizedTest'
          ],
          practice: ['Testes unitários', 'Mockar dependências', 'TDD'],
          bestPractices: [
            { title: 'AAA', desc: 'Arrange, Act, Assert.', exampleCode: 'Setup -> Exec -> Verify.' },
            { title: 'Mock', desc: 'Mockar IO/Banco.', exampleCode: 'Mockito.when(...)' }
          ],
          exercises: [
             { title: 'TDD Calc', desc: '1. Teste primeiro.\n2. Implemente.\n3. Refatore.' },
             { title: 'Service Test', desc: '1. Mock Repo.\n2. Testar regra de negócio.' },
             { title: 'Cobertura', desc: '1. Rodar JaCoCo.\n2. Melhorar %.' }
          ]
        },
        {
          id: '3.4',
          title: '3.4 Testes de Integração - Backend',
          summary: 'Testes de integração, @SpringBootTest, Testcontainers, banco em memória.',
          topics: [
            'Testes de Integração: diferença de unitários',
            '@SpringBootTest: carregar contexto Spring completo',
            '@DataJpaTest: testes de repositório',
            '@WebMvcTest: testes de controller isolado',
            'Testcontainers: banco de dados real em containers',
            'H2/HSQLDB: banco em memória para testes',
            '@Sql: executar scripts SQL em testes',
            '@Transactional em testes: rollback automático'
          ],
          practice: ['Teste integração', 'Testcontainers', 'Banco H2'],
          bestPractices: [
            { title: 'Isolamento', desc: 'Testes independentes.', exampleCode: '@Transactional rollback.' },
            { title: 'Real Database', desc: 'Use Testcontainers para fidelidade.', exampleCode: 'Postgres Container.' }
          ],
          exercises: [
             { title: 'Repo Test', desc: '1. @DataJpaTest.\n2. Salvar/Buscar.' },
             { title: 'Integration', desc: '1. @SpringBootTest.\n2. Chamada MockMvc completa.' },
             { title: 'Container', desc: '1. Config Testcontainers.\n2. Rodar teste com Postgres real.' }
          ]
        },
        {
          id: '3.5',
          title: '3.5 Segurança - OWASP Top 10 e Autenticação',
          summary: 'OWASP Top 10, JWT, OAuth2, Spring Security.',
          topics: [
            'OWASP Top 10: principais vulnerabilidades web',
            'A01: Broken Access Control',
            'A02: Cryptographic Failures',
            'A03: Injection (SQL, XSS, Command)',
            'A04: Insecure Design',
            'A05: Security Misconfiguration',
            'A06: Vulnerable Components',
            'A07: Authentication Failures',
            'A08: Software and Data Integrity',
            'A09: Security Logging Failures',
            'A10: Server-Side Request Forgery',
            'JWT: estrutura, assinatura, validação',
            'Spring Security: configuração básica, filters, authentication',
            'OAuth2: fluxos (Authorization Code, Client Credentials)',
            'Password hashing: BCrypt, Argon2'
          ],
          practice: ['JWT', 'Spring Security', 'Sanitização'],
          bestPractices: [
            { title: 'Stateless', desc: 'JWT em APIs.', exampleCode: 'Bearer Token.' },
            { title: 'Sanitize', desc: 'Validar inputs.', exampleCode: 'Prevenir SQL Injection.' }
          ],
          exercises: [
             { title: 'Security Config', desc: '1. Bloquear endpoints.\n2. Liberar login.' },
             { title: 'JWT', desc: '1. Gerar token no login.\n2. Validar no filtro.' },
             { title: 'BCrypt', desc: '1. Hash de senha no cadastro.' }
          ]
        }
      ]
    },
    {
      id: 'nivel-4',
      title: 'Nível 4: Sênior/Arquitetura',
      description: 'DevSecOps, CI/CD, microserviços, observabilidade.',
      duration: '16-20 semanas',
      icon: <Layers className="w-6 h-6" />,
      color: 'orange',
      modules: [
        {
          id: '4.1',
          title: '4.1 Docker e Containerização',
          summary: 'Docker, Dockerfile, Compose, Multi-stage builds.',
          topics: [
            'Containers: conceito, diferença de VMs',
            'Docker: imagens, containers, volumes, networks',
            'Dockerfile: FROM, RUN, COPY, ADD, ENV, EXPOSE, CMD, ENTRYPOINT',
            'Multi-stage builds: otimização de imagens',
            'Docker Compose: orquestração de múltiplos containers',
            '.dockerignore: otimização de builds',
            'Health checks',
            'Security: usuário não-root, secrets'
          ],
          practice: ['Dockerfiles', 'Compose', 'Otimização'],
          bestPractices: [
            { title: 'Multi-stage', desc: 'Build separada do runtime.', exampleCode: 'Imagem menor.' },
            { title: 'Security', desc: 'User não-root.', exampleCode: 'USER app.' }
          ],
          exercises: [
             { title: 'Dockerfile', desc: '1. Criar para App Java.\n2. Build e Run.' },
             { title: 'Compose', desc: '1. App + Banco.\n2. Rede interna.' },
             { title: 'Slim', desc: '1. Usar Alpine/Distroless.\n2. Reduzir MBs.' }
          ]
        },
        {
          id: '4.2',
          title: '4.2 CI/CD - Pipelines (GitHub Actions, GitLab CI)',
          summary: 'Pipelines, automação, deploy.',
          topics: [
            'CI/CD: Continuous Integration, Continuous Deployment',
            'GitHub Actions: workflows, jobs, steps, actions',
            'GitLab CI: .gitlab-ci.yml, stages, jobs',
            'Pipeline stages: build, test, lint, security scan, deploy',
            'Secrets management: GitHub Secrets, GitLab Variables',
            'Conditional execution: apenas em branches específicos',
            'Matrix builds: testar múltiplas versões',
            'Artifacts: armazenar e reutilizar artefatos'
          ],
          practice: ['Pipeline CI', 'Automação', 'Deploy'],
          bestPractices: [
            { title: 'Fail Fast', desc: 'Testes primeiro.', exampleCode: 'Lint -> Test -> Build.' },
            { title: 'Secrets', desc: 'Não commitar senhas.', exampleCode: 'Use Vault/Secrets.' }
          ],
          exercises: [
             { title: 'GitHub Action', desc: '1. Workflow maven.\n2. Trigger no push.' },
             { title: 'Quality Gate', desc: '1. Bloquear se teste falhar.' },
             { title: 'Deploy', desc: '1. Simular deploy step.' }
          ]
        },
        {
          id: '4.3',
          title: '4.3 Análise Estática e Qualidade de Código',
          summary: 'SonarQube, métricas, quality gates.',
          topics: [
            'Análise estática: conceito, benefícios',
            'SonarQube: configuração, regras, quality gates',
            'SpotBugs/FindBugs: detecção de bugs em Java',
            'Checkstyle: estilo de código Java',
            'Quality Gates: definir critérios de qualidade',
            'Métricas: complexidade ciclomática, code smells, duplicação'
          ],
          practice: ['SonarQube', 'Checkstyle', 'Refatoração'],
          bestPractices: [
            { title: 'Gate', desc: 'Não aceitar dívida técnica nova.', exampleCode: 'New Code Coverage > 80%.' }
          ],
          exercises: [
             { title: 'Sonar Local', desc: '1. Rodar Sonar.\n2. Analisar projeto.' },
             { title: 'Fix', desc: '1. Corrigir 3 smells.\n2. Revalidar.' }
          ]
        },
        {
          id: '4.4',
          title: '4.4 Segurança em CI/CD (SAST/DAST)',
          summary: 'SAST, DAST, Snyk, dependências.',
          topics: [
            'SAST: Static Application Security Testing',
            'DAST: Dynamic Application Security Testing',
            'Snyk: scan de dependências, vulnerabilidades conhecidas',
            'OWASP ZAP: scan de aplicações web',
            'Dependabot/Renovate: atualização automática de dependências',
            'Secret scanning: detectar secrets em código',
            'SCA: Software Composition Analysis',
            'CVE: Common Vulnerabilities and Exposures'
          ],
          practice: ['Scan segurança', 'Dependabot'],
          bestPractices: [
            { title: 'Shift Left', desc: 'Segurança no CI.', exampleCode: 'Scan a cada commit.' },
            { title: 'Update', desc: 'Atualizar libs vulneráveis.', exampleCode: 'Dependabot auto-pr.' }
          ],
          exercises: [
             { title: 'Snyk', desc: '1. Rodar scan de deps.\n2. Ver relatório.' },
             { title: 'Secret Scan', desc: '1. Tentar commitar chave fake.' }
          ]
        },
        {
          id: '4.5',
          title: '4.5 Observabilidade (Logs, Métricas, Tracing)',
          summary: 'Logging estruturado, métricas, Tracing.',
          topics: [
            'Observabilidade: logs, métricas, traces',
            'Logging estruturado: JSON logs, níveis, contexto',
            'SLF4J + Logback: configuração avançada',
            'Métricas: Prometheus, Micrometer',
            'APM: Application Performance Monitoring',
            'Distributed Tracing: OpenTelemetry, Jaeger, Zipkin',
            'ELK Stack: Elasticsearch, Logstash, Kibana',
            'Alertas: quando e como alertar'
          ],
          practice: ['Logs JSON', 'Prometheus', 'Tracing'],
          bestPractices: [
            { title: 'Structured Logs', desc: 'JSON para indexação.', exampleCode: '{"level":"INFO", ...}' },
            { title: 'Correlation ID', desc: 'Rastrear requests.', exampleCode: 'MDC.put(id).' }
          ],
          exercises: [
             { title: 'Logback JSON', desc: '1. Configurar appender JSON.' },
             { title: 'Metrics', desc: '1. Expor /prometheus.\n2. Ver no Grafana.' }
          ]
        },
        {
          id: '4.6',
          title: '4.6 Kubernetes Básico',
          summary: 'K8s, Pods, Services, Config.',
          topics: [
            'Kubernetes: conceitos, arquitetura',
            'Pods, Deployments, Services',
            'ConfigMaps e Secrets',
            'Namespaces',
            'Health checks: liveness, readiness probes',
            'Resource limits: CPU, memory',
            'Ingress: expor serviços externamente',
            'Rolling updates, rollbacks'
          ],
          practice: ['Manifestos K8s', 'Deploy'],
          bestPractices: [
            { title: 'Limits', desc: 'Definir recursos.', exampleCode: 'CPU/Memory limits.' },
            { title: 'Probes', desc: 'Health checks.', exampleCode: 'Liveness/Readiness.' }
          ],
          exercises: [
             { title: 'Deployment', desc: '1. YAML de deploy.\n2. Kubectl apply.' },
             { title: 'Service', desc: '1. Expor app.' }
          ]
        },
        {
          id: '4.7',
          title: '4.7 Arquitetura de Microserviços (Fundamentos)',
          summary: 'Microserviços, Gateway, Discovery.',
          topics: [
            'Microserviços: conceitos, quando usar',
            'Monólito vs Microserviços: trade-offs',
            'Comunicação: síncrona (REST) vs assíncrona (messaging)',
            'Service Discovery: Eureka, Consul',
            'API Gateway: padrão, implementações (Spring Cloud Gateway, Kong)',
            'BFF: Backend for Frontend',
            'Database per Service: cada serviço com seu banco',
            'Saga Pattern: transações distribuídas'
          ],
          practice: ['Gateway', 'Discovery', 'Feign'],
          bestPractices: [
            { title: 'DB isolado', desc: 'Um banco por serviço.', exampleCode: 'Não compartilhar tabelas.' }
          ],
          exercises: [
             { title: 'Gateway', desc: '1. Configurar rotas.' },
             { title: 'Feign', desc: '1. Chamada entre serviços.' }
          ]
        },
        {
          id: '4.8',
          title: '4.8 Padrões de Resiliência',
          summary: 'Circuit Breaker, Retry, Resilience4j.',
          topics: [
            'Resilience: conceito, importância',
            'Circuit Breaker: padrão, estados (closed, open, half-open)',
            'Retry: estratégias de retry (exponential backoff, jitter)',
            'Timeout: evitar requisições infinitas',
            'Bulkhead: isolar recursos',
            'Rate Limiting: controlar taxa de requisições',
            'Resilience4j: biblioteca Java',
            'Fallbacks: comportamento quando serviço falha'
          ],
          practice: ['Circuit Breaker', 'Retry'],
          bestPractices: [
            { title: 'Fallback', desc: 'Degradação graciosa.', exampleCode: 'Retornar cache se falhar.' }
          ],
          exercises: [
             { title: 'Resilience4j', desc: '1. Adicionar lib.\n2. Configurar CB.' }
          ]
        },
        {
          id: '4.9',
          title: '4.9 Documentação e Arquitetura como Código',
          summary: 'ADR, C4, OpenAPI.',
          topics: [
            'ADR: formato, quando criar',
            'Documentação viva: manter atualizada',
            'Diagramas: C4 Model, UML, sequence diagrams',
            'README: estrutura, boas práticas',
            'API Documentation: OpenAPI/Swagger',
            'Code as Documentation: código auto-documentado',
            'Architecture Decision Log: histórico de decisões'
          ],
          practice: ['ADRs', 'C4 Model', 'Swagger'],
          bestPractices: [
            { title: 'ADR', desc: 'Registrar decisões.', exampleCode: '/docs/adrs.' }
          ],
          exercises: [
             { title: 'Swagger', desc: '1. Documentar API.\n2. Gerar UI.' }
          ]
        },
        {
          id: '4.10',
          title: '4.10 Carreira e Desenvolvimento Contínuo',
          summary: 'Carreira, Portfólio, Soft Skills.',
          topics: [
            'Aprendizado contínuo: como manter-se atualizado',
            'Portfólio: projetos que demonstram habilidades',
            'Code Review: como revisar e ser revisado',
            'Contribuições open-source: como começar',
            'Comunidade: participar de comunidades, eventos',
            'Certificações: quando fazer sentido',
            'Mentoria: ser mentor e ter mentor',
            'Soft skills: comunicação, trabalho em equipe'
          ],
          practice: ['Portfólio', 'Networking'],
          bestPractices: [
            { title: 'Soft Skills', desc: 'Comunicação é chave.', exampleCode: 'Saber explicar tech.' }
          ],
          exercises: [
             { title: 'GitHub', desc: '1. Melhorar READMEs.' }
          ]
        }
      ]
    }
  ]
};

// --- DADOS DO QUIZ (FUNCIONAL) ---
// Função geradora de questões simuladas para os tópicos
const generateQuestions = (moduleId) => {
    return Array.from({ length: 12 }, (_, i) => ({
        id: i,
        text: `Questão simulada ${i + 1} sobre o módulo ${moduleId}. Qual a alternativa correta?`,
        options: [
            'Esta é a opção A (Incorreta)',
            'Esta é a opção B (Correta)',
            'Esta é a opção C (Incorreta)',
            'Esta é a opção D (Incorreta)'
        ],
        correct: 1
    }));
};

// --- COMPONENTES ---

const Header = ({ title, showBack, onBack, globalProgress }) => {
  const ranks = [
      { max: 10, icon: RankNovato, label: "Novato", color: "from-amber-700 to-amber-900", bg: "bg-amber-950/40", border: "border-amber-700/30" },
      { max: 30, icon: RankAprendiz, label: "Aprendiz", color: "from-gray-400 to-gray-600", bg: "bg-gray-800/40", border: "border-gray-500/30" },
      { max: 60, icon: RankIniciado, label: "Iniciado", color: "from-amber-500 to-yellow-600", bg: "bg-yellow-900/40", border: "border-yellow-600/30" },
      { max: 100, icon: RankCoder, label: "Coder", color: "from-green-400 to-emerald-600", bg: "bg-green-900/40", border: "border-green-500/30" },
      { max: 150, icon: RankBuilder, label: "Builder", color: "from-orange-400 to-amber-600", bg: "bg-orange-900/40", border: "border-orange-500/30" },
      { max: 9999, icon: RankStacked, label: "Stacked", color: "from-purple-400 to-fuchsia-600", bg: "bg-purple-900/40", border: "border-purple-500/30" }
  ];
  
  const activeRank = ranks.find(r => globalProgress < r.max) || ranks[ranks.length-1];
  const prevMax = ranks[ranks.indexOf(activeRank)-1]?.max || 0;
  const currentLevelProgress = globalProgress - prevMax;
  const levelRange = activeRank.max - prevMax;
  const progressPercent = Math.min(100, Math.max(0, (currentLevelProgress / levelRange) * 100));
  const RankIcon = activeRank.icon;

  return (
    <header className="bg-slate-900 text-white shadow-lg sticky top-0 z-50 border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 h-24 flex items-center justify-between">
        <div className="flex items-center gap-4">
          {showBack && <button onClick={onBack} className="p-2 hover:bg-slate-800 rounded-full transition-colors text-slate-400 hover:text-white"><ArrowLeft /></button>}
          <div className="flex items-center gap-3">
            <div className="bg-gradient-to-br from-yellow-400 to-orange-500 p-2 rounded-lg shadow-lg shadow-orange-500/20">
              <Code className="w-7 h-7 text-slate-900" />
            </div>
            <div>
              <h1 className="text-xl font-bold tracking-tight text-white">{title}</h1>
            </div>
          </div>
        </div>
        
        <div className={`flex flex-col items-center justify-center px-6 py-2 rounded-2xl border backdrop-blur-md transition-all duration-500 ${activeRank.bg} ${activeRank.border} relative overflow-hidden min-w-[180px]`}>
          <div className={`absolute inset-0 bg-gradient-to-r ${activeRank.color} opacity-10`}></div>
          <div className="relative group z-10 flex flex-col items-center">
              <div className={`absolute inset-0 bg-gradient-to-br ${activeRank.color} rounded-full blur-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-700`}></div>
              <RankIcon className="w-10 h-10 drop-shadow-2xl mb-1 filter hover:scale-110 transition-transform duration-300" />
              <span className={`text-xs font-black uppercase tracking-[0.2em] bg-gradient-to-r ${activeRank.color} bg-clip-text text-transparent drop-shadow-sm`}>
                  {activeRank.label}
              </span>
          </div>
          <div className="w-full mt-2 flex flex-col gap-1 z-10">
              <div className="flex justify-between text-[9px] text-slate-400 font-bold px-1">
                <span>XP {globalProgress}</span>
                <span>PRÓXIMO {activeRank.max}</span>
              </div>
              <div className="w-full h-1.5 bg-black/60 rounded-full overflow-hidden border border-white/5 relative">
                  <div 
                    className={`h-full rounded-full bg-gradient-to-r ${activeRank.color} shadow-[0_0_8px_rgba(255,255,255,0.4)] transition-all duration-700 ease-out`}
                    style={{ width: `${progressPercent}%` }}
                  >
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent w-full -translate-x-full animate-[shimmer_2s_infinite]"></div>
                  </div>
              </div>
          </div>
        </div>
      </div>
    </header>
  );
};

const QuizWindow = ({ moduleId, onClose, onFinish }) => {
    const questions = useMemo(() => getQuizQuestions(moduleId), [moduleId]);
    const [index, setIndex] = useState(0);
    const [score, setScore] = useState(0);
    const [finished, setFinished] = useState(false);

    const handleAnswer = (optionIdx) => {
        if (optionIdx === questions[index].correct) setScore(s => s + 1);
        if (index + 1 < questions.length) setIndex(i => i + 1);
        else setFinished(true);
    };

    if (finished) return (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-2xl w-full max-w-md p-8 text-center shadow-2xl relative">
                <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-500 to-purple-600"></div>
                <Trophy className="w-20 h-20 mx-auto text-yellow-400 mb-4" />
                <h2 className="text-3xl font-black text-slate-900 mb-2">Quiz Finalizado!</h2>
                <p className="text-slate-600 mb-6 text-lg">Você acertou <strong className="text-blue-600">{score}</strong> de {questions.length}</p>
                <button onClick={() => { onFinish(score); onClose(); }} className="w-full bg-slate-900 text-white py-3 rounded-xl font-bold hover:bg-slate-800">Concluir</button>
            </div>
        </div>
    );

    return (
        <div className="fixed inset-0 bg-slate-900/95 z-[60] flex items-center justify-center p-4 backdrop-blur-sm">
            <div className="bg-white rounded-3xl w-full max-w-2xl overflow-hidden shadow-2xl flex flex-col max-h-[90vh]">
                <div className="bg-slate-50 p-6 flex justify-between items-center border-b border-slate-200">
                    <div className="flex items-center gap-4">
                        <span className="text-slate-600 text-sm font-bold uppercase tracking-wide">Questão {index + 1} / {questions.length}</span>
                    </div>
                    <button onClick={onClose} className="p-2 hover:bg-slate-200 rounded-full transition-colors text-slate-400 hover:text-slate-600">
                        <X className="w-6 h-6" />
                    </button>
                </div>
                <div className="p-8 overflow-y-auto flex-grow">
                    <div className="w-full bg-slate-100 rounded-full h-1.5 mb-8">
                        <div 
                            className="bg-blue-500 h-1.5 rounded-full transition-all duration-500 ease-out"
                            style={{ width: `${((index) / questions.length) * 100}%` }}
                        ></div>
                    </div>
                    <h2 className="text-2xl font-bold text-slate-800 mb-6 leading-relaxed">{questions[index].text}</h2>
                    <div className="space-y-4">
                        {questions[index].options.map((opt, i) => (
                            <button 
                                key={i} 
                                onClick={() => handleAnswer(i)} 
                                className="w-full text-left p-5 rounded-xl border-2 border-slate-100 hover:border-blue-500 hover:bg-blue-50 transition-all duration-200 group flex items-center shadow-sm hover:shadow-md"
                            >
                                <span className="w-8 h-8 rounded-lg bg-slate-200 text-slate-600 font-bold flex items-center justify-center mr-5 group-hover:bg-blue-500 group-hover:text-white transition-colors text-sm">
                                    {String.fromCharCode(65 + i)}
                                </span>
                                <span className="text-slate-700 group-hover:text-blue-900 font-medium text-lg">{opt}</span>
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

const TheoryModal = ({ topic, onClose, onSaveLinks, initialLinks }) => {
    const defaultLinks = [
        { url: `https://www.google.com/search?q=java+${topic.replace(/ /g, '+')}`, title: 'Pesquisar no Google' },
        { url: 'https://docs.oracle.com/en/java/', title: 'Documentação Oficial Oracle' }
    ];
    
    // Se initialLinks for undefined, usa defaultLinks
    const [links, setLinks] = useState(initialLinks || defaultLinks);
    const [newUrl, setNewUrl] = useState('');
    const [newTitle, setNewTitle] = useState('');

    const addLink = () => {
        if(newUrl && newTitle) {
            const updated = [...links, {url: newUrl, title: newTitle}];
            setLinks(updated);
            onSaveLinks(topic, updated);
            setNewUrl(''); setNewTitle('');
        }
    };

    const removeLink = (index) => {
        const updated = links.filter((_, i) => i !== index);
        setLinks(updated);
        onSaveLinks(topic, updated);
    };

    return (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-2xl w-full max-w-xl p-6 relative max-h-[90vh] overflow-y-auto flex flex-col">
                <button onClick={onClose} className="absolute top-4 right-4"><X /></button>
                <h3 className="text-2xl font-bold mb-2 flex items-center gap-2"><BookOpen className="text-blue-600"/> {topic}</h3>
                <p className="text-slate-600 mb-6">Conceitos e referências para estudo.</p>
                <div className="space-y-3 mb-6 flex-grow overflow-y-auto pr-2">
                    {links.map((l, i) => (
                        <div key={i} className="flex justify-between items-center bg-slate-50 p-3 rounded-lg border">
                            <a href={l.url} target="_blank" className="text-blue-600 hover:underline font-medium truncate">{l.title}</a>
                            <Trash2 size={16} className="cursor-pointer text-slate-400 hover:text-red-500" onClick={() => removeLink(i)}/>
                        </div>
                    ))}
                </div>
                <div className="bg-slate-100 p-4 rounded-xl mt-auto">
                    <h4 className="text-xs font-bold uppercase text-slate-500 mb-3">Adicionar Referência</h4>
                    <input className="w-full mb-2 p-2 rounded border" placeholder="Título" value={newTitle} onChange={e=>setNewTitle(e.target.value)} />
                    <input className="w-full mb-3 p-2 rounded border" placeholder="URL" value={newUrl} onChange={e=>setNewUrl(e.target.value)} />
                    <button onClick={addLink} className="w-full bg-blue-600 text-white py-2 rounded font-bold flex justify-center items-center gap-2"><Plus size={16}/> Adicionar</button>
                </div>
            </div>
        </div>
    );
};

const ExerciseModal = ({ exercise, onClose }) => (
    <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl w-full max-w-2xl p-8 relative max-h-[90vh] overflow-y-auto">
            <button onClick={onClose} className="absolute top-4 right-4"><X /></button>
            <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-purple-100 rounded-xl text-purple-600"><Code size={24}/></div>
                <h3 className="text-2xl font-bold">{exercise.title}</h3>
            </div>
            <div className="bg-slate-50 p-6 rounded-xl border mb-6">
                <h4 className="font-bold text-slate-500 uppercase text-xs mb-4 flex items-center gap-2"><Terminal size={14}/> Passo a Passo</h4>
                <div className="whitespace-pre-wrap text-slate-700 leading-relaxed font-medium">{exercise.desc}</div>
            </div>
            <button onClick={onClose} className="w-full py-3 bg-purple-600 text-white rounded-xl font-bold">Entendi</button>
        </div>
    </div>
);

const BestPracticeModal = ({ practice, onClose }) => (
    <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl w-full max-w-2xl p-8 relative max-h-[90vh] overflow-y-auto border-t-8 border-amber-500">
            <button onClick={onClose} className="absolute top-4 right-4"><X /></button>
            <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-amber-100 rounded-xl text-amber-600"><Lightbulb size={24}/></div>
                <h3 className="text-2xl font-bold">{practice.title}</h3>
            </div>
            <p className="text-lg text-slate-700 mb-6">{practice.desc}</p>
            {practice.exampleCode && (
                <div className="bg-slate-900 p-6 rounded-xl overflow-x-auto">
                    <pre className="text-emerald-400 font-mono text-sm">{practice.exampleCode}</pre>
                </div>
            )}
        </div>
    </div>
);

const ProgressBar = ({ progress }) => (
  <div className="w-full bg-slate-200 rounded-full h-2 dark:bg-slate-700 mt-2 overflow-hidden">
    <div 
        className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full transition-all duration-700 ease-out shadow-[0_0_10px_rgba(59,130,246,0.5)]" 
        style={{ width: `${progress}%` }}
    ></div>
  </div>
);

const ModuleDashboard = ({ level, onBack, onToggleTopic, completedTopics, currentTier, userLinks, onSaveLinks, onImportLinks }) => {
  const [activeModule, setActiveModule] = useState(level.modules[0]);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [theoryTopic, setTheoryTopic] = useState(null);
  const [selectedExercise, setSelectedExercise] = useState(null);
  const [selectedBestPractice, setSelectedBestPractice] = useState(null);
  const [quizOpen, setQuizOpen] = useState(false);

  const handleExport = () => {
      const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(userLinks, null, 2));
      const a = document.createElement('a');
      a.href = dataStr; a.download = "meus_estudos_links.json"; a.click();
  };
  
  const handleImportClick = () => {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'application/json';
    input.onchange = e => {
      const file = e.target.files[0];
      const reader = new FileReader();
      reader.onload = event => {
        try {
          const imported = JSON.parse(event.target.result);
          onImportLinks(imported);
          alert("Links importados com sucesso!");
        } catch(err) {
          alert("Erro ao ler JSON: " + err.message);
        }
      }
      reader.readAsText(file);
    };
    input.click();
  };

  const moduleProgress = useMemo(() => {
      if(!activeModule.topics) return 0;
      const total = activeModule.topics.length;
      const completed = activeModule.topics.filter(t => completedTopics.has(`${activeModule.id}-${t}`)).length;
      return Math.round((completed / total) * 100);
  }, [activeModule, completedTopics]);

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header title={level.title} showBack onBack={onBack} globalProgress={completedTopics.size} currentTier={currentTier} />
      
      {theoryTopic && (
        <TheoryModal 
            topic={theoryTopic} 
            onClose={() => setTheoryTopic(null)} 
            onSaveLinks={onSaveLinks}
            initialLinks={userLinks[theoryTopic]} 
        />
      )}
      {selectedExercise && <ExerciseModal exercise={selectedExercise} onClose={() => setSelectedExercise(null)} />}
      {selectedBestPractice && <BestPracticeModal practice={selectedBestPractice} onClose={() => setSelectedBestPractice(null)} />}
      {quizOpen && <QuizWindow moduleId={activeModule.id} onClose={() => setQuizOpen(false)} onFinish={(score) => console.log("Score:", score)} />}

      <div className="flex flex-grow overflow-hidden relative">
        <button className="md:hidden absolute top-4 left-4 z-30 bg-white p-2 rounded shadow border" onClick={() => setSidebarOpen(!sidebarOpen)}>
            {sidebarOpen ? <X /> : <Menu />}
        </button>

        <aside className={`${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} fixed md:relative md:translate-x-0 z-20 w-72 bg-slate-50 border-r h-[calc(100vh-6rem)] overflow-y-auto transition-transform duration-300 flex flex-col`}>
            <div className="p-6 flex-grow">
                <h3 className="text-xs font-bold text-slate-400 uppercase mb-4">Módulos</h3>
                <div className="space-y-2">
                    {level.modules.map(m => (
                        <button key={m.id} onClick={() => { setActiveModule(m); setSidebarOpen(false); }} 
                            className={`w-full text-left px-4 py-3 rounded-xl text-sm font-medium transition-all ${activeModule.id === m.id ? 'bg-white shadow text-blue-700' : 'text-slate-600 hover:bg-white'}`}>
                            <div className="flex items-center justify-between">
                                <span>{m.title.split(':')[0]}</span>
                                {moduleProgress === 100 && activeModule.id === m.id && <CheckCircle size={14} className="text-green-500" />}
                            </div>
                        </button>
                    ))}
                </div>
            </div>
            <div className="p-6 border-t">
                <div className="flex justify-between text-xs font-bold text-slate-500 mb-1"><span>Progresso</span><span>{moduleProgress}%</span></div>
                <div className="w-full bg-slate-200 rounded-full h-2"><div className="bg-blue-600 h-2 rounded-full transition-all" style={{width: `${moduleProgress}%`}}></div></div>
            </div>
        </aside>

        <main className="flex-1 overflow-y-auto h-[calc(100vh-6rem)] bg-white p-6 md:p-12">
            <div className="max-w-5xl mx-auto pb-20">
                <div className="mb-10">
                    <span className="px-3 py-1 bg-blue-100 text-blue-700 text-xs font-bold rounded-full uppercase">Módulo {activeModule.id}</span>
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2 mb-4">{activeModule.title}</h2>
                    <p className="text-lg text-slate-600">{activeModule.summary}</p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 mb-10">
                    <div className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm relative hover:shadow-md transition-all">
                        <div className="flex items-center mb-6 text-blue-600 gap-2"><BookOpen /> <h3 className="font-bold text-lg text-slate-900">Teoria</h3></div>
                        <ul className="space-y-3 mb-12">
                            {activeModule.topics.map((t, i) => {
                                const id = `${activeModule.id}-${t}`;
                                const done = completedTopics.has(id);
                                return (
                                    <li key={i} className="flex items-center justify-between group">
                                        <div onClick={() => onToggleTopic(id)} className={`flex-grow flex items-center p-3 rounded-lg border cursor-pointer transition-all mr-2 ${done ? 'bg-green-50 border-green-200 text-slate-500' : 'hover:bg-slate-50 text-slate-700'}`}>
                                            <div className={`mr-3 ${done ? 'text-green-500' : 'text-slate-300'}`}>{done ? <CheckSquare size={20}/> : <div className="w-5 h-5 border-2 rounded" />}</div>
                                            <span className={`text-sm ${done ? 'line-through' : ''}`}>{t}</span>
                                        </div>
                                        <button onClick={() => setTheoryTopic(t)} className="p-2 bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-100"><BookOpen size={18}/></button>
                                    </li>
                                );
                            })}
                        </ul>
                        <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-4">
                            <button onClick={handleExport} className="flex items-center text-xs font-bold text-slate-400 hover:text-blue-600 uppercase gap-2"><Download size={14}/> Exportar Links</button>
                            <span className="text-slate-300">|</span>
                            <button onClick={handleImportClick} className="flex items-center text-xs font-bold text-slate-400 hover:text-blue-600 uppercase gap-2"><Upload size={14}/> Importar Links</button>
                        </div>
                    </div>

                    <div className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all">
                        <div className="flex items-center mb-6 text-emerald-600 gap-2"><Terminal /> <h3 className="font-bold text-lg text-slate-900">Checklist Prático</h3></div>
                        <ul className="space-y-3">
                            {activeModule.practice.map((p, i) => (
                                <li key={i} className="flex items-start text-slate-700 p-3 bg-slate-50 rounded-lg"><Star size={16} className="text-yellow-400 mr-2 mt-1 flex-shrink-0" /> <span className="text-sm">{p}</span></li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="mb-10 bg-gradient-to-br from-amber-50 to-orange-50 border border-amber-100 rounded-2xl p-8 relative overflow-hidden">
                    <div className="relative z-10">
                        <div className="flex items-center gap-3 mb-6 text-amber-800"><Shield /> <h3 className="font-bold text-xl">Boas Práticas</h3></div>
                        <div className="grid sm:grid-cols-2 gap-4">
                            {activeModule.bestPractices?.map((bp, i) => (
                                <div key={i} onClick={() => setSelectedBestPractice(bp)} className="bg-white/80 p-4 rounded-xl border border-amber-100 cursor-pointer hover:shadow-md transition-all">
                                    <h4 className="font-bold text-amber-800 text-sm mb-1 flex items-center gap-2"><Lightbulb size={14}/> {bp.title}</h4>
                                    <p className="text-xs text-amber-900/70 line-clamp-2">{bp.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="bg-slate-900 rounded-2xl p-8 text-white relative overflow-hidden">
                    <div className="relative z-10">
                        <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-700">
                            <div className="flex items-center gap-3 text-purple-400"><Code /> <h3 className="font-bold text-2xl text-white">Desafios Práticos</h3></div>
                        </div>
                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                            {activeModule.exercises?.map((ex, i) => (
                                <div key={i} onClick={() => setSelectedExercise(ex)} className="bg-slate-800 p-5 rounded-xl border border-slate-700 cursor-pointer hover:bg-slate-700 transition-all">
                                    <span className="font-bold text-sm mb-2 block text-slate-200">{ex.title}</span>
                                    <div className="flex justify-between items-center mt-4"><span className="text-[10px] uppercase font-bold text-slate-500">Ver Passo a Passo</span><ChevronRight size={14} className="text-purple-400"/></div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
{/* 
                <div className="mt-8 flex justify-center">
                    <button onClick={() => setQuizOpen(true)} className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-bold flex items-center gap-2 shadow-lg hover:shadow-blue-500/20 transition-all"><Play size={20}/> Fazer Quiz do Módulo</button>
                </div> */}
            </div>
        </main>
      </div>
    </div>
  );
};

// --- APP ---
export default function App() {
  const [view, setView] = useState('landing');
  const [level, setLevel] = useState(null);
  
  // -- PERSISTÊNCIA DE PROGRESSO --
  const [completed, setCompleted] = useState(() => {
    try {
      const saved = localStorage.getItem('completedTopics');
      return saved ? new Set(JSON.parse(saved)) : new Set();
    } catch (e) {
      console.error("Erro ao carregar progresso", e);
      return new Set();
    }
  });

  useEffect(() => {
    localStorage.setItem('completedTopics', JSON.stringify([...completed]));
  }, [completed]);
  
  // -- PERSISTÊNCIA DE LINKS --
  const [userLinks, setUserLinks] = useState(() => {
    try {
        const saved = localStorage.getItem('userLinks');
        return saved ? JSON.parse(saved) : {};
    } catch (e) {
        console.error("Erro ao carregar links", e);
        return {};
    }
  });

  useEffect(() => {
    localStorage.setItem('userLinks', JSON.stringify(userLinks));
  }, [userLinks]);

  const toggle = (id) => {
      const n = new Set(completed);
      n.has(id) ? n.delete(id) : n.add(id);
      setCompleted(n);
  };

  const saveLinks = (topic, links) => {
      setUserLinks(prev => ({...prev, [topic]: links}));
  };
  
  const importLinks = (importedData) => {
      setUserLinks(prev => ({ ...prev, ...importedData }));
  };

  return (
    <div className="font-sans text-slate-900 bg-white">
      {view === 'landing' && (
        <div className="min-h-screen flex flex-col">
            <Header title="DevRoadmap" globalProgress={completed.size} currentTier="" />
            <main className="flex-grow flex flex-col items-center justify-center p-4 bg-slate-50">
                <h2 className="text-4xl font-extrabold text-slate-900 mb-12 text-center tracking-tight">Escolha sua Jornada</h2>
                <div className="grid md:grid-cols-2 gap-8 w-full max-w-5xl">
                    <div onClick={() => setView('roadmap')} className="group bg-white rounded-[2rem] shadow-2xl hover:shadow-3xl transition-all duration-300 cursor-pointer border border-slate-100 overflow-hidden relative hover:-translate-y-2">
                        <div className="h-3 bg-gradient-to-r from-orange-500 to-red-600"></div>
                        <div className="p-10">
                            <div className="flex justify-between items-start mb-8">
                                <div className="p-4 bg-orange-100 rounded-2xl group-hover:bg-orange-500 transition-colors duration-300"><Server className="w-10 h-10 text-orange-600 group-hover:text-white"/></div>
                                <span className="bg-orange-100 text-orange-800 text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wide">Recomendado</span>
                            </div>
                            <h3 className="text-4xl font-black text-slate-900 mb-4 group-hover:text-orange-600 transition-colors">Backend Java</h3>
                            <p className="text-lg text-slate-600 mb-8 leading-relaxed">Do zero à arquitetura de microsserviços. Domine Java, Spring Boot, Docker, AWS e mais.</p>
                            <div className="flex items-center text-orange-600 font-bold text-lg">Ver Roadmap <ChevronRight className="w-6 h-6 ml-2 group-hover:translate-x-2 transition-transform"/></div>
                        </div>
                    </div>
                    
                    <div className="group bg-white rounded-[2rem] shadow-xl hover:shadow-2xl transition-all duration-300 cursor-pointer border border-slate-100 overflow-hidden relative opacity-70 grayscale hover:grayscale-0 hover:opacity-100 hover:-translate-y-2">
                        <div className="h-3 bg-gradient-to-r from-cyan-500 to-blue-600"></div>
                        <div className="p-10">
                            <div className="flex justify-between items-start mb-8">
                                <div className="p-4 bg-cyan-100 rounded-2xl group-hover:bg-cyan-500 transition-colors duration-300"><Monitor className="w-10 h-10 text-cyan-600 group-hover:text-white"/></div>
                                <span className="bg-slate-100 text-slate-500 text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wide">Em Breve</span>
                            </div>
                            <h3 className="text-4xl font-black text-slate-900 mb-4 group-hover:text-cyan-600 transition-colors">Frontend Angular</h3>
                            <p className="text-lg text-slate-600 mb-8 leading-relaxed">Crie interfaces modernas e responsivas. Domine HTML, CSS, JavaScript e Angular.</p>
                            <div className="flex items-center text-cyan-600 font-bold text-lg">Ver Roadmap <ChevronRight className="w-6 h-6 ml-2 group-hover:translate-x-2 transition-transform"/></div>
                        </div>
                    </div>
                </div>
            </main>
            <div className="bg-slate-900 text-slate-400 py-10 border-t border-slate-800 text-center text-sm">© 2024 DevRoadmap. Todos os direitos reservados.</div>
        </div>
      )}
      {view === 'roadmap' && (
        <div className="min-h-screen flex flex-col">
            <Header title="Backend Java Roadmap" showBack onBack={() => setView('landing')} globalProgress={completed.size} currentTier="" />
            <main className="flex-grow p-8 bg-slate-50">
                <div className="max-w-7xl mx-auto mb-12 text-center">
                    <h2 className="text-4xl font-extrabold text-slate-900 mb-4">Seu Caminho para a Maestria</h2>
                    <p className="text-xl text-slate-600 max-w-2xl mx-auto">Siga a trilha passo a passo para evoluir de iniciante a arquiteto de software.</p>
                </div>
                <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {curriculumData.levels.map(l => (
                        <div key={l.id} onClick={() => { setLevel(l); setView('dashboard'); }} className="group bg-white p-8 rounded-[2rem] shadow-lg cursor-pointer hover:-translate-y-2 transition-all border border-slate-100 hover:shadow-2xl relative overflow-hidden">
                           
                            <div className={`w-16 h-16 rounded-2xl bg-${l.color}-200 flex items-center justify-center mb-6 text-${l.color}-600 group-hover:scale-110 transition-transform`}>{l.icon}</div>
                            <h3 className="text-2xl font-bold mb-3 text-slate-900 group-hover:text-blue-600 transition-colors">{l.title}</h3>
                            <p className="text-sm text-slate-500 mb-6 leading-relaxed">{l.description}</p>
                        </div>
                    ))}
                </div>
            </main>
        </div>
      )}
      {view === 'dashboard' && level && (
        <ModuleDashboard 
            level={level} 
            onBack={() => setView('roadmap')} 
            onToggleTopic={toggle} 
            completedTopics={completed} 
            currentTier="" 
            userLinks={userLinks} 
            onSaveLinks={saveLinks}
            onImportLinks={importLinks}
        />
      )}
    </div>
  );
}