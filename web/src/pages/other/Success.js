import { Fragment, useState } from "react";
import { useSelector } from "react-redux";
import SEO from "../../components/seo";
import LayoutOne from "../../layouts/LayoutOne";
import axios from "axios";
import { BASE_URL } from "./../../config";

const Success = () => {
  let cartTotalPrice = 0;
  const currency = useSelector((state) => state.currency);

  const [pickupPincode, setPickupPincode] = useState("");
  const [deliveryPincode, setDeliveryPincode] = useState("");
  const [weight, setWeight] = useState(0.5);
  const [cod, setCod] = useState(0);
  const [couriers, setCouriers] = useState([]);

  const checkServiceability = async () => {
    try {
      const token = "your_shiprocket_token_here"; // Replace with your actual token

      axios
        .get(
          "https://apiv2.shiprocket.in/v1/external/courier/serviceability/",
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          }
        )
        .then((response) => {
          setCouriers(response.data.data.available_courier_companies);
        })
        .catch((error) => {
          console.error("Error:", error.response?.data || error.message);
        });
    } catch (error) {
      alert("Failed to check serviceability.");
    }
  };

  const handleSubmit = async () => {
    try {
      const response = await axios.post(`${BASE_URL}/addSalesMaster`, {
        // Include your orderData fields here
      });
      if (response.data.success) {
        alert("Order placed successfully!");
      }
    } catch (error) {
      console.error("Error placing order:", error);
      alert("There was an error placing your order.");
    }
  };

  return (
    <Fragment>
      <SEO
        titleTemplate="Checkout"
        description="Checkout page of Anahee react minimalist eCommerce template."
      />
      <LayoutOne headerTop="visible">
        <div className="checkout-area pt-10 pb-30">
          <div className="container">
            <div className="row mb-5">
              <div className="col-lg-12">
                <h3>Check Courier Serviceability</h3>
                <div className="d-flex flex-wrap gap-2 mb-3">
                  <input
                    type="text"
                    placeholder="Pickup Pincode"
                    value={pickupPincode}
                    onChange={(e) => setPickupPincode(e.target.value)}
                    className="form-control w-25"
                  />
                  <input
                    type="text"
                    placeholder="Delivery Pincode"
                    value={deliveryPincode}
                    onChange={(e) => setDeliveryPincode(e.target.value)}
                    className="form-control w-25"
                  />
                  <input
                    type="number"
                    placeholder="Weight (kg)"
                    value={weight}
                    onChange={(e) => setWeight(parseFloat(e.target.value))}
                    className="form-control w-25"
                  />
                  <select
                    value={cod}
                    onChange={(e) => setCod(Number(e.target.value))}
                    className="form-control w-25"
                  >
                    <option value={0}>Prepaid</option>
                    <option value={1}>COD</option>
                  </select>
                  <button
                    onClick={checkServiceability}
                    className="btn btn-info"
                  >
                    Check
                  </button>
                </div>

                <div>
                  {couriers.length > 0 && (
                    <div>
                      <h5>Available Couriers:</h5>
                      {couriers.map((courier, idx) => (
                        <div key={idx} className="border p-3 mb-2">
                          <strong>{courier.courier_name}</strong>
                          <p>
                            Estimated Delivery Days:{" "}
                            {courier.estimated_delivery_days}
                          </p>
                          <p>Freight Charge: ₹{courier.freight_charge}</p>
                          <p>COD Available: {courier.cod ? "Yes" : "No"}</p>
                          <p>Tracking: {courier.realtime_tracking}</p>
                          <p>Rating: {courier.rating}</p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-lg-12 col-md-6">
                <div className="your-order-area">
                  <h3>Your order</h3>
                  <div className="your-order-wrap gray-bg-4">
                    <div className="your-order-product-info">
                      <div className="your-order-top">
                        <ul>
                          <li>Product</li>
                          <li>Total</li>
                        </ul>
                      </div>
                      <div className="your-order-middle">
                        {/* Cart items */}
                      </div>
                      <div className="your-order-bottom">
                        <ul>
                          <li className="your-order-shipping">Shipping</li>
                          <li>Free shipping</li>
                        </ul>
                      </div>
                      <div className="your-order-total">
                        <ul>
                          <li className="order-total">Total</li>
                          <li>
                            {currency.currencySymbol +
                              cartTotalPrice.toFixed(2)}
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="payment-method"></div>
                  </div>
                  <div className="place-order mt-25">
                    <button className="btn-hover" onClick={handleSubmit}>
                      Place Order
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </LayoutOne>
    </Fragment>
  );
};

export default Success;
