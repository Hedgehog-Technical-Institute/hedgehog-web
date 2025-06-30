// CGS 2021 landingpage


const CGS21Layout = ({ data }) => { 
  return (
    <>
      <div className="p-6 bg-[#251d33] text-white">
        <h1 className="text-4xl mb-6 font-bold">{data.name}</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {data.games.map((game: any) => (
            <a key={game.id} href={`/events/${data.eventSlug}/${game.slug}`} className="bg-[#322847] p-4 rounded hover:bg-[#3e2d5e] transition">
              <img src={game.thumbnail} className="mb-2 rounded" />
              <h2 className="text-lg font-semibold">{game.title}</h2>
              <p className="text-sm">{game.brief}</p>
            </a>
          ))}
        </div>
      </div>
    </>
  )
}

export default CGS21Layout;