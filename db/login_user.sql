select * from users
where 
username = ${username} 
AND 
password = ${password}

returning *;
