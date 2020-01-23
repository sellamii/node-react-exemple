const GET = 'SELECT * FROM userss ORDER BY id ASC' ; 
const GETID = 'SELECT * FROM userss WHERE id = $1';
const POST = 'INSERT INTO userss (name, email) VALUES ($1, $2)'
const PUT ='UPDATE userss SET name = $1, email = $2 WHERE id = $3'
const DELETE = 'DELETE FROM userss where id = $1'

module.exports = { GET ,GETID, POST, PUT , DELETE } ;
