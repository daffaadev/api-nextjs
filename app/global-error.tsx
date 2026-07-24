'use client'

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <html>
      <body>
        <div className="min-h-screen flex items-center justify-center bg-red-50">
          <div className="text-center p-8 bg-white rounded-lg shadow-lg max-w-md border-2 border-red-500">
            <h1 className="text-6xl font-bold text-red-600 mb-4">💥</h1>
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">Global Error</h2>
            <p className="text-gray-600 mb-6">{error.message || 'Terjadi kesalahan fatal.'}</p>
            <button
              onClick={reset}
              className="inline-block bg-red-500 text-white px-6 py-2 rounded-lg hover:bg-red-600 transition"
            >
              Coba Lagi
            </button>
          </div>
        </div>
      </body>
    </html>
  )
}
