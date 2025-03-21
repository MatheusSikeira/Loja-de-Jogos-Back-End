CREATE TABLE usuarios (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nome VARCHAR(255) NOT NULL,
  email VARCHAR(255) UNIQUE NOT NULL,
  senha VARCHAR(255) NOT NULL,
  created_at VARCHAR(255) NOT NULL
);

CREATE TABLE jogos (
  id_jogo INT AUTO_INCREMENT PRIMARY KEY,
  nome VARCHAR(255) NOT NULL,
  desenvolvedor VARCHAR(255) NOT NULL,
  plataforma VARCHAR(255) NOT NULL,
  preco DECIMAL(10, 2) NOT NULL,
  usuario_id INT,
  FOREIGN KEY (usuario_id) REFERENCES usuarios(id)
);
CREATE TABLE AtualizacoesJogos (
    id_atualizacao INT PRIMARY KEY AUTO_INCREMENT,
    id_jogo INT NOT NULL, 
    data_atualizacao DATE NOT NULL,
    descricao TEXT,
    responsavel VARCHAR(255),
    FOREIGN KEY (id_jogo) REFERENCES jogos(id_jogo)
);