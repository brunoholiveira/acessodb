import conexao from './db.js';

conexao.conecta.query(
    "SELECT * FROM unidade_medida",
    function (err, result) {
        if (err) throw err;
        console.log(result);
    }
)

export default {conexao}

let sqlinp = "INSERT INTO produto(id_produto, nome_produto, descricao_produto, preco_produto, id_unid_med) VALUES (02, 'Corda', 'Entrelacada', 8.50, 2)";

conexao.conecta.query(sqlinp, function (err, result) {
    if (err) throw err;
    console.log("o registro", result, "foi inserido");
});