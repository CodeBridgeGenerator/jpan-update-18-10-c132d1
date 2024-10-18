const { Stage2 } = require('./stage2.class');
const createModel = require('../../models/stage2.model');
const hooks = require('./stage2.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate'),
    whitelist: ["$populate"],
    multi: ["create"],
  };

  // Initialize our service with any options it requires
  app.use('/stage2', new Stage2(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('stage2');

  // Get the schema of the collections 
  app.get("/stage2Schema", function (request, response) {
    const schema = createModel(app).schema.tree;
    const result = Object.keys(schema).map(key => {
      return {
        field: key,
        properties: schema[key]
      };
    });
    return response.status(200).json(result);
  });

  service.hooks(hooks);
};