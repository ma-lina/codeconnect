interface Query {
  _id: any;
  creator: any;
  field: any;
  location: string;
  description: string;
  // date: Date; -> is not date but string, causing bugs
  date: string;
  starred: any;
  techKnowHow: any;
  level: string;
  availability: any;
  timeslots: any;
  offer: boolean;
}

interface QueryData {
  mentoring: Query[];
}

namespace Mentoring {
  type Level = "Junior" | "Intermediate" | "Senior";

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
