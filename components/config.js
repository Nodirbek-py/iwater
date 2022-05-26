export const colors = {
  1: {
    background: "#fff",
    text: "#0a71b7",
  },
  2: {
    background: "#86ccff",
    text: "#fff",
  },
  3: {
    background: "#0a71b7",
    text: "#fff",
  },
};

export const cards = [
  {
    img: {
      src: "/imgs/tech.png",
      width: "227",
      height: "203",
    },
    title: "Basic",
    id: "basic",
    warranty: "2 year warranty",
    info: [
      "Dashboard and data access is $50/year/device (includes one login for the dashboard)",
    ],
    price: {
      amount: "$250",
    },
    cardType: "1",
  },
  {
    img: {
      src: "/imgs/tech.png",
      width: "287",
      height: "256",
    },
    title: "Premium",
    id: "premium",
    warranty: "iWater owns the device - lifetime warranty for defects",
    info: [
      "Dashboard and data access is $150/mo/unlimited devices (includes one login for the dashboard)",
      "Maintenance is included (Battery changes, device repair and replacement if required)",
    ],
    price: {
      amount: "$15",
      per: "/Month",
    },
    cardType: "2",
  },
  {
    img: {
      src: "/imgs/tech.png",
      width: "287",
      height: "256",
    },
    title: "Premium Plus",
    id: "premium-plus",
    warranty: "iWater owns the device - lifetime warranty for defects",
    info: [
      "Dashboard and data access is $150/mo/unlimited devices (includes one login for the dashboard)",
      "Maintenance is included (Battery changes, device repair and replacement if required)",
      "Data insights using ML, monthly reports",
    ],
    price: {
      amount: "$17",
      per: "/Month",
    },
    cardType: "3",
  },
];
