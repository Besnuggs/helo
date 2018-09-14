CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  username varchar(20),
  password varchar(20),
  profile_pic text
);

CREATE TABLE posts (
  id SERIAL PRIMARY KEY,
  title varchar(45),
  img text,
  content text,
  author_id integer REFERENCES users (id)
);