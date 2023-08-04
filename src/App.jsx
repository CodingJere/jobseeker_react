import { useState } from "react";
import "./App.css";
import CreateListing from "./Components/Forms/CreateJobListingForm";

function App() {
  const [category, setCategory] = useState(1);
  return (
    <>
      <button
        className="bg-blue-700 text-white py-2 px-6 rounded-md text-sm mx-5"
        onClick={() => setCategory(1)}
      >
        Author
      </button>
      <button
        className="bg-green-700 text-white py-2 px-6 rounded-md text-sm mx-5"
        onClick={() => setCategory(2)}
      >
        Applicant
      </button>
      <p>Category 1</p>
      <p>Category 2</p>
      <CreateListing />
    </>
  );
}

export default App;
