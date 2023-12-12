import sqlite3 from 'sqlite3';
// Abrir uma conexão com o banco de dados (ou criar se não existir)
const db = new sqlite3.Database(':memory:');

// Executar comandos SQL
db.serialize(() => {
  db.run("CREATE TABLE user (id INT, name TEXT)");

  db.run("INSERT INTO user VALUES (1, 'John Doe')");

  db.each("SELECT id, name FROM user", (err, row) => {
    console.log(`${row.id}: ${row.name}`);
  });
});

// Fechar a conexão após executar as operações necessárias
db.close();
