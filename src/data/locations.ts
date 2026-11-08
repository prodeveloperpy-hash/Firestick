export type Location = {
  slug: string;
  city: string;
  province: string;
  areas: string[];
};

export const locations: Location[] = [
  {
    slug: "karachi",
    city: "Karachi",
    province: "Sindh",
    areas: ["DHA", "Clifton", "Gulshan-e-Iqbal", "North Nazimabad", "PECHS", "Gulistan-e-Johar"],
  },
  {
    slug: "lahore",
    city: "Lahore",
    province: "Punjab",
    areas: ["DHA", "Gulberg", "Johar Town", "Model Town", "Bahria Town", "Wapda Town"],
  },
  {
    slug: "islamabad",
    city: "Islamabad",
    province: "Islamabad Capital Territory",
    areas: ["F-7", "F-10", "G-11", "E-11", "Bahria Town", "DHA"],
  },
  {
    slug: "rawalpindi",
    city: "Rawalpindi",
    province: "Punjab",
    areas: ["Saddar", "Bahria Town", "Satellite Town", "Chaklala", "Westridge", "Gulraiz"],
  },
  {
    slug: "faisalabad",
    city: "Faisalabad",
    province: "Punjab",
    areas: ["D Ground", "Madina Town", "Peoples Colony", "Satiana Road", "Canal Road", "Gulberg"],
  },
  {
    slug: "multan",
    city: "Multan",
    province: "Punjab",
    areas: [
      "Cantt",
      "Gulgasht Colony",
      "Bosan Road",
      "DHA Multan",
      "Shah Rukn-e-Alam",
      "New Multan",
    ],
  },
  {
    slug: "peshawar",
    city: "Peshawar",
    province: "Khyber Pakhtunkhwa",
    areas: ["Hayatabad", "University Town", "Saddar", "Gulbahar", "Warsak Road", "Cantt"],
  },
  {
    slug: "quetta",
    city: "Quetta",
    province: "Balochistan",
    areas: [
      "Jinnah Town",
      "Samungli Road",
      "Satellite Town",
      "Cantt",
      "Shahbaz Town",
      "Zarghoon Road",
    ],
  },
];
