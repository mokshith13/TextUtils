import { useState } from "react";
import "./App.css";
 //import About from "./components/About";
import Alert from "./components/Alert";
import Navbar from "./components/Navbar";
import Textform from "./components/Textform";

//import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  const [mode, setmode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setmode("dark");
      document.body.style.backgroundColor = "#072039";
      showAlert("Dark mode as enabled", "success");
      //document.title = "TextUtils - dark mode";
      //  setInterval(()=>{
      //   document.title = "TextUtils is Amazing";
      //  }, 2000)
      //  setInterval(()=>{
      //   document.title = "Install TextUtils Now";
      //  }, 1500)
    } else {
      setmode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode as enabled", "success");
      //document.title = "TextUtils - light mode";
    }
  }
  return (
    <>
       {/* <BrowserRouter>   */}
        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-3">
            {/* <Routes>
             <Route exact path="/about" element={<About  mode={mode}/>} />  */}
             

            {/* <Route exact path="/" element={ <Textform showAlert={showAlert} heading="Enter the text to analyse." mode={mode} />}/> */}
            <Textform showAlert={showAlert} heading="Enter the text to analyze below" mode={mode} />
    
           {/* </Routes>  */}
        </div>
        {/* </BrowserRouter>   */}
    </>
  );
}

export default App;
