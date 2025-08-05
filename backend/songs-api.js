import 'dotenv/config';
import { createClient } from '@supabase/supabase-js';

const supabaseURL = process.env.DATABASE_URL;
const supabaseKEY = process.env.SUPABASE_KEY;

const supabase = createClient(supabaseURL, supabaseKEY);

async function SOTD() {
    let { data: Drake, error } = await supabase
      .from('Drake')
      .select('*')
      .eq('id',1);

    if (error) {
        console.log("Supabase error:", error);
        return null;
    }

    const song_title = Drake?.[0]?.title;

    return song_title;
}

SOTD().then(song_title => {
    console.log(song_title);
});