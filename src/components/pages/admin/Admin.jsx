import React, { useState } from "react";
import scss from "./admin.module.scss";
import admin from "../../../assets/admin.img.png";
import { useProduct } from "../../../context/ProductContext";

const Admin = () => {
  const { addProduct } = useProduct();
  const [formData, setFormData] = useState({
    title: "",
    price: "",
    image: "",
    photo2: "",
    photo3: "",
    photo4: "",
    photo5: "",
    description: "",
    category: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const productToAdd = {
      title: formData.title,
      price: formData.price,
      image: formData.image,
      photo2: formData.photo2,
      photo3: formData.photo3,
      photo4: formData.photo4,
      photo5: formData.photo5,
      description: formData.description,
      category: formData.category,
    };

    addProduct(productToAdd);

    setFormData({
      title: "",
      price: "",
      image: "",
      photo2: "",
      photo3: "",
      photo4: "",
      photo5: "",
      description: "",
      category: "",
    });
  };

  return (
    <div className={scss.adminContainer}>
      <div className={scss.adminTop}>
        <div className={scss.overlay}>
          <img src={admin} alt="" />
        </div>
        <div className={scss.adminText}>
          <h1>Admin</h1>
          <p>
            Duis vestibulum elit vel neque pharetra vulputate. Duis rutrum non
            risus in imperdiet.{" "}
          </p>
        </div>
      </div>
      <div className="container">
        <div className={scss.adminContent}>
          <input
            value={formData.title}
            onChange={handleChange}
            name="title"
            type="text"
            placeholder="Product name"
          />
          <input
            value={formData.price}
            onChange={handleChange}
            name="price"
            type="text"
            placeholder="price"
          />
          <input
            value={formData.image}
            onChange={handleChange}
            name="image"
            type="text"
            placeholder="image"
          />
          <input
            value={formData.photo2}
            onChange={handleChange}
            name="photo2"
            type="text"
            placeholder="image2"
          />
          <input
            value={formData.photo3}
            onChange={handleChange}
            name="photo3"
            type="text"
            placeholder="image3"
          />
          <input
            value={formData.photo4}
            onChange={handleChange}
            name="photo4"
            type="text"
            placeholder="image4"
          />
          <input
            value={formData.photo5}
            onChange={handleChange}
            name="photo5"
            type="text"
            placeholder="image5"
          />
          <input
            value={formData.description}
            onChange={handleChange}
            name="description"
            type="text"
            placeholder="description"
          />
          <input
            value={formData.category}
            onChange={handleChange}
            name="category"
            type="text"
            placeholder="category"
          />
          <button onClick={handleSubmit}>add</button>
        </div>
      </div>
    </div>
  );
};

export default Admin;
