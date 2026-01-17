import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://esatdbzdrytygjpszbxc.supabase.co'
const supabaseKey = 'sb_publishable_hGChCZODYdTA13p5kAfw3A_Qbw6VrMM'

export const supabase = createClient(supabaseUrl, supabaseKey)