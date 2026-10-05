# Risee's settings window: the screenshot keeps the wallpaper in its rounded corners.
# Mask the corners (with the window's 1px edge) to transparency, so the page's own rounding matches.
from PIL import Image, ImageDraw
src, out, r = 'public/Assets/Works/Risee/settings.png', 'public/media/works/risee/settings.webp', 18
im = Image.open(src).convert('RGBA')
s = 4  # draw the mask large, then shrink it, for a smooth edge
mask = Image.new('L', (im.width * s, im.height * s), 0)
ImageDraw.Draw(mask).rounded_rectangle((s, s, im.width * s - s - 1, im.height * s - s - 1), radius=r * s, fill=255)
im.putalpha(mask.resize(im.size, Image.LANCZOS))
im.save(out, 'WEBP', quality=82, method=6)
