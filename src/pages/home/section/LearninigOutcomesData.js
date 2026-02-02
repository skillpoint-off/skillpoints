import Python from "../../../assets/icons/python.png";
import LangChain from "../../../assets/icons/langchain.png";
import Notebook from "../../../assets/icons/notebook.png";
import Git from "../../../assets/icons/git.png";
import AWS from "../../../assets/icons/AWS.svg";
import Docker from "../../../assets/icons/Docker.svg";
import Fastapi from "../../../assets/icons/Fastapi.svg";
import Flask from "../../../assets/icons/Flask.svg";
import GCP from "../../../assets/icons/GCP.png";
import Hugging from "../../../assets/icons/Hugging.svg";
import Mysql from "../../../assets/icons/mysql.svg";
import NumPy from "../../../assets/icons/NumPy.svg";
import OpenCv from "../../../assets/icons/OpenCV.svg";
import Pandas from "../../../assets/icons/Pandas.svg";
import Post from "../../../assets/icons/Postgresql.svg";
import Pytest from "../../../assets/icons/PyTest.svg";
import Pytorch from "../../../assets/icons/PyTorch.svg";
import Scikit from "../../../assets/icons/Scikit.svg";
import Vscode from "../../../assets/icons/Vscode.svg";
import TensorFlow from "../../../assets/icons/TensorFlow.svg";

const outcomes = [
    // ===== COURSE A : AI FRONTIER ENGINEERING =====
    {
        id: 1,
        title: "Core Programming Foundations",
        intro: "AI systems are only as strong as the code that powers them.",
        points: [
            "Programming logic for AI systems",
            "Memory and execution flow awareness",
            "Object-oriented design for scalability"
        ],
        tools: [Python, Notebook, Git, Vscode],
        techniques: [
            { icon: "Code", text: "Algorithmic thinking" },
            { icon: "Cpu", text: "Memory model reasoning" },
            { icon: "Bug", text: "Debugging AI pipelines" }
        ],
    },

    {
        id: 2,
        title: "Foundations of Intelligent Systems",
        intro: "Understand how machines learn from data.",
        points: [
            "What intelligence means in machines",
            "Data as the core learning primitive",
            "Supervised learning foundations"
        ],
        tools: [Python, NumPy, Pandas, Notebook],
        techniques: [
            { icon: "Math", text: "Mathematical modeling" },
            { icon: "Database", text: "Data-driven reasoning" },
            { icon: "ChartLine", text: "Regression analysis" }
        ],
    },

    {
        id: 3,
        title: "Classification Systems",
        intro: "Teach machines to make decisions.",
        points: [
            "Binary and multi-class classification",
            "Decision boundary understanding",
            "Algorithm strengths and limitations"
        ],
        tools: [Python, Scikit, NumPy, Notebook],
        techniques: [
            { icon: "Split", text: "Decision boundary visualization" },
            { icon: "Scale", text: "Bias–variance tradeoff analysis" },
            { icon: "AlertTriangle", text: "Failure case evaluation" }
        ],
    },

    {
        id: 4,
        title: "Ensemble Learning",
        intro: "Improve performance by combining models.",
        points: [
            "Bagging and boosting concepts",
            "Reducing model variance",
            "Building robust predictors"
        ],
        tools: [Python, Scikit],
        techniques: [
            { icon: "Layers", text: "Ensemble strategy design" },
            { icon: "TrendingUp", text: "Boosting optimization" },
            { icon: "Shield", text: "Robustness improvement" }
        ],
    },

    {
        id: 5,
        title: "Deep Learning Foundation",
        intro: "Move from algorithms to learning architectures.",
        points: [
            "Neural network fundamentals",
            "Gradient-based learning",
            "Training deep models effectively"
        ],
        tools: [Python, TensorFlow, Pytorch],
        techniques: [
            { icon: "Network", text: "Neural architecture design" },
            { icon: "Repeat", text: "Backpropagation mechanics" },
            { icon: "Sliders", text: "Regularization & tuning" }
        ],
    },

    {
        id: 6,
        title: "Computer Vision & Sequential Models",
        intro: "Enable machines to see and understand sequences.",
        points: [
            "Image feature extraction",
            "Temporal data understanding",
            "Sequential learning models"
        ],
        tools: [Python, OpenCv, TensorFlow, Pytorch],
        techniques: [
            { icon: "Eye", text: "Convolutional feature learning" },
            { icon: "Clock", text: "Temporal dependency modeling" },
            { icon: "Shuffle", text: "Sequence representation learning" }
        ],
    },

    {
        id: 7,
        title: "Transformers & Modern AI",
        intro: "Adopt state-of-the-art AI architectures.",
        points: [
            "Transformer architecture fundamentals",
            "Attention-based learning",
            "Modern representation techniques"
        ],
        tools: [Python, Hugging, Pytorch],
        techniques: [
            { icon: "Sparkles", text: "Attention mechanism design" },
            { icon: "Focus", text: "Self-attention optimization" },
            { icon: "Layers", text: "Representation learning" }
        ],
    },

    {
        id: 8,
        title: "Agentic AI & System Architecture",
        intro: "Move from models to intelligent agents.",
        points: [
            "Agent-based reasoning systems",
            "Tool-using AI workflows",
            "Multi-step decision making"
        ],
        tools: [Python, LangChain],
        techniques: [
            { icon: "Brain", text: "Agent planning & reasoning" },
            { icon: "Workflow", text: "Tool orchestration logic" },
            { icon: "Route", text: "Multi-step execution control" }
        ],
    },

    {
        id: 9,
        title: "Application Building & Deployment",
        intro: "Turn AI models into real-world applications.",
        points: [
            "AI-powered API development",
            "Model serving pipelines",
            "Deployment and monitoring"
        ],
        tools: [Python, Fastapi, Flask, Docker, AWS, GCP, Git],
        techniques: [
            { icon: "Api", text: "AI API design" },
            { icon: "Cloud", text: "Model serving workflows" },
            { icon: "Activity", text: "Deployment monitoring" }
        ],
    },

    // ===== COURSE B : SYSTEMS & SOFTWARE ENGINEERING =====
    {
        id: 10,
        title: "Core Programming Foundations",
        intro: "Before systems and scale, engineers must write correct and efficient code.",
        points: [
            "Strong programming logic and control flow",
            "Memory fundamentals and execution flow",
            "Object-oriented design principles"
        ],
        tools: [Python, Vscode, Git],
        techniques: [
            { icon: "Terminal", text: "Structured programming" },
            { icon: "Cpu", text: "Memory model understanding" },
            { icon: "Search", text: "Debugging and tracing" }
        ],
    },

    {
        id: 11,
        title: "Data Structures & Algorithms (DSA)",
        intro: "Problem-solving is the backbone of engineering.",
        points: [
            "Efficient data organization",
            "Algorithmic problem solving",
            "Time and space complexity analysis"
        ],
        tools: [Python, Vscode],
        techniques: [
            { icon: "GitBranch", text: "Algorithmic thinking" },
            { icon: "Gauge", text: "Complexity analysis" },
            { icon: "Zap", text: "Optimization strategies" }
        ],
    },

    {
        id: 12,
        title: "Operating Systems & Low-level Systems",
        intro: "Software performance depends on how systems work underneath.",
        points: [
            "Process and thread management",
            "Memory and file system handling",
            "Concurrency and synchronization"
        ],
        tools: [Python, Vscode],
        techniques: [
            { icon: "Activity", text: "Process scheduling analysis" },
            { icon: "Shuffle", text: "Concurrency control" },
            { icon: "AlertTriangle", text: "Deadlock detection and handling" }
        ],
    },

    {
        id: 13,
        title: "Computer Networks & Distributed Basics",
        intro: "Modern software runs on connected and distributed systems.",
        points: [
            "Network communication fundamentals",
            "Client–server architecture",
            "Distributed system basics"
        ],
        tools: [Python, Vscode],
        techniques: [
            { icon: "Network", text: "Protocol-based communication" },
            { icon: "Repeat", text: "Request–response modeling" },
            { icon: "ShieldAlert", text: "Latency and failure handling" }
        ],
    },

    {
        id: 14,
        title: "Databases & Data Management",
        intro: "Data is the backbone of every software system.",
        points: [
            "Relational database design",
            "Efficient querying and indexing",
            "Data consistency and transactions"
        ],
        tools: [Mysql, Post],
        techniques: [
            { icon: "Database", text: "Schema design" },
            { icon: "Filter", text: "Query optimization" },
            { icon: "Lock", text: "Transaction management" }
        ],
    },

    {
        id: 15,
        title: "Software Engineering Principles",
        intro: "Engineering discipline separates coders from software engineers.",
        points: [
            "Software development lifecycle",
            "Version control and collaboration",
            "Testing and code quality"
        ],
        tools: [Git, Pytest],
        techniques: [
            { icon: "Boxes", text: "Modular design" },
            { icon: "GitPullRequest", text: "Version control workflows" },
            { icon: "CheckCircle", text: "Unit and integration testing" }
        ],
    },

    {
        id: 16,
        title: "System Design & Architecture",
        intro: "Design systems that scale, perform, and survive real-world usage.",
        points: [
            "Scalable system design",
            "Service-oriented architecture",
            "Performance and reliability trade-offs"
        ],
        tools: [Python, Vscode],
        techniques: [
            { icon: "Layers", text: "Architectural decomposition" },
            { icon: "TrendingUp", text: "Scalability planning" },
            { icon: "BarChart", text: "Failure and load analysis" }
        ],
    },

    {
        id: 17,
        title: "Cloud, DevOps & Deployment",
        intro: "Modern software must ship fast and run reliably.",
        points: [
            "Cloud infrastructure basics",
            "CI/CD pipelines",
            "Monitoring and observability"
        ],
        tools: [Docker, AWS, GCP, Git],
        techniques: [
            { icon: "Cloud", text: "Infrastructure automation" },
            { icon: "Rocket", text: "Continuous deployment" },
            { icon: "Eye", text: "Monitoring and logging" }
        ],
    },

    {
        id: 18,
        title: "Building Production-Grade Applications",
        intro: "Turn designs into reliable, real-world software products.",
        points: [
            "Backend application development",
            "Security and authentication basics",
            "Performance optimization"
        ],
        tools: [Python, Fastapi, Flask, Git],
        techniques: [
            { icon: "Server", text: "API-driven development" },
            { icon: "Link", text: "System integration" },
            { icon: "Wrench", text: "Production debugging" }
        ],
    },
];

export default outcomes;
