import _sequelize from "sequelize";
const { Model, Sequelize } = _sequelize;

export default class user extends Model {
  static init(sequelize, DataTypes) {
    return super.init(
      {
        id: {
          autoIncrement: true,
          type: DataTypes.BIGINT.UNSIGNED,
          allowNull: false,
          primaryKey: true,
        },
        name: {
          type: DataTypes.STRING(256),
          allowNull: false,
          unique: "unique_name",
        },
        email: {
          type: DataTypes.STRING(256),
          allowNull: false,
          unique: "unique_emial",
        },
        password: {
          type: DataTypes.STRING(512),
          allowNull: false,
        },
        image_url: {
          type: DataTypes.STRING(512),
          allowNull: true,
        },
        created_at: {
          type: DataTypes.DATE,
          allowNull: true,
          defaultValue: Sequelize.Sequelize.literal("CURRENT_TIMESTAMP"),
        },
        updated_at: {
          type: DataTypes.DATE,
          allowNull: true,
          defaultValue: Sequelize.Sequelize.literal("CURRENT_TIMESTAMP"),
        },
        deleted_at: {
          type: DataTypes.DATE,
          allowNull: true,
        },
      },
      {
        sequelize,
        tableName: "user",
        timestamps: false,
        underscored: true,
        indexes: [
          {
            name: "PRIMARY",
            unique: true,
            using: "BTREE",
            fields: [{ name: "id" }],
          },
          {
            name: "unique_name",
            unique: true,
            using: "BTREE",
            fields: [{ name: "name" }],
          },
          {
            name: "unique_emial",
            unique: true,
            using: "BTREE",
            fields: [{ name: "email" }],
          },
        ],
      },
    );
  }
}
