# ddd-forum

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


## Project 

Create the project:
```sh
npm init -y
```

Install the dependencies:
```sh
npm i typescript @types/node -D
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

