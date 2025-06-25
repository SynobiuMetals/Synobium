import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { BadgeCheck, Wrench, Ruler, FlaskConical, Package, Search, Briefcase } from "lucide-react";

export default function SynobiumPrecision() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-800 to-gray-700 text-white py-20 px-6 text-center">
        <img
          src="/logo.png"
          alt="Synobium Precision & Tooling Logo"
          width={160}
          height={160}
          className="mx-auto mb-6"
        />
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Synobium Precision & Tooling</h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto">
          CNC Machined Parts | Tool & Die Solutions | Built on Experience & Precision
        </p>
        <Button className="mt-6 text-lg px-6 py-3">Get a Custom Quote</Button>
      </section>

      {/* Experience Highlight */}
      <section className="bg-white py-16 px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">From Industry Experience to Independent Excellence</h2>
        <p className="max-w-3xl mx-auto text-lg">
          With over 6 years of hands-on industrial CNC machining and tool & die making experience, Synobium Precision & Tooling was built to deliver exceptional quality and reliability. We’re proud to work directly with clients and create real opportunities through precision, passion, and partnership.
        </p>
      </section>

      {/* Services Section */}
      <section className="py-16 px-6 grid md:grid-cols-3 gap-6 max-w-6xl mx-auto text-center">
        <Card className="p-6">
          <CardContent>
            <Wrench className="mx-auto h-12 w-12 text-blue-600 mb-4" />
            <h2 className="text-xl font-semibold mb-2">CNC Machining</h2>
            <p>Precision parts made to spec, whether one-off prototypes or production runs.</p>
          </CardContent>
        </Card>
        <Card className="p-6">
          <CardContent>
            <Ruler className="mx-auto h-12 w-12 text-green-600 mb-4" />
            <h2 className="text-xl font-semibold mb-2">Tool & Die Manufacturing</h2>
            <p>Custom dies and tooling solutions for forming, punching, and production applications.</p>
          </CardContent>
        </Card>
        <Card className="p-6">
          <CardContent>
            <Briefcase className="mx-auto h-12 w-12 text-yellow-600 mb-4" />
            <h2 className="text-xl font-semibold mb-2">Small Business. Big Impact.</h2>
            <p>Working independently to serve clients while building future opportunities for skilled workers.</p>
          </CardContent>
        </Card>
      </section>

      {/* Gallery Section */}
      <section className="bg-white py-16 px-6 text-center">
        <h2 className="text-3xl font-bold mb-10">Machining Gallery</h2>
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <img src="/images/shaft-machining.jpg" alt="Shaft being machined" className="rounded shadow" />
          <img src="/images/bus-part.jpg" alt="Bus part or housing" className="rounded shadow" />
          <img src="/images/pillar-setup.jpg" alt="Precision pillar setup" className="rounded shadow" />
          <img src="/images/vice-work.jpg" alt="Workholding in precision vice" className="rounded shadow" />
          <img src="/images/surface-grinding.jpg" alt="Surface grinding operation" className="rounded shadow" />
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gray-800 text-white py-16 px-6 text-center">
        <h3 className="text-2xl md:text-3xl font-semibold mb-4">Let’s Create Something Precise Together</h3>
        <p className="mb-6 max-w-xl mx-auto">
          Need reliable CNC parts or tooling? Partner with Synobium Precision & Tooling — skilled, driven, and ready to deliver.
        </p>
        <Button className="text-lg px-6 py-3">Contact Me</Button>
      </section>
    </div>
  );
}
