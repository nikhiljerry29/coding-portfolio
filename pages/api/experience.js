export default function handler(_, res) {
    const experience = [
        {
            title: "Senior Quality Analyst",
            company: "L&T Infotech Ltd.",
            startDate: "Aug 2021",
            endDate: "Present",
        },
        {
            title: "Graduate Engineer Trainee",
            company: "L&T Infotech Ltd.",
            startDate: "Aug 2020",
            endDate: "July 2021",
        },
        {
            title: "Intern Crop Quality Analyst",
            company: "Intello Labs Pvt. Ltd.",
            startDate: "July 2019",
            endDate: "May 2019",
        },
        {
            title: "Student Coordinator",
            company: "Institute Counseling Services, NIT Rourkela",
            startDate: "Apr 2020",
            endDate: "July 2019",
        },
        {
            title: "President",
            company: "RITVIC Club of NIT Rourkela",
            startDate: "Apr 2019",
            endDate: "July 2018",
        },
    ];
    res.status(200).json(experience);
}
