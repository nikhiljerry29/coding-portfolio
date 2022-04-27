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
            endDate: "Aug 2020",
        },
        {
            title: "Intern Crop Quality Analyst",
            company: "Intello Labs Pvt. Ltd.",
            startDate: "May 2019",
            endDate: "July 2019",
        },
        {
            title: "Student Coordinator",
            company: "Institute Counseling Services, NIT Rourkela",
            startDate: "July 2019",
            endDate: "Apr 2020",
        },
        {
            title: "President",
            company: "RITVIC Club of NIT Rourkela",
            startDate: "July 2018",
            endDate: "Apr 2019",
        },
    ];
    res.status(200).json(experience);
}
