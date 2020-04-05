from PIL import Image
import os

BASE_ROOT_PATH = 'assets\\base'
TARGET_ROOT_PATH = 'assets\\target'
BG = (255, 255, 255, 0)
BASE_COLOR = (255, 0, 0, 255)
BORDER_COLOR = (255, 0, 255, 255)
SCALE = 8
TARGET_COLORS = {
    'red': (255, 0, 0, 255),
    'green': (0, 255, 0, 255),
    'blue': (0, 0, 255, 255),
    'yellow': (255, 255, 0, 255),
    'orange': (255, 125, 0, 255),
    'teal': (0, 255, 255, 255),
    'pink': (255, 0, 255, 255),
    'purple': (125, 0, 255, 255),
    'white': (250, 250, 250, 255),
    'black': (40, 40, 40, 255),
}



for filename in os.listdir(BASE_ROOT_PATH):
    if(filename.endswith('.png')):

        print(f'===== Converting \"{filename}\" ... =====')
        
        img = Image.open(f'{BASE_ROOT_PATH}\\{filename}')
        pix = img.load()
        width, height = img.size

        targets = []
        for k in TARGET_COLORS:
            t = {}
            t['name'] = k
            t['color'] = TARGET_COLORS[k]
            t['img'] = Image.new('RGBA', (width * SCALE, height * SCALE))
            t['pix'] = t['img'].load()
            targets.append(t)

        for x in range(width):
            for y in range(height):

                col = pix[x, y][0:3]

                for t in targets:

                    target_col = None
                    if(col == BG[0:3] or col == BORDER_COLOR[0:3]):
                        target_col = BG
                    elif(col == BASE_COLOR[0:3]):
                        target_col = t['color']
                    else:
                        target_col = pix[x, y]
        
                    for xi in range(SCALE):
                        for yi in range(SCALE):
                            t['pix'][x * SCALE + xi, y * SCALE + yi] = target_col

        for t in targets:
            t_name = filename.replace('.png', f'.{t["name"]}.png')
            t['img'].save(f'{TARGET_ROOT_PATH}\\{t_name}')




