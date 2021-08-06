-- Table for user
CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL
);

-- Table for the tasks

CREATE TABLE "toDo" (
"id" SERIAL PRIMARY KEY,
"user_id" int REFERENCES "user",
"task" VARCHAR(250) NOT NULL,
"completed" BOOLEAN DEFAULT FALSE,
"completed_date" TIMESTAMP DEFAULT CURRENT_TIMESTAMP;
);