import db from "../config/db.js"

db.connect()

export async function cadastrarFornecedor(fornecedor) {
    const { nome, cnpj, situacao } = fornecedor

    const fornecedorCadastrado = await findByCnpj(cnpj)
    if (fornecedorCadastrado)
        return "CNPJ já cadastrado."

    return new Promise((resolve, reject) => {
        const query = `INSERT INTO fornecedores (nome, cnpj, situacao) VALUES (?, ?, ?)`;
        db.query(query, [nome, cnpj, situacao], function (error, resultado, fields) {
            if (error)
                reject(error);

            resolve("Cadastro realizado com sucesso");
        });
    });
}

export function findByCnpj(cnpj) {
    return new Promise((resolve, reject) => {
        const query = 'SELECT * FROM fornecedores WHERE cnpj = ?'

        db.query(query, [cnpj], function (error, fornecedores, fields) {
            if (error) {
                reject(error);
            }

            if (fornecedores.length > 0) {
                resolve(fornecedores[0]);
            } else {
                resolve(null);
            }
        });
    });
}
