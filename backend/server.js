const express = require('express')
const cors = require('cors')
const fs = require('fs')
const path = require('path')

const app = express()
const PORT = process.env.PORT || 5000

// Middleware
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Auto Load Routes
const routesPath = path.join(__dirname, 'routes')
const routes = []

const routeFiles = fs.readdirSync(routesPath).filter(file => file.endsWith('.js'))

routeFiles.forEach(file => {
  const route = require(`./routes/${file}`)
  app.use('/', route)
  console.log(`✅ Loaded: ${file}`)
  
  // Collect routes for display
  if (route.stack) {
    route.stack.forEach(layer => {
      if (layer.route) {
        const methods = Object.keys(layer.route.methods).join(', ').toUpperCase()
        const path = layer.route.path
        routes.push({
          file: file,
          method: methods,
          path: path
        })
      }
    })
  }
})

// Home - List all routes
app.get('/', (req, res) => {
  const grouped = {}
  routes.forEach(r => {
    if (!grouped[r.file]) grouped[r.file] = []
    grouped[r.file].push({ method: r.method, path: r.path })
  })
  res.json({
    status: true,
    total: routes.length,
    endpoints: grouped
  })
})

// 404
app.use((req, res) => {
  res.status(404).json({ status: false, error: 'Endpoint not found' })
})

// Error handler
app.use((err, req, res, next) => {
  console.error(err.stack)
  res.status(500).json({ status: false, error: err.message })
})

// Start
app.listen(PORT, '0.0.0.0', () => {
  console.log('\n' + '='.repeat(50))
  console.log('🚀 API Server Running')
  console.log('='.repeat(50))
  console.log(`📡 URL: http://localhost:${PORT}\n`)
  console.log('📋 Routes:')
  console.log('-'.repeat(50))
  routes.forEach(r => {
    console.log(`  ${r.method.padEnd(6)} ${r.path}`)
  })
  console.log('-'.repeat(50))
  console.log(`✅ Total: ${routes.length} endpoints\n`)
  console.log('='.repeat(50))
})

