import { Card, CardContent } from "../components/ui/card"

const Footer = () => {
  return (
    <footer id="contato" className="bg-gray-100 mt-auto py-6">
      <div className="container mx-auto">
        <Card>
          <CardContent className="text-center">
            <p>Desenvolvido por [Seu Nome].</p>
            <p>Contato: seuemail@example.com</p>
          </CardContent>
        </Card>
      </div>
    </footer>
  );
};

export default Footer;
