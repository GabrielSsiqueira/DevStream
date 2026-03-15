export default function MovieCard({ movie }){

    return (
        <div className="w-44 flex-shrink-0">
            <div className="bg-zinc-800 rounded-lg overflow-hidden hover:scale-105 transition cursor-pointer">
                <img src={movie.coverImage || "https://i.pravatar.cc/40"}
                  alt={movie.title}
                  className="w-full h-64 object-cover" />

                <p className="text-sm mt-2 text-zinc-200 truncate">
                    {movie.title}
                </p>
            </div>
        </div>
    )
}