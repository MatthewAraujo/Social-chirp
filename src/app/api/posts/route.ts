import {api} from '@/lib/api'


export async function GET(request:Request) {
    
    const response = await api.get('/posts')
    
    return Response.json(response.data)
}

