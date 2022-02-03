import { MongoClient } from "mongodb";
import { Writable } from "stream";

const CONNEXAO_URI =
  "mongodb://usrsins:JkmahsiqUaxZ@mdbd104:27017,mdbd105:27017,mdbd106:27017/sins?authSource=admin&replicaSet=MongoDBDev4";

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
