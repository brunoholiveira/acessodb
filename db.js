import { createConnection } from "mysql2";

const conecta = createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "exerciciodb"
});

//conecta.connect(function (err) {
//   if (err) throw err;
//    console.log("Conectado ao banco de dados!");
//});

export default conecta;