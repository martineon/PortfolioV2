import styled from 'styled-components';

export const Title = styled.div`
  font-size: 70px;
  font-family: futura;
  width: 40vw;
  padding: 0;
  color: white;
  position: relative;
`;

export const Header = styled.div`
  width: 20vw;
  height: 20vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Content = styled.div`
  position: relative;
  left: 170px;
  display: flex;
  flex-direction: ${({dir}) => dir ? dir : 'none'};

  &  + div{
    font-size: 15px;
    margin-top: px;
  }
`;

export const Abouts = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
`;

export const Wrapper = styled.div`
  height: 80vh;
  width: 90vw;
  max-width: 920px;
  padding: 10vh 5vw;
  position: absolute;
  overflow: hidden;
  transition: top 1s ease;
`;

export const Body = styled.div`
  width: 80%;
  height: 60vh;
  display: flex;
  flex-direction: column;
  padding-left: 30px;
  justify-content: space-around;
`;

export const Subtitle = styled.div`
  font-size: 30px;
  min-height: 40px;
  position: absolute;
  width: auto;

  &::after{
    content: '';
    width: 100%;
    position: absolute;
    bottom: 0;
    left: 0;
    height: 1px;
    opacity: 1;
    border-radius: 50px;
    background-color: white;
  }
`;
