const db = require("../config/db");

class ClienteModel {
  static async listar() {
    const [rows] = await db.query("SELECT * FROM clientes ORDER BY id DESC");
    return rows;
  }

  static async criar(dados) {
    const { nome, cpf, telefone, email, endereco } = dados;

    const [result] = await db.query(
      `INSERT INTO clientes (nome, cpf, telefone, email, endereco)
       VALUES (?, ?, ?, ?, ?)`,
      [nome, cpf, telefone, email, endereco]
    );

    return { id: result.insertId, ...dados };
  }
}

module.exports = ClienteModel;