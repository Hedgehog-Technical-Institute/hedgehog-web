const HeroVideo = () => {
  return (
    <video
      autoPlay
      loop
      muted
      playsInline
      disablePictureInPicture
      className="absolute top-0 bottom-0 left-0 object-cover w-full h-full pointer-events-none z-0"
    >
      <source src="/assets/hero.webm" type="video/webm" />
      Your browser does not support the video tag.
    </video>
  )
}

export default HeroVideo;