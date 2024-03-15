import Navbar from "./Navbar";

export const metadata = {
  title: "Web Design & Digital Marketing Services | Mars Web solution",
  description: "Generated by Next.js",
};

const beBaseUrl = "http://localhost/xampp/MARS/appolopublicschool.com/";
const feBaseUrl = "http://localhost:3000/";

export interface ContactUs {
  [key: string]: any;
}

let year = new Date().getFullYear();
let nextYear = year + 1;
let admissionYear = year + "-" + nextYear.toString().slice(2);

let contactUs: ContactUs = {
  address:
    "# 320, 5th Cross, 5th Block, Banashankari, 3rd Stage, 3rd Phase, Bengaluru-560085",
  phoneNumbers: ["+918026698908/09", "+918792539589"],
  email: "appolopublicsch@gmail.com",
};

let navLinks = {
  home: { name: "HOME", link: "https://www.appolopublicschool.com/index.html" },
  aboutUs: {
    name: "ABOUT US",
    dropDown: [
      {
        name: "Overview",
        link: "https://www.appolopublicschool.com/about-us.html",
      },
      {
        name: "Our Vision / Mission",
        link: "https://www.appolopublicschool.com/mission-vision.html",
      },
      {
        name: "Admission Procedure",
        link: "https://www.appolopublicschool.com/admission-procedure.html",
      },
    ],
  },

  messages: {
    name: "MESSAGES",
    dropDown: [
      {
        name: "Chairperson Message",
        link: "https://www.appolopublicschool.com/chairmans-message.html",
      },
      {
        name: "Vice Chairperson Message",
        link: "https://www.appolopublicschool.com/vice-chairmans-message.html",
      },
      {
        name: "Principal's Message",
        link: "https://www.appolopublicschool.com/principals-message.html",
      },
      {
        name: "Trustee's Message",
        link: "https://www.appolopublicschool.com/trustees-message.html",
      },
    ],
  },
  academics: {
    name: "ACADEMICS",
    dropDown: [
      {
        name: "Curriculum",
        link: "https://www.appolopublicschool.com/curriculum.html",
      },
      {
        name: "Co-Curricular Activities",
        link: "https://www.appolopublicschool.com/co-curricular-activities.html",
      },
      {
        name: "School Timings",
        link: "https://www.appolopublicschool.com/school-timings.html",
      },
      {
        name: "Academic Calender",
        link: "https://www.appolopublicschool.com/academic-calender.html",
      },
      {
        name: "List of Holidays",
        link: "https://www.appolopublicschool.com/holiday-list.html",
      },
    ],
  },
  facilities: {
    name: "FACILITIES",
    link: "https://www.appolopublicschool.com/facilities.html",
  },

  gallery: {
    name: "GALLERY",
    dropDown: [],
  },
  newsandevents: {
    name: "NEWS & EVENTS",
    link: "https://www.appolopublicschool.com/news-events.html",
  },
};

async function fetchData() {
  //---ADD "?" ADD THE end to get rid of the "< token " error
  const res = await fetch(`${beBaseUrl}api/years.php?`);
  if (!res.ok) return undefined;
  return res.json();
}
export default async function WebsiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const data = await fetchData();
  let dropDownLinks = data?.years.map((item: any) => {
    let link = feBaseUrl + "gallery/" + item.id;
    return {
      name: item.fiscal_year,
      link: link,
    };
  });
  navLinks.gallery.dropDown = dropDownLinks
    ? dropDownLinks
    : [
        { name: "2022-23", link: "/" },
        { name: "2022-23", link: "/" },
      ];

  return (
    <div>
      <Navbar contactUs={contactUs} navLinks={navLinks} />

      <main>{children}</main>
    </div>
  );
}