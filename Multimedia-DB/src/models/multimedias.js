import _sequelize from 'sequelize'
// eslint-disable-next-line no-unused-vars
const { Model, Sequelize } = _sequelize

export default class multimedias extends Model {
  static init (sequelize, DataTypes) {
    return super.init({
      id_multimedia: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
      },
      name: {
        type: DataTypes.STRING(100),
        allowNull: false
      },
      description: {
        type: DataTypes.STRING(400),
        allowNull: false
      },
      original_language: {
        type: DataTypes.STRING(50),
        allowNull: false
      },
      release_year: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      creator_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'creators',
          key: 'id_creator'
        }
      },
      publisher_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: 'publishers',
          key: 'id_publisher'
        }
      }
    }, {
      sequelize,
      tableName: 'multimedias',
      schema: 'public',
      timestamps: false,
      indexes: [
        {
          name: 'multimedias_pkey',
          unique: true,
          fields: [
            { name: 'id_multimedia' }
          ]
        }
      ]
    })
  }
}
