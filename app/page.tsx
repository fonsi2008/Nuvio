"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Sun, Thermometer, Music, Zap, Smartphone, Heart, Shield } from "lucide-react"
import Image from "next/image"
import { useState, useEffect } from "react"

export default function NuvioHomepage() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const features = [
    {
      icon: <Sun className="h-8 w-8 text-primary" />,
      title: "Sanftes Aufwecken",
      description: "Vibration und Licht für einen natürlichen Start in den Tag",
    },
    {
      icon: <Smartphone className="h-8 w-8 text-primary" />,
      title: "Schlaftracking",
      description: "App zeigt detaillierte Schlafqualität und Verbesserungsvorschläge",
    },
    {
      icon: <Thermometer className="h-8 w-8 text-primary" />,
      title: "Temperaturregelung",
      description: "Wärme- und Kühlfunktion für optimalen Schlafkomfort",
    },
    {
      icon: <Music className="h-8 w-8 text-primary" />,
      title: "Entspannende Klänge",
      description: "Musik oder Naturgeräusche für besseres Einschlafen",
    },
    {
      icon: <Zap className="h-8 w-8 text-primary" />,
      title: "Massagefunktion",
      description: "Sanfte Vibrationsmassage zur Entspannung",
    },
    {
      icon: <Heart className="h-8 w-8 text-primary" />,
      title: "Gesundheitsmonitoring",
      description: "Überwachung von Herzfrequenz und Atmung",
    },
  ]

  const pillowModels = [
    {
      name: "Nuvio Essential",
      price: "€299",
      features: ["Schlaftracking", "Sanftes Aufwecken", "App-Steuerung"],
      popular: false,
    },
    {
      name: "Nuvio Pro",
      price: "€499",
      features: ["Alle Essential Features", "Temperaturregelung", "Entspannungsklänge", "Massagefunktion"],
      popular: true,
    },
    {
      name: "Nuvio Elite",
      price: "€699",
      features: ["Alle Pro Features", "Gesundheitsmonitoring", "KI-Schlafoptimierung", "Premium Support"],
      popular: false,
    },
  ]

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Image
              src="/nuvio-logo.png"
              alt="Nuvio Logo - Smart Pillows for Better Sleep"
              width={140}
              height={56}
              className="h-14 w-auto"
            />
          </div>
          <nav className="hidden md:flex space-x-8">
            <a href="#features" className="text-muted-foreground hover:text-primary transition-colors">
              Features
            </a>
            <a href="#products" className="text-muted-foreground hover:text-primary transition-colors">
              Produkte
            </a>
            <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">
              Über uns
            </a>
            <a href="#contact" className="text-muted-foreground hover:text-primary transition-colors">
              Kontakt
            </a>
          </nav>
          <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">Jetzt kaufen</Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div
          className={`container mx-auto text-center transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <Badge className="mb-6 bg-primary/20 text-primary border-primary/30">Revolutionäre Schlaftechnologie</Badge>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-balance">
            Intelligente Kissen für
            <span className="text-primary block">besseren Schlaf</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto text-pretty">
            Entdecken Sie die Zukunft des Schlafens mit Nuvios Smart Pillows. Personalisierte Schlafoptimierung durch
            modernste Technologie.
          </p>
          <div className="mb-8">
            <Image
              src="/modern-smart-pillow-on-elegant-bed-in-dark-bedroom.png"
              alt="Nuvio Smart Pillow"
              width={600}
              height={400}
              className="mx-auto rounded-lg shadow-2xl"
            />
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 text-lg">
              Kollektion entdecken
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-border hover:bg-card px-8 py-3 text-lg bg-transparent"
            >
              Mehr erfahren
            </Button>
          </div>
        </div>

        {/* Animated background elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-primary/10 rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-accent/5 rounded-full animate-bounce"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-primary/5 rounded-full animate-ping"></div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 bg-card/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Innovative Features</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
              Jedes Nuvio Kissen ist mit modernster Technologie ausgestattet, um Ihren Schlaf zu revolutionieren.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div className="space-y-6">
              <Image
                src="/person-sleeping-peacefully-with-smart-pillow-showi.png"
                alt="Sanftes Aufwecken Feature"
                width={500}
                height={300}
                className="rounded-lg shadow-lg"
              />
              <div className="text-center">
                <h3 className="text-xl font-semibold mb-2">Sanftes Aufwecken</h3>
                <p className="text-muted-foreground">Natürliches Erwachen durch Licht und Vibration</p>
              </div>
            </div>
            <div className="space-y-6">
              <Image
                src="/smartphone-app-showing-sleep-tracking-data-and-ana.png"
                alt="Schlaftracking App"
                width={500}
                height={300}
                className="rounded-lg shadow-lg"
              />
              <div className="text-center">
                <h3 className="text-xl font-semibold mb-2">Intelligentes Tracking</h3>
                <p className="text-muted-foreground">Detaillierte Schlafanalyse in der App</p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="bg-card border-border hover:border-primary/50 transition-all duration-300 hover:scale-105 group"
              >
                <CardHeader>
                  <div className="mb-4 group-hover:scale-110 transition-transform duration-300">{feature.icon}</div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground">{feature.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Unsere Kissen-Kollektion</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
              Wählen Sie das perfekte Smart Pillow für Ihre Bedürfnisse.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pillowModels.map((model, index) => (
              <Card
                key={index}
                className={`relative bg-card border-border hover:border-primary/50 transition-all duration-300 hover:scale-105 ${model.popular ? "ring-2 ring-primary" : ""}`}
              >
                {model.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary text-primary-foreground">
                    Beliebteste Wahl
                  </Badge>
                )}
                <div className="p-6 pb-0">
                  <Image
                    src={`/abstract-geometric-shapes.png?key=wnnoc&height=200&width=300&query=${model.name.toLowerCase().replace(" ", "-")}-smart-pillow-product-shot-on-white-background`}
                    alt={model.name}
                    width={300}
                    height={200}
                    className="w-full h-48 object-cover rounded-lg mb-4"
                  />
                </div>
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl">{model.name}</CardTitle>
                  <div className="text-3xl font-bold text-primary">{model.price}</div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {model.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-2">
                        <Shield className="h-4 w-4 text-primary" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                    Jetzt bestellen
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-card/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Perfekt für jeden Schlaftyp</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
              Erleben Sie, wie Nuvio Smart Pillows Ihr Schlafzimmer in eine Oase der Entspannung verwandeln.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <Image
                src="/modern-dark-bedroom-with-smart-pillow-glowing-soft.png"
                alt="Modernes Schlafzimmer mit Nuvio"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
              <h3 className="text-xl font-semibold">Für Seitenschläfer</h3>
              <p className="text-muted-foreground">
                Optimale Unterstützung und Temperaturregelung für seitliche Schlafposition.
              </p>
            </div>
            <div className="space-y-4">
              <Image
                src="/couple-sleeping-peacefully-with-two-smart-pillows-.png"
                alt="Paar mit Nuvio Kissen"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
              <h3 className="text-xl font-semibold">Für Paare</h3>
              <p className="text-muted-foreground">
                Individuelle Einstellungen für beide Partner ohne gegenseitige Störung.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-primary/10">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">Bereit für besseren Schlaf?</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto text-pretty">
            Schließen Sie sich tausenden zufriedenen Kunden an und erleben Sie die Zukunft des Schlafens mit Nuvio.
          </p>
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 text-lg">
            Kollektion ansehen
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t border-border py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <Image
                src="/nuvio-logo.png"
                alt="Nuvio Logo - Smart Pillows for Better Sleep"
                width={140}
                height={56}
                className="h-14 w-auto mb-4"
              />
              <p className="text-muted-foreground text-sm">Revolutionäre Smart Pillows für optimalen Schlafkomfort.</p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Produkte</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Nuvio Essential
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Nuvio Pro
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Nuvio Elite
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Hilfe & FAQ
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Kontakt
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Garantie
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Unternehmen</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Über uns
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Karriere
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Presse
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
            <p>&copy; 2024 Nuvio. Alle Rechte vorbehalten.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
