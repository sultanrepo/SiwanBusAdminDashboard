import {
  MdDashboard,
  MdDirectionsBus,
  MdRoute,
  MdEventSeat,
  MdSettings,
  MdPeople,
  MdAssessment,
  MdAttachMoney
} from "react-icons/md";

export const sidebarConfig = [
  {
    section: "OPERATIONS",
    items: [
      {
        label: "Dashboard",
        path: "/dashboard",
        icon: MdDashboard,
        roles: ["SUPER_ADMIN", "ADMIN", "OPERATOR"]
      },
      {
        label: "Bookings",
        path: "/bookings",
        icon: MdEventSeat,
        roles: ["SUPER_ADMIN", "ADMIN", "OPERATOR", "AGENT"]
      },
      {
        label: "Trips",
        path: "/trips",
        icon: MdDirectionsBus,
        roles: ["SUPER_ADMIN", "ADMIN"]
      }
    ]
  },
  {
    section: "MASTER DATA",
    items: [
      {
        label: "Buses",
        path: "/buses",
        icon: MdDirectionsBus,
        roles: ["SUPER_ADMIN", "ADMIN"]
      },
      {
        label: "Routes",
        path: "/routes",
        icon: MdRoute,
        roles: ["SUPER_ADMIN", "ADMIN"]
      },
      {
        label: "Pricing",
        path: "/pricing",
        icon: MdAttachMoney,
        roles: ["SUPER_ADMIN", "ADMIN"]
      }
    ]
  },
  {
    section: "ANALYTICS",
    items: [
      {
        label: "Reports",
        path: "/reports",
        icon: MdAssessment,
        roles: ["SUPER_ADMIN", "ADMIN"]
      }
    ]
  },
  {
    section: "ACCESS",
    items: [
      {
        label: "Users",
        path: "/users",
        icon: MdPeople,
        roles: ["SUPER_ADMIN"]
      },
      {
        label: "Settings",
        path: "/settings",
        icon: MdSettings,
        roles: ["SUPER_ADMIN", "ADMIN"]
      }
    ]
  }
];
