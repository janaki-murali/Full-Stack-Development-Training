const MovieList = () => {
  const movies = [
    { id: 1, title: "Inception", releaseYear: 2010 },
    { id: 2, title: "Interstellar", releaseYear: 2014 },
    { id: 3, title: "The Dark Knight", releaseYear: 2008 }
  ];

  return (
    <div>
      <h2>🎬 Movie List</h2>
      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>
            {movie.title} ({movie.releaseYear})
          </li>
        ))}
      </ul>
    </div>
  );
};
