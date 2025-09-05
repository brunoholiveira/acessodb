import conexao from './db.js';

conexao.conecta.query(
    "SELECT * FROM unidade_medida",
    function (err, result) {
        if (err) throw err;
        console.log(result);
    }
)