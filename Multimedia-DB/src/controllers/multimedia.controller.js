import { sequelize } from "../database/database.js";
import modelosInit from "../models/init-models.js";
import { Op } from "sequelize";
import file_types from "../models/file_types.js";

const models = modelosInit(sequelize);

// export const getMultimedia = async (req, res) => {
//   let response
//   try {
//     response = await models.multimedias.findAll()
//   } catch (e) {
//     res.status(500).json({ error: e.message })
//   }
//   res.status(200).json(response)
// }

// export const getMultimedia = async (req, res) => {
//     let response
//     try {
//       response = await models.multimedias.findAll({ include: 'audios' })
//     } catch (e) {
//       res.status(500).json({ error: e.message })
//     }
//     res.status(200).json(response)
//   }

export const getMultimedia = async (req, res) => {
  let response;
  try {
    response = await models.multimedias.findAll({
      include: {
        model: models.audios,
        as: "audios",
        include: {
          model: models.songs,
          as: "songs",
          include: "performer",
        },
      },
    });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
  res.status(200).json(response);
};

export const addMultimedia = async (req, res) => {
  let cuerpo = req.body;

  if ("album" in cuerpo && !("seasons" in cuerpo) && !("chapters" in cuerpo)) {
    addAudio(cuerpo);
    console.log("se viene una song!!!");
  } else if (
    "seasons" in cuerpo &&
    !("album" in cuerpo) &&
    !("chapters" in cuerpo)
  ) {
    console.log("podcast");
  } else if (
    "chapters" in cuerpo &&
    !("album" in cuerpo) &&
    !("seasons" in cuerpo)
  ) {
    console.log("Esto es un audio libro");
  } else {
    res.status(500).json({ error: "Tu petición es inválida." });
  }

  // console.log(cuerpo.hasOwnProperty('duration')) Arrojan true si el elemento está en el cuerpo de lo que se pide.
  // console.log('duration' in cuerpo)

  // let response
  // try {
  //
  // } catch (e) {
  //   res.status(500).json({ error: e.message })
  // }
  res.status(200).json(cuerpo);
  console.log();
};

const addAudio = async (cuerpo) => {
  let response;
  let validation;
  let publisher_id;
  let creator_id;
  let file_type_id;
  let audio_id;
  let performer_id;
  let multimedia_id;
  let song_id;
  let { creator_name, last_name, age, bio, country } = cuerpo.creator;
  let { name_performer, country_performer, bio_performer } =
    cuerpo.songs_performer;
  try {
    validation = await models.publishers.findAll({
      where: { name: cuerpo.publisher },
    });
    if (validation.length === 0) {
      response = await models.publishers.create({
        name: cuerpo.publisher.trim(),
      });
      publisher_id = response.dataValues.id_publisher;
    } else {
      publisher_id = validation[0].dataValues.id_publisher;
    }

    validation = await models.creators.findAll({
      where: {
        creator_name,
        last_name,
      },
    });
    if (validation.length === 0) {
      response = await models.creators.create({
        creator_name: creator_name.trim(),
        last_name: last_name.trim(),
        age: age.trim(),
        bio: bio.trim(),
        country: country.trim(),
      });
      creator_id = response.dataValues.id_creator;
    } else {
      creator_id = validation[0].dataValues.id_creator;
    }

    validation = await models.songs_performers.findAll({
      where: { name_performer },
    });
    if (validation.length === 0) {
      response = await models.songs_performers.create({
        name_performer: name_performer.trim(),
        country_performer: country_performer.trim(),
        bio_performer: bio_performer.trim(),
      });
      performer_id = response.dataValues.id_performer;
    } else {
      performer_id = validation[0].dataValues.id_performer;
    }

    validation = await models.multimedias.findAll({
      where: {
        name: cuerpo.name,
        release_year: cuerpo.release_year,
        creator_id,
        publisher_id,
      },
    });
    if (validation.length === 0) {
      validation = await models.multimedias.create({
        name: cuerpo.name.trim(),
        description: cuerpo.description.trim(),
        original_language: cuerpo.original_language.trim(),
        release_year: cuerpo.release_year.trim(),
        creator_id,
        publisher_id,
      });
      multimedia_id = response.dataValues.id_multimedia;
      console.log(multimedia_id);
    } else {
      multimedia_id = validation[0].dataValues.id_multimedia;
      console.log(multimedia_id);
      console.log("Ya estaba, bro");
    }

    validation = await models.file_types.findAll({
      where: { extension: cuerpo.extension },
    });
    if (validation.length === 0) {
      response = await models.file_types.create({
        extension: cuerpo.extension.trim(),
      });
      file_type_id = response.dataValues.id_file_type;
      console.log(file_type_id);
    } else {
      file_type_id = validation[0].dataValues.id_file_type;
      console.log(file_type_id);
    }

    validation = await models.audios.findAll({
      where: {
        multimedia_id,
        file_type_id,
      },
    });
    if (validation.length === 0) {
      response = await models.audios.create({
        multimedia_id,
        file_type_id,
      });
      audio_id = response.dataValues.id_audio;
      console.log(audio_id);
    } else {
      audio_id = validation[0].dataValues.id_audio;
    }

    validation = await models.songs.findAll({
      where: {
        album: cuerpo.album,
        duration: cuerpo.duration,
        performer_id,
      },
    });
    if (validation.length === 0) {
      response = await models.songs.create({
        album: cuerpo.album.trim(),
        duration: cuerpo.duration.trim(),
        audio_id,
        performer_id,
      });
      song_id = response.dataValues.id_song;
      console.log(song_id);
    } else {
      song_id = validation[0].dataValues.id_song;
      console.log(song_id);
    }
  } catch (e) {
    console.log(e.message);
    // validation.status(500).json({ error: e.message });
  }
  // res.status(200).json(cuerpo)
  console.log("Esto es una buena song");
};
