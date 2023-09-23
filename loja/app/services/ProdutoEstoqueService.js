const db = require("../config/db")
db.connect()

class ProdutoEstoqueService {
    findAllProdutoEstoquesId() {
        db.query(`select * from produto_estoques`, function (error, produto_estoques, fields) {

            if (error) throw error

            produto_estoques.forEach(produto_estoques => {
                console.log(produto_estoques.nome)
            });
        });
    }

    findById(id, callback) {
        const sql = 'SELECT * FROM produto_estoques WHERE id = ?';

        db.execute(sql, [id], function (error, produto_estoques, fields) {
            if (error) {
                throw error;
            }

            if (produto_estoques.length > 0) {
                callback(produto_estoques[0]);
            } else {
                callback(null);
            }
        });
    }
}

module.exports = ProdutoEstoqueService