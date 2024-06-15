// postModel.js
import pool from "../../database/config.js";

//GET ALL SONGS
export const getAllPostsModel = async () => {
    const SQLquery = { 
        text: 'SELECT id, titulo, img, descripcion, likes FROM posts ORDER BY id' 
    };
    try {
        const result = await pool.query(SQLquery);
        console.log(result.rows);
        return result.rows;
    } catch (error) {
        console.log(error);
    }
};

//POST
export const createPostModel = async ({ titulo, url, descripcion }) => {
    const existePost = await validatePost({ url });
        
        if (existePost) {
            return { error: 'Ya existe un registro con el mismo título, URL y descripción.' };
        }
    const SQLquery = {
        text: 'INSERT INTO posts(titulo, img, descripcion, likes) VALUES ($1, $2, $3, $4) RETURNING *',
        values: [titulo, url, descripcion, 0]
    };
    try {
        const result = await pool.query(SQLquery);
        return result.rows[0];
    } catch (error) {
        console.log(error);
    }
};

// Validar si existe post con igual url.
const validatePost = async ({ url }) => {
    const checkQuery = {
    text: `SELECT id FROM posts WHERE img = $1`,
    values: [url]
};

try {
    const checkResult = await pool.query(checkQuery);
    if (checkResult.rows.length > 0) {
        return true ;
    }
} catch (error) {
    console.log(error);
}
return false;
}

//POST
export const likePostModel = async ({ id }) => {
    const SQLquery = {
        text: 'UPDATE posts SET likes = likes + 1 WHERE id = $1',
        values: [id]
    };
    try {
        const result = await pool.query(SQLquery);
        return result.rows[0];
    } catch (error) {
        console.log(error);
    }
};

//DELETE
export const deletePostModel = async ({ id }) => {
    const SQLquery = {
        text: 'DELETE FROM posts WHERE id = $1',
        values: [id]
    };
    try {
        const result = await pool.query(SQLquery);
        return result.rows[0];
    } catch (error) {
        console.log(error);
    }
};

