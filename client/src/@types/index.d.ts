interface QueryM {
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
  title: string;
}

interface QueryS {
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
  title: string;
  length: number;
  title: string;
}

interface QueryC {
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
  frequency: Array<String>;
  time: number;
  title: string;
}

interface QueryData {
  mentoring: QueryM[];
  coworking: QueryC[];
  shadowing: QueryS[];
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
