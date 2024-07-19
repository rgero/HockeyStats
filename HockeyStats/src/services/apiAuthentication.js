import supabase from './supabase';

export const signInWithGoogle = async () => {
  const { data, error } = await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: {
        redirectTo:  import.meta.env.VITE_REDIRECT_URL
      }
  })

  if (error)
  {
    throw new Error(error.message);
  }
  return data;
}
