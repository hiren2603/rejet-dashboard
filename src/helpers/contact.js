import radhe from "assets/radhe.png";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import LanguageIcon from "@mui/icons-material/Language";

export const HO = {
  head: "Head Office",
  image: radhe,
  address:
    "Plot No. 36, Survey No. 277/1, Opp. Kaneria Oil Industries, Rani Industrial Area, Shapar (Veraval) 360024–Rajkot, (Gujarat) India",
};
export const BRANCHES = {
  head: "Branches",
  branchList: [
    {
      id: 1,
      name: "Ahmedabad",
    },
    {
      id: 2,
      name: "Surat",
    },
    {
      id: 3,
      name: "Vapi",
    },
    {
      id: 4,
      name: "Gandhidham",
    },
    {
      id: 5,
      name: "Morvi",
    },
  ],
};

export const INQUIRY = [
  {
    id: 1,
    key: "Call",
    icon: WhatsAppIcon,
    text: "+91 99099-81123",
  },
  {
    id: 2,
    key: "Email",
    icon: MailOutlineIcon,
    text: "info@rejettech.com",
  },
  {
    id: 3,
    key: "Web",
    icon: LanguageIcon,
    text: "www.rejettech.com",
  },
];
