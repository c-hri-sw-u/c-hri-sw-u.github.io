# Builds public/media/works/piko/inside.webp: the iterations sheet (17.webp) with the exploded skeleton set on its right.
from PIL import Image
src = 'public/Assets/Works/Piko/'
sheet = Image.open(src + '17.webp').convert('RGB')
part = Image.open(src + 'skeleton-exploded.png').convert('RGBA')
h = round(sheet.height * .9)
part = part.resize((round(part.width * h / part.height), h), Image.LANCZOS)
gap = 60
out = Image.new('RGB', (sheet.width + part.width + gap * 2, sheet.height), 'black')
out.paste(sheet, (0, 0))
out.paste(part, (sheet.width + gap, (sheet.height - h) // 2), part)
out.thumbnail((1600, 1600), Image.LANCZOS)
out.save('public/media/works/piko/inside.webp', quality=80)
