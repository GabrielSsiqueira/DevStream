import { useEffect, useState } from "react";
import { getHome } from "../services/homeService";
import  MovieCard  from "../components/MovieCard"

export default function Home(){

    const [data, setData] = useState(null)

    useEffect(() => {

        async function loadHome(){
            const response = await getHome()
            setData(response)
        }

        loadHome()
    }, [])

    if(!data){
        return( 
            <div className="text-white p-6">Carregando</div>
        )
    }

    return(
        <div className="space-y-10">
            <section>
                <h2 className="text-xl font-semibold mb-4">Continuar assistindo</h2>

                <div className="flex gap-4 overflow-x-auto pb-2">
                    {data.continueWatch.map(item => (
                       <MovieCard 
                            key={item.id}
                            movie={item.movie}
                        />
                    ))}
                </div>
            </section>
            
            <section>
                <h2 className="text-xl font-semibold mb-4">Continuar assistindo</h2>

                <div className="flex gap-4 overflow-x-auto pb-2">
                    {data.favorites.map(item => (
                        <MovieCard 
                           key={item.id}
                           movie={item.movie}
                        />
                    ))}
                </div>
            </section>

           
            

            <h2>categorias</h2>
            {data.categories.map(cat => (
                <section key={cat.id}>
                    <h2 className="text-xl font-semibold mb-4">{cat.nome}</h2>

                    <div className="flex gap-4 overflow-x-auto pb-2">
                        {cat.movies.map(movie => (
                            <MovieCard
                               key={movie.id}
                               movie={movie.title}
                            />
                           
                        ))}
                    </div>
                </section>
            ))}


        </div>
    )
}