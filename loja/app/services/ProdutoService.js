const db = require("../config/db")
db.connect()

class ProdutoService {
    findAllProdutoId() {
        db.query(`select * from produtos`, function (error, produtos, fields) {

            if (error) throw error

            produtos.forEach(produtos => {
                console.log(produtos.nome)
            });
        });
    }

    findById(id, callback) {
        const sql = 'SELECT * FROM produtos WHERE id = ?';

        db.execute(sql, [id], function (error, produtos, fields) {
            if (error) {
                throw error;
            }

            if (produtos.length > 0) {
                callback(produtos[0]);
            } else {
                callback(null);
            }
        });
    }
}

module.exports = ProdutoService