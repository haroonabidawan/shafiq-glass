"use client";
import { PageBannerTransparent } from "@/components/PageBanner";
import MoorkLayout from "@/layout/MoorkLayout";
import { Fragment, useState } from "react";

const page = () => {
  const [carts, setCarts] = useState([
    {
      id: 1,
      title: "MINIMALIST ELEGANCE CHAIR",
      tag: "Chairs",
      img: "/img/store/items/1.png",
      quantity: 2,
      price: 354.96,
    },
    {
      id: 2,
      title: "MINIMALIST ELEGANCE CHAIR",
      tag: "Chairs",
      img: "/img/store/items/2.png",
      quantity: 1,
      price: 579.96,
    },
    {
      id: 3,
      title: "MINIMALIST ELEGANCE CHAIR",
      tag: "Chairs",
      img: "/img/store/items/3.png",
      quantity: 1,
      price: 649.98,
      mainPrice: 1299.96,
    },
  ]);
  const deleteCart = (id) => {
    setCarts(carts.filter((cart) => cart.id !== id && cart));
  };
  const updateQuantity = (itemId, newQuantity) => {
    setCarts((prevItems) =>
      prevItems.map((item) =>
        item.id === itemId ? { ...item, quantity: newQuantity } : item
      )
    );
  };
  return (
    <MoorkLayout>
      <PageBannerTransparent pageName="Cart" pageTitle="Cart" pageUrl="store" />{" "}
      {/* cart */}
      <div className="mil-p-0-200">
        <div className="container">
          <h3 className="mil-mb-50 mil-up">
            ( <span>{carts.length}</span> ) Product In Your Shopping Cart
          </h3>
          {carts.map((cart) => (
            <div className="mil-cart-item mil-mb-50 mil-up" key={cart.id}>
              <div className="mil-left">
                <a
                  href="#."
                  className="mil-close"
                  onClick={(e) => deleteCart(cart.id)}
                >
                  <i className="fas fa-times" />
                </a>
                <div className="mil-cart-item-cover">
                  <img loading="lazy" src={cart.img} alt="item" />
                </div>
                <div className="mil-descr">
                  <h6 className="">{cart.title}</h6>
                  <p className="mil-text-16">{cart.tag}</p>
                </div>
              </div>
              <div className="mil-right">
                <p className="mil-mr-40">
                  {cart.mainPrice && (
                    <Fragment>
                      <s>${cart.mainPrice}</s> -
                    </Fragment>
                  )}{" "}
                  ${cart.price}
                </p>
                <input
                  type="number"
                  defaultValue={1}
                  className="mil-input"
                  value={cart.quantity}
                  onChange={(e) => updateQuantity(cart.id, e.target.value)}
                />
                <p className="mil-text-22 mil-dark">
                  ${cart.quantity * cart.price}
                </p>
              </div>
            </div>
          ))}

          <div className="mil-discount mil-up">
            <p>Discount code:</p>
            <input type="text" className="mil-input" placeholder="Code" />
            <a href="#." className="mil-btn mil-btn-border">
              Apply Coupon
            </a>
          </div>
        </div>
      </div>
      {/* cart end */}
      {/* checkout */}
      <div className="mil-p-0-200">
        <div className="container">
          <h3 className="mil-mb-50 mil-up">Cart Total</h3>
          <div className="mil-checkout">
            <div className="row justify-content-end">
              <div className="col-lg-5">
                <ul className="mil-list-3">
                  <li className="mil-mb-50 mil-up">
                    <h5>SubTotal</h5>
                    <span className="mil-text-22 mil-dark">
                      $
                      {carts
                        .reduce(
                          (acc, item) => acc + item.quantity * item.price,
                          0
                        )
                        .toFixed(2)}
                    </span>
                  </li>
                  <li className="mil-mb-50 mil-up">
                    <h5>Shipping</h5>
                    <span className="mil-text-22 mil-dark">Free shipping</span>
                  </li>
                  <li className="mil-mb-10 mil-up">
                    <h5>Taxes ( 28% )</h5>
                    <span className="mil-text-22 mil-dark">
                      $
                      {(
                        (carts
                          .reduce(
                            (acc, item) => acc + item.quantity * item.price,
                            0
                          )
                          .toFixed(2) /
                          100) *
                        28
                      ).toFixed(2)}
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="mil-checkout mil-mb-50">
            <div className="row justify-content-end">
              <div className="col-lg-5">
                <ul className="mil-list-3">
                  <li className="mil-up">
                    <h5>Total Price</h5>
                    <span className="mil-text-30 mil-dark">
                      $
                      {(
                        carts.reduce(
                          (acc, item) => acc + item.quantity * item.price,
                          0
                        ) +
                        (carts.reduce(
                          (acc, item) => acc + item.quantity * item.price,
                          0
                        ) /
                          100) *
                          28
                      ).toFixed(2)}
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="text-sm-left mil-text-right mil-up">
            <a href="#." className="mil-btn">
              Proceed to checkout
            </a>
          </div>
        </div>
      </div>
      {/* checkout end */}
    </MoorkLayout>
  );
};
export default page;
