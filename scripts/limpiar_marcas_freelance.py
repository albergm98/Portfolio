"""Genera logos blancos sobre transparente para la cinta oscura."""

from pathlib import Path

import numpy as np
from PIL import Image

BASE = Path(__file__).resolve().parents[1] / 'public' / 'assets' / 'img' / 'marcas'


def guardar(arr: np.ndarray, destino: Path) -> None:
  Image.fromarray(arr.astype(np.uint8), 'RGBA').save(destino)
  print(f'OK {destino.name} {arr.shape[1]}x{arr.shape[0]}')


def el_bule() -> None:
  """Blanco sobre negro → blanco sobre transparente (gris del triángulo a blanco)."""
  arr = np.array(Image.open(BASE / 'elbule.png').convert('RGBA'), dtype=np.float32)
  r, g, b, a = arr[:, :, 0], arr[:, :, 1], arr[:, :, 2], arr[:, :, 3]
  lum = 0.299 * r + 0.587 * g + 0.114 * b
  # Contenido = lo que no es negro
  fuerza = np.clip((lum - 25) / 200, 0, 1) * (a / 255)
  out = np.zeros_like(arr)
  out[:, :, 0:3] = 255
  out[:, :, 3] = np.clip(fuerza * 255, 0, 255)
  guardar(out, BASE / 'elbule.png')


def carta_digitalizada() -> None:
  """Naranja/blanco sobre negro → blanco sobre transparente."""
  arr = np.array(
    Image.open(BASE / 'cartadigitalizada.png').convert('RGBA'), dtype=np.float32
  )
  r, g, b, a = arr[:, :, 0], arr[:, :, 1], arr[:, :, 2], arr[:, :, 3]
  lum = 0.299 * r + 0.587 * g + 0.114 * b
  # Cualquier pixel con color o brillo cuenta como tinta
  saturacion = np.maximum(np.maximum(r, g), b) - np.minimum(np.minimum(r, g), b)
  fuerza = np.clip(np.maximum(lum / 180, saturacion / 120), 0, 1) * (a / 255)
  # Suaviza bordes muy oscuros
  fuerza = np.where(lum < 18, 0, fuerza)
  out = np.zeros_like(arr)
  out[:, :, 0:3] = 255
  out[:, :, 3] = np.clip(fuerza * 255, 0, 255)
  guardar(out, BASE / 'cartadigitalizada.png')


def mistral() -> None:
  """Quita el azul/cyan; deja iconos y aro en blanco limpio."""
  arr = np.array(Image.open(BASE / 'cliente-m.png').convert('RGBA'), dtype=np.float32)
  r, g, b, a = arr[:, :, 0], arr[:, :, 1], arr[:, :, 2], arr[:, :, 3]
  lum = 0.299 * r + 0.587 * g + 0.114 * b
  # Cyan/azul claro del fondo irregular
  es_cian = (b > 140) & (g > 120) & (r < 200) & (b >= r - 10)
  # Tinta: M, herradura, corona, aro (oscuros o gris del anillo)
  es_tinta = (a > 20) & (~es_cian) & (lum < 160)
  # Aro gris más claro
  es_aro = (a > 20) & (~es_cian) & (lum >= 90) & (lum < 200) & (
    np.abs(r - g) < 40
  ) & (np.abs(g - b) < 40)

  mascara = es_tinta | es_aro
  # Intensidad: más opaco cuanto más oscuro (tinta) o medio (aro)
  fuerza = np.zeros_like(lum)
  fuerza = np.where(mascara & (lum < 90), 1.0, fuerza)
  fuerza = np.where(mascara & (lum >= 90), np.clip((200 - lum) / 80, 0.35, 0.95), fuerza)
  fuerza *= a / 255

  out = np.zeros_like(arr)
  out[:, :, 0:3] = 255
  out[:, :, 3] = np.clip(fuerza * 255, 0, 255)

  # Recorta al contenido con un poco de margen
  ys, xs = np.where(out[:, :, 3] > 8)
  if len(xs) > 0:
    pad = 8
    y0, y1 = max(0, ys.min() - pad), min(out.shape[0], ys.max() + pad + 1)
    x0, x1 = max(0, xs.min() - pad), min(out.shape[1], xs.max() + pad + 1)
    out = out[y0:y1, x0:x1]

  guardar(out, BASE / 'cliente-m.png')


if __name__ == '__main__':
  el_bule()
  carta_digitalizada()
  mistral()
