namespace Mentoring {
  type Level = "junior" | "intermediate" | "senior";
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
