import DataProcessor from "../utils/dataProcessor";

const ExampleData: Sale[] = [
  {
    id: "1",
    name: "John",
    date: new Date(),
    price: 500,
  },
  {
    id: "2",
    name: "Pepe",
    date: new Date(),
    price: 500,
  },
  {
    id: "3",
    name: "Juan",
    date: new Date(),
    price: 500,
  },
];

const dataProcessor = new DataProcessor(ExampleData);

describe("DataProcessor", () => {
  it("should return the sum of all the prices of the sales in the data array", () => {
    expect(dataProcessor.sumPrices()).toBe(1500);
  });

  it("should return the total of sales", () => {
    expect(dataProcessor.totalSales()).toBe(3);
  });

  it("should return the average of all the prices of the sales in the data array", () => {
    expect(dataProcessor.averagePrices()).toBe(500);
  });

  it("should return the sum of all the prices for each day of the sales in the data array", () => {
    expect(dataProcessor.sumPricesByDay()).toEqual([
      {
        time: new Date().toLocaleDateString(),
        "Aggregated Revenue": 1500,
        "Total Clients": 3,
      },
    ]);
  });
});
