'use server'

import { Language, LanguageSupabase, ResponseSupabase } from '@/types'
import { createServerClient } from '@supabase/ssr'
import { cookies } from 'next/headers'
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

const { error } = console

export async function createClient() {
  const cookieStore = await cookies()

  return createServerClient(
    process.env.SUPABASE_URL!,
    process.env.SUPABASE_KEY!,
    {
      cookies: {
        getAll() {
          return cookieStore.getAll()
        },
        setAll(cookiesToSet) {
          try {
            cookiesToSet.forEach(({ name, value, options }) =>
              cookieStore.set(name, value, options)
            )
          } catch {
            // The `setAll` method was called from a Server Component.
            // This can be ignored if you have middleware refreshing
            // user sessions.
          }
        },
      },
    }
  )
}

export async function login(formData: FormData) {
  const supabase = await createClient()

  const { data, error: err } = await supabase.auth.signInWithPassword({
    email: formData.get('email') as string,
    password: formData.get('password') as string,
  })

  if (err) {
    error('Login error:', err)
    return { error: err }
  }
  return { data }
}

export async function logout() {
  const supabase = await createClient()
  await supabase.auth.signOut()
  revalidatePath('/', 'layout')
  redirect('/')
}

export async function signup(formData: FormData) {
  const supabase = await createClient()
  const data = {
    email: formData.get('email') as string,
    password: formData.get('password') as string,
  }

  return await supabase.auth.signUp(data)
}

export async function getLanguages() {
  const supabase = await createClient()
  return (await supabase
    .from('language')
    .select('id,type,lang,label')) as ResponseSupabase<LanguageSupabase>
}

export async function getLanguage(language: Language) {
  const supabase = await createClient()
  return (await supabase
    .from('language')
    .select('id,type,lang,label')
    .eq('type', language)) as ResponseSupabase<LanguageSupabase>
}

export async function getUser() {
  const supabase = await createClient()
  return supabase.auth
    .getUser()
    .then((response) => response?.data?.user || null)
    .catch(() => null)
}

export async function changePswProfile(password: string) {
  const supabase = await createClient()
  return supabase.auth.updateUser({ password })
}
