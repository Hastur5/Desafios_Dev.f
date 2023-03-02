import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class songs_performers extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    id_performer: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    name_performer: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    country_performer: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    bio_performer: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'songs_performers',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "songs_performers_pkey",
        unique: true,
        fields: [
          { name: "id_performer" },
        ]
      },
    ]
  });
  }
}
