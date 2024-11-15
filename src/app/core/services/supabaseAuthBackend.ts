import { createClient } from '@supabase/supabase-js';

class SupabaseAuthBackend {
  public supabase: any;

  constructor(supabaseConfig: any) {
    this.supabase = createClient(supabaseConfig.url, supabaseConfig.publicKey);
  }

  loginUser = async (email: string, password: string) => {
    const { data, error } = await this.supabase.auth.signInWithPassword({
      email: email,
      password: password,
    });
    if (error) throw error;
    sessionStorage.setItem('authUser', JSON.stringify(data));
    return data;
  };

  logout = async () => {
    const { error } = await this.supabase.auth.signOut();
    if (error) throw error;
    sessionStorage.removeItem('authUser');
  };

  registerUser = async (email: string, password: string) => {
    const { data, error } = await this.supabase.auth.signUp({
      email: email,
      password: password,
    });
    if (error) throw error;
    return data;
  };

  getAuthenticatedUser = () => {
    return JSON.parse(sessionStorage.getItem('authUser')!);
  };

  forgetPassword = async (email: string) => {
    const { error } = await this.supabase.auth.api.resetPasswordForEmail(email);
    if (error) throw error;
  };
}

let _supabaseBackend: SupabaseAuthBackend | null = null;

const initSupabaseBackend = (config: any) => {
  if (!_supabaseBackend) {
    _supabaseBackend = new SupabaseAuthBackend(config);
  }
  return _supabaseBackend;
};

const getSupabaseBackend = () => {
  return _supabaseBackend;
};

export { initSupabaseBackend, getSupabaseBackend };
