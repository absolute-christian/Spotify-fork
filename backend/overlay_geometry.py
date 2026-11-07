"""Window bounds follow the dimensions in the original Dotify overlay renderer."""
def overlay_bounds(settings, screen):
    mode = settings.get('mode', 'disabled')
    x, y, sw, sh = screen
    if mode == 'fullscreen':
        return x, y, sw, sh
    position = settings.get('position', 'top-right')
    if mode == 'docked':
        edge = position.split('-')[0] if position in {'left-center', 'right-center'} else 'bottom' if position.startswith('bottom') else 'top'
        position = edge + '-center'
    vertical = position in {'left-center', 'right-center'}
    corner = position in {'top-left', 'top-right', 'bottom-left', 'bottom-right'}
    if mode == 'card':
        width, height = 320, 136
    elif mode == 'docked':
        width, height = (80, 200) if vertical else (settings.get('w', 340), settings.get('h', 58))
    elif vertical:
        width, height = 96, 240
    elif corner:
        width, height = 200, 80
    else:
        width, height = settings.get('w', 340), settings.get('h', 58)
    scale = min(1.5, max(.5, float(settings.get('size', 100)) / 100))
    width, height = min(sw, round((width + 32) * scale)), min(sh, round((height + 32) * scale))
    margin = 0 if mode == 'docked' else 16
    left = x + (margin if position.endswith('left') or position.startswith('left') else sw-width-margin if position.endswith('right') or position.startswith('right') else (sw-width)//2)
    top = y + (margin if position.startswith('top') else sh-height-margin if position.startswith('bottom') else (sh-height)//2)
    return max(x, left), max(y, top), width, height
