import { useState, useEffect } from "react";
import { useDebouncedCallback } from "use-debounce";

import Pagination from "react-responsive-pagination";

import { Inputer, Wrapper, CardWrapper, Title } from "./styles";
import { MovieCard } from "../components/MovieCard";

export type MovieTypes = {
  coverImage: string;
  description: string;
  director: string;
  id: string;
  title: string;
  year: number;
};

function Movies() {
  const [allfilms, setAllFilms] = useState<Array<MovieTypes>>([]);
  const [films, setFilms] = useState<Array<MovieTypes>>([]);
  const [totalPages, setTotalPages] = useState<number>(0);
  const [perPage, setPerPage] = useState<number>(10);

  const [currentPage, setCurrentPage] = useState<number>(1);
  const [defaultValue, setDefaultValue] = useState<string>("");

  async function asyncFetchData(term?: string) {
    setCurrentPage(1);

    if (term) {
      try {
        const result = await fetch(`http://localhost:8080/movies?q=${term}`);
        const movies = await result.json();
        setAllFilms(movies);

        filtered(movies);
      } catch (error) {
        console.log("something went wrong :(");
      }
    } else {
      try {
        const result = await fetch("http://localhost:8080/movies");
        const movies = await result.json();
        setAllFilms(movies);

        filtered(movies);
      } catch (error) {
        console.log("something went wrong :(");
      }
    }

    function filtered(movies: MovieTypes[]) {
      let splited = Math.ceil(movies.length / perPage);
      setTotalPages(splited);
      let chunk = movies.slice(+currentPage - 1, +currentPage + 9);
      setFilms(chunk);
    }
  }

  function changePage(movies: MovieTypes[]) {
    let splited = Math.ceil(movies.length / perPage);
    setTotalPages(splited);
    let chunk = movies.slice(+currentPage - 1, +currentPage + 9);
    setFilms(chunk);
  }

  useEffect(() => {
    asyncFetchData();
  }, []);

  useEffect(() => {
    if (currentPage) changePage(allfilms);
  }, [currentPage]);

  const debounced = useDebouncedCallback(
    (value) => {
      asyncFetchData(value);
    },
    500,
    { maxWait: 2000 }
  );

  useEffect(
    () => () => {
      debounced.flush();
    },
    [debounced]
  );

  return (
    <>
      <h1>Movies</h1>

      <Wrapper>
        <Inputer
          defaultValue={defaultValue}
          onChange={(e) => debounced(e.target.value)}
          placeholder="Search"
        />
      </Wrapper>
      <CardWrapper>
        {films.length === 0 && <Title>no movies found :(</Title>}

        {films.length > 0 && films.map((film: MovieTypes) => (
          <MovieCard movie={film} />
        ))}
      </CardWrapper>

      <Pagination
        current={currentPage}
        total={totalPages}
        onPageChange={setCurrentPage}
      />
    </>
  );
}

export default Movies;
