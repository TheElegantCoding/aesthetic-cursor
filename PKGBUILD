pkgname=aesthetic-cursor
pkgver=0.0.1
pkgrel=1
pkgdesc="📦️ Aesthetic cursor theme"
arch=('any')
url="https://github.com/TheElegantCoding/aesthetic-cursor"
license=('MIT')
depends=('xorg-xcursorgen')

package() {
  install -d "$pkgdir/usr/share/icons/aesthetic-cursor/cursors"
  cp -r "$startdir/dist/cursors/"* "$pkgdir/usr/share/icons/aesthetic-cursor/cursors/"
  install -Dm644 "$startdir/index.theme" "$pkgdir/usr/share/icons/aesthetic-cursor/index.theme"
}