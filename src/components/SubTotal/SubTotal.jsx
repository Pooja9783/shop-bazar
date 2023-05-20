import React from "react";
import { Box, Paper, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { clearCart } from "../../Redux/action";
import { useDispatch } from "react-redux";
export default function SubTotal({ subtotalItemCount, subtotalPrice }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const loadScript = (src) => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = src;
      script.onload = () => {
        resolve(true);
      };
      script.onerror = () => {
        resolve(false);
      };
      document.body.appendChild(script);
    });
  };

  const displayRazorPay = async (amount) => {
    const res = await loadScript(
      "https://checkout.razorpay.com/v1/checkout.js"
    );
    if (!res) {
      alert("You are offline. Failed to load Razorpay SDK");
      return;
    }

    const options = {
      key: "rzp_test_9l6MVSRiaSTtip",
      currency: "INR",
      amount: amount * 100,
      name: "Shop Bazar",
      description: "Thanks For Purching",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSi5XNpezkeqEeF-qKZcC9MLpXkaPrHkE7jEQ&usqp=CAU",

      handler: function (response) {
        dispatch(clearCart());
        alert(response.razorpay_payment_id);
        alert("Payment Successful!");

        navigate("/home");
      },

      prefill: {
        email: "poojasankhala@gmail.com",
        contact: "9783224446",
      },
      notes: {
        address: "HSR Layout, Bangalore",
      },
      theme: {
        color: "#F37254",
      },
    };
    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  };

  return (
    <Paper element="10">
      <Box sx={{ display: "flex", justifyContent: "end" }} p={5}>
        <Typography variant="h6">
          Subtotal : ({subtotalItemCount}
          {subtotalItemCount > 1 ? " Items" : " Item"}) RS. {subtotalPrice}
        </Typography>

        <Button
          variant="contained"
          sx={{
            bgcolor: "#D97D54",
            "&:hover": { bgcolor: "#D97D54" },
          }}
          onClick={() => displayRazorPay(subtotalPrice)}
        >
          Proceed To Pay
        </Button>
      </Box>
    </Paper>
  );
}
