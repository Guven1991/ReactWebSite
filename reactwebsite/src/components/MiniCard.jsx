import React from 'react';
import styled from "styled-components";
import Search from '../img/search.jpg'

const Container = styled.div`
  width: 100px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  -webkit-box-shadow: 5px 5px 26px 5px rgba(0, 0, 0, 0.50);
  box-shadow: 5px 5px 26px 5px rgba(0, 0, 0, 0.50);
  @media only screen and (max-width: 480px) {
    width: 50px;
  }
`;

const Image = styled.img`
  width: 30px;
`;

const Text = styled.span`
  margin-top: 10px;
  text-align: center;
  @media only screen and (max-width: 480px) {
    font-size: 14px;
  }
`

const MiniCard = () => {
    return (
        <Container>
            <Image src={Search}/>
            <Text>
                Lorem ipsum dolor sit amet, consectetur.
            </Text>
        </Container>
    );
};

export default MiniCard;