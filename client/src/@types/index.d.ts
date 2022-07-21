enum Availability {
  daily,
  weekly,
  biweekly,
  monthly,
  other,
}

type Level = "junior" | "intermediate" | "senior";

enum TechKnowHow {}

enum TimeSlots {}

interface SignUp {
  firstName: string;
  lastName: string;
  username: string;
  password: string;
  email: string;
  image: string;
  isAdmin: boolean;
}

interface Login {
  password: string;
  email: string;
}

interface Offer {
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
  techKnowHow: (keyof typeof TechKnowHow)[];
  location: string;
  yearsExp: number;
  availability: (keyof typeof Availability)[];
  timeslots: (keyof typeof TimeSlots)[];
  description: string;
  startDate: Date;
}
