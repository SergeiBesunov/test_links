const emailVerifyDeepLink = 'linkpay://app/email-verify?code=998491'
const oauth2DeepLink = 'linkpay://app/login?cookie=99999999'

const fallbackUrl = 'https://linkpay.io/'

function openDeepLink(deepLink, options = {}) {
  const { fallbackUrl, timeout = 1500 } = options
  let didHide = false

  const cleanup = () => {
    document.removeEventListener('visibilitychange', onVisibility)
    clearTimeout(t)
  }

  const onVisibility = () => {
    if (document.hidden) {
      didHide = true
      cleanup()
    }
  }

  document.addEventListener('visibilitychange', onVisibility)
  const t = setTimeout(() => {
    cleanup()
    if (!didHide) {
      if (fallbackUrl) {
        window.location.href = fallbackUrl
      }
    }
  }, timeout)

  window.location.href = deepLink
}

const btn1 = document.getElementById('btn-1')
if (btn1) {
  btn1.addEventListener('click', () => {
    openDeepLink(emailVerifyDeepLink, {
      fallbackUrl: fallbackUrl,
      timeout: 1500,
    })
  })
}

const btn2 = document.getElementById('btn-2')
if (btn2) {
  btn2.addEventListener('click', () => {
    openDeepLink(oauth2DeepLink, {
      fallbackUrl: fallbackUrl,
      timeout: 1500,
    })
  })
}
