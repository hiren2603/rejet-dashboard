import {
  ContactButton,
  contactContainer,
  LinkContainer,
  DropDownLink,
  DropDown,
  SubDropDown,
} from "./style";
import { Link } from "react-router-dom";

const LinkSection = ({
  dropDown,
  setDropDown,
  menu,
  toggleDrawer,
  handleMenu,
  multiToggle,
}) => {
  let { inkjet, thermal, laser } = menu;
  return (
    <>
      <LinkContainer>
        <Link to="/" onClick={() => multiToggle()}>
          Home
        </Link>
      </LinkContainer>

      <LinkContainer
        onMouseEnter={() => {
          setDropDown(true);
        }}
        onMouseLeave={() => {
          setDropDown(false);
        }}
      >
        <Link to="#">Products</Link>

        {dropDown && (
          <DropDown>
            <DropDownLink
              onMouseEnter={() => {
                handleMenu("inkjet", true);
              }}
              onMouseLeave={() => {
                handleMenu("inkjet", false);
              }}
            >
              <Link to="#">Inkjet</Link>

              {inkjet && (
                <SubDropDown>
                  <DropDownLink>
                    <Link
                      to="/products/inkjet/re200+"
                      onClick={() => multiToggle()}
                    >
                      Re200+
                    </Link>
                  </DropDownLink>
                  <DropDownLink>
                    <Link
                      to="/products/inkjet/re224"
                      onClick={() => multiToggle()}
                    >
                      Re224
                    </Link>
                  </DropDownLink>
                  <DropDownLink>
                    <Link
                      to="/products/inkjet/re225"
                      onClick={() => multiToggle()}
                    >
                      Re225
                    </Link>
                  </DropDownLink>
                  <DropDownLink>
                    <Link
                      to="/products/inkjet/re2000"
                      onClick={() => multiToggle}
                    >
                      Re2000
                    </Link>
                  </DropDownLink>
                  <DropDownLink>
                    <Link
                      to="/products/inkjet/re2000p"
                      onClick={() => multiToggle()}
                    >
                      Re2000p
                    </Link>
                  </DropDownLink>
                  <DropDownLink>
                    <Link
                      to="/products/inkjet/re1000"
                      onClick={() => {
                        multiToggle();
                      }}
                    >
                      Re1000
                    </Link>
                  </DropDownLink>
                </SubDropDown>
              )}
            </DropDownLink>
            <DropDownLink
              onMouseEnter={() => handleMenu("thermal", true)}
              onMouseLeave={() => handleMenu("thermal", false)}
            >
              <Link to="#">Thermal</Link>

              {thermal && (
                <SubDropDown>
                  <DropDownLink>
                    <Link to="/products/tij/re10" onClick={() => multiToggle()}>
                      Re10.1
                    </Link>
                  </DropDownLink>
                  <DropDownLink>
                    <Link
                      to="/products/tij/re-handy"
                      onClick={() => multiToggle()}
                    >
                      ReHandy
                    </Link>
                  </DropDownLink>
                </SubDropDown>
              )}
            </DropDownLink>
            <DropDownLink
              onMouseEnter={() => handleMenu("laser", true)}
              onMouseLeave={() => handleMenu("laser", false)}
            >
              <Link to="#">Laser</Link>

              {laser && (
                <SubDropDown>
                  <DropDownLink>
                    <Link
                      to="/products/laser/co2"
                      onClick={() => multiToggle()}
                    >
                      Co2
                    </Link>
                  </DropDownLink>
                  <DropDownLink>
                    <Link
                      to="/products/laser/desktop"
                      onClick={() => multiToggle()}
                    >
                      Desktop
                    </Link>
                  </DropDownLink>
                  <DropDownLink>
                    <Link
                      to="/products/laser/fiber"
                      onClick={() => multiToggle()}
                    >
                      Fiber
                    </Link>
                  </DropDownLink>
                  <DropDownLink>
                    <Link to="/products/laser/uv" onClick={() => multiToggle()}>
                      UV
                    </Link>
                  </DropDownLink>
                </SubDropDown>
              )}
            </DropDownLink>
          </DropDown>
        )}
      </LinkContainer>

      <LinkContainer>
        <Link to="/applications" onClick={() => multiToggle()}>
          Applications
        </Link>
      </LinkContainer>

      <LinkContainer>
        <Link to="/ewest-management" onClick={() => multiToggle()}>
          E-Waste Mgmt.
        </Link>
      </LinkContainer>

      <LinkContainer>
        <Link to="/about" onClick={() => multiToggle()}>
          About
        </Link>
      </LinkContainer>

      <LinkContainer>
        <Link to="/contact" onClick={() => multiToggle()}>
          Contact Us
        </Link>
      </LinkContainer>
    </>
  );
};

export default LinkSection;
