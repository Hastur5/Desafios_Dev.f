import _sequelize from 'sequelize'
// eslint-disable-next-line no-unused-vars
const { Model, Sequelize } = _sequelize

export default class videos extends Model {
  static init (sequelize, DataTypes) {
    return super.init({
      id_video: {
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
      tableName: 'videos',
      schema: 'public',
      timestamps: false,
      indexes: [
        {
          name: 'videos_pkey',
          unique: true,
          fields: [
            { name: 'id_video' }
          ]
        }
      ]
    })
  }
}
