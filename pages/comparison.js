import React, { useState, useEffect } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { Check, X } from 'lucide-react'

export default function Comparison() {
  const [data, setData] = useState(null)
  
  useEffect(() => {
    fetch('/data.json')
      .then(res => res.json())
      .then(json => setData(json))
  }, [])

  if (!data) return <div className="flex items-center justify-center min-h-screen">Loading...</div>

  const features = [
    {
      category: 'Meeting Notes Processing',
      items: [
        { name: 'Handwritten note OCR', agentforce: true, saleslobster: true },
        { name: 'Entity extraction', agentforce: true, saleslobster: true },
        { name: 'Automatic record creation', agentforce: true, saleslobster: true },
        { name: 'Custom field support', agentforce: true, saleslobster: true },
        { name: 'Multi-language support', agentforce: true, saleslobster: true },
      ]
    },
    {
      category: 'Meeting Preparation',
      items: [
        { name: 'Salesforce data aggregation', agentforce: true, saleslobster: true },
        { name: 'Web search integration', agentforce: false, saleslobster: true },
        { name: 'Custom talking points', agentforce: false, saleslobster: true },
        { name: 'LinkedIn enrichment', agentforce: false, saleslobster: true },
        { name: 'Real-time news alerts', agentforce: false, saleslobster: true },
      ]
    },
    {
      category: 'Apex Development',
      items: [
        { name: 'Code generation from text', agentforce: true, saleslobster: true },
        { name: 'Automatic test generation', agentforce: false, saleslobster: true },
        { name: 'Sandbox deployment', agentforce: false, saleslobster: true },
        { name: 'Production deployment', agentforce: false, saleslobster: true },
        { name: 'Automatic iteration (5x)', agentforce: false, saleslobster: true },
      ]
    },
    {
      category: 'Integration & Channels',
      items: [
        { name: 'Telegram', agentforce: false, saleslobster: true },
        { name: 'Slack', agentforce: false, saleslobster: true },
        { name: 'Email webhooks', agentforce: false, saleslobster: true },
        { name: 'Custom webhooks', agentforce: false, saleslobster: true },
        { name: 'Self-hosted option', agentforce: false, saleslobster: true },
      ]
    },
    {
      category: 'Infrastructure & Licensing',
      items: [
        { name: 'Data Cloud required', agentforce: true, saleslobster: false },
        { name: 'Einstein license required', agentforce: true, saleslobster: false },
        { name: 'Any Salesforce edition', agentforce: false, saleslobster: true },
        { name: 'No vendor lock-in', agentforce: false, saleslobster: true },
        { name: 'Open source compatible', agentforce: false, saleslobster: true },
      ]
    },
  ]

  return (
    <>
      <Head>
        <title>Feature Comparison - SalesLobster vs Agentforce</title>
      </Head>

      <div className="min-h-screen">
        {/* Header */}
        <section className="border-b border-gray-700">
          <div className="max-w-7xl mx-auto px-4 py-12">
            <Link href="/" className="text-lobster hover:underline mb-4 inline-block">← Back to Calculator</Link>
            <h1 className="text-5xl font-bold mb-4">
              Feature Comparison
            </h1>
            <p className="text-gray-400 text-lg">
              Head-to-head breakdown: SalesLobster vs Salesforce Agentforce
            </p>
          </div>
        </section>

        {/* Comparison Table */}
        <section className="max-w-7xl mx-auto px-4 py-12">
          {features.map((section, idx) => (
            <div key={idx} className="mb-12">
              <h2 className="text-2xl font-bold mb-6 text-lobster">{section.category}</h2>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-700">
                      <th className="text-left py-4 px-6 text-gray-400">Feature</th>
                      <th className="text-center py-4 px-6">
                        <div className="text-sm font-semibold">Agentforce</div>
                      </th>
                      <th className="text-center py-4 px-6">
                        <div className="text-sm font-semibold">SalesLobster 🦞</div>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {section.items.map((item, itemIdx) => (
                      <tr key={itemIdx} className="border-b border-gray-800 hover:bg-gray-800/50">
                        <td className="py-4 px-6">{item.name}</td>
                        <td className="py-4 px-6 text-center">
                          {item.agentforce ? (
                            <Check className="text-green-400 mx-auto" size={24} />
                          ) : (
                            <X className="text-gray-600 mx-auto" size={24} />
                          )}
                        </td>
                        <td className="py-4 px-6 text-center">
                          {item.saleslobster ? (
                            <Check className="text-green-400 mx-auto" size={24} />
                          ) : (
                            <X className="text-gray-600 mx-auto" size={24} />
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          ))}
        </section>

        {/* Summary */}
        <section className="max-w-7xl mx-auto px-4 py-12 border-t border-gray-700">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="stat-card">
              <h3 className="text-xl font-bold mb-3">Cost Advantage</h3>
              <p className="text-3xl font-bold text-green-400 mb-2">95%+</p>
              <p className="text-gray-400 text-sm">Average savings vs Agentforce</p>
            </div>
            <div className="stat-card">
              <h3 className="text-xl font-bold mb-3">More Features</h3>
              <p className="text-3xl font-bold text-lobster mb-2">20+</p>
              <p className="text-gray-400 text-sm">Additional capabilities vs Agentforce</p>
            </div>
            <div className="stat-card">
              <h3 className="text-xl font-bold mb-3">Flexibility</h3>
              <p className="text-3xl font-bold text-blue-400 mb-2">∞</p>
              <p className="text-gray-400 text-sm">Customization options via OpenClaw</p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="max-w-7xl mx-auto px-4 py-12">
          <div className="stat-card border-2 border-lobster text-center py-12">
            <h2 className="text-3xl font-bold mb-4">Ready to Switch?</h2>
            <p className="text-gray-400 mb-6">
              Get started with SalesLobster in minutes, not months
            </p>
            <Link href="/">
              <button className="cta-button">
                Calculate Your Savings →
              </button>
            </Link>
          </div>
        </section>
      </div>
    </>
  )
}
