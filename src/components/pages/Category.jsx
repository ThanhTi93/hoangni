import React, { useEffect, useMemo, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { imgUrls } from '../utils/Contants';
function Category(props) {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);
  const [limit, setLimit] = useState(10);
  const [selectedCategory, setSelectedCategory] = useState(null);

  useEffect(() => {
    fetchCategories();
  }, []);

  useEffect(() => {
    fetchProducts();
  }, [page, selectedCategory]);

  const fetchCategories = async () => {
    const response = await axios.get('https://fakeapi.net/products/categories');
    setCategories(response.data);
  }

  const fetchProducts = async () => {
    if (!selectedCategory) {
      const response = await axios.get(`https://fakeapi.net/products?page=${page}&limit=${limit}`);
      setProducts(response.data.data);
      setTotal(response.data.pagination.total);
    } else {
      const response = await axios.get(`https://fakeapi.net/products?page=${page}&limit=${limit}&category=${selectedCategory}&price={"min":100,"max":1000}`);
      setProducts(response.data.data);
      setTotal(response.data.pagination.total);
    }
  }

  const pages = useMemo(() => {
    const totalPages = Math.ceil(total / limit);
    return Array.from({ length: totalPages }, (_, i) => i + 1);
  }, [total, limit]);
  console.log(products);

  return (
    <main>
      <div class="container">
        <ul class="breadcrumbs">
          <li>
            <a href="javascript:;"><span>Home</span></a>
          </li>
          <li>
            <a href="javascript:;"><span>Category</span></a>
          </li>
        </ul>
        <section class="main_wrapper flex">

          <div class="col_sidebar">
            <section>
              <h2 class="section_subtitle">Bộ lọc</h2>
              <ul class="filters">
                {categories.map((category, index) => (
                  <div onClick={() => setSelectedCategory(category)} key={index}>
                    <label className="custom-checkbox">
                      <input
                        type="checkbox"
                        checked={selectedCategory === category}
                        onChange={() => setSelectedCategory(category)}
                      />
                      <span className="checkmark"> {category}</span>
                    </label>
                  </div>
                ))}
              </ul>
            </section>
          </div>
          <div class="col_main">
            <section>
              <h2 class="section_subtitle">Danh sách sản phẩm</h2>
              <div class="product_wrapper flex">
                {products.map((p, index) => (
                  <Link to={`/product/${p.id}`} class="product_item">
                    <span class="discount">{p.rating.rate} <i class="fa fa-star"></i>
                    </span>
                    <img src={p.image} onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = imgUrls[ Math.floor(Math.random() * 21)]
                    }} alt="#" />
                    <h3>{p.title}</h3>
                    <div class="price">
                      <strong>{p.price}đ</strong>
                      <p>Còn : {p.stock}</p>
                    </div>
                  </Link>
                ))}

              </div>
            </section>
            <div class="pagination">
              {pages.map((p) => (
                <a onClick={() => setPage(p)} key={p} className={p === page ? "active" : ""}>
                  {p}
                </a>
              ))}
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

export default Category;