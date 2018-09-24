export function getOrders(params: String) {
  return fetch(`/orders/${params}`).then(data => data.json());
}
