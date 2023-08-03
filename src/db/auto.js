import SequelizeAuto from "sequelize-auto";

const auto = new SequelizeAuto("chat", "root", "password", {
  host: "localhost",

  dialect: "mysql",

  directory: "./models", // where to write files

  port: 3306,

  caseModel: "c", // convert snake_case column names to camelCase field names: user_id -> userId

  caseFile: "c", // file names created for each model use camelCase.js not snake_case.js

  singularize: false, // convert plural table names to singular model names

  lang: "esm",

  // useDefine: true,

  additional: {
    underscored: true,

    timestamps: false,
  },

  // tables: ['table1', 'table2', 'myschema.table3'] // use all tables, if omitted

  //...
});

auto.run().then((data) => {
  // console.log(data.tables);      // table and field list
  // console.log(data.foreignKeys); // table foreign key list
  // console.log(data.indexes);     // table indexes
  // console.log(data.hasTriggerTables); // tables that have triggers
  // console.log(data.relations);   // relationships between models
  // console.log(data.text)         // text of generated models
});
