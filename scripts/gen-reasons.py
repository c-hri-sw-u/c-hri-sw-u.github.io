# Writes src/components/Reasons.astro (the Piko diagram); edit the coordinates here, then run: python3 scripts/gen-reasons.py
import math
def arrow(x1,y1,x2,y2,h=7):
    a=math.atan2(y2-y1,x2-x1); s=.45
    p1=(x2-h*math.cos(a-s), y2-h*math.sin(a-s)); p2=(x2-h*math.cos(a+s), y2-h*math.sin(a+s))
    return f'<path pathLength="1" d="M{x1} {y1} L{x2} {y2} M{p1[0]:.1f} {p1[1]:.1f} L{x2} {y2} L{p2[0]:.1f} {p2[1]:.1f}" />'
def txt(x,y,lines,cls,lh):
    return ''.join(f'<text class="{cls}" x="{x}" y="{y+i*lh}">{l}</text>' for i,l in enumerate(lines))
def venn(W,F,C,r,lab,lh):
    out=[]
    for (cx,cy),k,(lx,ly),words in [(W,'w',lab[0],['Wearable','device']),(F,'f',lab[1],['Fashion','item']),(C,'c',lab[2],['AI','companion'])]:
        out.append(f'<circle class="dot {k}" cx="{cx}" cy="{cy}" r="{r}" />')
    for (lx,ly),words in zip(lab,[['Wearable','device'],['Fashion','item'],['AI','companion']]):
        out.append(txt(lx,ly,words,'v',lh))
    return out
def svg(cls,vb,levels):
    body='\n'.join(f'  <g class="lv{i}">\n    '+'\n    '.join(items)+'\n  </g>' for i,items in enumerate(levels))
    return f'<svg class="drawing reasons {cls} r" viewBox="{vb}" aria-hidden="true">\n{body}\n</svg>'

wide=svg('wide-only','0 0 1000 520',[
  venn((500,382),(462,446),(538,446),58,[(500,378),(462,442),(538,442)],16),
  [arrow(448,394,330,418),arrow(474,330,372,292),arrow(526,330,628,292),arrow(552,394,670,418),
   txt(250,430,['No social awkwardness'],'aside',0),txt(750,430,['More emotional connection'],'aside',0)],
  [arrow(250,408,292,292),arrow(750,408,708,292),
   txt(330,280,['With you all day'],'term',0),txt(670,280,['Closer to your body'],'term',0)],
  [arrow(352,250,452,192),arrow(648,250,548,192),txt(500,180,['It senses more'],'mid',0)],
  [arrow(472,156,392,104),arrow(528,156,608,104),
   txt(360,90,['More it can help with'],'aside',0),txt(640,90,['A better read of the moment'],'aside',0)],
  [arrow(390,68,466,36),arrow(610,68,534,36),txt(500,26,['A closer bond'],'mid',0)],
])
narrow=svg('narrow-only','0 0 400 640',[
  venn((200,505),(166,562),(234,562),50,[(200,502),(166,559),(234,559)],14),
  [arrow(150,520,98,488),arrow(250,520,302,488),
   txt(66,458,['No social','awkwardness'],'aside',17),txt(334,458,['More emotional','connection'],'aside',17)],
  [arrow(66,436,94,404),arrow(334,436,306,404),arrow(184,456,140,404),arrow(216,456,260,404),
   txt(110,368,['With you','all day'],'term',26),txt(290,368,['Closer to','your body'],'term',26)],
  [arrow(120,334,176,292),arrow(280,334,224,292),txt(200,280,['It senses more'],'mid',0)],
  [arrow(178,258,128,214),arrow(222,258,272,214),
   txt(110,188,['More it can','help with'],'aside',17),txt(290,188,['A better read','of the moment'],'aside',17)],
  [arrow(120,166,174,114),arrow(280,166,226,114),txt(200,100,['A closer bond'],'mid',0)],
])
head='''---
// Why the companion belongs on the body, redrawn from Chris's concept diagram. It grows upward like the original:
// three things overlap, which keeps it with you all day and closer to your body, so it senses more,
// helps with more and reads the moment better, and both bring you closer. Phones get a narrower version of the same tree.
---
'''
open('src/components/Reasons.astro','w').write(head+wide+'\n'+narrow+'\n')
