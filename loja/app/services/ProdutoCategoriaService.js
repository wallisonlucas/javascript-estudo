const db = require("../config/db")
db.connect()

class ProdutoCategoriaService {
    findAllProdutoCategoriaId() {
        db.query(`select * from produto_categorias`, function (error, produto_categorias, fields) {

            if (error) throw error

            produto_categorias.forEach(produto_categorias => {
                console.log(produto_categorias.nome)
            });
        });
    }

    findById(produto_id, categoria_id, callback) {
        const sql = 'SELECT * FROM produto_categorias WHERE produto_id, categoria_id = ?';

        db.execute(sql, [produto_id, categoria_id], function (error, produto_categorias, fields) {
            if (error) {
                throw error;
            }

            if (produto_categorias.length > 0) {
                callback(produto_categorias[0]);
            } else {
                callback(null);
            }
        });
    }
}

module.exports = ProdutoCategoriaService