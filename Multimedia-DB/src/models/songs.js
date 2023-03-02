import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class songs extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    id_song: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    album: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    duration: {
      type: DataTypes.STRING(5),
      allowNull: false
    },
    audio_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'audios',
        key: 'id_audio'
      }
    },
    performer_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'songs_performers',
        key: 'id_performer'
      }
    }
  }, {
    sequelize,
    tableName: 'songs',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "songs_pkey",
        unique: true,
        fields: [
          { name: "id_song" },
        ]
      },
    ]
  });
  }
}
