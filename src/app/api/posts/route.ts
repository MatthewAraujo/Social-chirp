import {api} from '@/lib/api'


export async function GET() {
    
    const allPosts = await api.get('/posts')
    
    return Response.json(allPosts.data)
}

