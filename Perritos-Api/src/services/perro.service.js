import {getConnection} from "../common/connection"

async function readPerros(response) {
    const connection = await getConnection();
    const result = await connection.query('SELECT * FROM perritos');
    return response.json(result);
};

async function readPerro(body, response) {
    const connection = await getConnection();
    const result = await connection.query('SELECT * FROM perritos WHERE id = ?', body.id);
    return response.json(result);
};

async function createPerro(id, nombre, apodo, raza, url_imagen, edad, descripcion, response) {
    if (id === undefined || nombre === undefined || apodo === undefined || raza === undefined 
        || url_imagen === undefined  ||  edad === undefined || descripcion === undefined ) {
    return response.status(400).json({message:'Por favor, revisa y llena todos los campos.'});
    };
    const connection = await getConnection();
    const result = await connection.query('INSERT INTO `perritos` (`id`, `nombre`, `apodo`, `raza`, `url_imagen`, `edad`, `descripcion` ) VALUES (?,?,?,?,?,?,?)',
     [id, nombre, apodo, raza, url_imagen, edad, descripcion]);
     const [rows] = await connection.query('SELECT * FROM  perritos WHERE id = ?', [id]);
     return response.json(rows);
};

async function updatePerro(id, nombre, apodo, raza, url_imagen, edad, descripcion, response) {
        const connection = await getConnection();
        const result = await connection.query('UPDATE perritos SET nombre = ?, apodo = ?, raza = ?, url_imagen = ?, edad = ?, descripcion = ? WHERE id = ?', 
        [nombre, apodo, raza, url_imagen, edad, descripcion, id]);
        if (result.affectedRows === 0) return response.status(400).json({message:'El perrito con ese ID no fue encontrado'});
        const [rows] = await connection.query('SELECT * FROM  perritos WHERE id = ?', [id]);
        return response.json(rows);
};

async function editPerro(id, nombre, apodo, raza, url_imagen, edad, descripcion, response) {
        const connection = await getConnection();
        const result = await connection.query('UPDATE perritos SET nombre = IFNULL(?, nombre), apodo = IFNULL(?, apodo), raza = IFNULL (?, raza), url_imagen = IFNULL (?, url_imagen), edad = IFNULL (?, edad), descripcion = IFNULL (?, descripcion) WHERE id = ?', 
        [nombre, apodo, raza, url_imagen, edad, descripcion, id]);
        if (result.affectedRows === 0) return response.status(400).json({message:'El perrito con ese ID no fue encontrado'});
        const [rows] = await connection.query('SELECT * FROM  perritos WHERE id = ?', [id]);
        return response.json(rows);
};

async function deletePerro(body, response) {
    const connection = await getConnection();
    const result = await connection.query('DELETE FROM perritos WHERE id = ?', body.id);
    return response.json({message:'Se ha borrado con éxito el perrito de tu corazón :(.'});
};

export const methods = {
    createPerro,
    readPerros,
    readPerro,
    updatePerro,
    deletePerro,
    editPerro
};
