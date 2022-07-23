import React from "react";
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Loader from "../Components/Loader";
import styled from "styled-components";
const SingleCocktail = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [cocktail, setCocktail] = useState(null);

  useEffect(() => {
    setLoading(true);
    async function getCocktail() {
      try {
        const response = await fetch(
          `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`
        );
        const data = await response.json();
        if (data.drinks) {
          const {
            strDrink: name,
            strDrinkThumb: image,
            strAlcoholic: info,
            strCategory: category,
            strGlass: glass,
            strInstructions: instructions,
            strIngredient1,
            strIngredient2,
            strIngredient3,
            strIngredient4,
            strIngredient5,
          } = data.drinks[0];
          const ingredients = [
            strIngredient1,
            strIngredient2,
            strIngredient3,
            strIngredient4,
            strIngredient5,
          ];
          const newCocktail = {
            name,
            image,
            info,
            category,
            glass,
            instructions,
            ingredients,
          };
          setCocktail(newCocktail);
        } else {
          setCocktail(null);
        }
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    }
    getCocktail();
  }, [id]);
  const Btn = styled(Link)`
    letter-spacing: 3px;
    background-color: #017c01c7;
    color: white;
    text-decoration: none;
    cursor: pointer;
    text-transform: uppercase;
    font-size: 0.9rem;
    font-weight: 300;
    padding: 1rem 1.5rem;
    &:hover {
      background-color: green;
    }
  `;
  const Container = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: space-between;
    gap: 2rem;
    @media screen and (max-width: 480px) {
      gap: 0;
    }
  `;
  const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    width: 70%;
    align-self: center;
    justify-self: center;
    background-color: #ffffffef;
    box-shadow: -1px -1px 9px 1px rgba(10, 153, 35, 0.82);
    -webkit-box-shadow: -1px -1px 9px 1px rgba(10, 153, 35, 0.82);
    -moz-box-shadow: -1px -1px 9px 1px rgba(10, 153, 35, 0.82);
    @media screen and (max-width: 480px) {
      width: 100%;
      margin: 0 1rem;
      flex-wrap: wrap;
    }
  `;
  const Img = styled.img`
    width: 50%;
    flex: 1;
    @media screen and (max-width: 480px) {
      width: 100%;
    }
  `;
  const Info = styled.div`
    flex: 1;
    display: flex;
    padding: 1rem 0.5rem;
    flex-direction: column;
  `;
  const DrinkP = styled.p`
    font-weight: bold;
    text-transform: capitalize;
    line-height: 1.8;
    font-weight: 300;
    letter-spacing: 2px;
    margin-bottom: 0.7rem;
  `;
  const DrinkData = styled.span`
    background: #d4e6a5;
    font-weight: bold;
    letter-spacing: 1px;
    word-break: keep-all;
    padding: 0.25rem 0.5rem;
    border-radius: 0.25rem;
    color: #476a2e;
    margin-right: 0.5rem;
  `;

  if (loading) {
    return <Loader />;
  }
  if (!cocktail) {
    return <h2 className="section-title">no cocktail to display</h2>;
  } else {
    const { name, image, category, info, glass, instructions, ingredients } =
      cocktail;
    return (
      <Container>
        <Btn to="/">back home</Btn>
        <Wrapper>
          <Img src={image} alt={name}></Img>
          <Info>
            <DrinkP>
              <DrinkData>name :</DrinkData> {name}
            </DrinkP>
            <DrinkP>
              <DrinkData>category :</DrinkData> {category}
            </DrinkP>
            <DrinkP>
              <DrinkData>info :</DrinkData> {info}
            </DrinkP>
            <DrinkP>
              <DrinkData>glass :</DrinkData> {glass}
            </DrinkP>
            <DrinkP>
              <DrinkData>instructions :</DrinkData> {instructions}
            </DrinkP>
            <DrinkP>
              <DrinkData>ingredients :</DrinkData>
              {ingredients.map((item, index) => {
                return item ? <DrinkData key={index}> {item}</DrinkData> : null;
              })}
            </DrinkP>
          </Info>
        </Wrapper>
      </Container>
    );
  }
};

export default SingleCocktail;
