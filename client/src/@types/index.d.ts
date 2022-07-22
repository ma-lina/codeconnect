namespace Mentoring {
  enum Availability {
    daily = "daily",
    weekly = "weekly",
    biweekly = "biweekly",
    monthly = "monthly",
    other = "other",
  }

  type Level = "junior" | "intermediate" | "senior";

  enum Field {
    frontend = "Frontend",
    backend = "Backend",
    devOps = "DevOps",
    softskills = "Softskills",
  }

  enum TechKnowHow {
    ada = "Ada",
    angular = "Angular",
    ai = "AI - machine learning",
    aws = "Cloud Computing AWS",
    azure = "Cloud Computing Azure",
    c = "C#",
    cplusplus = "C/C++",
    cobol = "Cobol",
    css = "CSS",
    dart = "Dart",
    dataanalysis = "Data analysis",
    delphi = "Delphi/Pascal",
    docker = "Docker",
    figma = "Figma",
    git = "Git/GitHub",
    go = "Go",
    google = "Cloud Computing Google Cloud",
    groovy = "Groovy",
    haskell = "Haskell",
    html = "HTML",
    java = "Java",
    javascript = "Javascript",
    julia = "Julia",
    kotlin = "Kotlin",
    kubernetes = "Kubernetes",
    linux = "Linux",
    lua = "Lua",
    matlab = "MATLAB",
    mongodb = "MongoDB",
    nodejs = "Node.js",
    nosql = "NoSQL",
    oracle = "Cloud Computing Oracle",
    pearl = "Pearl",
    php = "PHP",
    pm = "Project Managment",
    python = "Python",
    r = "R",
    react = "React.js",
    ruby = "Ruby",
    rust = "Rust",
    sass = "Sass",
    scala = "Scala",
    scrum = "Scrum",
    securitiy = "Cyber Security",
    sql = "SQL",
    swift = "Swift",
    typescript = "Typescript",
    ui = "UI",
    ux = "UX",
    vba = "Visual Basic for Applications",
    visualbasic = "Classic Visual Basic",
    vue = "Vue.js",
  }

  enum TimeSlots {}
  interface Offer {
    field: (keyof typeof Field)[];
    techKnowHow: (keyof typeof TechKnowHow)[];
    location: string;
    yearsExp: number;
    availability: (keyof typeof Availability)[];
    timeslots: (keyof typeof TimeSlots)[];
    level: Level;
    description: string;
    startDate: Date;
  }
  interface Request {
    field: (keyof typeof Field)[];
    techKnowHow: (keyof typeof TechKnowHow)[];
    location: string;
    yearsExp: number;
    availability: (keyof typeof Availability)[];
    timeslots: (keyof typeof TimeSlots)[];
    description: string;
    startDate: Date;
  }
}

namespace Coworking {}
namespace Shadowing {}
