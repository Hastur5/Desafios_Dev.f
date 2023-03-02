import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class file_types extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    id_file_type: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    extension: {
      type: DataTypes.STRING(7),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'file_types',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "file_types_pkey",
        unique: true,
        fields: [
          { name: "id_file_type" },
        ]
      },
    ]
  });
  }
}
