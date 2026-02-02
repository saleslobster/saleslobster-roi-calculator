import React, { useState, useEffect } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { TrendingDown, AlertTriangle } from 'lucide-react'

export default function Research() {
  const [data, setData] = useState(null)
  
  useEffect(() => {
    fetch('/competitive-data.json')
      .then(res => res.json())
      .then(json => setData(json))
  }, [])

  if (!data) return <div className="flex items-center justify-center min-h-screen">Loading...</div>

  return (
    <>
      <Head>
        <title>Agentforce Research & Customer Insights</title>
      </Head>

      <div className="min-h-screen">
        {/* Header */}
        <section className="border-b border-gray-700">
          <div className="max-w-7xl mx-auto px-4 py-12">
            <Link href="/" className="text-lobster hover:underline mb-4 inline-block">← Back to Calculator</Link>
            <h1 className="text-5xl font-bold mb-4">
              Agentforce Research & Insights
            </h1>
            <p className="text-gray-400 text-lg">
              Deep competitive analysis: Real customer feedback, pricing structures, and hidden costs
            </p>
          </div>
        </section>

        {/* Key Stats */}
        <section className="max-w-7xl mx-auto px-4 py-12 grid md:grid-cols-4 gap-6">
          <div className="stat-card">
            <p className="text-gray-400 text-sm mb-2">Market Adoption</p>
            <p className="text-3xl font-bold text-orange-400">5.3%</p>
            <p className="text-xs text-gray-500 mt-2">Of Salesforce customers using Agentforce</p>
          </div>
          <div className="stat-card border-red-700 border">
            <p className="text-gray-400 text-sm mb-2">Year 1 TCO (50 Users)</p>
            <p className="text-3xl font-bold text-red-400">$646K</p>
            <p className="text-xs text-gray-500 mt-2">Including implementation & training</p>
          </div>
          <div className="stat-card border-green-700 border">
            <p className="text-gray-400 text-sm mb-2">SalesLobster Year 1</p>
            <p className="text-3xl font-bold text-green-400">$11.4K</p>
            <p className="text-xs text-gray-500 mt-2">Pricing only, minimal onboarding</p>
          </div>
          <div className="stat-card">
            <p className="text-gray-400 text-sm mb-2">3-Year Savings</p>
            <p className="text-3xl font-bold text-green-300">$1.1M</p>
            <p className="text-xs text-gray-500 mt-2">Per 50-person team</p>
          </div>
        </section>

        {/* Customer Complaints */}
        <section className="max-w-7xl mx-auto px-4 py-12">
          <h2 className="text-3xl font-bold mb-8 text-red-400">Top Customer Complaints</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {data.customer_complaints_and_limitations.pricing_complaints.slice(0, 4).map((item, idx) => (
              <div key={idx} className="stat-card border-red-600 border">
                <div className="flex gap-3">
                  <AlertTriangle className="text-red-400 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold mb-2">{item.complaint}</h3>
                    {item.quote && (
                      <p className="text-gray-400 italic text-sm mb-2">"{item.quote}"</p>
                    )}
                    {item.impact && (
                      <p className="text-gray-500 text-xs">
                        <strong>Impact:</strong> {item.impact}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Real Quotes */}
        <section className="max-w-7xl mx-auto px-4 py-12 border-t border-gray-700">
          <h2 className="text-3xl font-bold mb-8">Real Customer Quotes (G2 Verified)</h2>
          <div className="space-y-4">
            {data.real_customer_quotes_for_messaging.pricing_concerns.slice(0, 3).map((quote, idx) => (
              <div key={idx} className="stat-card">
                <p className="text-gray-300 italic mb-3">"{quote.split(' - ')[0]}"</p>
                <p className="text-gray-500 text-sm">— {quote.split(' - ')[1]}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Implementation Reality */}
        <section className="max-w-7xl mx-auto px-4 py-12 border-t border-gray-700">
          <h2 className="text-3xl font-bold mb-8">Implementation Reality</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="stat-card border-red-700 border">
              <h3 className="text-xl font-bold mb-4 text-red-400">Agentforce</h3>
              <ul className="space-y-3 text-sm">
                <li className="flex gap-2">
                  <span className="text-red-400">→</span>
                  <span><strong>Timeline:</strong> 4-8 weeks to deploy</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-red-400">→</span>
                  <span><strong>Implementation:</strong> $50K-150K professional services</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-red-400">→</span>
                  <span><strong>Training:</strong> $2-5K per person ($100-250K for 50 users)</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-red-400">→</span>
                  <span><strong>ROI Timeline:</strong> 3-7 months minimum</span>
                </li>
              </ul>
            </div>
            <div className="stat-card border-green-700 border">
              <h3 className="text-xl font-bold mb-4 text-green-400">SalesLobster</h3>
              <ul className="space-y-3 text-sm">
                <li className="flex gap-2">
                  <span className="text-green-400">✓</span>
                  <span><strong>Timeline:</strong> 1-2 days to deploy</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-green-400">✓</span>
                  <span><strong>Implementation:</strong> $0 professional services needed</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-green-400">✓</span>
                  <span><strong>Training:</strong> Included, minimal admin overhead</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-green-400">✓</span>
                  <span><strong>ROI Timeline:</strong> 2-3 weeks</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Hidden Costs */}
        <section className="max-w-7xl mx-auto px-4 py-12 border-t border-gray-700">
          <h2 className="text-3xl font-bold mb-8">Hidden Costs of Agentforce</h2>
          <div className="stat-card border-red-600 border">
            <h3 className="text-lg font-bold mb-4">Typical 50-User Mid-Market Company, Year 1</h3>
            <div className="space-y-3">
              <div className="flex justify-between text-sm">
                <span>Base Salesforce Enterprise Edition</span>
                <span className="font-bold">$99,000</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>Agentforce Licensing (Industry Cloud)</span>
                <span className="font-bold">$90,000</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>Einstein Platform (required)</span>
                <span className="font-bold">$30,000</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>Data Cloud (required)</span>
                <span className="font-bold">$22,500</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>Implementation Services</span>
                <span className="font-bold">$75,000</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>Training & Change Management</span>
                <span className="font-bold">$100,000</span>
              </div>
              <div className="border-t border-gray-600 pt-3 flex justify-between font-bold">
                <span>Year 1 Total</span>
                <span className="text-red-400">$416,500</span>
              </div>
              <p className="text-xs text-gray-500 mt-3">
                ✓ Years 2+ recur at ~$373,800/year (licensing only, maintenance adds costs)
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="max-w-7xl mx-auto px-4 py-12">
          <div className="stat-card border-2 border-lobster text-center py-12">
            <h2 className="text-3xl font-bold mb-4">See Your Real ROI</h2>
            <p className="text-gray-400 mb-6">
              Use our calculator to see exact savings for your team size
            </p>
            <Link href="/">
              <button className="cta-button">
                Back to ROI Calculator →
              </button>
            </Link>
          </div>
        </section>
      </div>
    </>
  )
}
