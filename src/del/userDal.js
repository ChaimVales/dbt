import supabase  from '../db/supabase';

// const userDal = {
export const  createUser  = async (username, password) => {
        const { data, error } = await supabase.from('users').insert([{ username, password }]).select().single();
        if (error) throw error;
        return data;
    }
export const  findByUsername = async (username) => {
        const { data, error } = await supabase.from('users').select('*').eq('username', username).single();
        return data;
    }
    // };
