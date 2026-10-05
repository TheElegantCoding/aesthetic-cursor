pkgname=aesthetic-cursor
pkgver=0.0.1
pkgrel=1
pkgdesc="📦️ A minimal, clean, and modern cursor theme designed to bring a touch of elegance and style to your Linux desktop"
arch=('any')
url="https://github.com/TheElegantCoding/aesthetic-cursor"
license=('MIT')
source=("aesthetic-cursor.tar.gz")
sha256sums=('SKIP')

package() {
  install -d "$pkgdir/usr/share/icons/aesthetic-cursor"
  cp -r "$srcdir/cursors" "$pkgdir/usr/share/icons/aesthetic-cursor/"
  install -Dm644 "$srcdir/index.theme" "$pkgdir/usr/share/icons/aesthetic-cursor/index.theme"
}