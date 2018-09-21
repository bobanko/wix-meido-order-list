
function mapMeidoToWorkers(meidoOrders) {
  console.log(meidoOrders);
  return meidoOrders.map(order => {
    const { employees, contractor } = order;
    let { title } = order;

    if (title.indexOf('origin') >= 0) {
      const titleObj = JSON.parse(title);
      title = titleObj['ru-RU'];
    }

    return employees.map(emp => {
      return {
        name: emp,
        order: {
          title,
          contractor,
        }
      }
    });

  }).reduce((prev, next) => {
    prev.push(...next);
    return prev;
  }, []);
}

module.exports = {
  mapMeidoToWorkers,
};