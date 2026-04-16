import gtBadgelogo from "./assets/badge logo/giving-tuesday-badge-logo.png";
import gkBadgeLogo from "./assets/badge logo/GK-badge-logo.png";
import kaisahanBaddgeLogo from "./assets/badge logo/kaisahan-badge-logo.png";
import psBadgeLogo from "./assets/badge logo/product-store-badge-logo.png";

const projectsBadgeData = [
  {
    id: "product-store",
    name: "Product",
    nameHighlight: "STORE",
    nameHighlightStyle: "inverted",
    logo: psBadgeLogo,
    description:
      "A simple storefront app where users can browse products by category and add items to a shopping cart. Powered by FakeStore API.",
    tags: ["React.js", "Tailwind CSS", "JavaScript", "FakeStore API"],
    stats: [
      { value: "4", label: "categories" },
      { value: "20+", label: "products" },
      { value: "Cart", label: "add to cart" },
    ],
    accentColor: "#F1EFE8",
    isRedesign: false,
    liveUrl: "https://product-app-1igi.onrender.com/",
  },
  {
    id: "gk-usa",
    name: "GK Gawad Kalinga",
    nameHighlight: "USA",
    nameHighlightStyle: "filled",
    highlightBg: "#8B1A1A",
    logo: gkBadgeLogo,
    description:
      "A clean website redesign for GK1 World Foundation — ending poverty through shelter, community, and hope. Redesigned with a modern layout featuring news, platforms, events, and donation flows.",
    tags: ["React.js", "Tailwind CSS", "JavaScript", "Figma"],
    accentColor: "#E8A045",
    isRedesign: true,
    liveUrl: "https://gawad-kalinga-project.onrender.com/",
    icon: "gk",
  },
  {
    id: "giving-tuesday",
    name: "#GivingTuesdayPH",
    logo: gtBadgelogo,
    description:
      "A clean website redesign for the Philippine chapter of the global generosity movement. Redesigned with a modern layout showcasing campaigns, countdowns, activities, and partner highlights.",
    tags: ["React.js", "Tailwind CSS", "JavaScript", "Figma"],
    accentColor: "#F5C300",
    isRedesign: true,
    liveUrl: "https://giving-tuesday-project.onrender.com/",
    icon: "gt",
  },
  {
    id: "kaisahan",
    name: "KAISAHAN",
    logo: kaisahanBaddgeLogo,
    description:
      "A clean website redesign for Kaisahan, an agrarian reform & rural development NGO. Redesigned with a modern layout highlighting stories, resources, publications, and advocacy for landless Filipino farmers.",
    tags: ["React.js", "Tailwind CSS", "JavaScript", "Figma"],
    accentColor: "#4CAF50",
    isRedesign: true,
    liveUrl: "https://kaisahan-project.onrender.com/",
    icon: "kaisahan",
  },
];

export default projectsBadgeData;
