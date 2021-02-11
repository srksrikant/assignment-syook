import React, { useState, useEffect } from "react";
import './App.css';
import LeftContainer from "./components/LeftContainer";
import RightContainer from "./components/RightContainer";

function App() {
  const [databackup, setDatabackup] = useState([]);
  const [data, setData] = useState([]);

  const [feedback, setFeedback] = useState("");
  const [editFeedback, setEditFeedback] = useState("");

  const [searchText, setSearchtext] = useState("");

  useEffect(() => {
    fetch();
  }, [])

  const fetch = () => {
    const notes = localStorage.getItem("notes");
    if (notes) {
      setDatabackup(JSON.parse(notes));
      setData(JSON.parse(notes));
    }
    else {
      localStorage.setItem("notes", JSON.stringify([]))
    }
  }

  const handleSearch = (value) => {
    setSearchtext(value);
    if (value === "") {
      setData(databackup);
      return;
    }
    let searchresult = databackup.filter(item => item.title.toLowerCase().includes(value.toLowerCase()));
    setData(searchresult);
  }

  const addNotes = (title, description) => {
    try {
      if (title === "" || description === "") {
        setFeedback("Input Fields Cannot be Empty");
        return;
      }
      const tempdata = [...databackup];
      const filteredData = tempdata.filter(item => item.title === title);
      if (filteredData.length === 0) {
        tempdata.push({
          "title": title,
          "description": description
        })
        setFeedback("Added Successfully");
        localStorage.setItem("notes", JSON.stringify(tempdata));
        fetch();
      }
      else {
        setFeedback("Duplicate Entry")
      }
    }
    catch (e) {
      setFeedback("Error Occured")
    }
    finally {
      setTimeout(() => {
        setFeedback("")
      }, 1500)
    }
  }

  const handleDelete = (value) => {
    try {
      let tempdata = [...data];
      let deleteNode = tempdata.filter(item => item.title !== value);
      localStorage.setItem("notes", JSON.stringify(deleteNode));
      fetch();
    }
    catch (e) {
      window.alert("Error Occured");
    }
    finally {
    }
  }

  const handleEdit = (title, editTitle, editDescription, hideEditSection) => {
    try {
      if (editTitle === "" || editDescription === "") {
        setEditFeedback("Input Fields Cannot be Empty");
        return;
      }

      let tempdata = [...databackup];

      tempdata.forEach((element) => {
        if (element.title === title) {
          element.title = editTitle;
          element.description = editDescription;
        }
      })
      localStorage.setItem("notes", JSON.stringify(tempdata));
      hideEditSection()
      fetch();
    }
    catch (e) {
      setEditFeedback("Error Occured")
    }
    finally {
      setTimeout(() => {
        setEditFeedback("")
      }, 1500)

    }
  }
  return (
    <div className="App">
      <LeftContainer addNotes={addNotes} feedback={feedback} />
      <RightContainer data={data} handleDelete={handleDelete} handleEdit={handleEdit} editFeedback={editFeedback} searchtext={searchText} handleSearch={handleSearch} />
    </div>
  );
}

export default App;
