'use client'

import Link from 'next/link'

export default function GlobalNotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center p-8 bg-white rounded-lg shadow-lg max-w-md">
        <h1 className="text-7xl font-bold text-red-500 mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">Halaman Tidak Ditemukan</h2>
        <p className="text-gray-600 mb-6">Halaman yang Anda cari tidak tersedia atau telah dipindahkan.</p>
        <Link href="/" className="inline-block bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition">
          Kembali ke Beranda
        </Link>
      </div>
    </div>
  )
}
