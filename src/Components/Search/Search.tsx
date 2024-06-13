import { FC } from "react";
import styled from "@emotion/styled";
import { Container as DefaultButton } from "../Button/styles";
import Card from "../Card";
import Button from "../Button";
import { Shuffle } from "@styled-icons/bootstrap";
import { CardInner } from "../../Pages/Search/styles";
import _ from "lodash";

const ShuffleButton = styled(DefaultButton)`
  color: #ff8000;
  background-color: #ff80002e;
  height: 50px;
  width: 50px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 10px;
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
`;

const Icon = styled.div`
  width: 25px;
  height: 25px;
`;

const Footer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const CardBody = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: calc(100% - 50px);
  color: #000;
`;

const Input = styled.input`
  background-color: #fff;
  border: none;
  height: 50px;
  width: 359.9px;
  border-radius: 5px;
  padding-left: 10px;
  padding-right: 10px;
  border: none !important;
  outline: none !important;
  color: #000;
  font-size: 17px;
  font-weight: 500;
`;

const Label = styled.label`
  font-weight: 600;
  opacity: 0.6;
  text-align: left;
  width: 375px;
  margin-bottom: 5px;
`;

export type SearchProps = {
  search: string;
  setSearch: (search: string) => void;
  onSearch: () => void;
  onShuffle: () => void;
};

const Search: FC<SearchProps> = (props) => {
  return (
    <Card>
      <CardInner>
        <CardBody>
          <div
            style={{
              flex: 0.75,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/5/51/Pokebola-pokeball-png-0.png"
              style={{ maxHeight: 150, maxWidth: 150 }}
            />
          </div>
          <Label>POKEMON NAME OR ID</Label>
          <Input
            type="text"
            placeholder="Search"
            onChange={(e) => props.setSearch(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                props.onSearch();
              }
            }}
          />
        </CardBody>
        <Footer>
          <Row>
            <Button onClick={props.onSearch}>Search</Button>
            <ShuffleButton onClick={props.onShuffle}>
              <Icon>
                <Shuffle size={25} color="#ff8000" />
              </Icon>
            </ShuffleButton>
          </Row>
        </Footer>
      </CardInner>
    </Card>
  );
};

export default Search;
