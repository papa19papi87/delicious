import Pages from "./pages/Pages";
import Category from "./components/Category";
import {BrowserRouter} from "react-router-dom";
import Search from "./components/Search";
import styled from "styled-components";
import {GiKnifeFork} from "react-icons/gi";
import {Link} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav>
          <GiKnifeFork />
          <Logo to={"/"}>DELICIOUS</Logo>
        </Nav>
        <Search />
        <Category />
        <Pages />
      </BrowserRouter>
    </div>
  );
}

const Logo = styled(Link)`
  font-size: 1.3rem;
  font-weight: 400;
  text-decoration: none;
`;
const Nav = styled.div`
   padding;4rem 0rem;
   display:flex;
   justify-content:flex-start;
   align-items:center;
   svg {
    font-size: 2rem;
   }
`;

export default App;
