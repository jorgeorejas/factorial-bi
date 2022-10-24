type Sale = {
  id: string;
  name: string;
  price: number;
  date: Date;
};

type SaleInput = {
  name: string;
  price: number;
};

type Form = {
  // name should be a useState setState function
  name: any;
  // price should be a useState setState function
  price: any;
};

type DashboardData = {
  total: number;
  accumulated: number;
  byDay: {
    graphData: GraphData[];
    average: average;
  };
  byHour: {
    graphData: GraphData[];
    average: average;
  };
  byMinute: {
    graphData: GraphData[];
    average: average;
  };
};

type GraphData = {
  time: string;
  "Aggregated Revenue": number;
  "Total Clients": number;
};

type average = {
  Average: number;
  Total: number;
};
