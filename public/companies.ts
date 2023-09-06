interface jobsTypes {
  id: number;
  title: string;
  location: string;
  posted: string;
  company: string;
  link: string;
  description: string;
}

interface companyTypes {
  id: number;
  company: string;
  jobs: jobsTypes[];
}

export const companies: companyTypes[] = [
  {
    id: 1,
    company: "Youtube",
    jobs: [
      {
        id: 1,
        title: "Frontend developer",
        location: "Rabat, agdal, morocco",
        posted: "23-08-2023",
        company: "Amazon",
        link: "/job:1",
        description: "description test test test",
      },
      {
        id: 1,
        title: "Devops developer",
        location: "Rabat, agdal, morocco",
        posted: "23-08-2023",
        company: "Amazon",
        link: "/job:1",
        description: "description test test test",
      },
    ],
  },
  {
    id: 2,
    company: "Google",
    jobs: [
      {
        id: 1,
        title: "Frontend developer",
        location: "Rabat, agdal, morocco",
        posted: "23-08-2023",
        company: "Amazon",
        link: "/job:1",
        description: "description test test test",
      },
      {
        id: 1,
        title: "Frontend developer",
        location: "Rabat, agdal, morocco",
        posted: "23-08-2023",
        company: "Amazon",
        link: "/job:1",
        description: "description test test test",
      },
    ],
  },
];
