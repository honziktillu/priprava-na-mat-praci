import { Link, useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { updateCat, getCatById } from "../../models/Cat";

export default function CatUpdateForm() {
  const { id } = useParams();  
  const [formData, setFormData] = useState();
  const [info, setInfo] = useState();
  const [loaded, setLoaded] = useState();
  const [cat, setCat] = useState();
  const navigate = useNavigate();

  const load = async () => {
    const data = await getCatById(id);
    if (data.status === 500 || data.status === 404) return setLoaded(null);
    if (data.status === 200) {
      setCat(data.payload);
      setLoaded(true);
    }
  }

  const postForm = async () => {
    const cat = await updateCat(id, formData);
    if (cat.status === 200) {
      redirectToSuccessPage(cat.payload._id);
    } else {
      setInfo(cat.msg);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handlePost = (e) => {
    e.preventDefault();
    postForm();
  };

  const redirectToSuccessPage = (id) => {
    return navigate(`/cat/${id}`);
  };

  useEffect(() => {
    load();
  }, []);

  if (loaded === null) {
    return (
      <>
        <p>Cat not found</p>
      </>
    )
  }

  if (!loaded) {
    return (
      <>
        <p>Loading cat...</p>
      </>
    )
  }

  return (
    <>
      <h1>Cat update form</h1>

      <form>
        <input
          type="text"
          required
          name="name"
          placeholder="Enter name"
          defaultValue={cat.name}
          onChange={(e) => handleChange(e)}
        />
        <input
          type="number"
          required
          name="legs"
          placeholder="Enter number of legs"
          defaultValue={cat.legs}
          onChange={(e) => handleChange(e)}
        />
        <input
          type="text"
          required
          name="color"
          placeholder="Enter color"
          defaultValue={cat.color}
          onChange={(e) => handleChange(e)}
        />
        <button onClick={handlePost}>Update cat</button>
      </form>
      <p>{info}</p>
      <Link to={"/"}>
        <p>Go back</p>
      </Link>
    </>
  );
}
