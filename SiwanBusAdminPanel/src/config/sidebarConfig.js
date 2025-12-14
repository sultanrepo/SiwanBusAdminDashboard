export const sidebarConfig = [
  {
    label: "Dashboard",
    path: "/dashboard",
    roles: ["SUPER_ADMIN", "ADMIN", "OPERATOR"]
  },
  {
    label: "Bookings",
    path: "/bookings",
    roles: ["SUPER_ADMIN", "ADMIN", "OPERATOR", "AGENT"]
  },
  {
    label: "Trips",
    path: "/trips",
    roles: ["SUPER_ADMIN", "ADMIN"]
  },
  {
    label: "Buses",
    path: "/buses",
    roles: ["SUPER_ADMIN", "ADMIN"]
  },
  {
    label: "Users",
    path: "/users",
    roles: ["SUPER_ADMIN"]
  },
  {
    label: "Settings",
    path: "/settings",
    roles: ["SUPER_ADMIN", "ADMIN"]
  }
];
