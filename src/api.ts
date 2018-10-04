export function getOrders(params: String) {
  return fetch(`api/orders/${params}`).then(data => data.json());
}
