
    module.exports = function (app) {
        const modelName = 'stage1';
        const mongooseClient = app.get('mongooseClient');
        const { Schema } = mongooseClient;
        const schema = new Schema(
          {
            nomborRujukan: { type:  String , required: true },
tajukLatihan: { type:  String , required: true },
dokumen: { type:  [Schema.Types.ObjectId], ref: "document_storages" , required: true },
kategori: { type:  String , required: true },
status: { type:  String , required: true },
pelulus: { type: Schema.Types.ObjectId, ref: "users" },

            
            createdBy: { type: Schema.Types.ObjectId, ref: "users", required: true },
            updatedBy: { type: Schema.Types.ObjectId, ref: "users", required: true }
          },
          {
            timestamps: true
        });
      
       
        if (mongooseClient.modelNames().includes(modelName)) {
          mongooseClient.deleteModel(modelName);
        }
        return mongooseClient.model(modelName, schema);
        
      };