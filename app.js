import Reader from "./src/Reader.js";
import Processor from "./src/Processor.js";
import Table from "./src/Table.js";
import HtmlParser from "./src/HtmlParser.js";
import Writer from "./src/Writer.js";
import PDFWriter from "./src/PDFWriter.js";

const leitor = new Reader();
const escritor = new Writer();

async function main() {
  const dados = await leitor.Read("./archives/Livros.csv");
  const dadosProcessor = Processor.Process(dados);

  const users = new Table(dadosProcessor);

  const html = await HtmlParser.Parse(users);

  escritor.Write("./HTML/" + Date.now() + ".html", html);
  PDFWriter.WritePDF("./PDF/" + Date.now() + ".PDF", html);
}

main();
