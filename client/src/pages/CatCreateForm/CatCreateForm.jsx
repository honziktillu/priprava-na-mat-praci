import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { createCat } from "../../models/Cat";

export default function CatCreateForm() {
  //useState - vytvoreni promenne v reactu
  // nazev promenne, setter       useState(default_hodnota)
  const [formData, setFormData] = useState();
  const [info, setInfo] = useState();  
  const navigate = useNavigate(); 

    const postForm = () => {}
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }
    const handlePost = (e) => {
        e.preventDefault();
        postForm();
    }
    const redirectToSuccessPage = () => {}

  return (
    <>
      <h1>Cat create form</h1>

        <form>
            <input type="text" required name="name" placeholder="Enter name" onChange={e => handleChange(e)}/>
            <input type="number" required name="legs" placeholder="Enter number of legs" onChange={e => handleChange(e)}/>
            <input type="text" required name="color" placeholder="Enter color" onChange={e => handleChange(e)}/>
            <button onClick={handlePost}>
                Create cat
            </button>
        </form>

      <Link to={"/"}>
        <p>Go back</p>
      </Link>
    </>
  );
}
