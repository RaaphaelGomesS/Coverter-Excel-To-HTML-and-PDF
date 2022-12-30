class Processor {
  static Process(data) {
    const array = data.split("\r\n");
    const rows = [];

    array.forEach((row) => {
      const splitArr = row.split(",");
      rows.push(splitArr);
    });

    return rows;
  }
}

export default Processor;
