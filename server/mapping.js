const { sortBy } = require("lodash");

function mapMeidoToWorkers(meidoOrders) {
  const workers = meidoOrders
    .map(order => {
      const { employees, contractor } = order;
      let { title } = order;

      if (title.indexOf("origin") >= 0) {
        const titleObj = JSON.parse(title);
        title = titleObj["ru-RU"];
      }

      return employees.map(emp => {
        return {
          name: emp,
          order: {
            title,
            contractor
          }
        };
      });
    })
    .reduce((prev, next) => {
      prev.push(...next);
      return prev;
    }, []);

  return sortBy(workers, w => w.name.toLowerCase());
}

module.exports = {
  mapMeidoToWorkers
};
