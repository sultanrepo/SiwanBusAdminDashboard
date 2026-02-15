// import { NavLink } from "react-router-dom";
// import { sidebarConfig } from "../../config/sidebarConfig";


// const Sidebar = ({ role, collapsed }) => {
//   return (
//     <aside className={`sidebar ${collapsed ? "collapsed" : ""}`}>
//       {sidebarConfig.map(section => (
//         <div key={section.section} className="sidebar-section">
//           {!collapsed && (
//             <p className="section-title">{section.section}</p>
//           )}

//           {section.items
//             .filter(item => item.roles.includes(role))
//             .map(item => {
//               const Icon = item.icon;
//               return (
//                 <NavLink
//                   key={item.path}
//                   to={item.path}
//                   className="sidebar-item"
//                 >
//                   <Icon className="icon" />
//                   {!collapsed && <span>{item.label}</span>}
//                 </NavLink>
//               );
//             })}
//         </div>
//       ))}
//     </aside>
//   );
// };

// export default Sidebar;
