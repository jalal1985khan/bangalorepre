import './globals.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Script from 'next/script'

export const metadata = {
  title: 'Precision Health',
  description: 'Precision Pandemic Health Surveillance Initiative in Bangalore City',
  
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/js/bootstrap.bundle.min.js" integrity="sha384-HwwvtgBNo3bZJJLYd8oVXjrBZt8cqVSpeBNS5n7C8IVInixGAoxmnlMuBnhbgrkm" crossorigin="anonymous"></Script>
        <Script type="text/javascript" src="https://public.tableau.com/javascripts/api/tableau-2.min.js"></Script>
        
       
        {children}
      
      
      
      </body>
    </html>
  )
}
