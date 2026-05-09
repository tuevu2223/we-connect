import { useEffect } from "react";

 
function HomePage() {


  useEffect(() => {
    fetch("http://localhost:5000")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  }, []);



  return (
    <div className="">
      home page
    </div>
  );
}

export default HomePage;
