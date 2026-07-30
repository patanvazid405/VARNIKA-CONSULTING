"""
Generates the site's maritime artwork: night container-terminal scenes with the
cyan digital-network overlay from the client's reference image.

Run from the project root:   python tools/generate-artwork.py

Output is deterministic per variant, so re-running produces identical files.
Every hero and insight thumbnail is a stand-in for real photography - see
images/README.md for the drop-in filenames.
"""
import math
import os
import random

CY = "#5ec8f5"     # network cyan
CY2 = "#8fe6ff"    # node highlight
RUST = "#c2571f"   # gantry crane orange
WARM = "#ffcf9a"   # dock and window light

OUT = os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(__file__))), "images")


def scene(seed, w=1600, h=800, ships=2, cranes=4, mesh=90, glyphs=6,
          horizon=0.58, city=True, warmth=1.0, vignette="left"):
    r = random.Random(seed)
    P = []
    a = P.append
    H = int(h * horizon)

    a('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 %d %d" '
      'preserveAspectRatio="xMidYMid slice" role="img" '
      'aria-label="Night container terminal with cranes, vessels and a data network overlay">'
      % (w, h))

    # ---------------- gradients ----------------
    a("<defs>")
    a('<linearGradient id="sky" x1="0" y1="0" x2="0" y2="1">'
      '<stop offset="0" stop-color="#04101f"/><stop offset=".42" stop-color="#0a2145"/>'
      '<stop offset=".78" stop-color="#123f6e"/><stop offset="1" stop-color="#1b5488"/>'
      "</linearGradient>")
    a('<linearGradient id="water" x1="0" y1="0" x2="0" y2="1">'
      '<stop offset="0" stop-color="#14446e"/><stop offset=".3" stop-color="#0a2440"/>'
      '<stop offset="1" stop-color="#03101f"/></linearGradient>')
    a('<radialGradient id="lamp" cx=".5" cy=".5" r=".5">'
      '<stop offset="0" stop-color="%s" stop-opacity=".9"/>'
      '<stop offset=".4" stop-color="#e8843c" stop-opacity=".3"/>'
      '<stop offset="1" stop-color="#e8622c" stop-opacity="0"/></radialGradient>' % WARM)
    a('<radialGradient id="node" cx=".5" cy=".5" r=".5">'
      '<stop offset="0" stop-color="%s" stop-opacity=".95"/>'
      '<stop offset=".35" stop-color="%s" stop-opacity=".45"/>'
      '<stop offset="1" stop-color="%s" stop-opacity="0"/></radialGradient>' % (CY2, CY, CY))
    a('<radialGradient id="cityglow" cx=".5" cy="1" r=".8">'
      '<stop offset="0" stop-color="#3f86c8" stop-opacity=".5"/>'
      '<stop offset="1" stop-color="#3f86c8" stop-opacity="0"/></radialGradient>')
    if vignette == "left":
        stops = ('<stop offset="0" stop-color="#040e1c" stop-opacity=".95"/>'
                 '<stop offset=".34" stop-color="#061527" stop-opacity=".66"/>'
                 '<stop offset=".64" stop-color="#071730" stop-opacity=".16"/>'
                 '<stop offset="1" stop-color="#071730" stop-opacity=".4"/>')
    else:
        stops = ('<stop offset="0" stop-color="#040e1c" stop-opacity=".62"/>'
                 '<stop offset=".5" stop-color="#061527" stop-opacity=".3"/>'
                 '<stop offset="1" stop-color="#040e1c" stop-opacity=".62"/>')
    a('<linearGradient id="vig" x1="0" y1="0" x2="1" y2="0">%s</linearGradient>' % stops)
    a("</defs>")

    # ---------------- sky, cloud banding, stars, city glow ----------------
    a('<rect width="%d" height="%d" fill="url(#sky)"/>' % (w, h))
    for _ in range(7):
        a('<ellipse cx="%.0f" cy="%.0f" rx="%.0f" ry="%.0f" fill="#2a5f9c" opacity="%.2f"/>'
          % (r.uniform(0, w), r.uniform(20, H * .55),
             r.uniform(180, 420), r.uniform(18, 46), r.uniform(.05, .13)))
    for _ in range(70):
        a('<circle cx="%.0f" cy="%.0f" r="%.1f" fill="#cfe0f5" opacity="%.2f"/>'
          % (r.uniform(0, w), r.uniform(0, H * .6), r.uniform(.6, 1.4), r.uniform(.1, .42)))
    a('<ellipse cx="%.0f" cy="%d" rx="%.0f" ry="%.0f" fill="url(#cityglow)"/>'
      % (w * .6, H, w * .5, h * .28))

    # ---------------- distant city ----------------
    if city:
        x = w * 0.42
        while x < w + 60:
            bw, bh = r.uniform(24, 60), r.uniform(40, 150)
            a('<rect x="%.0f" y="%.0f" width="%.0f" height="%.0f" fill="#0a2039"/>'
              % (x, H - bh, bw, bh))
            for row in range(int(bh // 16)):
                for col in range(int(bw // 13)):
                    if r.random() < .32:
                        a('<rect x="%.0f" y="%.0f" width="3.5" height="4.5" fill="%s" opacity="%.2f"/>'
                          % (x + 4 + col * 13, H - bh + 7 + row * 16, WARM,
                             min(.95, r.uniform(.25, .75) * warmth)))
            x += bw + r.uniform(5, 14)

    # ---------------- gantry cranes ----------------
    def crane(cx, s, body, lit):
        g = []
        top, boom = H - 248 * s, H - 196 * s
        g.append('<path d="M%.0f %d L%.0f %.0f L%.0f %.0f L%.0f %d" fill="none" stroke="%s" stroke-width="%.1f"/>'
                 % (cx - 88 * s, H, cx - 88 * s, boom, cx + 92 * s, boom, cx + 92 * s, H, body, 7 * s))
        g.append('<path d="M%.0f %d V%.0f M%.0f %d V%.0f" stroke="%s" stroke-width="%.1f"/>'
                 % (cx - 60 * s, H, boom, cx + 64 * s, H, boom, body, 4.5 * s))
        g.append('<path d="M%.0f %.0f L%.0f %.0f L%.0f %.0f" fill="none" stroke="%s" stroke-width="%.1f"/>'
                 % (cx - 28 * s, boom, cx, top, cx + 32 * s, boom, body, 6 * s))
        g.append('<path d="M%.0f %.0f H%.0f" stroke="%s" stroke-width="%.1f"/>'
                 % (cx - 182 * s, boom - 15 * s, cx + 116 * s, body, 8 * s))
        g.append('<path d="M%.0f %.0f L%.0f %.0f M%.0f %.0f L%.0f %.0f" stroke="%s" stroke-width="%.1f" opacity=".8"/>'
                 % (cx, top, cx - 182 * s, boom - 15 * s, cx, top, cx + 116 * s, boom - 15 * s, body, 2.6 * s))
        g.append('<rect x="%.0f" y="%.0f" width="%.0f" height="%.0f" fill="%s"/>'
                 % (cx - 114 * s, boom - 13 * s, 20 * s, 10 * s, body))
        g.append('<path d="M%.0f %.0f V%.0f" stroke="%s" stroke-width="%.1f"/>'
                 % (cx - 104 * s, boom - 3 * s, boom + 38 * s, body, 1.8 * s))
        g.append('<circle cx="%.0f" cy="%.0f" r="%.1f" fill="%s"/>' % (cx, top, 3 * s, lit))
        g.append('<circle cx="%.0f" cy="%.0f" r="%.1f" fill="%s"/>'
                 % (cx - 182 * s, boom - 15 * s, 2.4 * s, lit))
        return "".join(g)

    a('<g opacity=".45">')
    for i in range(max(0, cranes - 2)):
        a(crane(w * (0.78 + i * 0.11), 0.34, "#0f3358", "#e8843c"))
    a("</g>")

    # ---------------- vessels ----------------
    pal = ["#17395f", "#1d4a78", "#8c4a2c", "#215a8e", "#123055", "#a3552f", "#1a4370", "#2a6a9e"]

    def vessel(x0, x1, deck, sc):
        g = []
        hb = H - 4
        g.append('<path d="M%.0f %.0f L%.0f %.0f L%.0f %.0f L%.0f %.0f '
                 'Q%.0f %.0f %.0f %.0f L%.0f %.0f Q%.0f %.0f %.0f %.0f Z" fill="#081a30"/>'
                 % (x0 - 38 * sc, hb - 6, x0, deck, x1, deck, x1 + 8 * sc, hb - 26,
                    x1 - 24 * sc, hb, x1 - 70 * sc, hb, x0 + 58 * sc, hb,
                    x0 + 6 * sc, hb, x0 - 38 * sc, hb - 6))
        g.append('<path d="M%.0f %.0f H%.0f V%.0f H%.0f Z" fill="#12325a"/>'
                 % (x0, deck, x1, deck + 16 * sc, x0))
        g.append('<path d="M%.0f %.0f H%.0f" stroke="#e8622c" stroke-width="%.1f" opacity=".45"/>'
                 % (x0 + 6, deck + 30 * sc, x1 - 6, 2.2 * sc))
        cx = x0 + 10
        while cx < x1 - 90 * sc:
            for row in range(r.randint(3, 5)):
                y = deck - 22 * sc - row * 20 * sc
                g.append('<rect x="%.0f" y="%.0f" width="%.0f" height="%.0f" rx="1.4" fill="%s"/>'
                         % (cx, y, 36 * sc, 17 * sc, r.choice(pal)))
                g.append('<rect x="%.0f" y="%.0f" width="%.0f" height="3.4" rx="1.4" fill="#fff" opacity=".07"/>'
                         % (cx, y, 36 * sc))
            cx += 40 * sc
        sx = x1 - 84 * sc
        g.append('<rect x="%.0f" y="%.0f" width="%.0f" height="%.0f" rx="3" fill="#143156"/>'
                 % (sx, deck - 108 * sc, 80 * sc, 108 * sc))
        for row in range(4):
            for col in range(5):
                if r.random() < .68:
                    g.append('<rect x="%.0f" y="%.0f" width="%.0f" height="%.0f" fill="%s" opacity="%.2f"/>'
                             % (sx + 8 * sc + col * 14 * sc, deck - 96 * sc + row * 22 * sc,
                                9 * sc, 6 * sc, WARM, min(.95, r.uniform(.35, .9) * warmth)))
        g.append('<rect x="%.0f" y="%.0f" width="%.0f" height="%.0f" fill="#143156"/>'
                 % (sx + 30 * sc, deck - 142 * sc, 10 * sc, 36 * sc))
        g.append('<circle cx="%.0f" cy="%.0f" r="%.1f" fill="#e8622c"/>'
                 % (sx + 35 * sc, deck - 144 * sc, 3.4 * sc))
        return "".join(g)

    if ships >= 1:
        a(vessel(w * 0.30, w * 0.80, H - 46, 0.62))
    if ships >= 2:
        a('<g opacity=".62">')
        a(vessel(w * 0.02, w * 0.26, H - 26, 0.40))
        a("</g>")

    # Right third only, and small: the left of the frame stays clear for copy.
    for i in range(min(cranes, 2)):
        a(crane(w * (0.66 + i * 0.21), 0.52, RUST, WARM))

    for i in range(6):
        a('<circle cx="%.0f" cy="%d" r="78" fill="url(#lamp)" opacity="%.2f"/>'
          % (w * (0.16 + i * 0.15), H - 150, min(.9, .45 * warmth)))

    # ---------------- water ----------------
    a('<rect y="%d" width="%d" height="%d" fill="url(#water)"/>' % (H, w, h - H))
    a('<rect y="%d" width="%d" height="2.6" fill="#3c7fbe" opacity=".5"/>' % (H, w))
    for i in range(7):
        gx = w * (0.12 + i * 0.14)
        col = WARM if i % 2 else "#e8843c"
        a('<rect x="%.0f" y="%d" width="18" height="%d" fill="%s" opacity=".13"/>' % (gx - 9, H, h - H, col))
        a('<rect x="%.0f" y="%d" width="6" height="%d" fill="%s" opacity=".2"/>' % (gx - 3, H, h - H, col))
    for _ in range(110):
        y = r.uniform(H + 5, h)
        ln = r.uniform(20, 130) * (1 + (y - H) / 200)
        a('<rect x="%.0f" y="%.0f" width="%.0f" height="%.1f" fill="#7fb2e0" opacity="%.2f"/>'
          % (r.uniform(0, w), y, ln, r.uniform(1, 2.3), r.uniform(.04, .13)))

    # ---------------- digital network overlay ----------------
    pts = [(r.uniform(0, w), r.uniform(h * 0.32, h * 0.99)) for _ in range(mesh)]
    reach = w * 0.11
    a('<g stroke="%s" fill="none" stroke-width="1">' % CY)
    for i, (ax, ay) in enumerate(pts):
        for bx, by in pts[i + 1:]:
            d = math.hypot(ax - bx, ay - by)
            if d < reach:
                a('<line x1="%.0f" y1="%.0f" x2="%.0f" y2="%.0f" opacity="%.2f"/>'
                  % (ax, ay, bx, by, max(.07, .44 * (1 - d / reach))))
    a("</g>")
    for px, py in pts:
        if r.random() < .55:
            a('<circle cx="%.0f" cy="%.0f" r="%.0f" fill="url(#node)" opacity="%.2f"/>'
              % (px, py, r.uniform(8, 17), r.uniform(.38, .8)))
        a('<circle cx="%.0f" cy="%.0f" r="%.1f" fill="%s" opacity="%.2f"/>'
          % (px, py, r.uniform(1.4, 2.8), CY2, r.uniform(.5, .95)))

    # ---------------- translucent data glyphs ----------------
    def glyph(kind, gx, gy, s):
        o = ('stroke="%s" fill="none" stroke-width="%.1f" opacity=".34" '
             'stroke-linecap="round" stroke-linejoin="round"' % (CY2, 2.2 * s))
        if kind == "bars":
            return ('<g %s><path d="M%.0f %.0f h%.0f"/><path d="M%.0f %.0f v%.0f"/>'
                    '<path d="M%.0f %.0f v%.0f"/><path d="M%.0f %.0f v%.0f"/>'
                    '<path d="M%.0f %.0f v%.0f"/></g>'
                    % (o, gx, gy, 54 * s, gx + 8 * s, gy, -16 * s, gx + 22 * s, gy, -30 * s,
                       gx + 36 * s, gy, -22 * s, gx + 50 * s, gy, -40 * s))
        if kind == "line":
            return ('<g %s><path d="M%.0f %.0f v%.0f M%.0f %.0f h%.0f"/>'
                    '<path d="M%.0f %.0f l%.0f %.0f l%.0f %.0f l%.0f %.0f"/></g>'
                    % (o, gx, gy, -42 * s, gx, gy, 58 * s,
                       gx + 8 * s, gy - 14 * s, 14 * s, -16 * s, 12 * s, 9 * s, 18 * s, -22 * s))
        if kind == "chip":
            return ('<g %s><rect x="%.0f" y="%.0f" width="%.0f" height="%.0f" rx="%.0f"/>'
                    '<rect x="%.0f" y="%.0f" width="%.0f" height="%.0f"/>'
                    '<path d="M%.0f %.0f v%.0f M%.0f %.0f v%.0f M%.0f %.0f v%.0f '
                    'M%.0f %.0f v%.0f M%.0f %.0f v%.0f M%.0f %.0f v%.0f"/></g>'
                    % (o, gx, gy - 34 * s, 40 * s, 34 * s, 4 * s,
                       gx + 11 * s, gy - 23 * s, 18 * s, 13 * s,
                       gx + 8 * s, gy - 34 * s, -8 * s, gx + 20 * s, gy - 34 * s, -8 * s,
                       gx + 32 * s, gy - 34 * s, -8 * s, gx + 8 * s, gy, 8 * s,
                       gx + 20 * s, gy, 8 * s, gx + 32 * s, gy, 8 * s))
        if kind == "net":
            return ('<g %s><circle cx="%.0f" cy="%.0f" r="%.0f"/><circle cx="%.0f" cy="%.0f" r="%.0f"/>'
                    '<circle cx="%.0f" cy="%.0f" r="%.0f"/>'
                    '<path d="M%.0f %.0f L%.0f %.0f M%.0f %.0f L%.0f %.0f M%.0f %.0f H%.0f"/></g>'
                    % (o, gx + 20 * s, gy - 30 * s, 6 * s, gx, gy, 6 * s, gx + 40 * s, gy, 6 * s,
                       gx + 17 * s, gy - 25 * s, gx + 3 * s, gy - 5 * s,
                       gx + 23 * s, gy - 25 * s, gx + 37 * s, gy - 5 * s,
                       gx + 6 * s, gy, gx + 34 * s))
        return ('<g %s><circle cx="%.0f" cy="%.0f" r="%.0f"/><circle cx="%.0f" cy="%.0f" r="%.0f"/></g>'
                % (o, gx + 18 * s, gy - 18 * s, 16 * s, gx + 18 * s, gy - 18 * s, 6 * s))

    kinds = ["bars", "line", "chip", "net", "gear"]
    for i in range(glyphs):
        a(glyph(kinds[i % len(kinds)], r.uniform(w * .04, w * .92),
                r.uniform(h * .42, h * .93), r.uniform(.8, 1.9)))

    a('<rect width="%d" height="%d" fill="url(#vig)"/>' % (w, h))
    a("</svg>")
    return "".join(P)


HEROES = {
    "hero-port":      dict(seed=1001, ships=2, cranes=4, mesh=95, glyphs=7, warmth=1.0),
    "hero-terminal":  dict(seed=2002, ships=1, cranes=4, mesh=70, glyphs=5, horizon=.60, warmth=1.05),
    "hero-fleet":     dict(seed=3003, ships=2, cranes=2, mesh=55, glyphs=4, horizon=.66),
    "hero-network":   dict(seed=4004, ships=1, cranes=2, mesh=140, glyphs=9, warmth=.85),
    "hero-dusk":      dict(seed=5005, ships=2, cranes=3, mesh=60, glyphs=4, horizon=.68, warmth=1.1),
    "hero-analytics": dict(seed=6006, ships=1, cranes=3, mesh=120, glyphs=10, warmth=.9),
    "hero-quay":      dict(seed=7007, ships=2, cranes=3, mesh=65, glyphs=5, vignette="both", warmth=1.05),
}

THUMBS = {
    "insight-erp":        dict(seed=1101, ships=1, cranes=2, mesh=34, glyphs=3, horizon=.58),
    "insight-edi":        dict(seed=1202, ships=1, cranes=1, mesh=70, glyphs=5, horizon=.55, warmth=.8),
    "insight-digital":    dict(seed=1303, ships=1, cranes=2, mesh=62, glyphs=6, horizon=.60, warmth=.85),
    "insight-ai":         dict(seed=1404, ships=0, cranes=2, mesh=80, glyphs=6, horizon=.62, warmth=.75),
    "insight-finance":    dict(seed=1505, ships=1, cranes=1, mesh=48, glyphs=5, horizon=.60),
    "insight-operations": dict(seed=1606, ships=1, cranes=3, mesh=40, glyphs=3, horizon=.58, warmth=1.1),
}

if __name__ == "__main__":
    for name, kw in HEROES.items():
        svg = scene(**kw)
        open(os.path.join(OUT, name + ".svg"), "w", encoding="utf-8").write(svg)
        print("  images/%-22s %5d KB" % (name + ".svg", len(svg) // 1024))
    for name, kw in THUMBS.items():
        svg = scene(w=800, h=450, vignette="both", **kw)
        open(os.path.join(OUT, name + ".svg"), "w", encoding="utf-8").write(svg)
        print("  images/%-22s %5d KB" % (name + ".svg", len(svg) // 1024))
