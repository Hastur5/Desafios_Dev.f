import { methods as perroServices } from "../services/perro.service";

const getPerros = async (req, res)=>{
    try {
        const query = await perroServices.readPerros(res);
        return query
    } catch (error) {
        res.status(400);
        res.send(error.message);
    }
};

const getPerro = async (req, res)=>{
    try {
        const query = await perroServices.readPerro(req.params,res);
        return query
    } catch (error) {
        res.status(400);
        res.send(error.message);
    }
};

const createPerro = async (req, res)=>{
    try {
        const { id, nombre, apodo, raza, url_imagen, edad, descripcion } = req.body;
        const query = await perroServices.createPerro(id, nombre, apodo, raza, url_imagen, edad, descripcion, res);
        return query
    } catch (error) {
        res.status(400);
        res.send(error.message);
    }
};

const updatePerro = async (req, res)=>{
    try {
        const { id } = req.params;
        const { nombre, apodo, raza, url_imagen, edad, descripcion } = req.body;
        const query = await perroServices.updatePerro( id, nombre, apodo, raza, url_imagen, edad, descripcion, res );
        return query
    } catch (error) {
        res.status(400);
        res.send(error.message);
    };
};

const editPerro = async (req, res)=>{
    try {
        const { id } = req.params;
        const { nombre, apodo, raza, url_imagen, edad, descripcion } = req.body;
        const query = await perroServices.editPerro( id, nombre, apodo, raza, url_imagen, edad, descripcion, res );
        return query
    } catch (error) {
        res.status(400);
        res.send(error.message);
    };
};

const deletePerro = async (req, res)=>{
    try {
        const query = await perroServices.deletePerro(req.params,res);
        return query
    } catch (error) {
        res.status(400);
        res.send(error.message);
    }
};

export const methods ={
    getPerros,
    getPerro,
    createPerro,
    updatePerro,
    deletePerro,
    editPerro
}