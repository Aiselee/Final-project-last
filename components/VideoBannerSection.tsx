'use client'

export default function VideoBannerSection() {
  return (
    <section className="w-full overflow-hidden bg-black">
      <video
        src="/pics/video.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="w-full h-auto object-cover"
      />
    </section>
  )
}
