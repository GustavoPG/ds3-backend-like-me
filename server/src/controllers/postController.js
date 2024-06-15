import { createPostModel, getAllPostsModel, likePostModel, deletePostModel } from "../models/postModel.js";

// GET
export const getAllPosts = async (req, res) => {
    try {
        const posts = await getAllPostsModel();
        res.status(200).json(posts);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

// POST
export const createPost = async (req, res) => {
    try {
        const { titulo, url, descripcion } = req.body;
        const newPost = await createPostModel({ titulo, url, descripcion });
        res.status(201).json(newPost);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

// PUT
export const likePost = async (req, res) => {
    try {
        const { id } = req.params;
        const newPost = await likePostModel({ id });
        res.status(200).json(newPost);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

// DELETE
export const deletePost = async (req, res) => {
    try {
        const { id } = req.params;
        const newPost = await deletePostModel({ id });
        res.status(200).json(newPost);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
} 