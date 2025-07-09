"use client"

import EnhancedHeroSection from "../components/enhanced-hero-section"
import SimpleMethodologySection from "../components/simple-methodology-section"
import AdvancedReportPreview from "../components/advanced-report-preview"
import ResultsShowcaseSection from "../components/results-showcase-section"
import SimplePricingSection from "../components/simple-pricing-section"
import EnhancedContactSection from "../components/enhanced-contact-section"
import Footer from "../components/footer"
import WhatsAppFloatButton from "../components/whatsapp-float-button"
import ExitIntentPopup from "../components/exit-intent-popup"

export default function LandingPage() {
  return (
    <div className="min-h-screen">
      <EnhancedHeroSection />
      <div id="methodology-section">
        <SimpleMethodologySection />
      </div>
      <AdvancedReportPreview />
      <div id="results-showcase">
        <ResultsShowcaseSection />
      </div>
      <div id="pricing-section">
        <SimplePricingSection />
      </div>
      <EnhancedContactSection />
      <Footer />
      <WhatsAppFloatButton />
      <ExitIntentPopup />
    </div>
  )
}
