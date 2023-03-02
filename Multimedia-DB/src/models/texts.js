import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class texts extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    id_text: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    multimedia_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'multimedias',
        key: 'id_multimedia'
      }
    },
    file_type_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'file_types',
        key: 'id_file_type'
      }
    }
  }, {
    sequelize,
    tableName: 'texts',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "texts_pkey",
        unique: true,
        fields: [
          { name: "id_text" },
        ]
      },
    ]
  });
  }
}
