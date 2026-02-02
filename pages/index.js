import React, { useState, useEffect } from 'react'
import Head from 'next/head'
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts'
import { TrendingDown, DollarSign, Zap, Clock } from 'lucide-react'

export default function ROICalculator() {
  const [data, setData] = useState(null)
  const [teamSize, setTeamSize] = useState(100)
  const [months, setMonths] = useState(12)
  
  useEffect(() => {
    fetch('/data.json')
      .then(res => res.json())
      .then(json => setData(json))
  }, [])

  if (!data) return <div className="flex items-center justify-center min-h-screen">Loading...</div>

  const agentforceCost = data.agentforce.pricing.perMonth_100SDRs * (teamSize / 100) * months
  const saleslobsterCost = data.saleslobster.pricing.perMonth_100SDRs * (teamSize / 100) * months
  const savings = agentforceCost - saleslobsterCost
  const savingsPercent = Math.round((savings / agentforceCost) * 100)

  const chartData = Array.from({ length: months }, (_, i) => ({
    month: i + 1,
    Agentforce: Math.round(data.agentforce.pricing.perMonth_100SDRs * (teamSize / 100)),
    SalesLobster: Math.round(data.saleslobster.pricing.perMonth_100SDRs * (teamSize / 100)),
  }))

  const comparisonData = [
    { name: 'Agentforce', value: agentforceCost },
    { name: 'SalesLobster', value: saleslobsterCost },
  ]

  const COLORS = ['#EF4444', '#FF6B35']

  return (
    <>
      <Head>
        <title>SalesLobster ROI Calculator - 95% Cost Savings vs Agentforce</title>
        <meta name="description" content="Interactive ROI calculator showing SalesLobster savings vs Salesforce Agentforce" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className="min-h-screen">
        {/* Hero */}
        <section className="relative overflow-hidden border-b border-gray-700">
          <div className="max-w-7xl mx-auto px-4 py-20">
            <div className="text-center">
              <div className="text-6xl mb-4">🦞</div>
              <h1 className="text-5xl font-bold mb-4">
                Replace Agentforce at <span className="text-lobster">95% Cost Savings</span>
              </h1>
              <p className="text-xl text-gray-400 mb-8">
                Interactive ROI calculator for SalesLobster — the AI agent that automates Salesforce workflows at a fraction of the cost
              </p>
            </div>
          </div>
        </section>

        {/* Calculator */}
        <section className="max-w-7xl mx-auto px-4 py-12">
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Inputs */}
            <div className="stat-card">
              <h2 className="text-2xl font-bold mb-6">Customize Your Calculation</h2>
              
              <div className="mb-6">
                <label className="block text-sm font-semibold mb-2">Team Size (SDRs)</label>
                <input
                  type="range"
                  min="10"
                  max="1000"
                  step="10"
                  value={teamSize}
                  onChange={(e) => setTeamSize(Number(e.target.value))}
                  className="w-full"
                />
                <div className="text-2xl font-bold text-lobster mt-2">{teamSize} SDRs</div>
              </div>

              <div className="mb-6">
                <label className="block text-sm font-semibold mb-2">Projection Period</label>
                <select
                  value={months}
                  onChange={(e) => setMonths(Number(e.target.value))}
                  className="w-full bg-gray-700 border border-gray-600 rounded px-4 py-2"
                >
                  <option value={3}>3 Months</option>
                  <option value={6}>6 Months</option>
                  <option value={12}>1 Year</option>
                  <option value={24}>2 Years</option>
                  <option value={36}>3 Years</option>
                </select>
              </div>

              <div className="text-sm text-gray-400 space-y-2">
                <p>✓ Includes meeting notes processing</p>
                <p>✓ Includes meeting prep briefing</p>
                <p>✓ Includes Apex deployment automation</p>
              </div>
            </div>

            {/* Results */}
            <div className="space-y-4">
              <div className="stat-card border-2 border-lobster">
                <div className="flex items-center gap-3 mb-2">
                  <DollarSign className="text-lobster" size={32} />
                  <div>
                    <p className="text-gray-400 text-sm">Total Savings ({months} months)</p>
                    <p className="text-4xl font-bold text-lobster">${savings.toLocaleString()}</p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="stat-card">
                  <p className="text-gray-400 text-xs mb-1">Agentforce Cost</p>
                  <p className="text-2xl font-bold">${agentforceCost.toLocaleString()}</p>
                </div>
                <div className="stat-card border-green-600 border">
                  <p className="text-gray-400 text-xs mb-1">SalesLobster Cost</p>
                  <p className="text-2xl font-bold text-green-400">${saleslobsterCost.toLocaleString()}</p>
                </div>
              </div>

              <div className="stat-card bg-green-900/20 border-green-600">
                <p className="text-gray-400 text-sm mb-2">Cost Reduction</p>
                <p className="text-3xl font-bold text-green-400">{savingsPercent}%</p>
              </div>
            </div>
          </div>

          {/* Charts */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="stat-card">
              <h3 className="text-xl font-bold mb-4">Monthly Cost Comparison</h3>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={chartData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                  <XAxis dataKey="month" stroke="#9CA3AF" />
                  <YAxis stroke="#9CA3AF" />
                  <Tooltip contentStyle={{ backgroundColor: '#1F2937', border: '1px solid #4B5563' }} />
                  <Legend />
                  <Line type="monotone" dataKey="Agentforce" stroke="#EF4444" strokeWidth={2} />
                  <Line type="monotone" dataKey="SalesLobster" stroke="#10B981" strokeWidth={2} />
                </LineChart>
              </ResponsiveContainer>
            </div>

            <div className="stat-card">
              <h3 className="text-xl font-bold mb-4">Total Cost ({months} months)</h3>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={comparisonData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({ name, value }) => `${name}: $${(value / 1000).toFixed(0)}k`}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {comparisonData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip formatter={(value) => `$${value.toLocaleString()}`} />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Use Cases */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-8">What You Can Automate</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {data.useCases.map((useCase, idx) => (
                <div key={idx} className="stat-card">
                  <h3 className="font-bold text-lg mb-4">{useCase.name}</h3>
                  <div className="space-y-3 text-sm">
                    <div>
                      <p className="text-gray-400">Time Saved</p>
                      <p className="font-bold text-green-400">{useCase.timeValue}</p>
                    </div>
                    <div>
                      <p className="text-gray-400">Cost per Use</p>
                      <div className="flex justify-between">
                        <span className="line-through text-red-400">${useCase.agentforceCost.toFixed(2)}</span>
                        <span className="text-green-400 font-bold">${useCase.saleslobsterCost.toFixed(2)}</span>
                      </div>
                    </div>
                    <div>
                      <p className="text-gray-400">Frequency</p>
                      <p className="text-lobster">{useCase.frequency}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Features */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="stat-card border-red-700 border">
              <h3 className="text-xl font-bold mb-4 text-red-400">Agentforce Limitations</h3>
              <ul className="space-y-2">
                {data.agentforce.limitations.map((limit, idx) => (
                  <li key={idx} className="flex gap-2">
                    <span className="text-red-400">✗</span>
                    <span>{limit}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="stat-card border-green-700 border">
              <h3 className="text-xl font-bold mb-4 text-green-400">SalesLobster Advantages</h3>
              <ul className="space-y-2">
                {data.saleslobster.advantages.map((adv, idx) => (
                  <li key={idx} className="flex gap-2">
                    <span className="text-green-400">✓</span>
                    <span>{adv}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* CTA */}
          <div className="stat-card border-2 border-lobster text-center py-12">
            <h2 className="text-3xl font-bold mb-4">Ready to Replace Agentforce?</h2>
            <p className="text-gray-400 mb-6">
              Save {savingsPercent}% and get started in minutes with SalesLobster
            </p>
            <button className="cta-button">
              Get Started Free →
            </button>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-gray-700 py-8 mt-16">
          <div className="max-w-7xl mx-auto px-4 text-center text-gray-500 text-sm">
            <p>🦞 SalesLobster — Salesforce Automation at a Fraction of the Cost</p>
            <p className="mt-2">Learn more at <a href="https://github.com/saleslobster" className="text-lobster hover:underline">github.com/saleslobster</a></p>
          </div>
        </footer>
      </div>
    </>
  )
}
