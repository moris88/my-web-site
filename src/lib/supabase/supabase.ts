'use server'

import { Language, LanguageSupabase, ResponseSupabase } from '@/types'
import { createServerClient } from '@supabase/ssr'
import { cookies } from 'next/headers'
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

const { error } = console

export async function createClient() {
  const cookieStore = cookies()

  return createServerClient(
    process.env.SUPABASE_URL!,
    process.env.SUPABASE_KEY!,
    {
      cookies: {
        getAll() {
          const allCookies = cookieStore.getAll()
          return allCookies
        },
        setAll(cookiesToSet) {
          try {
            cookiesToSet.forEach(({ name, value, options }) =>
              cookieStore.set(name, value, options)
            )
          } catch (err) {
            error('Failed to set cookies:', err)
          }
        },
      },
    }
  )
}

export async function clearAllCookies() {
  const cookieStore = cookies()

  // Ottieni tutti i cookie attuali
  const allCookies = cookieStore.getAll()

  // Cancella ogni cookie impostandolo a una stringa vuota con una data scaduta
  allCookies.forEach(({ name }) =>
    cookieStore.set(name, '', { expires: new Date(0) })
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
