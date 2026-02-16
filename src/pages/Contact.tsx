import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select, SelectContent, SelectItem, SelectTrigger, SelectValue
} from "@/components/ui/select";
import { Mail, Phone, MapPin, Clock, Linkedin, Twitter, Facebook, Instagram, Youtube } from "lucide-react";
import { toast } from "sonner";

const Contact = () => {
  const [inquiryType, setInquiryType] = useState("");
  const [formData, setFormData] = useState({
    firstName: "", lastName: "", email: "", phone: "",
    gradeLevel: "", format: "", companyName: "", companySize: "",
    industry: "", pilotInterest: false,
    message: "", heardAbout: "", newsletter: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.firstName || !formData.email || !formData.message || !inquiryType) {
      toast.error("Please fill in all required fields.");
      return;
    }
    toast.success("Thank you! We've received your message and will respond within 24 hours.");
    setFormData({ firstName: "", lastName: "", email: "", phone: "", gradeLevel: "", format: "", companyName: "", companySize: "", industry: "", pilotInterest: false, message: "", heardAbout: "", newsletter: false });
    setInquiryType("");
  };

  return (
    <div>
      {/* Hero */}
      <section className="gradient-primary text-primary-foreground section-padding">
        <div className="container-narrow text-center">
          <h1 className="text-4xl font-bold md:text-5xl">Get in Touch</h1>
          <p className="mt-4 text-lg opacity-90 max-w-xl mx-auto">Have questions about our programs? Want to discuss custom solutions? We're here to help.</p>
          <p className="mt-2 text-sm opacity-75">We respond to all inquiries within 24 hours during business days.</p>
        </div>
      </section>

      <section className="section-padding bg-surface">
        <div className="container-narrow">
          <div className="grid gap-12 lg:grid-cols-3">
            {/* Form */}
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold mb-8">Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div><Label htmlFor="fn">First Name *</Label><Input id="fn" value={formData.firstName} onChange={(e) => setFormData({ ...formData, firstName: e.target.value })} required /></div>
                  <div><Label htmlFor="ln">Last Name *</Label><Input id="ln" value={formData.lastName} onChange={(e) => setFormData({ ...formData, lastName: e.target.value })} required /></div>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div><Label htmlFor="em">Email *</Label><Input id="em" type="email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} required /></div>
                  <div><Label htmlFor="ph">Phone</Label><Input id="ph" type="tel" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} /></div>
                </div>
                <div>
                  <Label>Inquiry Type *</Label>
                  <Select value={inquiryType} onValueChange={setInquiryType}>
                    <SelectTrigger><SelectValue placeholder="Select type" /></SelectTrigger>
                    <SelectContent>
                      {["Youth Program Question", "Corporate Training Inquiry", "Free Workshop Registration", "Pilot Program Interest", "Partnership Opportunity", "Media/Press Inquiry", "Technical Support", "General Question", "Other"].map((t) => <SelectItem key={t} value={t}>{t}</SelectItem>)}
                    </SelectContent>
                  </Select>
                </div>

                {inquiryType === "Youth Program Question" && (
                  <div className="grid gap-4 sm:grid-cols-2 p-4 rounded-lg bg-surface-alt">
                    <div>
                      <Label>Student's Grade Level</Label>
                      <Select value={formData.gradeLevel} onValueChange={(v) => setFormData({ ...formData, gradeLevel: v })}>
                        <SelectTrigger><SelectValue placeholder="Select grade" /></SelectTrigger>
                        <SelectContent>{["5th", "6th", "7th", "8th"].map((g) => <SelectItem key={g} value={g}>{g} Grade</SelectItem>)}</SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label>Preferred Format</Label>
                      <Select value={formData.format} onValueChange={(v) => setFormData({ ...formData, format: v })}>
                        <SelectTrigger><SelectValue placeholder="Select format" /></SelectTrigger>
                        <SelectContent>{["Weekly", "Summer Camp", "Not sure"].map((f) => <SelectItem key={f} value={f}>{f}</SelectItem>)}</SelectContent>
                      </Select>
                    </div>
                  </div>
                )}

                {inquiryType === "Corporate Training Inquiry" && (
                  <div className="grid gap-4 sm:grid-cols-2 p-4 rounded-lg bg-surface-alt">
                    <div><Label>Company Name</Label><Input value={formData.companyName} onChange={(e) => setFormData({ ...formData, companyName: e.target.value })} /></div>
                    <div>
                      <Label>Company Size</Label>
                      <Select value={formData.companySize} onValueChange={(v) => setFormData({ ...formData, companySize: v })}>
                        <SelectTrigger><SelectValue placeholder="Select size" /></SelectTrigger>
                        <SelectContent>{["1-50", "51-100", "101-250", "251-500", "500+"].map((s) => <SelectItem key={s} value={s}>{s}</SelectItem>)}</SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label>Industry</Label>
                      <Select value={formData.industry} onValueChange={(v) => setFormData({ ...formData, industry: v })}>
                        <SelectTrigger><SelectValue placeholder="Select industry" /></SelectTrigger>
                        <SelectContent>{["Technology", "Healthcare", "Finance", "Manufacturing", "Retail", "Education", "Other"].map((i) => <SelectItem key={i} value={i}>{i}</SelectItem>)}</SelectContent>
                      </Select>
                    </div>
                    <div className="flex items-center gap-3 self-end pb-2">
                      <Checkbox id="pilot-int" checked={formData.pilotInterest} onCheckedChange={(c) => setFormData({ ...formData, pilotInterest: !!c })} />
                      <Label htmlFor="pilot-int" className="text-sm">Interested in pilot?</Label>
                    </div>
                  </div>
                )}

                <div>
                  <Label htmlFor="msg">Your Message *</Label>
                  <Textarea id="msg" placeholder="Tell us how we can help..." maxLength={1000} rows={5} value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} required />
                </div>
                <div>
                  <Label>How did you hear about us?</Label>
                  <Select value={formData.heardAbout} onValueChange={(v) => setFormData({ ...formData, heardAbout: v })}>
                    <SelectTrigger><SelectValue placeholder="Select option" /></SelectTrigger>
                    <SelectContent>{["Google Search", "Social Media", "Friend/Family Referral", "School Recommendation", "News Article/Press", "Other"].map((o) => <SelectItem key={o} value={o}>{o}</SelectItem>)}</SelectContent>
                  </Select>
                </div>
                <div className="flex items-center gap-3">
                  <Checkbox id="news" checked={formData.newsletter} onCheckedChange={(c) => setFormData({ ...formData, newsletter: !!c })} />
                  <Label htmlFor="news" className="text-sm">Send me AI education tips and program updates</Label>
                </div>
                <Button type="submit" size="lg" className="w-full gradient-accent border-0 text-accent-foreground font-bold py-6 hover:opacity-90">Send Message</Button>
              </form>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              <div className="rounded-xl bg-surface-alt border border-border p-6">
                <h3 className="font-bold mb-4">Contact Information</h3>
                <div className="space-y-4 text-sm">
                  <div className="flex items-start gap-3"><Mail size={18} className="shrink-0 text-primary mt-0.5" /><div><p className="font-medium">Email</p><a href="mailto:AgenticMindsHelp@gmail.com" className="text-primary hover:underline">AgenticMindsHelp@gmail.com</a></div></div>
                  <div className="flex items-start gap-3"><Phone size={18} className="shrink-0 text-primary mt-0.5" /><div><p className="font-medium">Phone / WhatsApp</p><p className="text-muted-foreground">480-296-1631 | 540-556-3262</p></div></div>
                  <div className="flex items-start gap-3"><Clock size={18} className="shrink-0 text-primary mt-0.5" /><div><p className="font-medium">Office Hours</p><p className="text-muted-foreground">Mon–Fri, 9am–6pm PT</p><p className="text-muted-foreground">Response within 24 hours</p></div></div>
                  <div className="flex items-start gap-3"><MapPin size={18} className="shrink-0 text-primary mt-0.5" /><div><p className="font-medium">Location</p><p className="text-muted-foreground">San Francisco Bay Area, CA</p></div></div>
                </div>
              </div>

              <div className="rounded-xl bg-surface-alt border border-border p-6">
                <h3 className="font-bold mb-4">Service Area</h3>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <p><strong>Youth Programs:</strong> Bay Area (online)</p>
                  <p><strong>Corporate:</strong> Nationwide (online)</p>
                </div>
              </div>

              <div className="rounded-xl bg-surface-alt border border-border p-6">
                <h3 className="font-bold mb-4">Connect With Us</h3>
                <div className="flex gap-3">
                  {[Linkedin, Twitter, Facebook, Instagram, Youtube].map((Icon, i) => (
                    <a key={i} href="#" className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary hover:bg-primary/20 transition-colors">
                      <Icon size={18} />
                    </a>
                  ))}
                </div>
              </div>

              <div className="rounded-xl bg-primary/5 border border-primary/20 p-6">
                <h3 className="font-bold mb-2">Partnerships & Media</h3>
                <p className="text-sm text-muted-foreground mb-3">Interested in collaborating? We're open to partnerships with schools, educational organizations, tech companies, and community groups.</p>
                <p className="text-sm text-muted-foreground">Press inquiries and interview requests welcome.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
