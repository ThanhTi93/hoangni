import React, { useEffect, useState } from 'react';
import "../../assets/css/product.css";
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { imgUrls } from '../utils/Contants';
function Product(props) {
    const { id } = useParams();
    const [product, setProduct] = useState({});
    useEffect(() => {
        getProductById(id);
    }, [id]);

    const getProductById = async (id) => {
        try {
            const response = await axios.get(`https://fakeapi.net/products/${id}`);
            setProduct(response.data);
        } catch (error) {
            console.error("Error fetching product:", error);
        }
    };
    return (
        <main>
            <div className="container">
                <ul className="breadcrumbs">
                    <li>
                        <a href="index.html"><span>Home</span></a>
                    </li>
                    <li>
                        <a href="category.html"><span>Category</span></a>
                    </li>
                    <li>
                        <a href="javascript:;"><span>{product?.title}</span></a>
                    </li>
                </ul>
                <div className="product_info_wrapper flex">
                    <div id="gallery">
                        <div className="swiper mySwiper">
                            <div className="swiper-wrapper">
                                <div className="swiper-slide">
                                    <img src={product?.image} onError={(e) => {
                                        e.target.onerror = null;
                                        e.target.src = imgUrls[Math.floor(Math.random() * 21)]
                                    }} alt="#" />
                                </div>
                            </div>
                            <div className="swiper-button-next"></div>
                            <div className="swiper-button-prev"></div>
                            <div className="swiper-pagination"></div>
                        </div>
                    </div>
                    <div id="product_details">
                        <h1 className="section_title product_name">
                            {product?.title}
                        </h1>
                        <div className="product_price">
                            <strong>{product?.price}đ</strong><del>16.990.000đ</del>
                        </div>
                        <div className="product_attrs">
                            <div className="attr_block flex">
                                <span className="attr_name">Màu Sắc</span>
                                <span className="attr_item current">Đen</span>
                                <span className="attr_item">Hồng</span>
                                <span className="attr_item">Xanh</span>
                            </div>
                        </div>
                        <ul className="policy">
                            <li>
                                <img
                                    width="20"
                                    height="20"
                                    src="images/guarantee.svg"
                                    alt="guarantee"
                                />
                                <strong>Bộ sản phẩm gồm:</strong>
                                Hộp, Sách hướng dẫn, Cáp, Cây lấy sim
                            </li>
                            <li>
                                <img
                                    width="20"
                                    height="20"
                                    src={product?.image}
                                    alt="compensation"
                                />
                                <strong>Bảo Hành:</strong>
                                Chính hãng 12 tháng
                            </li>

                            <li>
                                <img
                                    width="20"
                                    height="20"
                                    src="images/refund.svg"
                                    alt="refund"
                                />
                                <strong>Đổi trả:</strong>
                                Hư gì đổi nấy 12 tháng
                            </li>
                        </ul>
                        <div className="product_actions flex">
                            <button className="btn_addcart" type="button">
                                <i className="fa fa-shopping-cart"></i> Thêm Giỏ Hàng
                            </button>
                            <button className="btn_call" type="button">
                                <i className="fa fa-heart"></i> Yêu thích
                            </button>
                        </div>
                        <div className="call_info">
                            Hoặc gọi ngay để đặt mua: 1900 1080 (8:00-20:00)
                        </div>
                    </div>
                    <div id="product_parameter">
                        <section className="tableparameter" id="tableparameter">
                            <h2 className="section_subtitle">Thông số sản phẩm</h2>
                            <ul className="parameter">
                                <li className="pro">
                                    <span>Hệ điều hành:</span>
                                    <span> Android 11 </span>
                                </li>
                                <li className="pro">
                                    <span>Camera sau:</span>
                                    <span> Chính 12 MP &amp; Phụ 64 MP, 12 MP </span>
                                </li>
                                <li className="pro">
                                    <span>Camera trước:</span>
                                    <span> 10 MP </span>
                                </li>
                                <li className="pro">
                                    <span>CPU:</span>
                                    <span> Exynos 2100 8 nhân </span>
                                </li>
                                <li className="pro">
                                    <span>RAM:</span>
                                    <span> 8 GB </span>
                                </li>
                                <li className="pro">
                                    <span>Bộ nhớ trong:</span>
                                    <span> 128 GB </span>
                                </li>
                            </ul>
                            <div className="viewparameterfull" id="showall_parameter">
                                Xem chi tiết
                            </div>
                        </section>
                    </div>
                </div>
                <section className="main_wrapper flex">
                    <div className="col_main">
                        <section>
                            <h2 className="section_subtitle">Phụ kiện tương thích</h2>

                            <div className="product_wrapper flex">
                                {
                                    Array.from({ length: 4 }).map((_, index) => (
                                        <div className="product_item">
                                            <span className="discount">-25%</span>
                                            <img src={product?.image} onError={(e) => {
                                                e.target.onerror = null;
                                                e.target.src = imgUrls[Math.floor(Math.random() * 21)]
                                            }} alt="#" />
                                            <h3>Cáp chuyển đổi USB-C sang SD</h3>
                                            <div className="price">
                                                <strong>1.290.000đ</strong>
                                                <del>790.000đ</del>
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
                        </section>
                        <section>
                            <h2 className="section_subtitle">Bài viết đánh giá</h2>
                            <article className="product_description">
                                <h3>
                                    Đón năm mới rộn ràng cùng với series Galaxy S21 đến từ
                                    Samsung. Phiên bản tiêu chuẩn cho series lần này là Samsung
                                    Galaxy S21 5G, nổi bật với thiết kế tràn viền, cụm camera ấn
                                    tượng cho đến hiệu năng mạnh mẽ hàng đầu.
                                </h3>

                                <h3>“Bộ cánh” mới nổi bật và sang trọng</h3>

                                <p>
                                    Nổi bật với cụm camera sau được thiết kế đầy mới lạ, phần
                                    khuôn hình chữ nhật chứa bộ 3 camera ôm trọn cạnh trái của
                                    chiếc smartphone, viền khuôn cong uyển chuyển, hạn chế tối đa
                                    độ nhô ra so với mặt lưng, mang lại cái nhìn tổng thể hài hòa,
                                    độc đáo.
                                </p>
                            </article>
                        </section>
                        <section>
                            <h2 className="section_subtitle">Đánh giá Sản phẩm</h2>

                            <div className="reviews_form">
                                <div className="comment_box">
                                    <div className="crt clearfix">
                                        <div className="lcrt">
                                            <b>4/5</b><i className="fa fa-star"></i>
                                            <p className="rank_text">6 đánh giá</p>
                                        </div>
                                        <div className="rcrt">
                                            <div className="r">
                                                <span className="t">1 <i className="fa fa-star"></i></span>
                                                <div className="bgb">
                                                    <div className="bgb-in" style={{ width: "0%" }}></div>
                                                </div>
                                                <span className="c"><strong>0</strong> đánh giá</span>
                                            </div>
                                            <div className="r">
                                                <span className="t">2 <i className="fa fa-star"></i></span>
                                                <div className="bgb">
                                                    <div className="bgb-in" style={{ width: "0%" }}></div>
                                                </div>
                                                <span className="c"><strong>0</strong> đánh giá</span>
                                            </div>
                                            <div className="r">
                                                <span className="t">3 <i className="fa fa-star"></i></span>
                                                <div className="bgb">
                                                    <div className="bgb-in" style={{ width: "20%" }}></div>
                                                </div>
                                                <span className="c"><strong>1</strong> đánh giá</span>
                                            </div>
                                            <div className="r">
                                                <span className="t">4 <i className="fa fa-star"></i></span>
                                                <div className="bgb">
                                                    <div className="bgb-in" style={{ width: "20%" }}></div>
                                                </div>
                                                <span className="c"><strong>1</strong> đánh giá</span>
                                            </div>
                                            <div className="r">
                                                <span className="t">5 <i className="fa fa-star"></i></span>
                                                <div className="bgb">
                                                    <div className="bgb-in" style={{ width: "60%" }}></div>
                                                </div>
                                                <span className="c"><strong>4</strong> đánh giá</span>
                                            </div>
                                        </div>
                                        <div className="bcrt">
                                            <button type="button">Gửi đánh giá của bạn</button>
                                        </div>
                                    </div>
                                </div>
                                <div className="clearfix"></div>
                                <form action="" name="reviews_form">
                                    Mời bạn chọn đánh giá
                                    <span className="stars_bar">
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                    </span>
                                    <textarea
                                        required
                                        placeholder="Nội dung tiếng việt có dấu"
                                        name="content"
                                        id="content"
                                        cols="30"
                                        rows="5"
                                    ></textarea>
                                    <div className="flex inline-controls">
                                        <input
                                            type="text"
                                            placeholder="Tên (bắt buộc)"
                                            required
                                            name="username"
                                        />
                                        <input
                                            type="text"
                                            placeholder="Email (bắt buộc)"
                                            required
                                            name="email"
                                        />
                                        <input
                                            type="text"
                                            placeholder="Số ĐT (Tùy chọn)"
                                            required
                                            name="mobile"
                                        />
                                        <button type="submit">Đánh giá</button>
                                    </div>
                                </form>
                                <ul className="comment_list clearfix">
                                    <li id="comment215" className="even first">
                                        <span className="iconcom-user">P...</span>
                                        <span className="name">Phan Thanh</span>
                                        <div className="talk">
                                            <p className="text">Hết ngày 8/3 có được giảm giá k ad</p>
                                            <div className="cmextra">
                                                <span
                                                    className="btnreply"
                                                    onclick="cmtaddreplyclick(215,215)">Trả lời</span>
                                                <span className="time">10-03-2021 17:09:33</span>
                                            </div>
                                        </div>
                                    </li>
                                    <li id="comment215" className="even first">
                                        <span className="iconcom-user">P...</span>
                                        <span className="name">Phan Thanh</span>
                                        <div className="talk">
                                            <p className="text">Hết ngày 8/3 có được giảm giá k ad</p>
                                            <div className="cmextra">
                                                <span
                                                    className="btnreply"
                                                    onclick="cmtaddreplyclick(215,215)">Trả lời</span><span className="time">10-03-2021 17:09:33</span>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </section>
                    </div>
                    <div className="col_sidebar">
                        <section className="callback_support">
                            <h2 className="section_subtitle">Gọi lại tư vấn</h2>
                            <div className="call_form">
                                <p>Bạn muốn chúng tôi gọi lại tư vấn, vui lòng điền số điện thoại vào form dưới đây</p>
                                <input type="text" name="mobile" placeholder="Số điện thoại của bạn" />
                                <button type="button">Đăng ký</button>
                            </div>
                        </section>
                        <section className="article_list_box">
                            <h2 className="section_subtitle">Tin tức liên quan</h2>
                            <div className="article_list clearfix">
                                <article>
                                    <img
                                        className="photo"
                                        alt="Lighting Upgrades"
                                        src="images/lighting-upgrades-thumb-G3.jpg"
                                    />
                                    <div className="content">
                                        <h3>
                                            <a href="lighting-upgrades" title="Lighting Upgrades">Lighting Upgrades</a>
                                        </h3>
                                        <div className="dates">
                                            23 Nov, 2019, Posted by: admin, 2 Comments
                                        </div>
                                        <p className="section_desc">
                                            Electrical panel maintenance, therefore, should be part of
                                            your regular routine.
                                        </p>
                                        <div className="section_btn">
                                            <a
                                                className="readmore"
                                                href="lighting-upgrades"
                                                title="Lighting Upgrades"
                                            >Read more</a>
                                        </div>
                                    </div>
                                </article>
                                <article>
                                    <img
                                        className="photo"
                                        alt="Electrical repairs"
                                        src="images/electrical-repairs-thumb-G1.jpg"
                                    />
                                    <div className="content">
                                        <h3>
                                            <a href="electrical-repairs" title="Electrical repairs"
                                            >Electrical repairs</a>
                                        </h3>
                                        <div className="dates">
                                            2 Apr, 2022, Posted by: admin, 5 Comments
                                        </div>
                                        <p className="section_desc">
                                            Electrical repairs should always be handled by a
                                            professional electrician
                                        </p>
                                        <div className="section_btn">
                                            <a
                                                className="readmore"
                                                href="electrical-repairs"
                                                title="Electrical repairs"
                                            >Read more</a>
                                        </div>
                                    </div>
                                </article>
                                <article>
                                    <img
                                        className="photo ls-is-cached lazyloaded"
                                        alt="Surge Protection"
                                        src="images/surge-protection-thumb-G4.jpg"
                                    />
                                    <div className="content">
                                        <h3>
                                            <a href="surge-protection" title="Surge Protection"
                                            >Surge Protection</a>
                                        </h3>
                                        <div className="dates">
                                            10 Dec, 2012, Posted by: author, 6 Comments
                                        </div>
                                        <p className="section_desc">
                                            An electrical surge can happen for a number of reasons,
                                            including lightning strikes.
                                        </p>
                                        <div className="section_btn">
                                            <a
                                                className="readmore"
                                                href="surge-protection"
                                                title="Surge Protection"
                                            >Read more</a>
                                        </div>
                                    </div>
                                </article>
                            </div>
                        </section>
                    </div>
                </section>
            </div>
        </main>
    );
}

export default Product;