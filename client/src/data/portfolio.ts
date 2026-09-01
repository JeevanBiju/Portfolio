/**
 * Instrumented Editorial design system — Portfolio content lives here for easy local editing.
 * Keep all project claims high-level and sanitized; this is a public-facing technical portfolio.
 */

export type Project = {
  number: string;
  slug: string;
  title: string;
  eyebrow: string;
  statement: string;
  domain: string;
  role: string;
  technologies: string[];
  image?: string;
  visual: "multi" | "identity" | "event" | "human" | "focus" | "mlops";
  context: string;
  challenge: string;
  approach: string[];
  deployment: string;
  outcome: string;
};

export const contact = {
  email: "jeevanbiju123@gmail.com",
  phone: "+91 82816 71982",
  linkedin: "https://www.linkedin.com/in/jeevanbiju",
  github: "https://github.com/JeevanBiju",
  resume: "/assets/resume.pdf",
};

export const assetUrls = {
  mark: "/assets/mark.png",
  portrait: "/assets/portrait.jpg",
  hero: "/assets/hero.jpg",
  multi: "/assets/multi.jpg",
  identity: "/assets/identity.jpg",
  event: "/assets/event.jpg",
};

export const capabilities = [
  {
    number: "01",
    title: "Computer Vision",
    details: "Deep Learning · PyTorch · TensorFlow · OpenCV · YOLO · DeepStream · TensorRT · ONNX · CUDA",
  },
  {
    number: "02",
    title: "Real-Time Video",
    details: "Multi-camera analytics · human tracking · face recognition · CCTV · RTSP · WebRTC · GStreamer",
  },
  {
    number: "03",
    title: "Edge AI",
    details: "NVIDIA GPU inference · on-premise deployment · air-gapped environments · Linux GPU servers · offline AI",
  },
  {
    number: "04",
    title: "AI Backends",
    details: "FastAPI · Flask · REST APIs · PostgreSQL · MongoDB · Qdrant · Milvus · ChromaDB · Pinecone",
  },
];

export const projects: Project[] = [
  {
    number: "01",
    slug: "multi-camera",
    title: "Multi-Camera Surveillance & Situational Awareness",
    eyebrow: "Flagship system",
    statement: "Large-scale visual understanding across multiple video inputs.",
    domain: "Production computer vision",
    role: "Computer Vision Engineer",
    technologies: ["Python", "OpenCV", "YOLO", "FastAPI", "Linux", "GPU Inference"],
    image: assetUrls.multi,
    visual: "multi",
    context: "A production-oriented surveillance and situational-awareness system developed for a high-consequence environment. Public detail is intentionally limited.",
    challenge: "Turn multiple live camera inputs into coherent, searchable visual signals while maintaining real-time responsiveness and a clear deployment boundary.",
    approach: ["Human detection and continuous tracking across camera inputs", "Identity-management and visual analytics capabilities", "Camera calibration and homography-informed spatial transformation", "Interactive dashboards and query paths for live and historical insight"],
    deployment: "Linux-based GPU servers with documented service interfaces and production-oriented data-pipeline optimization.",
    outcome: "An extensible foundation for real-time multi-camera monitoring, visualization, and analyst workflows.",
  },
  {
    number: "02",
    slug: "identity-recognition",
    title: "Identity & Face Recognition",
    eyebrow: "Identity pipeline",
    statement: "Detection, identity management, tracking and event-aware visual context.",
    domain: "Real-time visual intelligence",
    role: "Computer Vision Engineer",
    technologies: ["Python", "OpenCV", "Face Recognition", "Tracking", "Multi-camera"],
    image: assetUrls.identity,
    visual: "identity",
    context: "A focused capability within a broader surveillance platform, presented only at a high-level to protect operational context.",
    challenge: "Make identity-related signals usable within real-time multi-camera workflows without turning the interface into an opaque data stream.",
    approach: ["Visual detection and feature-oriented identity workflows", "Human tracking for continuity across observation frames", "Identity-management pathways integrated with broader analytics", "Human-readable dashboard and query experiences"],
    deployment: "Integrated into GPU-backed visual analytics applications designed for real-time operation.",
    outcome: "A structured identity and tracking capability that supports searchable, contextualized visual intelligence.",
  },
  {
    number: "03",
    slug: "anpr-fire-smoke",
    title: "ANPR + Fire & Smoke Detection",
    eyebrow: "Event detection",
    statement: "Extending visual monitoring from people to vehicles and urgent events.",
    domain: "Production AI surveillance",
    role: "Associate AI/ML Engineer",
    technologies: ["ANPR", "Object Detection", "FastAPI", "TensorRT", "DeepStream", "CUDA"],
    image: assetUrls.event,
    visual: "event",
    context: "An extension of an existing production surveillance platform to support automatic number plate recognition and fire/smoke detection capabilities.",
    challenge: "Broaden the platform’s detection domains while retaining a reliable real-time path from video input to a usable application event.",
    approach: ["Video-stream ingestion for multi-camera monitoring", "Object and event detection stages for person, vehicle, fire and smoke contexts", "GPU inference optimization through TensorRT, DeepStream, CUDA and ONNX", "FastAPI service interfaces for application integration"],
    deployment: "Fully offline, on-premise AI applications designed for air-gapped defense environments.",
    outcome: "A wider visual-event vocabulary that supports more complete production monitoring workflows.",
  },
  {
    number: "04",
    slug: "human-alerts",
    title: "Human-Exclusive CCTV Alerts",
    eyebrow: "IEEE research project",
    statement: "Filter CCTV alerts for human presence to reduce avoidable false alarms.",
    domain: "Applied computer vision",
    role: "Project lead",
    technologies: ["Python", "YOLOv8", "COCO", "OpenCV", "Telegram Bot"],
    visual: "human",
    context: "A published computer-vision project focused on generating alerts exclusively for human presence in CCTV footage.",
    challenge: "Build a focused notification flow that distinguishes the events worth escalating from the background motion a camera sees continuously.",
    approach: ["YOLOv8-based human detection using COCO classes", "OpenCV-driven real-time video processing", "Tracking and alert-notification integration", "Telegram Bot workflow for timely human-presence alerts"],
    deployment: "A reproducible Python-based application for real-time camera monitoring and notifications.",
    outcome: "A streamlined alerting concept that reduces unnecessary notifications while retaining focus on human presence.",
  },
  {
    number: "05",
    slug: "focustrack",
    title: "FocusTrack — Classroom Engagement Analyzer",
    eyebrow: "Applied AI product",
    statement: "Detect, track and interpret classroom engagement through an interactive insight layer.",
    domain: "Computer vision product",
    role: "Project developer",
    technologies: ["YOLOv8", "DeepSORT", "VGG16", "OpenCV", "React", "Supabase"],
    visual: "focus",
    context: "An AI-powered classroom engagement analyzer combining visual detection, tracking, analysis and an educator-facing dashboard.",
    challenge: "Connect raw classroom video signals to a legible interface that helps educators inspect engagement patterns.",
    approach: ["YOLOv8 detection for classroom entities", "DeepSORT for temporal tracking", "VGG16-informed engagement analysis", "React and Supabase dashboard for visualizing engagement insights"],
    deployment: "A full-stack learning-analytics prototype with a dedicated interactive dashboard.",
    outcome: "An end-to-end demonstration of vision, tracking, analysis, frontend development and database-backed insight delivery.",
  },
  {
    number: "06",
    slug: "mlops",
    title: "Image Detection — Reproducible MLOps Pipeline",
    eyebrow: "MLOps system",
    statement: "A trackable path from data ingestion to reproducible image-model deployment.",
    domain: "Machine learning operations",
    role: "Project developer",
    technologies: ["Python", "DVC", "MLflow", "DagsHub", "Docker"],
    visual: "mlops",
    context: "An end-to-end machine-learning workflow designed to make image-detection experimentation and deployment reproducible.",
    challenge: "Keep data, training, evaluation and experimental context connected enough to support reliable iteration.",
    approach: ["Data-ingestion staging and version awareness with DVC", "Training and evaluation workflow", "Experiment tracking using MLflow", "Dockerized packaging for reproducible deployment"],
    deployment: "Containerized workflow designed to reduce environment drift across development and deployment.",
    outcome: "A concise example of disciplined operational thinking around an image-detection model lifecycle.",
  },
];

export const experience = [
  {
    period: "2026 — Present",
    company: "Nervesparks",
    role: "Associate AI/ML Engineer — Computer Vision",
    location: "Bengaluru, India",
    summary: "Extending and deploying production-grade, air-gapped AI surveillance systems with multi-camera monitoring, ANPR, and fire/smoke detection capabilities.",
    tags: ["FastAPI", "TensorRT", "DeepStream", "CUDA", "ONNX", "On-premise AI"],
  },
  {
    period: "2025 — 2026",
    company: "Ogive Technology",
    role: "Computer Vision Engineer",
    location: "Bengaluru, India",
    summary: "Developed core AI-driven surveillance and situational-awareness capabilities, including multi-camera analytics, human tracking, face recognition, dashboards and spatial transformation workflows.",
    tags: ["Multi-camera", "Tracking", "Face recognition", "Linux GPU", "Analytics"],
  },
];

export const toolbox = [
  ["Programming", "Python · SQL · C · R"],
  ["AI / Computer Vision", "PyTorch · TensorFlow · OpenCV · YOLO · DeepStream · TensorRT · ONNX · CUDA · NumPy · Pandas"],
  ["Backend / Deployment", "FastAPI · Flask · REST APIs · Docker · Linux · WebRTC · RTSP"],
  ["Databases", "PostgreSQL · MongoDB · Qdrant · Milvus · ChromaDB · Pinecone"],
  ["Tools", "Git · GitHub · VS Code · Jupyter Notebook · GStreamer · Tableau · LaTeX"],
];

export const publications = [
  {
    number: "01",
    title: "Human Exclusive Alerts in CCTV Surveillance Using Computer Vision",
    conference: "IEEE International Conference on Emerging Technologies for Intelligent Systems — ETIS 2025",
    href: "https://ieeexplore.ieee.org/document/10961654",
  },
  {
    number: "02",
    title: "A Feedback-Driven MLOps Based Approach for Fall Detection",
    conference: "2025 IEEE International Conference on Contemporary Computing and Communications — InC4 2025",
    href: "https://ieeexplore.ieee.org/document/11256398",
  },
];

export const achievements = [
  ["2026", "AI Impact Summit", "Exhibitor representing Indian Navy"],
  ["2024", "Build For Kozhikode", "Hackathon first runner-up"],
  ["2023", "YIP 4.0 — K-DISC", "District-level winner"],
];
