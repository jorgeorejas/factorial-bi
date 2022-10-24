class DataProcessor {
  data: Sale[];
  constructor(private myData: Sale[]) {
    this.data = myData;
  }

  // This function should return the sum of all the prices
  // of the sales in the data array
  sumPrices() {
    return this.data.reduce((acc, sale) => acc + sale.price, 0);
  }

  // This function should return the total of sales
  totalSales() {
    return this.data.length;
  }

  // This function should return the average of all the prices
  // of the sales in the data array
  averagePrices() {
    return this.sumPrices() / this.data.length;
  }

  // This function should return the sum of all the prices for each
  // day of the sales in the data array
  sumPricesByDay(): GraphData[] {
    let data: GraphData[] = [];
    // sort data by date
    this.data.sort(
      (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
    );
    this.data.map((sale, i) => {
      let date = new Date(sale.date).toLocaleDateString();
      let price = sale.price;
      // checks if the month is already in the data array
      let monthIndex = data.findIndex((item) => item.time === date);

      // if it is, it will add the price to the total
      if (monthIndex !== -1) {
        data[monthIndex]["Aggregated Revenue"] += price;
        data[monthIndex]["Total Clients"] += 1;
      } else {
        // if it is not, it will add a new object to the data array
        data.push({
          time: date,
          "Aggregated Revenue": price,
          "Total Clients": 1,
        });
      }
    });

    return data;
  }

  // a function that calculates the average of prices by day
  averagePricesByDay(): average {
    let out: average = {
      Average: this.averageCalculator({
        total: this.sumPricesByDay().length,
        sum: this.sumPrices(),
      }),
      Total: this.sumPricesByDay().length,
    };
    return out;
  }

  // This function should return the sum of all the prices for each
  // hour of the sales in the data array
  sumPricesByHour(): GraphData[] {
    let data: GraphData[] = [];
    // sort data by date
    this.data.sort(
      (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
    );
    this.data.map((sale, i) => {
      let date =
        new Date(sale.date).toLocaleDateString("es-ES") +
        " - " +
        new Date(sale.date).toLocaleTimeString("es-ES", {
          hour: "2-digit",
        }) +
        ":00";
      let price = sale.price;
      // checks if the month is already in the data array
      let monthIndex = data.findIndex((item) => item.time === date);

      // if it is, it will add the price to the total
      if (monthIndex !== -1) {
        data[monthIndex]["Aggregated Revenue"] += price;
        data[monthIndex]["Total Clients"] += 1;
      } else {
        // if it is not, it will add a new object to the data array
        data.push({
          time: date,
          "Aggregated Revenue": price,
          "Total Clients": 1,
        });
      }
    });

    return data;
  }

  // a function that calculates the average of prices by hour
  averagePricesByHour(): average {
    let out: average = {
      Average: this.averageCalculator({
        total: this.sumPricesByHour().length,
        sum: this.sumPrices(),
      }),
      Total: this.sumPricesByHour().length,
    };
    return out;
  }

  // This function should return the sum of all the prices for each
  // minute of the sales in the data array
  sumPricesByMinute(): GraphData[] {
    let data: GraphData[] = [];
    // sort data by date
    this.data.sort(
      (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
    );
    this.data.map((sale, i) => {
      let date =
        new Date(sale.date).toLocaleDateString("es-ES") +
        " - " +
        new Date(sale.date).toLocaleTimeString("es-ES", {
          hour: "2-digit",
          minute: "2-digit",
        });
      let price = sale.price;
      // checks if the month is already in the data array
      let monthIndex = data.findIndex((item) => item.time === date);

      // if it is, it will add the price to the total
      if (monthIndex !== -1) {
        data[monthIndex]["Aggregated Revenue"] += price;
        data[monthIndex]["Total Clients"] += 1;
      } else {
        // if it is not, it will add a new object to the data array
        data.push({
          time: date,
          "Aggregated Revenue": price,
          "Total Clients": 1,
        });
      }
    });
    return data;
  }

  // a function that calculates the average of prices by minute
  averagePricesByMinute(): average {
    let out: average = {
      Average: this.averageCalculator({
        total: this.sumPricesByMinute().length,
        sum: this.sumPrices(),
      }),
      Total: this.sumPricesByMinute().length,
    };
    return out;
  }

  private averageCalculator({ total, sum }: { total: number; sum: number }) {
    return sum / total;
  }
}
export default DataProcessor;
