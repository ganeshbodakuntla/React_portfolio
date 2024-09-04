import './index.scss'
import logoS from '../../../assets/images/synmbol.png'
import { useEffect, useRef } from 'react'
import gsap from 'gsap-trial'
import DrawSVGPlugin from 'gsap-trial/DrawSVGPlugin'

const Logo = () => {
  const bgref = useRef()
  const outlineLogoRef = useRef()
  const solidLogoRef = useRef()
  useEffect(() => {
    gsap.registerPlugin(DrawSVGPlugin)
      gsap.timeline()
          .to(bgref.current, {
      duration: 1,
      opacity: 1,
          })
          .from(outlineLogoRef.current, {
              drawSVG: 0,
              duration:20,
          })
      gsap.fromTo(
          solidLogoRef.current,
          {
              opacity:0,
          },
          {
              opacity: 1,
              delay: 4,
              duration:4,
          }
      )
  }, [])

  return (
    <div className="logo-container" ref={bgref}>
      <img className="solid-logo" src={logoS} alt="slogo" ref={solidLogoRef} />
    
          <svg  width="559pt"
        height="897pt"
        version="1.0"
        viewBox="0 0 559 897"
        xmlns="http://www.w3.org/2000/svg">

<g  className="svg-container" transform="translate(0.000000,897.000000) scale(0.100000,-0.100000)"
fill="none" >
<path ref={outlineLogoRef} d="M2860 8923 c-88 -7 -266 -34 -345 -54 -324 -81 -567 -220 -841 -483
-110 -104 -277 -299 -333 -386 l-22 -35 23 29 c184 233 303 361 441 479 334
286 674 415 1167 446 113 7 120 8 45 8 -49 0 -110 -2 -135 -4z"/>
<path ref={outlineLogoRef} d="M3203 8913 c9 -2 23 -2 30 0 6 3 -1 5 -18 5 -16 0 -22 -2 -12 -5z"/>
<path ref={outlineLogoRef} d="M2907 8773 c18 -2 50 -2 70 0 21 2 7 4 -32 4 -38 0 -55 -2 -38 -4z"/>
<path ref={outlineLogoRef} d="M2060 8746 c-259 -77 -457 -184 -662 -356 -118 -99 -274 -257 -254
-257 8 0 14 5 13 11 -1 6 5 10 13 8 8 -2 12 0 8 4 -10 9 12 35 23 28 5 -3 8 0
7 7 -2 7 3 13 10 14 6 0 13 5 13 10 2 12 41 41 51 37 5 -1 7 4 5 11 -1 6 4 11
11 9 8 -1 11 1 9 5 -3 5 1 14 9 21 8 7 14 10 14 7 0 -3 9 4 20 15 12 12 26 18
32 14 7 -4 8 -3 4 4 -4 7 -1 12 8 12 9 0 16 5 16 10 0 6 7 10 15 10 9 0 18 7
21 15 4 8 10 12 15 9 5 -3 9 0 9 5 0 6 6 11 14 11 8 0 16 3 18 8 2 4 21 20 42
36 22 16 36 23 32 15 -4 -8 -1 -6 7 4 8 9 18 17 22 17 5 0 17 8 28 18 15 12
19 13 13 2 -6 -13 -5 -13 6 0 28 33 305 176 468 241 61 24 31 22 -60 -5z"/>
<path ref={outlineLogoRef} d="M2750 8763 c-190 -30 -374 -85 -525 -158 -180 -87 -323 -193 -498
-369 -126 -126 -347 -396 -324 -396 2 0 19 21 37 48 134 189 386 447 552 565
239 170 535 279 848 310 23 3 18 4 -15 4 -27 0 -61 -2 -75 -4z"/>
<path ref={outlineLogoRef} d="M1091 8086 c-8 -10 -9 -16 -1 -21 6 -4 9 -1 8 7 -2 7 3 12 10 10 8
-1 11 2 7 8 -8 13 -10 13 -24 -4z"/>
<path ref={outlineLogoRef} d="M1044 8028 l-19 -23 23 19 c21 18 27 26 19 26 -2 0 -12 -10 -23 -22z"/>
<path ref={outlineLogoRef} d="M1002 7977 c-7 -8 -8 -18 -1 -27 8 -12 9 -11 7 5 -2 12 2 19 10 17 8
-1 11 2 7 8 -8 13 -10 13 -23 -3z"/>
<path ref={outlineLogoRef} d="M970 7935 c-7 -9 -8 -15 -2 -15 5 0 12 7 16 15 3 8 4 15 2 15 -2 0
-9 -7 -16 -15z"/>
<path ref={outlineLogoRef} d="M895 7826 c-36 -52 -54 -89 -50 -97 5 -7 4 -10 -3 -5 -6 4 -31 -28
-60 -76 -369 -618 -592 -1416 -679 -2428 -22 -259 -25 -1067 -5 -1345 108
-1479 471 -2536 1094 -3181 384 -397 823 -611 1343 -654 161 -13 445 -3 479
18 6 3 37 7 70 9 34 2 86 6 116 9 30 3 73 7 95 9 120 9 447 77 433 90 -2 2
-50 -8 -108 -21 -446 -102 -913 -59 -1317 120 -333 148 -662 416 -909 742 -48
62 -91 111 -97 107 -6 -3 -7 -1 -3 6 4 7 -18 51 -53 105 -33 52 -71 117 -86
145 -14 29 -30 49 -35 46 -6 -4 -7 1 -3 11 5 13 3 15 -7 9 -8 -5 -11 -4 -7 2
4 6 -20 68 -53 137 -282 597 -487 1452 -540 2256 -6 96 -15 193 -20 215 -5 22
-7 76 -6 120 2 47 1 61 -2 35 -6 -40 -7 -36 -13 40 -3 47 -4 4 -2 -95 7 -282
43 -668 94 -993 11 -74 19 -135 17 -138 -7 -6 -57 284 -73 421 -72 626 -80
1272 -25 1945 24 295 34 381 66 570 57 334 125 617 223 922 71 220 74 237 57
313 -8 33 -14 56 -15 51 -2 -19 -31 18 -31 41 0 17 -4 22 -12 17 -10 -6 -10
-5 -1 7 9 11 9 19 2 26 -6 6 -5 10 5 10 8 0 13 -7 12 -16 -1 -9 1 -29 5 -46 7
-26 7 -24 5 12 -2 23 2 47 8 54 8 9 8 10 -1 5 -7 -4 -13 -2 -13 3 0 6 6 11 13
11 8 0 9 3 1 8 -10 6 -10 17 -1 58 2 7 9 20 17 30 9 11 10 15 3 10 -9 -5 -13
-1 -13 11 0 14 -2 15 -9 5 -7 -11 -9 -10 -14 3 -4 9 -3 13 3 10 6 -3 10 -2 10
4 0 5 -5 13 -10 16 -6 4 -8 11 -4 16 3 5 10 7 15 3 5 -3 7 -9 4 -14 -3 -5 -1
-11 4 -15 10 -6 7 27 -4 45 -3 6 -2 10 4 10 5 0 11 -3 14 -7 2 -5 3 -3 1 4 -1
6 0 14 4 17 10 11 11 37 1 30 -5 -3 -6 -10 -3 -16 5 -7 2 -8 -6 -3 -9 6 -11 4
-5 -5 5 -9 4 -11 -4 -6 -8 5 -9 12 -3 19 5 7 8 20 7 29 -2 10 1 20 6 24 5 3 7
10 4 15 -3 5 1 6 9 3 11 -4 14 0 11 14 -2 14 3 22 17 26 18 4 19 7 8 20 -8 10
-9 16 -2 16 7 0 9 7 5 17 -4 11 -3 14 5 9 7 -4 12 -1 12 8 0 9 9 25 20 36 12
12 18 25 15 30 -3 5 -1 11 5 15 11 7 33 45 26 45 -2 0 -30 -38 -61 -84z m-88
-362 c-3 -3 -12 -4 -19 -1 -8 3 -5 6 6 6 11 1 17 -2 13 -5z m-12 -23 c3 -5 2
-12 -3 -15 -5 -3 -9 1 -9 9 0 17 3 19 12 6z m-9 -56 c1 -8 -1 -17 -5 -19 -4
-3 -7 6 -7 19 0 25 8 25 12 0z m-199 -4397 c-3 -8 -6 -5 -6 6 -1 11 2 17 5 13
3 -3 4 -12 1 -19z m10 -50 c-3 -7 -5 -2 -5 12 0 14 2 19 5 13 2 -7 2 -19 0
-25z m10 -50 c-3 -8 -6 -5 -6 6 -1 11 2 17 5 13 3 -3 4 -12 1 -19z m581 -1583
c27 -44 56 -92 66 -107 10 -16 16 -28 13 -28 -8 0 -101 149 -126 200 -25 54
-16 41 47 -65z m1117 -1068 c61 -25 139 -53 174 -63 36 -10 60 -19 54 -21 -30
-10 -361 119 -378 148 -4 6 3 4 16 -4 13 -8 74 -35 134 -60z"/>
<path ref={outlineLogoRef} d="M4850 7870 c6 -11 13 -20 16 -20 2 0 0 9 -6 20 -6 11 -13 20 -16 20
-2 0 0 -9 6 -20z"/>
<path ref={outlineLogoRef} d="M4932 7715 c34 -68 64 -123 66 -121 4 5 -116 246 -123 246 -3 0 23
-56 57 -125z"/>
<path ref={outlineLogoRef} d="M826 7651 c-4 -5 -2 -12 3 -15 5 -4 12 -2 15 3 4 5 2 12 -3 15 -5 4
-12 2 -15 -3z"/>
<path ref={outlineLogoRef} d="M4922 7575 c12 -24 23 -43 26 -41 4 5 -36 86 -43 86 -3 0 5 -20 17
-45z"/>
<path ref={outlineLogoRef} d="M5000 7575 c0 -5 5 -17 10 -25 5 -8 10 -10 10 -5 0 6 -5 17 -10 25
-5 8 -10 11 -10 5z"/>
<path ref={outlineLogoRef} d="M5021 7528 c-1 -4 10 -31 22 -60 13 -29 36 -90 51 -136 16 -46 30
-82 32 -79 6 5 -49 161 -79 227 -14 30 -26 52 -26 48z"/>
<path ref={outlineLogoRef} d="M4951 7515 c0 -5 6 -21 14 -35 8 -14 14 -20 14 -15 0 6 -6 21 -14 35
-8 14 -14 21 -14 15z"/>
<path ref={outlineLogoRef} d="M3131 7449 c138 -9 264 -37 362 -80 363 -160 658 -597 779 -1155 13
-57 26 -104 29 -104 4 0 0 30 -8 67 -7 37 -12 74 -10 83 2 8 9 -12 16 -45 20
-96 22 -101 32 -82 25 44 -161 610 -194 590 -5 -3 -7 -1 -4 5 9 13 -2 43 -14
37 -4 -3 -15 8 -24 24 -18 36 -19 45 -3 35 7 -4 8 -3 4 5 -4 6 -12 8 -18 5 -8
-5 -9 -1 -5 10 4 10 3 15 -3 11 -5 -3 -14 3 -19 14 -14 26 -14 34 2 25 7 -4 9
-3 4 2 -5 5 -14 9 -20 9 -5 0 -12 6 -15 14 -3 9 0 11 8 6 9 -5 11 -4 6 4 -4 6
-11 9 -15 7 -4 -3 -13 5 -21 17 -12 21 -12 21 5 7 17 -14 18 -14 6 8 -7 12
-17 20 -23 16 -6 -4 -8 -3 -5 3 15 24 -144 201 -253 283 -169 125 -384 192
-610 189 l-105 -2 116 -8z"/>
<path ref={outlineLogoRef} d="M4984 7440 c9 -32 39 -101 43 -97 2 3 -8 29 -22 58 -14 30 -23 47
-21 39z"/>
<path ref={outlineLogoRef} d="M3090 7290 c109 -6 167 -15 233 -34 83 -25 232 -92 176 -80 -52 11
-64 11 -78 0 -12 -9 -13 -8 -7 2 6 10 3 13 -10 11 -11 -1 -27 1 -36 5 -9 4
-22 9 -30 10 -7 2 -20 6 -28 9 -15 5 -34 10 -97 27 -18 4 -30 4 -28 -1 3 -4
-7 -2 -22 6 -21 11 -29 12 -35 2 -5 -8 -8 -8 -8 -1 0 7 -13 10 -32 9 -18 -2
-71 -4 -118 -6 -110 -2 -212 -16 -275 -36 -62 -19 -190 -85 -230 -118 l-30
-25 33 9 c61 18 235 24 327 12 477 -63 795 -447 961 -1158 14 -62 34 -123 43
-135 l18 -22 304 88 c167 49 347 101 399 116 52 16 145 43 205 60 93 26 145
53 132 67 -2 1 -143 -38 -313 -87 -170 -49 -314 -90 -320 -90 -6 0 -24 65 -40
145 -17 80 -27 145 -23 145 3 0 16 -46 28 -102 39 -191 37 -185 46 -164 10 23
-33 236 -78 382 -35 112 -124 331 -138 340 -5 3 -6 -2 -3 -10 14 -36 -7 -12
-31 34 -14 27 -38 70 -55 96 -16 26 -27 51 -24 55 7 12 -75 118 -142 185 -78
78 -150 129 -245 173 -142 67 -220 83 -409 86 l-165 3 145 -8z"/>
<path ref={outlineLogoRef} d="M5044 7285 c21 -70 75 -218 75 -209 1 13 -67 215 -75 223 -4 3 -4 -3
0 -14z"/>
<path ref={outlineLogoRef} d="M5161 7134 c0 -11 3 -14 6 -6 3 7 2 16 -1 19 -3 4 -6 -2 -5 -13z"/>
<path ref={outlineLogoRef} d="M5171 7100 c0 -8 4 -24 9 -35 5 -13 9 -14 9 -5 0 8 -4 24 -9 35 -5
13 -9 14 -9 5z"/>
<path ref={outlineLogoRef} d="M5121 7044 c0 -11 3 -14 6 -6 3 7 2 16 -1 19 -3 4 -6 -2 -5 -13z"/>
<path ref={outlineLogoRef} d="M5191 7024 c0 -11 3 -14 6 -6 3 7 2 16 -1 19 -3 4 -6 -2 -5 -13z"/>
<path ref={outlineLogoRef} d="M5201 6990 c0 -8 4 -24 9 -35 5 -13 9 -14 9 -5 0 8 -4 24 -9 35 -5
13 -9 14 -9 5z"/>
<path ref={outlineLogoRef} d="M5221 6914 c0 -11 3 -14 6 -6 3 7 2 16 -1 19 -3 4 -6 -2 -5 -13z"/>
<path ref={outlineLogoRef} d="M5232 6870 c0 -14 2 -19 5 -12 2 6 2 18 0 25 -3 6 -5 1 -5 -13z"/>
<path ref={outlineLogoRef} d="M3919 6835 c5 -11 17 -29 26 -40 l16 -20 -10 20 c-5 11 -17 29 -26
40 l-16 20 10 -20z"/>
<path ref={outlineLogoRef} d="M5241 6824 c0 -11 3 -14 6 -6 3 7 2 16 -1 19 -3 4 -6 -2 -5 -13z"/>
<path ref={outlineLogoRef} d="M727 6703 c-15 -49 -38 -137 -51 -198 -30 -138 -99 -560 -94 -576 2
-7 10 26 17 72 10 68 78 405 98 484 3 11 4 33 4 48 -1 16 3 26 8 23 5 -3 7 2
4 13 -2 10 7 63 21 116 15 54 25 100 23 102 -2 2 -16 -36 -30 -84z"/>
<path ref={outlineLogoRef} d="M5251 6774 c0 -11 3 -14 6 -6 3 7 2 16 -1 19 -3 4 -6 -2 -5 -13z"/>
<path ref={outlineLogoRef} d="M3970 6750 c6 -11 13 -20 16 -20 2 0 0 9 -6 20 -6 11 -13 20 -16 20
-2 0 0 -9 6 -20z"/>
<path d="M846 6659 c-45 -150 -117 -512 -104 -524 4 -4 64 270 79 361 5 28 20
93 33 145 14 52 23 95 21 97 -2 2 -15 -34 -29 -79z"/>
<path ref={outlineLogoRef} d="M5261 6724 c0 -11 3 -14 6 -6 3 7 2 16 -1 19 -3 4 -6 -2 -5 -13z"/>
<path ref={outlineLogoRef} d="M5281 6634 c0 -11 3 -14 6 -6 3 7 2 16 -1 19 -3 4 -6 -2 -5 -13z"/>
<path ref={outlineLogoRef} d="M5291 6564 c0 -11 3 -14 6 -6 3 7 2 16 -1 19 -3 4 -6 -2 -5 -13z"/>
<path ref={outlineLogoRef} d="M5301 6504 c0 -11 3 -14 6 -6 3 7 2 16 -1 19 -3 4 -6 -2 -5 -13z"/>
<path ref={outlineLogoRef} d="M5331 6314 c0 -11 3 -14 6 -6 3 7 2 16 -1 19 -3 4 -6 -2 -5 -13z"/>
<path ref={outlineLogoRef} d="M732 6100 c0 -14 2 -19 5 -12 2 6 2 18 0 25 -3 6 -5 1 -5 -13z"/>
<path ref={outlineLogoRef} d="M722 6050 c0 -14 2 -19 5 -12 2 6 2 18 0 25 -3 6 -5 1 -5 -13z"/>
<path ref={outlineLogoRef} d="M711 5984 c0 -11 3 -14 6 -6 3 7 2 16 -1 19 -3 4 -6 -2 -5 -13z"/>
<path ref={outlineLogoRef} d="M572 5885 c0 -16 2 -22 5 -12 2 9 2 23 0 30 -3 6 -5 -1 -5 -18z"/>
<path ref={outlineLogoRef} d="M562 5825 c0 -16 2 -22 5 -12 2 9 2 23 0 30 -3 6 -5 -1 -5 -18z"/>
<path ref={outlineLogoRef} d="M551 5734 c0 -11 3 -14 6 -6 3 7 2 16 -1 19 -3 4 -6 -2 -5 -13z"/>
<path ref={outlineLogoRef} d="M606 5508 c-27 -222 -38 -442 -40 -863 l-4 -460 8 440 c7 383 20 635
46 878 4 31 4 57 1 57 -2 0 -8 -24 -11 -52z"/>
<path ref={outlineLogoRef} d="M521 5484 c0 -11 3 -14 6 -6 3 7 2 16 -1 19 -3 4 -6 -2 -5 -13z"/>
<path ref={outlineLogoRef} d="M511 5374 c0 -11 3 -14 6 -6 3 7 2 16 -1 19 -3 4 -6 -2 -5 -13z"/>
<path ref={outlineLogoRef} d="M502 5260 c0 -14 2 -19 5 -12 2 6 2 18 0 25 -3 6 -5 1 -5 -13z"/>
<path ref={outlineLogoRef} d="M492 5100 c0 -19 2 -27 5 -17 2 9 2 25 0 35 -3 9 -5 1 -5 -18z"/>
<path ref={outlineLogoRef} d="M483 4885 c0 -33 2 -45 4 -27 2 18 2 45 0 60 -2 15 -4 0 -4 -33z"/>
<path ref={outlineLogoRef} d="M3039 4906 c-2 -2 -56 -7 -119 -11 -63 -4 -126 -8 -140 -10 -14 -2
-49 -4 -77 -4 l-53 -1 0 -795 c0 -457 4 -795 9 -795 5 0 12 -15 15 -33 14 -74
-28 -69 559 -69 493 0 529 -2 550 -18 22 -18 22 -20 25 -392 l3 -374 -32 -45
c-18 -24 -26 -38 -17 -31 8 6 35 14 59 17 66 8 73 10 88 19 11 7 12 6 6 -5 -7
-11 -6 -12 6 -3 8 6 52 12 99 13 116 2 191 11 196 25 2 6 6 121 9 256 3 135 8
334 11 442 l5 198 -218 3 -218 2 228 3 c132 1 226 6 223 11 -9 13 -1173 15
-1181 1 -3 -5 -11 -10 -16 -10 -7 0 -9 277 -7 805 2 443 0 805 -3 805 -3 0 -8
-2 -10 -4z"/>
<path ref={outlineLogoRef}  d="M3858 4893 c61 -2 163 -2 225 0 61 1 11 3 -113 3 -124 0 -174 -2
-112 -3z"/>
<path ref={outlineLogoRef}  d="M4838 4883 c67 -2 177 -2 245 0 67 1 12 3 -123 3 -135 0 -190 -2
-122 -3z"/>
<path ref={outlineLogoRef}  d="M3095 4105 c0 -418 1 -588 2 -377 2 211 2 553 0 760 -1 207 -2 35 -2
-383z"/>
<path ref={outlineLogoRef}  d="M3175 4105 c0 -357 1 -502 2 -322 2 181 2 473 0 650 -1 177 -2 30 -2
-328z"/>
<path ref={outlineLogoRef}  d="M3798 4743 c7 -3 16 -2 19 1 4 3 -2 6 -13 5 -11 0 -14 -3 -6 -6z"/>
<path ref={outlineLogoRef}  d="M3878 4743 c12 -2 32 -2 45 0 12 2 2 4 -23 4 -25 0 -35 -2 -22 -4z"/>
<path ref={outlineLogoRef}  d="M590 4184 c0 -195 44 -664 90 -965 22 -147 24 -182 5 -99 -25 107
-15 17 16 -138 249 -1275 728 -2093 1464 -2503 377 -210 839 -291 1286 -224
58 9 118 20 135 25 28 10 28 10 -6 5 -323 -51 -588 -47 -854 11 -276 60 -621
229 -831 408 -170 144 -334 316 -431 452 -26 36 -50 61 -56 57 -6 -3 -8 -1 -5
5 8 12 -58 117 -73 117 -13 0 -53 65 -46 73 4 3 6 1 6 -4 0 -5 10 -20 21 -34
l21 -25 -21 35 c-11 19 -25 34 -31 33 -13 -4 -52 75 -44 89 4 6 3 8 -3 5 -6
-4 -14 0 -17 9 -3 8 -2 12 4 9 6 -4 5 5 -1 19 -7 14 -16 23 -22 19 -6 -3 -7
-1 -4 4 4 6 -17 62 -47 124 -262 557 -446 1319 -517 2149 -6 74 -13 151 -15
170 -1 19 -5 82 -9 139 -3 58 -8 107 -10 110 -3 2 -5 -31 -5 -75z m117 -1156
c-3 -7 -5 -2 -5 12 0 14 2 19 5 13 2 -7 2 -19 0 -25z m10 -50 c-3 -7 -5 -2 -5
12 0 14 2 19 5 13 2 -7 2 -19 0 -25z m10 -40 c-3 -8 -6 -5 -6 6 -1 11 2 17 5
13 3 -3 4 -12 1 -19z m10 -50 c-3 -8 -6 -5 -6 6 -1 11 2 17 5 13 3 -3 4 -12 1
-19z m624 -1603 c7 -13 3 -12 -10 5 -11 14 -21 30 -21 35 0 11 14 -7 31 -40z"/>
<path ref={outlineLogoRef} d="M573 4055 c0 -44 2 -61 4 -37 2 23 2 59 0 80 -2 20 -4 1 -4 -43z"/>
<path ref={outlineLogoRef} d="M583 3890 c0 -25 2 -35 4 -22 2 12 2 32 0 45 -2 12 -4 2 -4 -23z"/>
<path ref={outlineLogoRef} d="M593 3775 c0 -22 2 -30 4 -17 2 12 2 30 0 40 -3 9 -5 -1 -4 -23z"/>
<path ref={outlineLogoRef} d="M611 3574 c0 -11 3 -14 6 -6 3 7 2 16 -1 19 -3 4 -6 -2 -5 -13z"/>
<path ref={outlineLogoRef} d="M3210 3464 c36 -7 1170 -10 1170 -3 0 5 -267 8 -592 8 -326 -1 -586
-3 -578 -5z"/>
<path ref={outlineLogoRef} d="M651 3274 c0 -11 3 -14 6 -6 3 7 2 16 -1 19 -3 4 -6 -2 -5 -13z"/>
<path ref={outlineLogoRef} d="M662 3210 c0 -14 2 -19 5 -12 2 6 2 18 0 25 -3 6 -5 1 -5 -13z"/>
<path ref={outlineLogoRef} d="M1890 2805 c0 -5 5 -17 10 -25 5 -8 10 -10 10 -5 0 6 -5 17 -10 25
-5 8 -10 11 -10 5z"/>
<path ref={outlineLogoRef} d="M4268 2680 c-5 -47 -7 -114 -7 -150 l1 -65 9 48 c6 27 8 94 7 150
l-3 102 -7 -85z"/>
<path ref={outlineLogoRef} d="M1920 2725 c0 -5 5 -17 10 -25 5 -8 10 -10 10 -5 0 6 -5 17 -10 25
-5 8 -10 11 -10 5z"/>
<path ref={outlineLogoRef} d="M1950 2645 c0 -5 5 -17 10 -25 5 -8 10 -10 10 -5 0 6 -5 17 -10 25
-5 8 -10 11 -10 5z"/>
<path ref={outlineLogoRef} d="M1990 2556 c0 -10 60 -126 65 -126 3 0 -9 28 -26 63 -33 65 -39 75
-39 63z"/>
<path ref={outlineLogoRef} d="M1911 2535 c0 -5 13 -35 29 -65 16 -30 29 -50 29 -45 0 6 -13 35 -29
65 -16 30 -29 51 -29 45z"/>
<path ref={outlineLogoRef} d="M4361 2424 c0 -11 3 -14 6 -6 3 7 2 16 -1 19 -3 4 -6 -2 -5 -13z"/>
<path ref={outlineLogoRef} d="M2070 2400 c6 -11 13 -20 16 -20 2 0 0 9 -6 20 -6 11 -13 20 -16 20
-2 0 0 -9 6 -20z"/>
<path ref={outlineLogoRef} d="M2100 2350 c6 -11 13 -20 16 -20 2 0 0 9 -6 20 -6 11 -13 20 -16 20
-2 0 0 -9 6 -20z"/>
<path ref={outlineLogoRef} d="M4387 2354 c-4 -4 -7 -14 -7 -23 0 -11 3 -12 11 -4 6 6 10 16 7 23
-2 6 -7 8 -11 4z"/>
<path ref={outlineLogoRef} d="M4090 2212 c-319 -295 -594 -443 -890 -481 l-65 -8 53 -2 c63 -1 219
36 317 77 146 60 296 156 470 298 90 74 227 204 215 204 -3 0 -48 -39 -100
-88z"/>
<path ref={outlineLogoRef} d="M3625 2198 l-50 -53 53 50 c28 27 52 51 52 52 0 8 -9 -1 -55 -49z"/>
<path ref={outlineLogoRef} d="M4190 2099 c-228 -215 -449 -364 -663 -448 -95 -36 -175 -56 -322
-80 -59 -10 -59 -10 20 -5 255 17 556 162 845 410 79 67 220 205 210 204 -3
-1 -43 -37 -90 -81z"/>
<path ref={outlineLogoRef} d="M3510 2099 c-163 -141 -434 -286 -598 -320 -34 -7 -62 -16 -62 -20 0
-16 165 -26 245 -15 63 9 84 14 116 30 16 8 27 11 25 7 -3 -4 1 -8 8 -8 7 0
13 7 12 16 -1 10 8 16 23 16 15 0 27 8 31 20 8 21 40 53 40 40 0 -4 6 -3 13 3
6 6 17 12 22 14 6 1 10 13 10 25 -1 15 3 19 11 13 12 -11 24 -3 24 14 0 6 -4
5 -9 -2 -7 -11 -9 -11 -14 2 -4 9 -1 15 5 13 7 -1 12 3 13 8 0 6 6 19 12 30 6
11 12 25 13 30 1 6 6 9 11 8 5 -2 9 3 9 11 0 8 4 18 10 21 6 4 7 -1 3 -12 -3
-10 5 -5 18 12 13 16 22 30 19 31 -3 1 4 11 14 23 27 30 17 25 -24 -10z m10
-13 c0 -2 -8 -10 -17 -17 -16 -13 -17 -12 -4 4 13 16 21 21 21 13z m-133 -198
c-3 -8 -6 -5 -6 6 -1 11 2 17 5 13 3 -3 4 -12 1 -19z"/>
<path ref={outlineLogoRef} d="M3453 2015 c4 -5 0 -19 -8 -31 -9 -15 -11 -25 -5 -29 6 -4 9 -1 8 7
-2 7 2 12 7 11 15 -2 16 35 2 43 -7 4 -9 3 -4 -1z"/>
<path ref={outlineLogoRef} d="M3330 1845 c-7 -9 -10 -18 -6 -22 3 -3 6 -1 6 6 0 7 4 10 9 6 5 -3
12 -1 15 4 11 17 -11 21 -24 6z"/>
<path ref={outlineLogoRef} d="M3108 1713 c7 -3 16 -2 19 1 4 3 -2 6 -13 5 -11 0 -14 -3 -6 -6z"/>
<path ref={outlineLogoRef} d="M1255 1460 c9 -16 18 -30 21 -30 2 0 -2 14 -11 30 -9 17 -18 30 -21
30 -2 0 2 -13 11 -30z"/>
<path d="M3628 293 c7 -3 16 -2 19 1 4 3 -2 6 -13 5 -11 0 -14 -3 -6 -6z"/>
</g>
</svg>
    </div>
  )
}
export default Logo


  {/* <svg
        width="559pt"
        height="897pt"
        version="1.0"
        viewBox="0 0 559 897"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g
          className="svg-container"
          transform="translate(0 457) scale(.1 -.1)"
          fill="none"
        >
          <path
            ref={outlineLogoRef}
            d="m2930 4560c-344-16-623-85-915-228-231-114-406-241-600-436-61-60-145-137-188-169-432-325-715-757-806-1230-109-564 21-1117 384-1641 250-360 780-877 1547-1511 451-373 600-505 803-708 215-216 275-293 350-448 55-114 75-188 82-298 6-96-6-173-39-257-21-53-27-59-73-76-136-51-374-73-521-46-401 71-763 376-1088 916-21 35-43 63-50 63s-32-13-57-29c-74-48-229-141-233-141-3 0-54-31-113-68s-135-84-168-102c-33-19-67-39-77-45-9-5-56-34-105-63-48-29-153-94-233-143s-152-92-160-96c-26-12-144-86-180-114-19-15-137-88-262-164-130-78-228-143-228-151s30-70 66-137c207-379 396-640 644-887 219-218 401-350 665-480 247-122 484-196 775-241 172-27 628-38 819-19 636 61 1161 302 1561 716 47 48 128 120 181 160 402 304 684 722 804 1189 61 240 70 318 70 640 0 259-3 304-23 418-84 467-268 823-647 1257-192 218-401 409-1095 995-637 539-1034 894-1208 1081-152 163-223 311-223 465 0 43 2 83 5 88 20 32 266 41 394 15 322-65 649-312 972-731 39-51 70-83 82-83 10 0 283 234 615 528 328 290 684 605 792 700s197 181 199 191-38 62-100 131c-399 446-754 740-1106 918-314 159-659 255-962 268-63 2-135 6-160 7-25 2-110 0-190-4zm570-58c671-123 1188-450 1813-1144 53-60 97-112 96-115-1-12-411-367-423-367-6 0-20-13-31-28-11-16-164-156-340-312l-320-283-18 24c-239 311-459 523-675 651-99 59-246 117-344 137-112 23-311 21-416-4-200-48-373-182-450-349-32-70-34-82-34-176 0-179 64-318 229-494 182-195 573-545 1213-1086 693-585 897-771 1085-985 379-434 563-790 647-1257 20-113 23-161 23-398 0-300-10-384-70-620-97-379-302-729-586-1e3 -105-100-185-166-191-159-9 8-63-29-92-63-48-57-291-191-482-266-202-79-481-143-735-167-188-18-606-8-779 19-290 45-528 119-775 241-385 190-680 444-972 836-118 159-345 527-332 538 46 36 763 456 773 453 16-7 36 11 30 27-3 9 131 99 212 142 28 15 203 122 231 141 21 14 23 13 45-23 225-384 515-687 794-829 164-84 300-115 503-115 125 0 235 15 340 46 17 5 22 4 17-4-13-22 24-13 47 11 12 13 53 40 91 61 193 105 351 279 418 462 18 49 21 82 22 199 1 165-11 222-79 363-75 156-135 232-355 453-208 208-355 338-808 713-766 633-1288 1142-1537 1501-305 440-449 908-415 1355 24 318 109 596 262 848 74 123 192 277 231 301 18 11 43 38 56 61 24 42 155 164 277 255 293 221 660 367 1050 419 167 23 601 15 754-13zm-2357-938c-321-485-398-1123-203-1693 70-208 178-417 315-615 250-360 780-877 1547-1511 451-373 600-505 803-708 215-216 275-292 350-448 65-136 80-200 79-343-1-134-15-186-80-302-60-108-201-244-326-317-53-31-55-28-31 35 12 33 17 79 17 184 1 165-12 222-79 363-75 156-135 232-355 453-208 208-355 338-808 713-766 633-1288 1142-1537 1501-305 440-449 908-415 1355 34 454 190 817 504 1174 58 66 264 256 277 256 4 0-23-44-58-97zm2095-529c212-43 445-176 659-378 129-121 368-406 360-429-2-6-95-93-208-193l-204-182-18 24c-105 137-202 250-307 355-191 192-351 304-540 380-145 58-234 72-415 67l-153-4 24 47c28 57 121 159 181 200 71 49 158 88 240 108 99 25 274 27 381 5zm-2672-5486c233-416 511-757 812-997 275-219 616-385 967-472 225-55 364-71 669-76 307-6 445 3 666 43 255 46 474 119 698 233l117 60-75-71c-377-356-881-572-1471-628-188-18-606-8-779 19-465 72-868 244-1222 521-180 141-402 382-575 625-130 183-342 550-326 566 11 11 446 277 454 278 4 1 33-45 65-101z"
          />
        </g>
      </svg> */}
     {/* <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="1000.000000pt" height="1605.000000pt" viewBox="0 0 900 1450"
 preserveAspectRatio="xMidYMid meet">

<g className="svg-container" transform="translate(0.000000,1605.000000) scale(0.120000,-0.130000)"
fill="none" stroke="none">
<path  ref={outlineLogoRef} d="M3641 12038 c-10 -3 -33 -9 -52 -12 -19 -3 -54 -12 -79 -20 -25 -7
-80 -14 -123 -15 -109 -2 -227 -28 -352 -78 -27 -11 -88 -28 -134 -37 -47 -10
-96 -25 -110 -35 -46 -31 -95 -49 -171 -61 -47 -8 -103 -27 -150 -50 -42 -21
-104 -43 -142 -49 -73 -12 -101 -23 -168 -63 -25 -15 -72 -37 -105 -49 -33
-12 -71 -32 -85 -45 -14 -12 -51 -35 -84 -49 -32 -14 -73 -37 -91 -50 -17 -14
-58 -34 -89 -45 -32 -11 -77 -37 -103 -60 -25 -22 -51 -40 -57 -40 -6 0 -35
-23 -65 -50 -30 -28 -60 -50 -67 -50 -6 0 -34 -20 -60 -44 -27 -24 -67 -53
-89 -64 -70 -37 -239 -212 -502 -520 -24 -28 -52 -72 -64 -98 -11 -27 -31 -60
-44 -74 -13 -14 -35 -50 -49 -80 -14 -30 -43 -79 -65 -109 -23 -29 -41 -59
-41 -66 0 -7 -18 -39 -39 -72 -23 -33 -48 -90 -60 -130 -11 -40 -33 -98 -50
-129 -17 -31 -41 -93 -52 -137 -12 -45 -33 -102 -48 -127 -38 -63 -39 -65 -56
-205 -10 -87 -24 -148 -45 -199 -29 -73 -33 -99 -71 -431 -6 -55 -19 -117 -29
-137 -11 -24 -17 -55 -15 -87 2 -39 -2 -54 -16 -67 -18 -16 -19 -40 -19 -538
0 -499 1 -522 19 -533 15 -9 18 -21 15 -62 -2 -28 1 -53 7 -56 17 -11 39 -76
39 -117 0 -21 4 -69 10 -106 5 -37 14 -121 20 -187 13 -152 15 -164 45 -230
14 -30 32 -99 40 -152 19 -122 27 -152 60 -231 14 -35 33 -99 41 -143 17 -87
32 -126 69 -177 13 -18 29 -59 36 -89 7 -32 28 -79 48 -107 19 -28 43 -78 52
-112 9 -34 28 -79 42 -101 14 -22 39 -69 55 -105 16 -35 40 -73 53 -84 14 -10
36 -39 51 -64 14 -25 36 -54 48 -65 12 -11 33 -42 47 -70 14 -27 43 -69 64
-92 22 -24 39 -47 39 -53 0 -19 200 -225 300 -310 52 -45 119 -106 202 -187
24 -23 64 -51 89 -61 25 -11 62 -34 82 -52 20 -17 64 -42 98 -55 35 -14 73
-34 85 -46 12 -11 60 -33 106 -48 46 -16 106 -40 133 -54 28 -15 98 -36 160
-48 159 -31 175 -36 199 -71 l16 -23 630 0 629 0 33 32 c37 35 68 45 218 69
58 9 149 31 204 50 54 18 134 38 178 44 92 13 119 22 168 55 19 13 78 36 130
50 52 14 111 37 130 50 19 13 64 31 100 40 83 20 103 29 148 64 20 15 57 36
82 45 25 10 62 31 83 47 20 17 65 41 100 53 34 13 85 38 114 57 28 19 73 48
99 64 25 17 74 47 107 69 34 21 69 48 78 60 9 12 37 31 61 44 25 12 53 31 64
43 10 12 39 35 64 52 25 17 66 50 92 74 26 23 52 43 57 43 9 0 117 107 295
290 24 25 54 65 66 90 13 25 36 60 51 78 16 18 40 55 54 82 13 27 30 52 36 55
6 4 30 37 53 74 24 36 53 75 66 86 12 11 31 37 41 58 11 21 35 55 53 75 18 20
39 55 46 77 7 22 28 72 45 110 45 98 44 92 60 245 8 75 21 157 30 181 27 76
44 186 55 348 6 86 15 192 20 236 6 44 10 126 10 183 0 73 4 112 16 133 22 43
22 526 0 585 -8 21 -17 82 -21 134 -7 111 -27 213 -46 237 -8 9 -29 33 -46 52
-18 20 -33 40 -33 44 0 25 -271 116 -384 129 -50 6 -390 12 -756 14 -366 2
-764 7 -885 9 -261 7 -344 -4 -450 -58 -39 -19 -96 -43 -129 -53 -35 -11 -64
-27 -73 -41 -8 -12 -34 -35 -58 -50 -24 -15 -50 -38 -56 -51 -7 -12 -35 -39
-61 -58 -27 -19 -51 -41 -54 -48 -3 -8 -24 -27 -47 -42 -51 -33 -206 -187
-240 -237 -14 -20 -39 -49 -57 -64 -18 -15 -45 -52 -59 -83 l-26 -55 -5 -505
c-4 -440 -7 -509 -21 -530 -47 -72 -31 -124 56 -180 58 -38 72 -42 157 -50 51
-5 245 -10 430 -10 l338 0 31 -28 31 -28 -21 -43 c-20 -39 -33 -116 -56 -342
-12 -115 -59 -145 -217 -137 -72 3 -96 9 -145 35 -32 16 -96 38 -143 47 -66
13 -97 25 -140 55 -30 21 -65 41 -78 45 -12 4 -45 28 -72 54 -88 83 -155 143
-166 150 -6 4 -24 28 -42 53 -17 26 -38 49 -46 52 -8 3 -26 28 -40 55 -13 26
-41 68 -62 93 -20 24 -50 71 -65 104 -16 33 -37 74 -47 90 -10 17 -25 55 -35
86 -9 31 -29 74 -43 95 -34 49 -38 62 -62 176 -11 52 -32 119 -47 149 -18 38
-32 94 -46 189 -11 74 -24 151 -29 170 -6 19 -10 51 -10 70 -1 19 -8 53 -16
75 -27 69 -38 230 -38 580 -1 331 10 517 34 580 11 29 42 169 60 270 10 58 46
183 69 235 5 14 19 57 31 96 11 39 32 89 46 110 15 22 38 70 51 109 13 38 36
86 52 105 15 19 38 55 50 79 13 24 35 55 49 70 15 14 38 42 52 61 41 58 123
140 160 160 19 10 44 28 55 40 26 29 108 70 138 70 31 0 113 -72 131 -114 7
-17 18 -54 25 -83 7 -29 26 -72 42 -96 19 -30 35 -75 48 -138 11 -52 29 -119
40 -149 33 -90 51 -169 61 -273 5 -54 19 -129 30 -165 26 -82 45 -174 65 -317
19 -124 29 -152 76 -217 59 -80 105 -84 194 -18 28 21 64 45 80 53 17 8 43 29
60 46 16 17 45 36 65 41 20 5 64 28 98 50 34 21 90 47 124 55 35 9 90 31 123
50 33 18 96 45 139 59 44 15 91 35 105 45 14 10 58 28 96 41 39 12 91 35 118
51 26 16 80 38 119 49 40 11 97 35 128 54 30 18 86 44 124 56 38 12 87 35 110
50 23 15 59 33 81 40 54 17 109 45 124 64 7 8 36 23 64 32 56 18 78 31 145 81
24 18 50 33 57 33 7 0 39 25 70 55 31 30 60 55 66 55 14 0 79 139 79 169 0 14
-6 52 -14 85 -8 34 -21 95 -29 137 -9 42 -28 108 -45 145 -16 38 -37 91 -46
117 -10 26 -35 69 -55 95 -20 26 -43 62 -51 81 -7 18 -29 51 -47 74 -19 22
-41 54 -50 71 -41 81 -314 344 -438 423 -27 18 -56 41 -62 52 -7 11 -27 28
-45 37 -18 9 -49 31 -68 50 -19 18 -53 40 -75 50 -22 9 -61 31 -88 50 -26 19
-50 34 -53 34 -14 0 -109 53 -136 75 -16 13 -60 34 -97 45 -38 11 -79 28 -92
39 -39 30 -80 47 -156 66 -40 9 -92 29 -116 45 -53 33 -91 46 -185 60 -41 6
-90 18 -110 26 -95 41 -251 70 -407 78 -80 3 -202 27 -230 44 -13 8 -182 9
-204 0z m464 -371 c11 -2 38 -8 60 -11 22 -4 78 -18 125 -32 47 -13 141 -33
210 -44 104 -17 134 -26 180 -54 36 -22 83 -39 135 -50 52 -11 99 -28 136 -51
30 -19 78 -42 105 -51 27 -9 68 -30 92 -46 24 -17 65 -38 92 -47 46 -16 117
-62 214 -138 23 -18 61 -45 86 -60 37 -22 144 -125 282 -270 14 -15 39 -40 55
-54 42 -39 98 -109 118 -149 9 -19 32 -53 50 -75 34 -43 155 -351 155 -396 0
-13 -6 -33 -14 -44 -24 -35 -123 -96 -185 -116 -57 -17 -97 -36 -168 -79 -17
-10 -48 -22 -68 -26 -19 -3 -52 -18 -73 -32 -50 -34 -107 -59 -167 -72 -28 -6
-73 -26 -101 -46 -33 -22 -75 -39 -116 -48 -36 -8 -86 -26 -112 -41 -44 -26
-48 -26 -71 -11 -35 23 -83 130 -120 269 -13 49 -37 110 -54 135 -16 26 -35
66 -42 90 -7 23 -27 59 -44 80 -18 20 -46 62 -64 93 -17 31 -45 67 -61 79 -17
13 -40 38 -51 57 -12 18 -33 40 -47 48 -15 7 -36 28 -47 45 -11 17 -42 43 -68
56 -26 14 -67 40 -91 58 -24 18 -65 38 -91 45 -26 6 -73 24 -104 40 -72 36
-162 53 -281 53 -157 -1 -265 -17 -337 -52 -35 -17 -91 -36 -124 -42 -44 -7
-71 -19 -100 -44 -22 -19 -64 -45 -92 -59 -28 -15 -67 -41 -86 -58 -20 -18
-53 -43 -73 -55 -21 -13 -38 -27 -38 -32 0 -4 -20 -30 -45 -58 -25 -28 -55
-71 -66 -97 -11 -26 -36 -63 -54 -83 -18 -21 -40 -53 -50 -72 -9 -19 -30 -49
-46 -66 -16 -17 -38 -54 -49 -83 -10 -29 -33 -74 -49 -100 -18 -27 -40 -85
-52 -132 -12 -46 -34 -105 -50 -131 -16 -27 -37 -86 -49 -140 -12 -51 -27
-109 -35 -128 -43 -107 -84 -407 -85 -620 -1 -74 -6 -129 -15 -155 -20 -55
-21 -344 -1 -383 7 -15 16 -67 20 -117 8 -93 19 -231 34 -395 4 -52 13 -104
20 -116 23 -42 43 -112 62 -216 11 -60 30 -132 44 -160 14 -29 32 -84 41 -123
29 -126 35 -142 64 -179 17 -21 39 -66 51 -102 12 -36 32 -77 45 -93 13 -15
36 -59 50 -97 14 -38 36 -80 49 -94 13 -14 32 -41 41 -60 10 -19 33 -52 51
-72 18 -21 45 -57 60 -80 15 -24 47 -65 71 -93 24 -27 65 -74 91 -103 26 -30
60 -66 76 -80 98 -89 125 -111 165 -131 24 -12 60 -35 80 -50 20 -16 61 -37
91 -46 30 -10 80 -30 110 -45 78 -39 119 -49 260 -61 165 -15 281 -15 415 0
139 15 179 26 230 61 22 15 64 36 93 45 30 10 68 29 85 44 18 15 48 38 67 51
47 31 170 151 170 166 0 6 20 28 45 48 25 21 45 43 45 50 0 6 22 38 50 71 32
37 55 77 65 110 8 28 28 71 45 96 16 24 37 69 46 99 9 30 32 107 52 170 50
163 48 292 -10 425 -11 28 -27 64 -34 82 -8 17 -14 35 -14 40 0 4 -29 36 -64
71 -62 62 -65 63 -143 77 -48 8 -163 15 -292 16 -139 1 -233 6 -269 15 -32 7
-82 13 -113 14 -85 0 -102 31 -115 195 -17 219 -2 663 24 712 8 14 25 24 45
27 42 7 376 17 497 16 922 -10 1126 -16 1150 -29 17 -10 60 -15 135 -16 61 -1
123 -8 140 -15 17 -6 64 -16 105 -21 93 -12 139 -34 164 -78 17 -30 21 -65 29
-280 18 -448 10 -765 -23 -886 -10 -38 -23 -101 -30 -140 -44 -282 -49 -299
-87 -377 -13 -26 -29 -74 -37 -105 -7 -32 -20 -74 -29 -93 -45 -105 -112 -237
-136 -271 -16 -21 -34 -59 -41 -85 -8 -27 -27 -61 -46 -79 -18 -18 -44 -51
-58 -73 -14 -23 -35 -46 -46 -52 -11 -6 -29 -28 -39 -48 -24 -48 -170 -197
-236 -242 -28 -18 -53 -38 -57 -44 -17 -28 -46 -54 -75 -70 -18 -9 -37 -25
-43 -36 -6 -10 -32 -34 -58 -52 -26 -17 -59 -43 -73 -58 -14 -14 -50 -34 -80
-44 -30 -11 -71 -34 -92 -52 -21 -17 -59 -37 -84 -45 -25 -7 -69 -28 -97 -47
-28 -19 -77 -45 -110 -58 -32 -13 -78 -35 -102 -49 -25 -15 -77 -33 -117 -41
-83 -17 -215 -58 -255 -78 -31 -15 -152 -42 -229 -50 -29 -3 -78 -13 -110 -21
-31 -8 -77 -15 -101 -15 -24 0 -72 -7 -106 -16 -91 -24 -521 -24 -586 0 -25
10 -67 17 -95 17 -27 0 -95 11 -150 24 -55 13 -131 29 -170 35 -43 7 -85 21
-108 36 -35 23 -167 64 -207 64 -9 0 -42 18 -74 41 -31 22 -76 47 -100 55 -24
8 -61 30 -82 48 -22 18 -61 43 -87 54 -26 12 -74 43 -105 69 -101 83 -393 377
-412 415 -11 20 -37 57 -59 82 -22 26 -46 64 -52 86 -7 22 -27 58 -45 79 -19
21 -46 63 -61 92 -14 30 -33 60 -40 67 -19 19 -37 58 -58 120 -9 30 -30 69
-46 87 -16 18 -29 40 -29 48 0 9 -4 19 -10 22 -5 3 -10 14 -10 24 0 9 -18 54
-40 99 -22 46 -48 118 -59 160 -11 43 -33 102 -50 133 -22 40 -36 89 -51 173
-12 65 -34 150 -50 189 -32 81 -46 151 -55 282 -4 50 -16 135 -27 190 -17 87
-19 142 -19 425 0 185 5 349 11 380 6 30 14 102 19 160 15 167 40 372 50 405
6 17 16 48 25 70 8 22 24 99 36 170 23 137 42 211 70 260 9 17 25 71 35 120
21 107 28 129 61 176 13 19 31 68 40 109 15 74 33 117 65 159 10 13 26 50 35
82 9 33 32 81 50 107 19 26 43 75 55 109 11 34 34 79 50 99 16 21 38 57 49 82
11 24 33 60 50 78 16 19 41 57 55 84 13 27 30 52 36 55 6 4 28 34 49 67 45 68
90 125 140 174 19 18 42 42 50 51 8 10 33 33 54 53 21 19 46 44 55 54 9 11 30
33 46 48 17 15 33 31 37 35 44 52 185 173 200 173 5 0 30 18 56 39 26 21 67
49 92 61 25 13 61 37 81 55 24 21 55 37 89 44 29 6 93 31 142 56 50 25 100 45
112 45 11 1 55 14 96 31 69 27 200 53 325 63 61 5 512 -1 540 -7z m-2117 -520
c3 -21 -5 -36 -30 -60 -18 -18 -44 -49 -58 -69 -14 -21 -28 -38 -31 -38 -13 0
-58 -52 -72 -83 -9 -18 -28 -43 -43 -57 -15 -14 -39 -52 -54 -85 -16 -33 -40
-71 -55 -85 -14 -13 -34 -43 -44 -65 -10 -23 -32 -57 -48 -76 -17 -18 -43 -58
-57 -88 -15 -29 -38 -64 -51 -77 -13 -12 -33 -53 -45 -89 -12 -36 -36 -87 -54
-113 -18 -27 -38 -74 -45 -105 -8 -37 -24 -71 -46 -97 -33 -40 -39 -54 -69
-161 -9 -30 -27 -73 -42 -94 -15 -23 -32 -70 -41 -114 -9 -42 -31 -107 -50
-145 -22 -43 -42 -107 -54 -165 -20 -103 -38 -170 -50 -186 -20 -27 -69 -353
-69 -459 0 -32 -5 -66 -10 -77 -6 -11 -15 -72 -19 -137 -5 -65 -13 -128 -20
-139 -17 -33 -14 -345 4 -413 10 -36 15 -104 15 -197 0 -99 4 -156 15 -186 8
-24 24 -145 35 -269 18 -203 23 -234 51 -303 18 -47 38 -125 50 -199 25 -158
32 -188 58 -229 12 -19 30 -76 41 -127 11 -50 29 -104 40 -120 30 -42 47 -88
64 -170 9 -42 28 -92 45 -119 16 -25 39 -71 51 -101 12 -30 34 -68 50 -85 15
-16 38 -58 51 -93 12 -35 35 -81 50 -101 15 -21 37 -58 49 -82 12 -23 59 -84
105 -134 45 -50 88 -102 95 -115 16 -30 125 -138 171 -170 19 -13 54 -41 78
-62 24 -21 49 -38 56 -38 7 0 35 -19 61 -43 27 -24 65 -53 85 -65 19 -12 44
-31 55 -43 10 -12 42 -33 69 -46 28 -14 62 -36 77 -48 15 -12 62 -34 106 -48
44 -14 101 -39 127 -56 26 -17 72 -35 102 -41 64 -14 108 -32 144 -61 21 -16
62 -26 185 -44 88 -12 175 -29 195 -38 19 -8 60 -17 90 -21 30 -3 77 -11 104
-16 28 -5 96 -14 152 -19 105 -10 143 -22 143 -46 0 -30 -47 -45 -190 -61 -80
-9 -183 -19 -230 -23 -47 -4 -98 -13 -115 -20 -35 -15 -278 -8 -335 9 -19 6
-89 17 -155 26 -133 17 -167 25 -239 61 -26 13 -100 35 -163 48 -63 13 -131
34 -151 46 -20 12 -68 32 -106 45 -40 14 -84 38 -106 58 -21 19 -60 44 -86 56
-27 11 -58 29 -69 40 -11 10 -47 32 -80 48 -33 17 -73 44 -89 61 -17 17 -35
31 -42 31 -15 0 -226 206 -262 254 -12 17 -56 67 -97 111 -94 100 -158 188
-185 251 -12 27 -36 65 -54 84 -19 19 -42 53 -52 75 -10 22 -21 42 -24 45 -24
20 -61 84 -74 129 -9 30 -29 75 -45 100 -16 25 -39 78 -49 117 -21 76 -30 95
-66 148 -12 19 -31 71 -40 116 -10 45 -31 118 -47 162 -17 47 -37 134 -49 213
-11 79 -30 160 -44 197 -28 69 -41 149 -51 303 -4 55 -10 143 -15 195 -5 52
-10 147 -10 210 0 63 -7 144 -15 180 -20 90 -20 391 0 485 8 38 15 95 15 126
0 31 4 78 9 105 5 27 11 101 12 164 3 124 17 219 54 345 12 44 28 121 34 170
20 150 31 197 62 263 17 34 38 102 49 150 21 98 34 137 49 146 6 4 24 53 42
109 20 66 43 117 64 144 21 29 36 63 44 103 8 40 22 71 40 93 16 18 41 57 56
87 15 30 41 70 57 88 16 19 40 57 53 85 26 54 64 107 140 192 24 28 72 84 107
125 84 100 201 212 266 257 30 20 56 42 59 50 3 8 19 21 36 29 16 9 51 35 76
59 25 23 62 50 81 60 19 9 50 29 69 43 40 30 98 52 126 49 14 -1 21 -11 23
-30z m2202 -706 c19 -11 65 -35 101 -54 73 -38 177 -135 208 -194 10 -21 33
-56 50 -77 17 -22 39 -64 47 -95 9 -31 32 -87 50 -126 19 -38 41 -101 50 -140
17 -76 33 -127 70 -222 41 -106 33 -135 -54 -173 -25 -11 -53 -27 -62 -34 -18
-16 -179 -76 -203 -76 -35 0 -66 44 -88 125 -12 44 -28 102 -35 129 -8 27 -19
99 -25 160 -12 125 -23 174 -50 229 -11 21 -31 81 -45 135 -14 55 -38 115 -54
140 -16 24 -39 74 -51 110 -12 37 -32 78 -45 93 -27 28 -29 41 -14 70 15 26
101 26 150 0z m-122 -2463 c17 -17 15 -134 -4 -198 -14 -47 -14 -57 -1 -94 22
-59 31 -370 12 -405 -23 -44 -197 -191 -226 -191 -9 0 -27 9 -40 19 l-24 19 0
314 c0 234 3 322 13 350 16 44 130 163 176 183 39 17 79 18 94 3z m749 -912
c37 -32 26 -51 -53 -91 -33 -17 -78 -45 -99 -62 -68 -53 -110 -60 -290 -48
-153 9 -180 14 -203 35 -30 28 -19 45 46 76 32 14 71 39 88 56 50 47 98 57
301 57 179 1 182 1 210 -23z m262 -312 c22 -16 23 -21 19 -118 -3 -79 -8 -110
-25 -141 -12 -22 -38 -74 -58 -115 -21 -41 -53 -91 -74 -111 -20 -20 -46 -48
-58 -62 -17 -22 -30 -27 -66 -27 -37 0 -46 4 -55 26 -9 19 -9 30 0 47 15 28
37 207 38 308 0 95 6 102 123 163 95 50 120 55 156 30z"/>
</g>
</svg> */}