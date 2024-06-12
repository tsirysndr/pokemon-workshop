import { FC, useEffect, useState } from "react";
import { CardInner, Container } from "./styles";
import Card from "../../Components/Card";
import { ChevronLeft } from "@styled-icons/entypo";
import styled from "@emotion/styled";
import { useNavigate, useParams } from "react-router-dom";
import { POKEMON_API } from "../../consts";
import Spinner from "react-spinner-material";
import { zeropad } from "./helpers";

const BackButton = styled.button`
  border: none;
  background-color: initial;
  outline: none;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h2`
  color: #000;
  text-align: center;
  flex: 1;
  margin-right: 70px;
`;

const TitleBar = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 40px;
  justify-content: space-between;
`;

const CardBody = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const PokemonDetailsPage: FC = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [pokemon, setPokemon] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (id) {
      fetch(`${POKEMON_API}/pokemon/${id}`)
        .then((res) => res.text())
        .then((data) => {
          if (data === "Not Found") {
            navigate("/");
          }
          setPokemon(JSON.parse(data));
          setLoading(false);
        });
    }
  }, [id]);

  return (
    <Container>
      <Card>
        <CardInner>
          {loading && (
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                height: "90%",
              }}
            >
              <Spinner
                radius={70}
                color={"#04d6719c"}
                stroke={6}
                visible={true}
              />
            </div>
          )}
          {!loading && (
            <>
              <TitleBar>
                <BackButton onClick={() => navigate(-1)}>
                  <ChevronLeft size={50} color="#00000081" />
                </BackButton>
                <Title>
                  {pokemon?.name} #{id}
                </Title>
              </TitleBar>
              <CardBody>
                <img
                  src={`https://assets.pokemon.com/assets/cms2/img/pokedex/full/${zeropad(id!, 3)}.png`}
                />
              </CardBody>
            </>
          )}
        </CardInner>
      </Card>
    </Container>
  );
};

export default PokemonDetailsPage;
