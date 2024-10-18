const { Stage1 } = require('./stage1.class');
const createModel = require('../../models/stage1.model');
const hooks = require('./stage1.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate'),
    whitelist: ["$populate"],
    multi: ["create"],
  };

  // Initialize our service with any options it requires
  app.use('/stage1', new Stage1(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('stage1');

  // Get the schema of the collections 
  app.get("/stage1Schema", function (request, response) {
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