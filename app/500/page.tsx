export default function ServerError() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center p-8 bg-white rounded-lg shadow-lg max-w-md">
        <h1 className="text-6xl font-bold text-red-600 mb-4">500</h1>
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">Server Error</h2>
        <p className="text-gray-600 mb-6">Terjadi kesalahan pada server. Silakan coba lagi nanti.</p>
        <a href="/" className="inline-block bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition">
          Kembali ke Beranda
        </a>
      </div>
    </div>
  )
}
