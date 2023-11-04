import HomeIcon from "@mui/icons-material/Home";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import AppRegistrationIcon from "@mui/icons-material/AppRegistration";
import InvertColorsIcon from "@mui/icons-material/InvertColors";
import CallIcon from "@mui/icons-material/Call";
import ProductSvg from "@/assets/ProductSvg";
import LaserSvg from "../assets/LaserSvg";
import TharmalSvg from "../assets/TharmalSvg";
import AllProductsSvg from "../assets/AllProductsSvg";
import EWestSvg from "./EWestSvg";

export const NavigationList = [
  {
    key: "Home",
    link: "/",
    icon: <HomeIcon />,
    id: 1,
    multicomponent: false,
    multicomponents: [],
  },
  {
    key: "About",
    link: "/about",
    icon: <AutoStoriesIcon />,
    id: 2,
    multicomponent: false,
    multicomponents: [],
  },
  {
    key: "Products",
    link: "/products",
    icon: <AllProductsSvg />,
    id: 3,
    multicomponent: true,
    multicomponents: [
      {
        key: "Inkjet",
        link: "/products/inkjet",
        id: 7,
        nestedcomponent: true,
        componentKey: "inkjet",
        icon: <InvertColorsIcon />,
        nestedcomponents: [
          {
            key: "RE200+",
            link: "/products/inkjet/re200+",
            icon: <ProductSvg />,
            id: 13,
          },
          {
            key: "RE224",
            link: "/products/inkjet/re224",
            icon: <ProductSvg />,
            id: 14,
          },
          {
            key: "RE225",
            link: "/products/inkjet/re225",
            icon: <ProductSvg />,
            id: 15,
          },
        ],
      },
      {
        key: "Laser",
        link: "/products/laser",
        id: 8,
        nestedcomponent: true,
        componentKey: "laser",
        icon: <LaserSvg />,
        nestedcomponents: [
          {
            key: "CO2 Laser",
            link: "/products/laser/co2",
            icon: <ProductSvg />,
            id: 9,
          },
          {
            key: "Fiber Laser",
            link: "/products/laser/fiber",
            icon: <ProductSvg />,
            id: 10,
          },
          {
            key: "UV Laser",
            link: "/products/laser/uv",
            icon: <ProductSvg />,
            id: 11,
          },
          {
            key: "Desktop Laser",
            link: "/products/laser/desktop",
            icon: <ProductSvg />,
            id: 12,
          },
        ],
      },
      {
        key: "TIJ",
        link: "/products/tij",
        id: 13,
        nestedcomponent: true,
        componentKey: "thermal",
        icon: <TharmalSvg />,
        nestedcomponents: [
          {
            key: "TP 01",
            link: "/products/tij/1",
            icon: <ProductSvg />,
            id: 16,
          },
          // {
          //   key: "TP 01.1",
          //   link: "/products/tij/tp01.1",
          //   icon: <ProductSvg />,
          //   id: 17,
          // },
          {
            key: "TP Handy",
            link: "/products/tij/handy",
            icon: <ProductSvg />,
            id: 18,
          },
        ],
      },
    ],
  },
  {
    key: "Applications",
    link: "/applications",
    icon: <AppRegistrationIcon />,
    id: 4,
    multicomponent: false,
    multicomponents: [],
  },
  {
    key: "E-west Mgmt.",
    link: "/ewest-management",
    icon: <EWestSvg />,
    id: 5,
    multicomponent: false,
    multicomponents: [],
  },
  {
    key: "Contact",
    link: "/contact",
    icon: <CallIcon />,
    id: 6,
    multicomponent: false,
    multicomponents: [],
  },
];
