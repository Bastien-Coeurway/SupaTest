import { supabase } from '../lib/initSupabase';

export async function supaInsert(liveData) {
    console.log(liveData)

    const { data, error } = await supabase
    .from('tableTest')
    .insert([
      {
        name: liveData.name,
        email: liveData.email,
        message: liveData.message
      }
    ])

    console.log("Done")

    return true
  }