import { Sizes } from "../../utils/constants";
import Title from "./Title";
import UserAvatar from "../authentication/UserAvatar";
import styled from "styled-components"

const StyledHeader = styled.header`
  background-color: var(--color-grey-0);
  border-bottom: 1px solid var(--color-grey-100);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.2rem 1.2rem;

  @media only screen and (min-width: ${Sizes.minScreenSize}px)
  {
    padding: 1.2rem 4.8rem;
  }

`;

const StyledUser = styled.header`
  gap: 2.4rem;
  justify-content: flex-end;
  flex-direction: row;
  display:flex;
`


const Header = () => {
    return (
      <StyledHeader>
        <Title>
          Hockey Stats
        </Title>
        <StyledUser>
          <UserAvatar/>
        </StyledUser>
      </StyledHeader>
    )
}

export default Header
