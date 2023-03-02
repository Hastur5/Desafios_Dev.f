import _sequelize from 'sequelize'
// eslint-disable-next-line no-unused-vars
const { Model, Sequelize } = _sequelize

export default class creators extends Model {
  static init (sequelize, DataTypes) {
    return super.init({
      id_creator: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
      },
      name: {
        type: DataTypes.STRING(100),
        allowNull: false
      },
      last_name: {
        type: DataTypes.STRING(100),
        allowNull: true
      },
      age: {
        type: DataTypes.STRING(10),
        allowNull: true
      },
      bio: {
        type: DataTypes.STRING(400),
        allowNull: false
      },
      country: {
        type: DataTypes.STRING(100),
        allowNull: false
      }
    }, {
      sequelize,
      tableName: 'creators',
      schema: 'public',
      timestamps: false,
      indexes: [
        {
          name: 'creators_pkey',
          unique: true,
          fields: [
            { name: 'id_creator' }
          ]
        }
      ]
    })
  }
}
