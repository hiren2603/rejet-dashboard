import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { ClickAwayListener } from "@mui/material";
import { DOD_LIST, INKJET_LIST, LASER_LIST, TIJ_LIST } from "helpers/Link";
import { useState } from "react";
import { Link } from "react-router-dom";
import { DropDown, DropDownLink, LinkContainer, SubDropDown } from "./style";

const LinkSection = ({ dropDown, setDropDown, multiToggle }) => {
  // const [dropDown, setDropDown] = useState(false);
  const [menu, setMenu] = useState({
    inkjet: [],
    thermal: [],
    laser: [],
    dod: [],
  });
  let { inkjet, thermal, laser, dod } = menu;

  const handleMenu = (name, value) => {
    if (name === "inkjet") {
      setMenu({
        inkjet: value,
        thermal: [],
        laser: [],
        dod: [],
      });
    } else if (name === "thermal") {
      setMenu({
        inkjet: [],
        thermal: value,
        laser: [],
        dod: [],
      });
    } else if (name === "laser") {
      setMenu({
        inkjet: [],
        thermal: [],
        dod: [],
        laser: value,
      });
    } else if (name === "dod") {
      setMenu({
        inkjet: [],
        thermal: [],
        laser: [],
        dod: value,
      });
    }
  };

  return (
    <>
      <LinkContainer>
        <Link to="/" onClick={() => multiToggle()}>
          Home
        </Link>
      </LinkContainer>

      <ClickAwayListener
        onClickAway={() => {
          setDropDown(false);
        }}
      >
        <LinkContainer
          onMouseEnter={() => {
            setDropDown(true);
          }}
          onMouseLeave={() => {
            setDropDown(false);
          }}
        >
          <Link
            to="#"
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            Products <ArrowDropDownIcon sx={{ color: "white" }} />
          </Link>

          {dropDown && (
            <DropDown>
              <DropDownLink
                onMouseEnter={() => {
                  handleMenu("inkjet", INKJET_LIST);
                }}
                onMouseLeave={() => {
                  handleMenu("inkjet", []);
                }}
              >
                <Link to="#">Inkjet</Link>
                <SubDropDown>
                  {inkjet &&
                    inkjet?.map((link) => (
                      <DropDownLink key={link.text}>
                        <Link
                          to={link.link}
                          onClick={() => {
                            multiToggle();
                          }}
                        >
                          {link.text}
                        </Link>
                      </DropDownLink>
                    ))}
                </SubDropDown>
              </DropDownLink>

              <DropDownLink
                onMouseEnter={() => {
                  handleMenu("laser", LASER_LIST);
                }}
                onMouseLeave={() => {
                  handleMenu("laser", []);
                }}
              >
                <Link to="#">Laser</Link>

                <SubDropDown>
                  {laser &&
                    laser?.map((link) => (
                      <DropDownLink key={link.text}>
                        <Link
                          to={link.link}
                          onClick={() => {
                            multiToggle();
                          }}
                        >
                          {link.text}
                        </Link>
                      </DropDownLink>
                    ))}
                </SubDropDown>
              </DropDownLink>
              <DropDownLink
                onMouseEnter={() => {
                  handleMenu("thermal", TIJ_LIST);
                }}
                onMouseLeave={() => {
                  handleMenu("thermal", []);
                }}
              >
                <Link to="#">Thermal</Link>

                <SubDropDown>
                  {thermal &&
                    thermal?.map((link) => (
                      <DropDownLink key={link.text}>
                        <Link
                          to={link.link}
                          onClick={() => {
                            multiToggle();
                          }}
                        >
                          {link.text}
                        </Link>
                      </DropDownLink>
                    ))}
                </SubDropDown>
              </DropDownLink>
              {/*  */}
              <DropDownLink
                onMouseEnter={() => {
                  handleMenu("dod", DOD_LIST);
                }}
                onMouseLeave={() => {
                  handleMenu("dod", []);
                }}
              >
                <Link to="#">DOD</Link>
                <SubDropDown>
                  {dod &&
                    dod?.map((link) => (
                      <DropDownLink key={link.text}>
                        <Link to={link.link} onClick={() => multiToggle()}>
                          {link.text}
                        </Link>
                      </DropDownLink>
                    ))}
                </SubDropDown>
              </DropDownLink>
            </DropDown>
          )}
        </LinkContainer>
      </ClickAwayListener>

      <LinkContainer>
        <Link to="/applications" onClick={() => multiToggle()}>
          Applications
        </Link>
      </LinkContainer>

      <LinkContainer>
        <Link to="/ewest-management" onClick={() => multiToggle()}>
          E-Waste Mgmt
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
