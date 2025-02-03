import styled from "styled-components";

// Header styles

export const HeaderStyle = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 40;

  .headercontent {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    gap: 40px;
    padding: 35px;
    background-color: #38629A ;

    .link {
      color: white;
      text-decoration: none;
      font-size: 22px;
      font-weight: 500;
      padding: 10px 60px;
      background-color: transparent;
      border-radius: 40px;
      transition: 0.5s;
      border: 2px solid #F8BF28;
      text-shadow: 2px 2px 5px #F8BF28;
      box-shadow: 1px 1px 8px #F8BF28;
      color: #F8BF28;

      &:hover {
        
        color: #38629A;
        background-color: #F8BF28;
        border: 2px solid #38629A;
      }
    }

    @media screen and (max-width: 660px) {
      gap: 0;
      justify-content: space-evenly;

      .link {
        padding: 10px 20px;
        font-size: 18px;
      }
    }

    @media screen and (max-width: 660px) {
      .link {
        padding: 10px;
        font-size: 14px;
      }
    }
  }
`;

// Search Form Styles

export const FormStyle = styled.form`
  margin: 160px 0 80px;
  display: flex;
  justify-content: center;

  .Search {
    width: 90%;
    border-radius: 10px;
    height: 45px;
    border: 3px solid #F8BF28;
    padding-left: 20px;
    box-shadow: 1px 1px 8px #F8BF28;

    @media screen and (max-width: 660px) {
      width: 70%;
    }
  }
`;



// scroll top 

export const StyledScrollTop = styled.div`
  position: fixed;
  right: 50px;
  bottom: 50px;
  font-size: 50px;
  color:#F8BF28 ;
  cursor: pointer;
  transition: .3s;
  &:hover{
      transform:scale(1.1);
    }


`