interface jobsTypes {
  id: number;
  title: string;
  location: string;
  posted: string;
  company: string;
  link: string,
  description: string;
}

interface AppliedJobsTypes {
  id: number;
  title: string;
  company: string;
  interview: boolean;
  job: boolean;
  gohsting: boolean
}


export const AppliedJobs: AppliedJobsTypes[] = [
  {
    id: 1,
    title: "Frontend developer",
    company: "Youtube",
    interview: true,
    job: true,
    gohsting: false,
  },
  {
    id: 2,
    title: "Frontend developer",
    company: "Facebook",
    interview: false,
    job: false,
    gohsting: true,
  },
]

export const jobs: jobsTypes[] = [
  {
  id: 1,
  title: "Frontend developer",
  location: "Rabat, agdal, morocco", 
  posted: "23-08-2023",
  company: "Amazon",
  link: "/job:1",
  description: "description test test test"
  },
  {
  id: 2,
  title: "Frontend developer",
  location: "Rabat, agdal, morocco", 
  posted: "23-08-2023",
  company: "Amazon",
  link: "/job:2",
  description: "description test test test"
  },
  {
  id: 3,
  title: "Frontend developer",
  location: "Rabat, agdal, morocco", 
  posted: "23-08-2023",
  company: "Amazon",
  link: "/job:3",
  description: "description test test test"
  },
  {
  id: 4,
  title: "Frontend developer",
  location: "Rabat, agdal, morocco", 
  posted: "23-08-2023",
  company: "Amazon",
  link: "/job:4",
  description: "description test test test",
  },
  {
  id: 5,
  title: "Frontend developer",
  location: "Rabat, agdal, morocco", 
  posted: "23-08-2023",
  company: "Amazon",
  link: "/job:5",
  description: "description test test test",
  },
  {
  id: 6,
  title: "Frontend developer",
  location: "Rabat, agdal, morocco", 
  posted: "23-08-2023",
  company: "Amazon",
  link: "/job:6",
  description: "description test test test",
  },
]
