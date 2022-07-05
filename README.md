
# Eztasks

Full stack application for task management.

Obs.: This is a technical challenge for "Ebytr" company.

Expected features in the challenge:

- View the task list
- This list must be sorted alphabetically, by date created or by status
- Insert a new task in the list
- Remove a task from the list
- Update a task from the list
- The task must have an editable status: pending, in progress or ready


## Tech Stack

**Front-end:** TypeScript, Next.js, Sass

**Back-end:** TypeScript, NestJS, Prisma ORM, Joi OSV, Jest


## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

BACK-END:

`DATABASE_URL` Example: mysql://db_user:db_password@localhost:db_port/eztasks

[Reference: Prisma - Connecting your database](https://www.prisma.io/docs/getting-started/setup-prisma/add-to-existing-project/relational-databases/connect-your-database-typescript-mysql#connecting-your-database)

## Installation

Install my-project with npm

```bash
  git clone git@github.com:joelsalmeida/eztasks.git
  cd eztasks
  
  cd back-end && npm install
  cd ../front-end && npm install
```
Running locally with dev environment

```bash
  ## back-end aplication
  npm run start:dev

  ## front-end aplication
  npm run dev
```
## API Reference

#### **GET all todos**

```http
  GET /todos
```
---

#### **GET todo by ID**

```http
  GET /todos/:id
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. task ID |

---

#### **POST todo**

| Body property | Type     | Description                       |
| :--------     | :------- | :-------------------------------- |
| `title`       | `string` | **Required**. task title |
| `description` | `string` | **Optional**. task description|
| `status`      | `string` | **Required**. task status : "In progress" or "Done"|
| `userId`      | `string` | **Required**. current user ID |
