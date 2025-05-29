import React, { useEffect, useState } from "react";
import styles from "./blogPage.module.css";
import baseUrl from "../baserUrl";
import axios from "axios";
import { useParams } from "react-router-dom";
import Header from "../components/header/Header";

const BlogCard = () => {
  const [blogData, setBlogData] = useState(null);
  const { id } = useParams();

  const fetchBlog = async () => {
    try {
      const response = await axios.get(`${baseUrl}/api/v1/blog/getblog/${id}`);
      setBlogData(response.data.blog);
    } catch (error) {
      console.error("Error fetching blog:", error);
    }
  };

  useEffect(() => {
    fetchBlog();
  }, [id]);

  if (!blogData) return <p>Loading...</p>;

  return (
    <>
    <div className={styles.mainContent}>
      <div className={styles.card}>
        <div className={styles.imageWrapper}>
          <img
            src={`${baseUrl}/${blogData.image}`}
            alt="Blog Visual"
            className={styles.image}
            loading="lazy" // <-- Lazy load image
          />
          <span className={styles.category}>{blogData.subtitle}</span>
        </div>
        <div className={styles.content}>
          <h2 className={styles.title}>{blogData.title}</h2>
          <p className={styles.description}>{blogData.blogContent}</p>
        </div>
      </div>
    </div>
    </>
  );
};

export default BlogCard;
