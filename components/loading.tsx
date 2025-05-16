export default function Loading() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-[#F0F0F0] dark:bg-[#111111]">
      <div className="relative w-20 h-20">
        <div className="absolute top-0 left-0 w-full h-full border-4 border-[#BD1010] opacity-30"></div>
        <div className="absolute top-0 left-0 w-full h-full border-4 border-transparent border-t-[#BD1010] animate-spin"></div>
      </div>
    </div>
  )
}
