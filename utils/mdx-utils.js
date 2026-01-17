import { supabase } from '../services/api'

export const getPosts = async () => {
    let { data: posts, error } = await supabase
        .from('posts')
        .select('*')

        if(error) return [];

        return posts
}

export const getPostBySlug = async (id) => {
    
    let { data: posts, error } = await supabase
        .from('posts')
        .select('*')
        .eq('id', id)
        .single()

        if(error) return {erro: "Post inexistente"}

        return posts
}