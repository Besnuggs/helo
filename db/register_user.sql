insert into users
(username, password)
VALUES
(${username}, ${password})
returning *;
