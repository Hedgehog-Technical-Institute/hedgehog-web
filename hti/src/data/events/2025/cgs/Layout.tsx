// src/pages/layouts/CGS25Layout.tsx
import { Link, useParams } from "react-router-dom";
import type { Event as EventModel } from "../../../../lib/models";

export default function CGS25Layout({ data }: { data: EventModel }) {
  const { eventId } = useParams(); // route key used in your old setup

  return (
    <div style={{ padding: 16 }}>
      <h1>{data.name}</h1>
      <p>Year: {data.year}</p>
      <p>Slug: {data.eventSlug}</p>

      {data.brief && <p><strong>Brief:</strong> {data.brief}</p>}

      {data.description?.length ? (
        <section>
          <h2>Description</h2>
          {data.description.map((p, i) => <p key={i}>{p}</p>)}
        </section>
      ) : null}

      {data.media?.length ? (
        <section>
          <h2>Media</h2>
          <ul>
            {data.media.map((m, i) => (
              <li key={i}><a href={m} target="_blank" rel="noreferrer">{m}</a></li>
            ))}
          </ul>
        </section>
      ) : null}

      {data.direct && (
        <section>
          <h2>Direct</h2>
          <a href={data.direct} target="_blank" rel="noreferrer">{data.direct}</a>
        </section>
      )}

      {data.treehouse?.length ? (
        <section>
          <h2>Treehouse</h2>
          <ul>
            {data.treehouse.map((m, i) => (
              <li key={i}><a href={m} target="_blank" rel="noreferrer">{m}</a></li>
            ))}
          </ul>
        </section>
      ) : null}

      <section>
        <h2>Games ({data.games.length})</h2>
        <ul>
          {data.games.map((g) => (
            <li key={g.id}>
              <Link to={`/events/${eventId}/${g.slug}`}>{g.title}</Link>
              {g.thumbnail ? (
                <div><img src={g.thumbnail} alt={g.title} style={{ maxWidth: 320 }} /></div>
              ) : null}
              <div><em>{g.brief}</em></div>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
