interface Query {
  _id: any;
  creator: {
    _id: ObjectId;
    username: string;
    firstName: string;
    lastName: string;
    image: string;
  };
  field: Array<String>;
  location: string;
  description: string;
  date: string;
  starred: any;
  techKnowHow: Array<String>;
  level: string;
  availability: Array<String>;
  timeslots: Array<String>;
  offer: boolean;
}

interface QueryData {
  mentoring: Query[];
}
/* 
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
 */
