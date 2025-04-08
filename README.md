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

  -[Exercise](./MappingTheDomain.md)

## 2) Forum with DDD & Clean Architecture

### ESLint Setup

Install dependencies:
```sh
npm i eslint @rocketseat/eslint-config -D
npm i eslint-plugin-vitest-globals -D
```

Create the ".eslintrc.json" file:

### Clean Archtechture Fundaments

![Clean Architecture](/CleanArchitecture.png "Clean Architecture")

### Folders Refactoring

### Use Case: Create Question

### Unit Tests Refactoring

### Use Case: Search Question

### Tests Factories

### Generating Fake Data

Install the dependencies:
```sh
npm i @faker-js/faker -D
```

### Use Case: Delete Question

### Use Case: Delete Answer

### Use Case: Edit Question

### Use Case: Edit Answer

### Use Case: Choose Best Answer

### Use Case: List Recent Questions

### Use Case: List Question's Answers

### Comments Entity

### Comments Base Class

### Use Case: Comment on Question

### Use Case: Comment on Answer

### Use Case: Delete Comment from the Question

### Use Case: Delete Comment from the Answer

### Use Case: List Question's Comments 

### Use Case: List Answer's Comments 


## 3) Functional Error Handling

### Error Handling Problems

### Functional Error Handling

- [Purify TS](https://gigobyte.github.io/purify/)

### Testing Error Classes

### Create Generic Errors

### Refactoring the Usecases

### Refactoring the Unit Tests

## 4) Aggregates & Watched Lists

### Aggregates & Watched Lists

#### Concepts
- Aggregate
- WatchedList

#### Example
- Order → OrderItem[]
- Order → Shipping

- Question → Attachment[]

#### Creation

- Title
- Content
- Attachments

#### Edition

- Title
- Content

- Add new Attachment (create)
- Remove Previous Attachments (delete)
- Edit Existent Atachments (update)

### AggregateRoot base Class

### Create Question with Atachments

### Pattern: WatchedList

### Edit a Questions with Attachments

### Question Edition Test

### Delete Question Attachments

### Answers Attachments

Check Typescripty errors:
```sh
npx tsc --noEmit
```

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
