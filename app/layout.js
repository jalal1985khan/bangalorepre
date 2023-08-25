import './globals.css'
import 'bootstrap/dist/css/bootstrap.min.css';

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/js/bootstrap.bundle.min.js" integrity="sha384-HwwvtgBNo3bZJJLYd8oVXjrBZt8cqVSpeBNS5n7C8IVInixGAoxmnlMuBnhbgrkm" crossorigin="anonymous"></script>
        <script type="text/javascript" src="https://public.tableau.com/javascripts/api/tableau-2.min.js"></script>
        
       
        {children}
      
      
      
      </body>
    </html>
  )
}
