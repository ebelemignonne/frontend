import { Link } from "react-router-dom";



export default function Footer() {
    return (
      <>
        <footer className="bg-dark border-top p-4">
          <div className="copyright text-center text-sm text-muted">
            All rights reserved. Copyright
            © <script>
              document.write(new Date().getFullYear()) 
            </script>
            &nbsp;Equipe by
            <Link href="https://www.creative-tim.com" className="text-secondary ms-1" target="_blank">Elat Zame DEV</Link>.
          </div>
        </footer>
      </>
    );
  }