export default function Logo({ size = 32, className = '' }) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Nexora Softworks"
      role="img"
    >
      {/* Circular background */}
      <circle cx="50" cy="50" r="48" fill="#ffffff" />

      {/* --- Letter N, built from 3 folded ribbon pieces --- */}

      {/* Left vertical bar — dark navy */}
      <path
        d="M26 22 L38 22 L38 78 L26 78 Z"
        fill="#0a1f44"
      />

      {/* Diagonal from top-left down to bottom-right — bright blue */}
      <path
        d="M26 22 L38 22 L74 62 L74 78 L62 78 L26 38 Z"
        fill="#1e6fe8"
      />

      {/* Inner fold at the top of the diagonal — darker overlay for depth */}
      <path
        d="M38 22 L50 22 L62 36 L50 36 Z"
        fill="#0a1f44"
      />

      {/* Right vertical bar — bright blue */}
      <path
        d="M62 22 L74 22 L74 78 L62 78 Z"
        fill="#1e6fe8"
      />

      {/* Cyan accent where the diagonal meets the right bar */}
      <path
        d="M50 40 L62 52 L62 62 L50 50 Z"
        fill="#3ddbd9"
      />
    </svg>
  )
}