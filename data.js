// Portfolio Data Configuration
// Replace the placeholder data below with your actual information from LinkedIn

const portfolioData = {
    // Personal Information
    personal: {
        name: "Sharjeel Shahzad",
        taglines: [
            'Software Engineer',
            'AI & ML Specialist',
            'Full Stack Developer',
            'Problem Solver',
            'Data Science Enthusiast',
            'Tech Innovator'
        ],
        about: "I am a Software Engineer specializing in Artificial Intelligence (AI) and Machine Learning (ML), with a strong passion for building intelligent, data-driven solutions. My expertise lies in developing and optimizing machine learning models, implementing AI algorithms, and applying predictive analytics to enhance performance and efficiency. I am highly proficient in Python and possess extensive experience in the entire ML workflow including data preprocessing, model training, evaluation, and deployment. With a solid foundation in Object-Oriented Programming (OOP) and experience in C and Java, I excel at adapting to different programming environments and solving complex problems effectively. My knowledge of SQL and database systems further strengthens my ability to design and integrate efficient data pipelines. I continuously explore advancements in deep learning, natural language processing, and data science, leveraging AI and ML to build impactful solutions that drive automation, informed decision-making, and enhanced user experiences.",
        linkedin: "https://www.linkedin.com/in/sharjeel-shahzad-193063386",
        github: "https://github.com/Sharjeel-Shahzad1",
        email: "ssharjeel160@gmail.com",
        phone: "+92 3159446262",
        location: "DHA Lahore, Pakistan"
    },

    // Education
    education: [
        {
            degree: "Bachelor's Degree, Computer Software Engineering",
            institution: "COMSATS University Islamabad",
            duration: "Sep 2023 - Jul 2027",
            description: "Pursuing Bachelor's degree in Computer Software Engineering with focus on software development, algorithms, and modern technologies."
        },
        {
            degree: "Intermediate in Computer Sciences",
            institution: "Punjab Group Of Colleges",
            duration: "Aug 2021 - May 2023",
            description: "Completed Intermediate studies with Grade A, building foundation in Computer Sciences and programming fundamentals."
        }
    ],

    // Skills - Update with your actual skills from LinkedIn
    skills: {
        "Top Skills": [
            "Artificial Intelligence (AI)",
            "Python (Programming Language)",
            "Microsoft SQL Server",
            "Java",
            "C"
        ],
        "Programming Languages": [
            "Python",
            "Java",
            "C",
            "JavaScript",
            "SQL",
            "C++"
        ],
        "AI & Machine Learning": [
            "Machine Learning Models",
            "Deep Learning",
            "Natural Language Processing",
            "Predictive Analytics",
            "Data Preprocessing",
            "Model Training & Evaluation"
        ],
        "Web Development & Databases": [
            "SQL Databases",
            "Database Systems",
            "Data Pipelines",
            "Object-Oriented Programming",
            "Full Stack Development"
        ],
        "Tools & Technologies": [
            "Git",
            "GitHub",
            "VS Code",
            "Data Science Tools"
        ]
    },

    // Experience & Internships
    experience: [
        {
            title: "Artificial Intelligence & Machine Learning Intern",
            company: "Innoverse.Pk",
            duration: "Aug 2025 - Sep 2025 · 2 months",
            location: "Punjab, Pakistan · Remote",
            description: "During my internship at Innoverse.Pk, I gained hands-on experience with real-world datasets and machine learning concepts. I worked on data preprocessing techniques including feature selection, normalization, and handling missing values. Applied algorithms like linear regression and supervised learning methods while evaluating model performance using metrics. This experience strengthened my ML workflow understanding and enhanced my problem-solving approach for AI projects."
        },
        {
            title: "Artificial Intelligence and Machine Learning Course",
            company: "Skillify",
            duration: "Completed",
            location: "Online Learning",
            description: "Successfully completed a comprehensive AI and Machine Learning course at Skillify, gaining insights into fundamental AI principles and ML approaches. Developed expertise in data preparation, transformation techniques, and explored supervised and unsupervised algorithms including regression, classification, and clustering. Learned model optimization methods and gained structured understanding of the end-to-end ML pipeline. This course built a solid foundation for applying AI/ML concepts to real-world applications."
        }
    ],

    // Projects
    projects: [
        {
            title: "Project Title 1",
            description: "Description of your project, technologies used, and the problem it solves. Add details about your role and achievements.",
            technologies: ["React", "Node.js", "MongoDB"],
            githubLink: "https://github.com/Sharjeel-Shahzad1/project-name",
            liveLink: "" // Optional
        },
        {
            title: "Project Title 2",
            description: "Description of your project, technologies used, and the problem it solves.",
            technologies: ["Python", "Flask", "MySQL"],
            githubLink: "https://github.com/Sharjeel-Shahzad1/project-name",
            liveLink: ""
        },
        {
            title: "Project Title 3",
            description: "Description of your project, technologies used, and the problem it solves.",
            technologies: ["JavaScript", "HTML/CSS", "API"],
            githubLink: "https://github.com/Sharjeel-Shahzad1/project-name",
            liveLink: ""
        }
        // Add all your projects from LinkedIn
    ],

    // Statistics (update with your actual numbers)
    stats: {
        projects: 50,
        codingHours: 1000,
        coffeeCups: 500,
        certifications: 10
    }
};

// Export for use in main script
if (typeof module !== 'undefined' && module.exports) {
    module.exports = portfolioData;
}
