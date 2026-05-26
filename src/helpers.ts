export function preloadImages(urls: string[]): void {
  urls.forEach(preloadImage)
}

function preloadImage(url: string): void {
  const img = new Image()
  img.src = url
}
