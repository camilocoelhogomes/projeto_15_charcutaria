import styled from 'styled-components';

export const Body = styled.div`
  display: flex;
`;

export const Menu = styled.div`
  width: 20%;
  display: flex;
  flex-direction: column;
  align-items: center;

  h1{
    font-size: 28px;
    margin-bottom: 25px;
    color: #000;
  }
`;

export const ProductCategory = styled.div`
  display: flex;
  justify-content: space-between;
  width: 80%;
  cursor: pointer;
`;

export const Option = styled.p`
  font-size: 20px;
  margin-bottom: 18px;
  margin-right: 30px;
  color:  ${(props) => (props.select === true ? '#b30b0b' : '#000')};
`;

export const Products = styled.div`
  width: 80%;
`;

export const Product = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  cursor: pointer;
`;

export const Sort = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px 15px;

  div{
    display: flex;
  }

  h2{
    font-size: 18px;
    color: #000;
    margin-right: 10px;
  }
`;

export const Select = styled.select`
  height: 35px;
  background: #f2d3cb;
  color: gray;
  border: none;

  option {
    color: black;
    background: white;
    display: flex;
    white-space: pre;
    min-height: 20px;
    padding: 0px 2px 1px;
  }
`;

export const Content = styled.div`
  height: 400px;
  width: 300px;
  margin: 15px; 
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  
  img{ 
      height: 300px;
      width: 95%;
      margin-bottom: 10px;  
  }
  :hover{
      border-radius: 8px;
      box-shadow: 0 0 8px 2px rgba(0, 0, 0, 0.4);
  }
`;

export const Info = styled.p`
  font-size: 15px;
  margin: 6px 0;
  align-self: flex-start;
  margin-left: 7px;
  font-weight: bold;
`;

export const Price = styled.p`
  font-size: 20px;
  margin: 6px 0;
  align-self: flex-start;
  margin-left: 7px;
  font-weight: bold;
`;
