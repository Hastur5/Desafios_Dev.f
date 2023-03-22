/* eslint-disable prefer-const */
/* eslint-disable no-unused-vars */
/* eslint-disable camelcase */
import { sequelize } from "../database/database.js";
import modelosInit from "../models/init-models.js";
import { Op } from "sequelize";

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
  // eslint-disable-next-line prefer-const
  let cuerpo = req.body;

  if ("album" in cuerpo && !("seasons" in cuerpo) && !("chapters" in cuerpo)) {
    addAudio(cuerpo);
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
    console.log("Esto esun audio libro");
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
  let audio_id;
  let performer_id;
  let multimedia_id;
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

    validation = await models.audios.findAll({
      where: { name: cuerpo.audio },
    });
    if (validation.length === 0) {
      response = await models.audios.create({
        name: cuerpo.audio.trim(),
      });
      audio_id = response.dataValues.id_audio;
    } else {
      audio_id = validation[0].dataValues.id_audio;
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
      perfomer_id = validation[0].dataValues.id_performer;
    }

    // validation = await models.songs.findAll({
    //   where: {
    //     duration,
    //     album: album.trim(),
    //     perfomer_id,
    //     audio_id,
    //   },
    // });
    // if (validation.lenght === 0) {
    //   response = await
    // }

    validation = await models.multimedias.findAll({
      where: {
        name: cuerpo.name,
        release_year: cuerpo.release_year,
        creator_id,
        publisher_id,
      },
    });
    if (validation.length === 0) {
      response = await models.multimedias.create({
        name: cuerpo.name,
        description: cuerpo.description,
        original_language: cuerpo.original_language,
        release_year: cuerpo.release_year,
        creator_id,
        publisher_id,
      });
      multimedia_id = response.dataValues.id_multimedia;
    } else {
      console.log("Ya estaba, bro");
    }
    // console.log(validation)
  } catch (e) {
    console.log(e.message);
    // validation.status(500).json({ error: e.message });
  }
  // res.status(200).json(cuerpo)
  console.log("Esto es una buena song");
};

// Se agrega línea para actualziar.
