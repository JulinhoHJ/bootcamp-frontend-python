const textarea = document.querySelector('textarea')
const counters = document.querySelectorAll('.text-3xl')

textarea.addEventListener('input', function(event) {
  const { value } = event.target
  const words = value.trim().split(/\s+/).filter(Boolean)
  const paragraphs = value.trim().split(/\n+/).filter(Boolean)
  counters[1].innerText = value.length
  counters[2].innerText = words.length
  counters[3].innerText = paragraphs.length
})