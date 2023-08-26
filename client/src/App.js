// import { BrowserRouter as Router, Routes, Route,Link} from "react-router-dom";

// import AddUser from "./components/addings/AddUser";

// import Login from "./components/login/Login";
// import Register from "./components/register/Register";
// import Updates from "./components/updates/Updates";

// function App() {
//   return (
//     <div>
//       <Router>
//         <Routes>
//           <Route path="/" element={<Register />} />
//           <Route path="/login" element={<Login />} />
//           <Route path="/adduser" element={<AddUser />} />
//           <Route path="/edituser/:id" element={<Updates />} />
//         </Routes>
//       </Router>
//     </div>
//   );
// }

// export default App;
import { useEffect, useState } from "react";
function App() {
  const [value, setValue] = useState(1);

  useEffect(() => {
    setValue(value + 1);
  }, []);

  return <>value is {value}</>;
}
export default App;
