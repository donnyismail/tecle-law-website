"use client";

import React, { useState } from "react";
import { Phone, Mail, Clock, MapPin, Loader2, CheckCircle, AlertCircle } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { COMPANY } from "@/lib/constants";

interface ContactFormProps {
    title?: string;
    description?: string;
}

type FormStatus = 'idle' | 'loading' | 'success' | 'error';

export const ContactForm = ({
    title = "Get Your Free Consultation",
    description = "Have questions about your case? Fill out the form below and we'll get back to you within 24 hours. All consultations are confidential.",
}: ContactFormProps) => {
    const [status, setStatus] = useState<FormStatus>('idle');
    const [errorMessage, setErrorMessage] = useState('');

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setStatus('loading');
        setErrorMessage('');

        const formData = new FormData(e.currentTarget);
        const data = {
            name: `${formData.get('firstname')} ${formData.get('lastname')}`,
            email: formData.get('email'),
            phone: formData.get('phone'),
            caseType: formData.get('caseType') || 'Not specified',
            message: formData.get('message'),
        };

        try {
            const response = await fetch('/api/submit-lead', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data),
            });

            const result = await response.json();

            if (result.success) {
                setStatus('success');
                // Reset form
                e.currentTarget.reset();
            } else {
                setStatus('error');
                setErrorMessage(result.message || 'Something went wrong. Please try again.');
            }
        } catch {
            setStatus('error');
            setErrorMessage('Unable to submit form. Please call us directly.');
        }
    }

    return (
        <section className="py-16 md:py-24 bg-gray-light">
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
                    {/* Left Column - Contact Info */}
                    <div className="lg:w-2/5">
                        <div className="mb-8">
                            <h1 className="text-4xl md:text-5xl font-bold text-navy mb-4">
                                {title}
                            </h1>
                            <p className="text-lg text-gray-600">{description}</p>
                        </div>

                        {/* Contact Details */}
                        <div className="bg-white rounded-xl p-6 shadow-lg">
                            <h3 className="text-xl font-bold text-navy mb-6">
                                Contact Details
                            </h3>
                            <ul className="space-y-4">
                                <li className="flex items-start gap-4">
                                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                                        <Phone className="w-5 h-5 text-primary" />
                                    </div>
                                    <div>
                                        <span className="font-semibold text-navy block">Phone</span>
                                        <a
                                            href={COMPANY.phoneLink}
                                            className="text-primary hover:underline text-lg"
                                        >
                                            {COMPANY.phone}
                                        </a>
                                    </div>
                                </li>
                                <li className="flex items-start gap-4">
                                    <div className="w-10 h-10 bg-success/10 rounded-lg flex items-center justify-center flex-shrink-0">
                                        <Mail className="w-5 h-5 text-success" />
                                    </div>
                                    <div>
                                        <span className="font-semibold text-navy block">Email</span>
                                        <a
                                            href={COMPANY.emailLink}
                                            className="text-success hover:underline"
                                        >
                                            {COMPANY.email}
                                        </a>
                                    </div>
                                </li>
                                <li className="flex items-start gap-4">
                                    <div className="w-10 h-10 bg-secondary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                                        <Clock className="w-5 h-5 text-secondary" />
                                    </div>
                                    <div>
                                        <span className="font-semibold text-navy block">Hours</span>
                                        <span className="text-gray-600">{COMPANY.hours}</span>
                                    </div>
                                </li>
                                <li className="flex items-start gap-4">
                                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                                        <MapPin className="w-5 h-5 text-primary" />
                                    </div>
                                    <div>
                                        <span className="font-semibold text-navy block">Location</span>
                                        <span className="text-gray-600">{COMPANY.location}</span>
                                    </div>
                                </li>
                            </ul>
                        </div>

                        {/* Quick Call CTA */}
                        <div className="mt-6 p-6 bg-primary rounded-xl text-white">
                            <p className="font-semibold mb-2">Need Immediate Help?</p>
                            <a
                                href={COMPANY.phoneLink}
                                className="flex items-center gap-2 text-2xl font-bold hover:text-secondary transition-colors"
                            >
                                <Phone className="w-6 h-6" />
                                {COMPANY.phone}
                            </a>
                        </div>
                    </div>

                    {/* Right Column - Contact Form */}
                    <div className="lg:w-3/5">
                        <div className="bg-white rounded-xl shadow-xl p-8 md:p-10">
                            <h2 className="text-2xl font-bold text-navy mb-6">Send Us a Message</h2>

                            {/* Success Message */}
                            {status === 'success' && (
                                <div className="mb-6 p-4 bg-success/10 border border-success/20 rounded-lg flex items-start gap-3">
                                    <CheckCircle className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
                                    <div>
                                        <p className="font-semibold text-success">Message Sent Successfully!</p>
                                        <p className="text-sm text-gray-600">Thank you! We will contact you within 24 hours.</p>
                                    </div>
                                </div>
                            )}

                            {/* Error Message */}
                            {status === 'error' && (
                                <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-start gap-3">
                                    <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                                    <div>
                                        <p className="font-semibold text-red-600">Submission Failed</p>
                                        <p className="text-sm text-gray-600">{errorMessage}</p>
                                    </div>
                                </div>
                            )}

                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <Label htmlFor="firstname">First Name *</Label>
                                        <Input
                                            type="text"
                                            id="firstname"
                                            name="firstname"
                                            placeholder="John"
                                            required
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="lastname">Last Name *</Label>
                                        <Input
                                            type="text"
                                            id="lastname"
                                            name="lastname"
                                            placeholder="Doe"
                                            required
                                        />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <Label htmlFor="email">Email *</Label>
                                        <Input
                                            type="email"
                                            id="email"
                                            name="email"
                                            placeholder="john@example.com"
                                            required
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="phone">Phone Number *</Label>
                                        <Input
                                            type="tel"
                                            id="phone"
                                            name="phone"
                                            placeholder="(713) 555-1234"
                                            required
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="caseType">Case Type</Label>
                                    <select
                                        id="caseType"
                                        name="caseType"
                                        className="flex h-12 w-full rounded-md border border-gray-300 bg-white px-4 py-3 text-base ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                                    >
                                        <option value="">Select a case type...</option>
                                        <option value="personal-injury">Personal Injury</option>
                                        <option value="expungement">Criminal Expungement</option>
                                        <option value="other">Other</option>
                                    </select>
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="message">Tell Us About Your Case *</Label>
                                    <Textarea
                                        id="message"
                                        name="message"
                                        placeholder="Please describe your situation..."
                                        rows={5}
                                        required
                                    />
                                </div>

                                <button
                                    type="submit"
                                    disabled={status === 'loading'}
                                    className="w-full bg-success hover:bg-success-dark text-white font-bold py-4 px-8 rounded-lg transition-colors text-lg disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                                >
                                    {status === 'loading' ? (
                                        <>
                                            <Loader2 className="w-5 h-5 animate-spin" />
                                            Sending...
                                        </>
                                    ) : (
                                        'Request Free Consultation'
                                    )}
                                </button>

                                <p className="text-sm text-gray-500 text-center">
                                    By submitting this form, you agree to be contacted about your case.
                                    Your information is kept confidential.
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactForm;
