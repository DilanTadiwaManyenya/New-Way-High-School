import React, { createContext, useContext, useState, useEffect } from 'react'
import { supabase } from '../lib/supabaseClient'

const AuthContext = createContext(null)

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [role, setRole] = useState(null) // 'parent' | 'student' | 'admin' | null
  const [loading, setLoading] = useState(true)

  // Helper to fetch user role from profiles table
  const fetchProfileRole = async (userObj) => {
    if (!userObj) return null
    try {
      const { data, error } = await supabase
        .from('profiles')
        .select('role')
        .eq('id', userObj.id)
        .maybeSingle()

      if (error) {
        console.warn('[AuthContext Warning] Could not fetch profile role:', error.message)
        return userObj.user_metadata?.role || null
      }
      return data?.role || userObj.user_metadata?.role || null
    } catch (err) {
      console.warn('[AuthContext Warning] Error fetching profile role:', err)
      return userObj.user_metadata?.role || null
    }
  }

  useEffect(() => {
    let mounted = true

    const syncUserAndRole = async (session) => {
      if (!session?.user) {
        if (mounted) {
          setUser(null)
          setRole(null)
          setLoading(false)
        }
        return
      }

      if (mounted) {
        setUser(session.user)
        setLoading(true)
      }

      const fetchedRole = await fetchProfileRole(session.user)

      if (mounted) {
        setRole(fetchedRole)
        setLoading(false)
      }
    }

    // Check current active session on mount
    const initAuth = async () => {
      try {
        const { data: { session }, error } = await supabase.auth.getSession()
        if (error) {
          console.warn('[AuthContext Warning] Session retrieval error:', error.message)
        }
        await syncUserAndRole(session)
      } catch (err) {
        console.warn('[AuthContext Warning] Session init failed:', err)
        if (mounted) setLoading(false)
      }
    }

    initAuth()

    // Subscribe to authentication state changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange(async (event, session) => {
      if (event === 'INITIAL_SESSION') return
      await syncUserAndRole(session)
    })

    return () => {
      mounted = false
      subscription?.unsubscribe()
    }
  }, [])

  const signOut = async () => {
    try {
      setLoading(true)
      await supabase.auth.signOut()
      setUser(null)
      setRole(null)
    } catch (err) {
      console.warn('[AuthContext Warning] SignOut error:', err)
    } finally {
      setLoading(false)
    }
  }

  const value = {
    user,
    role,
    loading,
    signOut,
  }

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}

export default AuthContext

