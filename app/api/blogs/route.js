import { getAllBlogs } from "../../../lib/getBlogs";

export async function GET(){
    try{
        const sortedBlogs = getAllBlogs();
        return new Response(JSON.stringify(sortedBlogs), {
            headers: { 'Content-Type': 'application/json' },
            status: 200,
          });
    }catch(error){
        return new Response(JSON.stringify({ error: 'Failed to load blogs' }), {
            headers: { 'Content-Type': 'application/json' },
            status: 500,
          });
    }
}