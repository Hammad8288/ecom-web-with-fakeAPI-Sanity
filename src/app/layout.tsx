"use client";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Provider } from "react-redux";
import store from "./redux/store"; // Your Redux store
import Navbar from "./Components/Navbar"; // Your Navbar component


const AppLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body>
        {/* Wrap the entire app in Redux Provider */}
        <Provider store={store}>
          <div className="relative">
            <Navbar /> {/* Your Navbar */}
            <div className="flex">
              {/* Main content */}
              <div className="flex-grow">{children}</div>
            </div>
          </div>
        </Provider>
      </body>
    </html>
  );
};

export default AppLayout;