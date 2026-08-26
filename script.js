const topics = {

    linux: {
        title: "🐧 Linux",

        description:
            "Learn Linux from basic commands to real-time server administration, troubleshooting and automation.",

        points: [
            "Linux Commands",
            "File & Directory Management",
            "Users & Groups",
            "File Permissions",
            "Process Management",
            "Disk & Memory Management",
            "Linux Troubleshooting",
            "Shell Scripting",
            "Linux Server Administration"
        ],

        pdf: "LINUX.pdf",
        pdfTitle: "📖 Linux Notes"
    },


    aws: {
        title: "☁️ AWS",

        description:
            "Learn AWS cloud services and how to build, deploy and manage real-time cloud infrastructure.",

        points: [
            "EC2",
            "S3",
            "IAM",
            "VPC",
            "Security Groups",
            "Load Balancer",
            "Auto Scaling",
            "CloudWatch",
            "Route 53",
            "RDS",
            "AWS CLI",
            "AWS Networking"
        ]
    },


    python: {
        title: "🐍 Python",

        description:
            "Learn Python programming with a focus on automation, scripting, DevOps and real-time projects.",

        points: [
            "Python Basics",
            "Variables & Data Types",
            "Conditions & Loops",
            "Functions",
            "Lists & Dictionaries",
            "File Handling",
            "Exception Handling",
            "Object-Oriented Programming",
            "Python Automation",
            "DevOps Scripts"
        ]
    },


    devops: {
        title: "⚙️ DevOps",

        description:
            "Learn the complete DevOps lifecycle from source code to production deployment and monitoring.",

        points: [
            "Git & GitHub",
            "Jenkins",
            "Docker",
            "Kubernetes",
            "Terraform",
            "Ansible",
            "CI/CD",
            "AWS DevOps",
            "Monitoring",
            "Infrastructure as Code"
        ]
    },


    devsecops: {
        title: "🛡️ DevSecOps",

        description:
            "Learn how to integrate security into the complete software development and DevOps lifecycle.",

        points: [
            "DevSecOps Fundamentals",
            "Secure SDLC",
            "Security in CI/CD",
            "SAST",
            "DAST",
            "Dependency Scanning",
            "Container Security",
            "Secrets Management",
            "Infrastructure Security",
            "Cloud Security",
            "AWS Security",
            "Vulnerability Management"
        ]
    },


    github: {
        title: "🔗 GitHub",

        description:
            "Learn GitHub for source-code management, collaboration and CI/CD.",

        points: [
            "Git Commands",
            "Repositories",
            "Branches",
            "Merge",
            "Pull Requests",
            "Code Review",
            "GitHub Actions",
            "GitHub Secrets",
            "GitHub Projects",
            "CI/CD"
        ]
    },


    copilot: {
        title: "✨ GitHub Copilot",

        description:
            "Learn AI-assisted development using GitHub Copilot for coding, debugging and testing.",

        points: [
            "AI Code Generation",
            "Code Explanation",
            "Debugging",
            "Unit Test Generation",
            "Code Refactoring",
            "Documentation",
            "GitHub Copilot Chat",
            "Code Suggestions",
            "Developer Productivity"
        ]
    },


    pythonai: {
        title: "🤖 Python with AI",

        description:
            "Learn how Python can be combined with AI to build intelligent automation and real-time applications.",

        points: [
            "AI Fundamentals",
            "Python AI Libraries",
            "AI APIs",
            "Prompt Engineering",
            "Chatbots",
            "AI Automation",
            "Log Analysis",
            "DevOps AI Assistant",
            "AI Applications",
            "Real-Time AI Projects"
        ]
    }

};



function showTopic(topicName) {

    const topic = topics[topicName];

    if (!topic) {
        console.error("Topic not found:", topicName);
        return;
    }


    const details =
        document.getElementById("topic-details");

    const title =
        document.getElementById("detail-title");

    const description =
        document.getElementById("detail-description");

    const content =
        document.getElementById("detail-content");


    title.innerText = topic.title;

    description.innerText = topic.description;

    content.innerHTML = "";


    // ==============================
    // TOPIC POINTS
    // ==============================

    topic.points.forEach(function(point) {

        const box =
            document.createElement("div");

        box.className = "detail-box";

        box.innerHTML = "✓ " + point;

        content.appendChild(box);

    });


    // ==============================
    // PDF NOTES
    // ==============================

    if (topic.pdf) {

        const notesTitle =
            document.createElement("h3");

        notesTitle.className = "notes-title";

        notesTitle.innerHTML =
            topic.pdfTitle || "📖 Notes";

        content.appendChild(notesTitle);


        // PDF container

        const pdfContainer =
            document.createElement("div");

        pdfContainer.className =
            "pdf-container";


        // PDF viewer

        const pdfViewer =
            document.createElement("iframe");

        pdfViewer.src = topic.pdf;

        pdfViewer.className =
            "pdf-viewer";

        pdfViewer.title =
            topic.title + " Notes";


        pdfContainer.appendChild(pdfViewer);

        content.appendChild(pdfContainer);


        // Open PDF button

        const pdfButton =
            document.createElement("a");

        pdfButton.href = topic.pdf;

        pdfButton.target = "_blank";

        pdfButton.rel =
            "noopener noreferrer";

        pdfButton.className =
            "pdf-button";

        pdfButton.innerHTML =
            "📖 Open Linux Notes in New Tab";

        content.appendChild(pdfButton);

    }


    // ==============================
    // SHOW DETAILS
    // ==============================

    details.classList.add("show");


    details.scrollIntoView({

        behavior: "smooth",

        block: "start"

    });

}
