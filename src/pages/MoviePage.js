import { TriangleDownIcon, TriangleUpIcon } from "@chakra-ui/icons";
import {
  Box,
  Container,
  Card,
  CardBody,
  Image,
  Stack,
  Heading,
  Text,
  CardFooter,
  Button,
} from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Header from "../components/UI/Header";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import MovieLoading from "../components/UI/MovieLoading";

const MoviePage = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState("true");
  const history = useHistory();

  const pararms = {
    category: "movies",
    language: "kannada",
    genre: "all",
    sort: "voting",
  };
  const fetchData = async () => {
    const { data } = await axios.post(
      `https://hoblist.com/api/movieList`,
      pararms
    );
    setMovies(data.result);
    setIsLoading(false);
    // console.log(data.result);
  };
  useEffect(() => {
    if (!localStorage.getItem("isLoggedIn")) {
      history.push("/");
    }
    fetchData();
  }, []);

  return (
    <>
      <Header />
      {isLoading && <MovieLoading />}
      {movies?.map((movie) => (
        <Card
          direction={{ base: "column", sm: "row" }}
          overflow="hidden"
          variant="outline"
        >
          <Box
            w="10%"
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="space-around"
            p={6}
          >
            <TriangleUpIcon w={20} h={20} />
            <Text fontSize="3xl">{movie.totalVoted}</Text>
            <TriangleDownIcon w={20} h={20} />
          </Box>
          <Image
            objectFit="cover"
            maxW={{ base: "100%", sm: "200px" }}
            src={movie.poster}
            alt="Caffe Latte"
          />

          <Stack>
            <CardBody>
              <Heading size="md">{movie.title}</Heading>

              <Text py="2">Genre: {movie.genre}</Text>
              <Text py="2">Director: {movie.director}</Text>
              <Text py="2">Starring: {movie.stars}</Text>
              <Text py="2">
                {movie.language} |{/* convert milliseconds to readable date */}
                {new Date(movie.releasedDate * 1000).toLocaleDateString(
                  "en-US",
                  { day: "numeric", month: "short", year: "numeric" }
                )}
              </Text>
              <Text py="2">
                {movie.pageViews} views | Voted by {movie.voted.length} people
              </Text>
            </CardBody>

            <CardFooter>
              <Button variant="solid" colorScheme="blue">
                Watch Trailer
              </Button>
            </CardFooter>
          </Stack>
        </Card>
      ))}
    </>
  );
};

export default MoviePage;
