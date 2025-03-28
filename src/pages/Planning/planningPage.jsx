import { useState } from "react";
import { CheckCircle, Circle, ChevronDown, ChevronUp } from "lucide-react";

const tasks = [
  { title: "Create a budget", details: ["Prioritize your non-negotiable vendors and details", "Factor in vendor tip and relevant tax", "Leave room for special details and unique elements", "Set aside contingency funds", "Track expenses diligently"] },
  { title: "Make your guest list", details: ["Decide on the number of guests", "Categorize guests by priority", "Collect contact information", "Send out RSVPs", "Manage last-minute changes"] },
  { title: "Select your season", details: ["Consider weather, availability, and budget", "Check for peak and off-peak pricing", "Plan around major holidays", "Account for seasonal decor and flowers", "Ensure vendor availability"] },
  { title: "Book your venue", details: ["Narrow down your options based on availability, location, and cost", "Visit potential venues in person", "Confirm seating capacity and amenities", "Understand cancellation policies", "Secure necessary permits"] },
  { title: "Hire a planner", details: ["Research reputable event planners", "Check reviews and portfolios", "Discuss budget and expectations", "Ensure they handle vendor coordination", "Sign a detailed contract"] },
  { title: "Choose your style", details: ["Decide on a theme", "Select color palettes", "Incorporate personal touches", "Coordinate decorations and flowers", "Match invitations with the theme"] },
  { title: "Invite your guests", details: ["Design and print invitations", "Send invitations on time", "Provide clear RSVP instructions", "Offer virtual attendance options", "Follow up with guests"] },
  { title: "Hire a photographer", details: ["Research professional photographers", "Review past work and references", "Discuss preferred photography style", "Plan for pre-event and event-day shots", "Confirm editing and delivery timelines"] },
  { title: "Hire entertainment", details: ["Decide on music or performances", "Book a DJ or live band", "Prepare a playlist in advance", "Coordinate with performers", "Ensure venue has necessary equipment"] },
  { title: "Hire additional vendors", details: ["Identify catering, florists, and decorators", "Compare vendor packages and pricing", "Schedule tastings and sample views", "Check vendor licenses and insurance", "Sign contracts early"] },
  { title: "Create your menu", details: ["Choose a balanced menu", "Consider dietary restrictions", "Coordinate drinks and desserts", "Schedule a tasting session", "Plan for buffet or plated service"] },
  { title: "Finalize your event design", details: ["Confirm decor and floral arrangements", "Ensure signage and seating charts are ready", "Test lighting and ambiance", "Double-check rental deliveries", "Prepare a backup plan"] },
  { title: "Take care of your guests", details: ["Arrange transportation options", "Book accommodations if needed", "Provide welcome gifts or favors", "Ensure accessibility for all guests", "Plan for special guest needs"] },
  { title: "Create your seating chart", details: ["Map out the venue layout", "Group guests strategically", "Ensure VIP seating arrangements", "Consider table conversations", "Make last-minute adjustments"] },
  { title: "Host your event!", details: ["Prepare a detailed event schedule", "Assign roles to coordinators", "Ensure smooth vendor coordination", "Keep an emergency kit handy", "Enjoy and celebrate!"] }
];

export default function EventPlanning() {
  const [completed, setCompleted] = useState(["Create a budget", "Make your guest list"]);
  const [expanded, setExpanded] = useState([]);

  const toggleTask = (task) => {
    setCompleted((prev) =>
      prev.includes(task)
        ? prev.filter((item) => item !== task)
        : [...prev, task]
    );
  };

  const toggleExpand = (task) => {
    setExpanded((prev) =>
      prev.includes(task)
        ? prev.filter((item) => item !== task)
        : [...prev, task]
    );
  };

  return (
    <div className="planning-image">
    
    <div
      className="event-planning-container"
    >
      <div className="event-planning-content">
        {tasks.map((task, index) => (
          <div key={index} className="event-planning-task">
            <div className="event-planning-task-header">
              <div
                className="event-planning-task-title"
                onClick={() => toggleTask(task.title)}
              >
                {completed.includes(task.title) ? (
                  <CheckCircle className="text-green-500" />
                ) : (
                  <Circle className="text-gray-400" />
                )}
                <span
                  className={
                    completed.includes(task.title)
                      ? "event-planning-task-title completed"
                      : "event-planning-task-title"
                  }
                >
                  {task.title}
                </span>
              </div>
              {task.details.length > 0 && (
                <button
                  onClick={() => toggleExpand(task.title)}
                  className="event-planning-toggle-btn"
                >
                  Help me {expanded.includes(task.title) ? <ChevronUp size={16} className="ml-1" /> : <ChevronDown size={16} className="ml-1" />}
                </button>
              )}
            </div>
            {expanded.includes(task.title) && task.details.length > 0 && (
              <ul className="event-planning-details">
                {task.details.map((detail, idx) => (
                  <li key={idx}>{detail}</li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </div>
    </div>
  );
}
