from PIL import Image
import os

img = Image.open('reference.png')
w, h = img.size
print(f"Image dimensions: {w}x{h}")

# 1. Logo
# In reference: top left around x: 140..360, y: 46..100
logo = img.crop((140, 46, 360, 102))
logo.save('public/images/logo.png')

# 2. Hero banner right side (model in purple Banarasi saree)
# Top of hero: y=118, bottom: y=510
# Full width hero model: from x=540 to x=1536, y=118 to y=510
hero_model = img.crop((540, 118, 1536, 510))
hero_model.save('public/images/hero/hero-slide-1.png')

# 3. Collection cards
# In reference, cards are positioned around y=640 to y=770
# Let's inspect card x-coordinates:
# There are 5 cards evenly spaced across width
# Total width = 1536
# Left margin is around 80px, right margin 80px
# Card width around 260px, gap around 18px
# Let's crop each card image precisely:
# Card 1 (Banarasi): Emerald green
card1 = img.crop((84, 652, 342, 773))
card1.save('public/images/collections/banarasi-saree.png')

# Card 2 (Kora): Magenta/pink
card2 = img.crop((370, 652, 626, 773))
card2.save('public/images/collections/kora-saree.png')

# Card 3 (Handloom): Black with gold
card3 = img.crop((654, 652, 910, 773))
card3.save('public/images/collections/handloom-saree.png')

# Card 4 (Festive): Yellow with gold
card4 = img.crop((936, 652, 1194, 773))
card4.save('public/images/collections/festive-collection.png')

# Card 5 (New Arrivals): Purple with temple border
card5 = img.crop((1220, 652, 1476, 773))
card5.save('public/images/collections/new-arrivals.png')

# 4. Craft section image (left side loom and hands)
# In reference: y=865 to 1024, x=12 to 740
craft_img = img.crop((12, 865, 740, 1024))
craft_img.save('public/images/craft/weaving-loom.png')

print("Base reference assets successfully extracted!")
