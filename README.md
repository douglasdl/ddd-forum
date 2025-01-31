# ddd-forum

## 1) DDD Fundaments

- Domain-Driven Design
    - Domain: knowledge area.
      - Domain Experts
        - Speech 
      - Ubiquitous Language
      - User (Client, Supplier, Atendant, Barman, etc)
  - Aggregates
  - Value Objects
  - Domain Events
  - Bounded Contexts
  - Entities
  - Use Cases 

### Software Design and DDD

### Entities and UseCases

### First UseCase

### Mapping the relationships

### External Dependencies

### Slug Value Object

### Entity Base Class

### Entities ID

### Properties Mapping

### Entities Creation Abstraction

### Entities Getters and Setters

Install Day.js dependencies:
```sh
npm install dayjs
```

### Path Aliases and Vitest Globals

Install Vitest dependencies:
```sh
npm install vite-tsconfig-paths -D
```

### [DDD Glossary](https://efficient-sloth-d85.notion.site/Gloss-rio-DDD-3a81b4df36d348a299ccbc53f38a1665)

### [Mapping the Domain](https://efficient-sloth-d85.notion.site/Atividade-Mapeando-o-dom-nio-38963358ffd74289b824ff73b187165d)

## 2) Forum with DDD & Clean Architecture

## 3) Functional Error Handling

## 4) Aggregates & Watched Lists

## 5) Subdomains & Domain Events

### 


## Project 

Create the project:
```sh
npm init -y
```

Install the dependencies:
```sh
npm i typescript @types/node -D
npm i vitest -D
```

Create the "tsconfig.json" file:
```sh
npx tsc --init
```

Change the targert to ES2020:
```json
{
  "compilerOptions": {
    "target": "ES2020",
    "module": "commonjs",
    "esModuleInterop": true,
    "forceConsistentCasingInFileNames": true,
    "strict": true,
    "skipLibCheck": true
  }
}
```

Create the folders:
```sh
mkdir src/domain/entitites
mkdir src/domain/use-cases
```

Create the files:
```sh
touch src/domain/entitites/instructor.ts
touch src/domain/entitites/question.ts
touch src/domain/entitites/student.ts
```

Test:
```sh
npx vitest run
```
