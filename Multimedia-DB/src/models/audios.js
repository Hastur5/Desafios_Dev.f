import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class audios extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    id_audio: {
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
    tableName: 'audios',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "audios_pkey",
        unique: true,
        fields: [
          { name: "id_audio" },
        ]
      },
    ]
  });
  }
}
