import { MovieTypes } from "../../Movies";
import {
  Title,
  Card,
  Info,
  Mark,
  Text,
  Content,
  ImageWrapper,
  Image,
} from "../../Movies/styles";

export function MovieCard({ movie }: { movie: MovieTypes }) {
  return (
    <Card key={movie.id}>
      <ImageWrapper>
        <Image src={movie.coverImage} />
      </ImageWrapper>
      <Content>
        <Title>{movie.title}</Title>
        <Info>
          <Text>{movie.director}</Text>
          <Mark>{movie.year}</Mark>
        </Info>
      </Content>
    </Card>
  );
}
