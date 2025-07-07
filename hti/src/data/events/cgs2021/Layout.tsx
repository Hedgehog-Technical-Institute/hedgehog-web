// CGS 2021 landingpage
import { Link } from "react-router-dom";
import './style.css'


const CGS21Layout = ({ data } : any) => { 
  return (
    <>
      <section className="min-h-screen bg-[url('https://hedgehogtechnicalinstitute.com/forum/styles/progamer/theme/images/bg_body.jpg')] bg-cover bg-center bg-no-repeat text-white">
        <div>
          <h1 className="text-4xl font-kimberly mb-6 font-bold">{data.name}</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {data.games.map((game: any) => (
              <Link to={`${game.slug}`} key={game.id} className="border p-4 rounded shadow hover:shadow-lg transition">
                <img src={game.thumbnail} className="mb-2 rounded" />
                <h2 className="text-lg font-semibold">{game.title}</h2>
                <p className="text-sm">{game.brief}</p>
              </Link>
            ))}
          </div>
        </div>

      </section>
    </>
  )
}

export default CGS21Layout;