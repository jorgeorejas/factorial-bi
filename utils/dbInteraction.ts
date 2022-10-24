import { PrismaClient } from "@prisma/client";
import prisma from "./client";

class DataBaseInteraction {
  prisma: PrismaClient;
  constructor() {
    this.prisma = prisma;
  }

  async getSales(): Promise<Sale[]> {
    const sales = await this.prisma.sales.findMany({
      orderBy: {
        date: "desc",
      },
    });

    return sales.map((sale) => {
      return {
        id: sale.id,
        name: sale.client,
        price: sale.value,
        date: sale.date,
      };
    });
  }

  async getSale(id: string) {
    const sale = await this.prisma.sales.findUnique({
      where: {
        id: id,
      },
    });
    return sale;
  }

  async createSale(name: string, price: number) {
    const sale = await this.prisma.sales.create({
      data: {
        client: name,
        value: price,
      },
    });
    return sale;
  }

  async removeSale(id: string) {
    const sale = await this.prisma.sales.delete({
      where: {
        id: id,
      },
    });
    return sale;
  }

  async removeAll() {
    const sales = await this.prisma.sales.deleteMany({});
    return sales;
  }
}

export default DataBaseInteraction;
