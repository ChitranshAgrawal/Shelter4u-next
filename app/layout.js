import "./globals.css";
import 'primereact/resources/themes/lara-light-indigo/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';


import Header from "./Components/Header.jsx";
import Footer from "./footer/page.jsx"; 

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="font-main">


      <body>
        <Header/>
        {children}
        <Footer/>
      </body>

    </html>
  );
}

