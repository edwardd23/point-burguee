"""Prepara _site com URL pública real, sem dependências externas.

O workflow executa automaticamente. Para outra hospedagem:
SITE_URL=https://seu-dominio python3 preparar-publicacao.py
"""
from pathlib import Path
import os
import shutil
import html
import json
from urllib.parse import urlparse

root = Path(__file__).resolve().parent
url = os.environ.get('SITE_URL', '').rstrip('/') + '/'
if urlparse(url).scheme != 'https' or not urlparse(url).netloc:
    raise SystemExit('Defina SITE_URL com a URL HTTPS pública antes de preparar a publicação.')
out = root / '_site'
out.mkdir(exist_ok=True)
for name in ['index.html', 'style.css', 'script.js', '.nojekyll']:
    shutil.copy2(root / name, out / name)
shutil.copytree(root / 'assets', out / 'assets', dirs_exist_ok=True)
page = (out / 'index.html').read_text(encoding='utf-8')
page = page.replace('content="./assets/images/social.jpg"', 'content="'+html.escape(url+'assets/images/social.jpg', quote=True)+'"')
page = page.replace('</head>', '<link rel="canonical" href="'+html.escape(url, quote=True)+'">\n<meta property="og:url" content="'+html.escape(url, quote=True)+'">\n</head>')
(out / 'index.html').write_text(page, encoding='utf-8')
(out / 'sitemap.xml').write_text('<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"><url><loc>'+html.escape(url)+'</loc></url></urlset>', encoding='utf-8')
(out / 'robots.txt').write_text('User-agent: *\nAllow: /\nSitemap: '+url+'sitemap.xml\n', encoding='utf-8')
print('Site pronto em _site. URL: '+url)
