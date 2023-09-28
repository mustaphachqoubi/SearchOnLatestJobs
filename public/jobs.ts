interface jobsTypes {
  id: number;
  title: string;
  location: string;
  posted: string;
  company: string;
  link: string;
  description: string;
  isApplied: boolean,
  apply_link: string
}

interface AppliedJobsTypes {
  id: number;
  title: string;
  company: string;
  interview: boolean;
  job: boolean;
  gohsting: boolean;
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
];

export const jobs: jobsTypes[] = [
  {
    id: 1,
    title: "Frontend developer",
    location: "Rabat, agdal, morocco",
    posted: "23-08-2023",
    company: "Amazon",
    link: "/job:1",
    description: "description test test test",
    isApplied: true,
        apply_link: "https://www.linkedin.com/jobs/collections/recommended/?currentJobId=3721961154"

  },
  {
    id: 2,
    title: "Frontend developer",
    location: "Rabat, agdal, morocco",
    posted: "23-08-2023",
    company: "Facebook",
    link: "/job:2",
    description: "description test test test",
    isApplied: false,
    apply_link: "https://www.linkedin.com/jobs/collections/recommended/?currentJobId=3721961154"
  },
  {
    id: 3,
    title: "Frontend developer",
    location: "Rabat, agdal, morocco",
    posted: "23-08-2023",
    company: "Youtube",
    link: "/job:3",
    description: "description test test test",
    isApplied: true,
        apply_link: "https://www.linkedin.com/jobs/collections/recommended/?currentJobId=3721961154"
  },
  {
    id: 4,
    title: "Frontend developer",
    location: "Rabat, agdal, morocco",
    posted: "23-08-2023",
    company: "Google",
    link: "/job:4",
    description: "description test test test",
    isApplied: false,
    apply_link: "https://www.linkedin.com/jobs/collections/recommended/?currentJobId=3721961154"
  },
];


export const jobsModel = [ 
  {
    "_id": "1",
    "title": "Software Engineer",
    "company": "TechCorp",
    "isApplied": true,
    "location": "San Francisco, CA",
    "posted_date": "2023-09-17",
    "description": "TechCorp is seeking a talented Software Engineer to join our team...",
    "apply_here": "https://example.com/apply/1",
    "apply_on_their_website": "https://techcorp.com/careers"
  },
  {
    "_id": "2",
    "title": "Product Manager",
    "company": "InnovateTech",
    "isApplied": false,
    "location": "New York, NY",
    "posted_date": "2023-09-15",
    "description": "InnovateTech is looking for an experienced Product Manager to lead our product development...",
    "apply_here": "https://example.com/apply/2",
    "apply_on_their_website": "https://innovatetech.com/careers"
  },
  {
    "_id": "3",
    "title": "Data Analyst",
    "company": "Data Insights Inc.",
    "isApplied": false,
    "location": "Los Angeles, CA",
    "posted_date": "2023-09-14",
    "description": "Data Insights Inc. is searching for a Data Analyst to analyze and interpret data...",
    "apply_here": "https://example.com/apply/3",
    "apply_on_their_website": "https://datainsights.com/careers"
  },
  {
    "_id": "4",
    "title": "Graphic Designer",
    "company": "CreatiDesign Studios",
    "isApplied": true,
    "location": "Chicago, IL",
    "posted_date": "2023-09-13",
    "description": "CreatiDesign Studios is hiring a Graphic Designer to create stunning visual content...",
    "apply_here": "https://example.com/apply/4",
    "apply_on_their_website": "https://creatidesign.com/careers"
  },
  {
    "_id": "5",
    "title": "Marketing Manager",
    "company": "GrowthMarketers Inc.",
    "isApplied": false,
    "location": "Austin, TX",
    "posted_date": "2023-09-12",
    "description": "GrowthMarketers Inc. is seeking a Marketing Manager to drive marketing strategies...",
    "apply_here": "https://example.com/apply/5",
    "apply_on_their_website": "https://growthmarketers.com/careers"
  }
]

