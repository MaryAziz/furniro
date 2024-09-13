import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import styles from '../Components/Home/Home.module.css';
import women from '../../public/womenclothing.jpg'; 
import men from '../../public/menclothing.jpg';
import accessories from '../../public/accessories.jpg';
import electronics from '../../public/electronics.jpg';
import Features from '../Components/features/Features.jsx';

function Home() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products/categories')
      .then(res => res.json())
      .then(data => {
        const updatedCategories = data.map((category, index) => {
          let categoryImg = '';

          switch (category) {
            case "women's clothing":
              categoryImg = women;
              break;
            case "men's clothing":
              categoryImg = men;
              break;
            case 'jewelery':
              categoryImg = accessories;
              break;
            case 'electronics':
              categoryImg = electronics;
              break;
            default:
              categoryImg = 'https://via.placeholder.com/150'; // Default image if none match
              break;
          }

          return {
            categoryImg: categoryImg,
            categoryname: category,
            id: index + 1,
          };
        });
        setCategories(updatedCategories);
      })
      .catch(error => console.error('Error fetching categories:', error));
  }, []);

  return (
    <>
      <div className={styles.main}>
        <div className={styles.banner} />
        <h1>Categories</h1>
        <div className={styles.categories}>
          {categories.map(item => (
            <Link 
              to={`/shop?category=${item.categoryname}`} 
              key={item.id} 
              className={styles.everycategory}
            >
              <img className={styles.catigoryimg} src={item.categoryImg} alt={item.categoryname} />
              <h3>{item.categoryname}</h3>
            </Link>
          ))}
        </div>
        <Features />
      </div>
    </>
  );
}

export default Home;
