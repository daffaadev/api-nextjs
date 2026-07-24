const express = require('express')
const cors = require('cors')
const path = require('path')

const app = express()
const PORT = process.env.PORT || 5000

// Middleware
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Routes API
const orderkuotaRoutes = require('./routes/orderkuota')
app.use('/api/orderkuota', orderkuotaRoutes)

// Root endpoint
app.get('/api', (req, res) => {
  res.json({
    name: 'Orderkuota API',
    version: '1.0.0',
    endpoints: {
      login: '/api/orderkuota/login?username=xxx&password=xxx',
      profile: '/api/orderkuota/profile?token=xxx'
    }
  })
})

// 404 handler
app.use((req, res) => {
  res.status(404).json({
    status: false,
    error: 'Endpoint not found'
  })
})

// Error handler
app.use((err, req, res, next) => {
  console.error(err.stack)
  res.status(500).json({
    status: false,
    error: 'Internal server error'
  })
})

app.listen(PORT, '0.0.0.0', () => {
  console.log(`🚀 Backend API running on http://localhost:${PORT}`)
  console.log(`📡 Login: http://localhost:${PORT}/api/orderkuota/login?username=xxx&password=xxx`)
})
