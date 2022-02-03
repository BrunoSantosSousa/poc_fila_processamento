import { MongoClient } from "mongodb";
import { Writable } from "stream";

const CONNEXAO_URI =
  "mongodb://127.0.0.1:27017";

enum Collections {
  FILA_PROCESSAMENTO_EMAIL = "teste",
}

async function iniciar() {
  const cliente = new MongoClient(CONNEXAO_URI);

  const conexao = await cliente.connect();

  const filaCollection = conexao
    .db()
    .collection(Collections.FILA_PROCESSAMENTO_EMAIL);

  const stream = filaCollection.watch([
    {
      $match: {
        operationType: "insert",
      },
    },
  ]);

  //   stream.stream().pipe(
  //     new Writable({
  //       objectMode: true,
  //       write: function (doc, _, cb) {
  //         console.log(doc);
  //         cb();
  //       },
  //     })
  //   );

  stream.on("change", (next) => {
    console.log(next);
  });

  console.log("Servidor de processamento inicializado");
}

iniciar();
