import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "react-activity/dist/library.css";
import "./globals.css";

export const metadata = {
  title: "Web Components",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen overflow-x-hidden">
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
        />
        {children}
      </body>
    </html>
  );
}
