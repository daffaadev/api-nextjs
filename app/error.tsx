'use client'

import { useEffect } from 'react'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center p-8 bg-white rounded-lg shadow-lg max-w-md">
        <h1 className="text-6xl font-bold text-red-600 mb-4">⚠️</h1>
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">Terjadi Kesalahan</h2>
        <p className="text-gray-600 mb-6">{error.message || 'Terjadi kesalahan tak terduga.'}</p>
        <button
          onClick={reset}
          className="inline-block bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition"
        >
          Coba Lagi
        </button>
      </div>
    </div>
  )
}
