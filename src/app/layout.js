import "@/styles/globals.css"
import vazirFont from "@/constants/localFont";
import Header from "@/components/Header";
import {Toaster} from "react-hot-toast";
import AuthProvider from "@/context/authContext";

export const metadata = {
  title: {
      template: "%s | next Blog",
      default:'next Blog'
  },
  description: "it is a blog application with next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir={'rtl'}>
      <body
          className={` ${vazirFont.variable} font-sans`}>
      <AuthProvider>
          <Toaster/>
          <Header/>
          {children}
      </AuthProvider>
      </body>
    </html>
  );
}
