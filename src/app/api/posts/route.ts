import {api} from '@/lib/api'


export async function GET(request:Request, response:Response) {
    
    const allPosts = await api.get('/posts')
    
    return Response.json(allPosts.data)
}

