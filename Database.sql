-- Table for user
CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL
);

-- Table for the tasks

CREATE TABLE "todo" (
"id" SERIAL PRIMARY KEY,
"user_id" int REFERENCES "user" NOT NULL,
"task" VARCHAR(250) NOT NULL,
"completed" BOOLEAN DEFAULT FALSE,
"date_added" TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
"date_completed" VARCHAR(50) DEFAULT NULL
);