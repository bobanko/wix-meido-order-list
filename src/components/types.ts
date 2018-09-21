
export type Order = {
  title: string;
  contractor: string;
}

export type Worker = {
  name: string;
  order: Order;
}