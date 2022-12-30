import pdf from "html-pdf";

class PDFWriter {
  static WritePDF(filename, html) {
    pdf.create(html, {}).toFile(filename, () => {});
  }
}

export default PDFWriter;
