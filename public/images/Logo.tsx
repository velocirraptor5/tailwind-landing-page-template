import { motion } from 'framer-motion';

export default function Logo() {
  const icon = {
    hidden: {
      pathLength: 0,
      fill: 'rgba(255, 255, 255, 0)',
    },
    visible: {
      pathLength: 1,
    },
  };
  return (
    <svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 959 874">
      <motion.path
        fill="#b1f1f3"
        variants={icon}
        initial="hidden"
        animate="visible"
        d="
  M 757.91 434.94
  C 756.62 434.58 755.28 434.19 754.07 433.55
  Q 702.74 406.30 650.67 380.46
  Q 650.20 380.23 650.16 379.71
  Q 649.83 375.78 648.90 372.09
  Q 640.63 339.13 615.19 316.80
  C 596.21 300.14 574.01 290.00 550.80 280.72
  Q 549.24 280.09 547.88 279.14
  Q 547.44 278.83 547.72 278.37
  Q 554.73 266.83 560.28 254.55
  C 562.72 249.13 569.42 243.36 573.97 238.54
  C 581.45 230.59 590.08 223.50 597.93 215.92
  A 0.35 0.34 78.9 0 1 598.49 216.30
  Q 592.17 231.98 584.57 246.66
  C 580.36 254.80 574.33 264.43 569.30 273.36
  Q 569.02 273.85 569.55 274.04
  C 614.82 290.04 649.55 317.21 662.73 365.28
  C 663.18 366.95 664.07 368.68 664.74 370.30
  Q 664.94 370.78 665.41 371.01
  L 776.90 426.48
  A 1.37 1.37 0.0 0 1 777.61 428.06
  Q 773.01 445.35 763.59 460.37
  C 747.57 485.90 726.35 512.10 698.04 523.00
  C 693.86 524.62 691.59 525.38 686.96 524.49
  C 674.09 522.01 661.51 519.51 648.28 517.64
  C 633.25 515.51 618.97 514.61 604.49 507.89
  Q 603.69 507.52 604.57 507.54
  C 608.43 507.65 612.43 506.43 615.15 506.03
  Q 638.36 502.56 663.32 503.71
  Q 674.39 504.21 684.17 507.13
  Q 688.71 508.49 691.13 508.45
  C 707.05 508.17 724.99 485.07 735.34 474.14
  C 736.96 472.44 738.01 470.63 739.26 468.68
  Q 739.55 468.22 740.04 467.99
  Q 743.74 466.19 744.89 462.20
  Q 745.01 461.79 744.58 461.79
  L 744.25 461.79
  Q 743.94 461.80 744.02 462.10
  Q 744.29 463.11 743.55 463.56
  Q 742.83 463.99 742.78 463.15
  L 742.74 462.25
  Q 742.71 461.69 743.25 461.53
  Q 747.75 460.17 749.13 455.65
  A 0.52 0.51 3.4 0 0 748.54 454.99
  C 743.28 456.02 738.69 455.10 733.37 454.79
  Q 724.06 454.25 719.99 445.74
  C 717.47 440.47 724.16 435.13 728.72 434.20
  Q 729.22 434.10 729.67 434.32
  Q 740.81 439.75 752.99 441.70
  C 755.66 442.12 757.50 438.19 758.20 435.44
  Q 758.31 435.05 757.91 434.94
  Z"
      />
      <motion.path
        fill="#aaeff1"
        variants={icon}
        initial="hidden"
        animate="visible"
        d="
  M 658.72 439.95
  Q 662.95 433.99 669.87 434.96
  C 682.66 436.74 679.80 455.26 665.72 453.73
  C 660.21 453.13 658.66 446.02 658.68 441.59
  Q 658.68 440.48 658.16 441.46
  L 657.90 441.94
  Q 657.63 442.43 657.09 442.53
  C 646.52 444.47 636.62 447.33 626.21 449.84
  Q 623.98 450.38 626.00 449.30
  Q 628.01 448.24 632.01 447.04
  Q 648.48 442.14 658.03 440.39
  Q 658.46 440.31 658.72 439.95
  Z"
      />
      <motion.path
        fill="#aaeff1"
        variants={icon}
        initial="hidden"
        animate="visible"
        d="
  M 531.07 659.48
  Q 532.40 654.16 534.71 650.47
  C 549.78 626.38 562.61 600.95 574.45 575.13
  C 579.46 564.21 589.15 553.95 597.83 545.77
  C 598.80 544.86 600.20 543.03 601.76 542.15
  Q 602.89 541.52 602.14 542.57
  C 594.32 553.69 588.16 567.75 584.91 578.73
  Q 575.93 609.12 562.48 632.46
  Q 551.52 651.46 539.05 675.55
  Q 531.98 689.22 528.58 703.25
  Q 528.49 703.63 528.35 703.26
  Q 523.78 690.57 520.49 677.50
  C 517.26 664.69 515.15 649.19 512.44 635.07
  Q 510.37 624.32 510.26 617.76
  C 509.93 597.78 515.65 577.34 524.47 559.52
  C 537.15 533.86 552.55 511.39 574.14 492.36
  C 578.58 488.45 584.89 483.89 590.08 479.44
  A 0.37 0.37 0.0 0 1 590.69 479.79
  Q 589.54 486.59 592.34 492.72
  Q 592.54 493.17 592.19 493.51
  Q 572.17 512.66 556.93 534.92
  Q 553.98 539.22 552.34 544.57
  Q 552.19 545.07 552.70 545.00
  Q 565.18 543.34 576.72 538.35
  A 0.33 0.32 13.6 0 1 577.06 538.90
  C 565.77 547.96 555.45 558.01 544.07 567.02
  C 540.63 569.75 538.59 571.61 534.01 572.76
  C 530.21 573.72 526.33 605.43 526.16 609.68
  Q 525.18 634.80 530.78 659.48
  Q 530.92 660.07 531.07 659.48
  Z"
      />
      <motion.path
        fill="#a3edef"
        variants={icon}
        initial="hidden"
        animate="visible"
        d="
  M 582.78 382.37
  Q 582.24 381.73 581.45 382.00
  C 562.81 388.34 540.83 387.67 520.18 390.83
  Q 492.83 395.00 483.19 397.43
  Q 464.98 402.00 446.80 406.66
  Q 446.07 406.85 446.07 406.09
  L 446.07 405.43
  Q 446.07 404.75 446.75 404.75
  L 448.10 404.75
  Q 448.59 404.75 449.06 404.62
  Q 483.31 395.25 518.37 389.76
  C 539.39 386.46 563.87 386.98 581.02 380.46
  A 0.58 0.58 0.0 0 0 581.26 379.54
  C 577.30 374.95 574.37 369.50 576.32 363.52
  C 578.00 358.33 583.15 355.45 588.22 357.94
  C 592.25 359.92 594.32 365.07 595.74 369.25
  C 596.91 372.71 616.16 378.69 620.02 379.69
  Q 620.41 379.79 620.34 380.19
  L 618.01 394.61
  A 0.54 0.54 0.0 0 1 617.31 395.03
  Q 603.52 390.25 589.37 386.34
  C 586.63 385.58 584.47 384.40 582.78 382.37
  Z"
      />
      <motion.ellipse
        fill="#a3edef"
        variants={icon}
        initial="hidden"
        animate="visible"
        cx="0.00"
        cy="0.00"
        transform="translate(552.30,411.47) rotate(97.3)"
        rx="8.79"
        ry="8.05"
      />
      <motion.rect
        fill="#a3edef"
        variants={icon}
        initial="hidden"
        animate="visible"
        x="-0.43"
        y="-25.72"
        transform="translate(532.19,444.79) rotate(39.9)"
        width="0.86"
        height="51.44"
        rx="0.26"
      />
      <motion.path
        fill="#a3edef"
        variants={icon}
        initial="hidden"
        animate="visible"
        d="
  M 608.50 453.74
  C 613.62 444.45 625.22 444.34 626.24 456.36
  C 627.26 468.30 610.12 468.32 607.83 458.02
  Q 607.34 455.83 608.50 453.74
  Z"
      />
      <motion.path
        fill="#9bebed"
        variants={icon}
        initial="hidden"
        animate="visible"
        d="
  M 605.84 454.58
  Q 606.26 454.59 606.25 455.02
  Q 606.25 455.16 606.25 455.29
  Q 606.24 455.54 605.99 455.56
  Q 596.06 456.17 579.24 458.45
  Q 545.69 462.99 523.70 466.63
  C 514.40 468.17 506.15 470.64 497.42 473.56
  A 0.34 0.34 0.0 0 1 497.09 472.98
  C 499.98 470.41 506.47 469.38 510.20 468.17
  Q 515.48 466.45 520.50 465.63
  Q 558.26 459.46 596.28 455.03
  Q 600.66 454.52 605.84 454.58
  Z"
      />
      <motion.path
        fill="#9bebed"
        variants={icon}
        initial="hidden"
        animate="visible"
        d="
  M 442.40 663.67
  C 436.87 644.66 435.67 626.28 438.71 606.61
  Q 441.11 591.03 444.36 576.09
  A 0.34 0.33 53.5 0 1 445.02 576.19
  C 440.96 626.87 461.71 680.41 489.27 723.13
  C 497.29 735.56 507.27 748.27 516.77 760.75
  A 0.48 0.48 0.0 0 1 516.12 761.43
  C 473.59 732.32 437.90 682.92 420.60 635.67
  Q 420.53 635.46 420.74 635.49
  Q 420.88 635.50 421.02 635.50
  Q 421.22 635.49 421.32 635.66
  C 426.52 644.91 433.27 656.82 442.06 663.90
  Q 442.59 664.32 442.40 663.67
  Z"
      />
      <motion.path
        fill="#94eaeb"
        variants={icon}
        initial="hidden"
        animate="visible"
        d="
  M 535.34 220.54
  Q 523.13 227.06 510.32 232.35
  C 493.19 239.42 476.11 246.88 458.74 253.35
  Q 451.16 256.17 444.61 260.90
  C 436.32 266.89 427.69 271.30 418.35 275.40
  Q 412.83 277.82 409.59 282.86
  Q 409.39 283.17 409.09 282.95
  C 407.51 281.75 433.20 248.84 437.53 247.00
  Q 500.25 220.27 562.93 194.12
  A 0.29 0.29 0.0 0 1 563.31 194.49
  C 554.03 219.56 544.08 246.10 534.19 271.84
  C 528.35 287.03 522.67 302.67 515.36 317.22
  C 508.33 331.22 498.76 342.01 486.53 351.17
  C 481.22 355.15 474.52 358.63 468.38 362.06
  Q 467.92 362.32 468.00 362.84
  C 468.73 367.81 468.96 371.48 465.62 374.88
  C 461.62 378.94 454.78 379.03 451.35 374.26
  A 1.88 1.88 0.0 0 0 448.89 373.72
  C 432.05 383.35 414.62 391.95 398.07 400.58
  Q 375.93 412.12 353.86 423.78
  Q 352.58 424.46 351.50 424.23
  A 0.52 0.52 0.0 0 1 351.38 423.25
  Q 365.22 416.58 378.50 408.99
  C 384.08 405.81 391.34 402.61 397.50 399.27
  C 414.68 389.94 432.65 381.41 449.26 372.04
  Q 450.26 371.48 449.89 370.39
  Q 448.37 365.90 449.23 361.21
  Q 449.34 360.62 449.80 360.26
  Q 458.73 353.18 467.04 360.84
  Q 467.39 361.16 467.76 360.86
  C 476.47 353.78 484.97 348.18 490.51 337.54
  Q 496.35 326.32 499.41 317.85
  Q 515.82 272.44 534.02 227.72
  Q 535.27 224.66 535.84 220.90
  Q 535.95 220.22 535.34 220.54
  Z"
      />
      <motion.path
        fill="#94eaeb"
        variants={icon}
        initial="hidden"
        animate="visible"
        d="
  M 402.56 365.56
  Q 400.41 365.81 399.29 365.76
  Q 398.64 365.72 398.83 365.10
  C 398.90 364.84 399.27 364.58 399.58 364.54
  Q 424.06 361.37 439.31 360.04
  Q 442.21 359.79 447.53 360.09
  Q 448.04 360.11 447.94 360.62
  C 447.76 361.50 437.80 361.82 436.52 361.88
  C 425.15 362.36 413.86 364.26 402.56 365.56
  Z"
      />
      <motion.path
        fill="#94eaeb"
        variants={icon}
        initial="hidden"
        animate="visible"
        d="
  M 411.49 455.75
  A 0.27 0.27 0.0 0 0 411.04 455.51
  C 404.92 460.93 397.88 466.30 392.58 471.43
  C 378.91 484.67 367.22 499.38 358.32 516.36
  Q 338.05 555.03 324.29 596.47
  C 319.96 609.50 317.85 622.35 316.36 635.76
  Q 316.29 636.41 316.11 635.78
  C 312.85 624.57 307.94 612.15 305.16 602.68
  Q 299.59 583.76 295.06 561.24
  C 290.85 540.34 290.18 521.00 298.77 501.56
  Q 298.98 501.09 298.80 500.61
  C 297.99 498.33 296.76 495.55 296.80 493.35
  C 297.00 482.21 316.39 482.90 316.22 495.80
  C 316.14 501.74 311.42 504.64 305.81 505.35
  Q 305.27 505.42 305.31 505.96
  C 305.70 510.36 305.22 515.78 305.23 518.98
  C 305.35 549.02 311.49 578.10 317.17 607.55
  A 0.63 0.62 -34.0 0 0 318.31 607.77
  C 319.45 606.00 320.01 603.65 320.62 601.85
  C 330.57 572.51 342.34 543.34 357.27 516.15
  C 369.95 493.05 387.60 472.77 408.30 456.81
  Q 409.67 455.75 410.05 454.42
  Q 410.21 453.89 409.85 453.46
  C 397.06 438.06 421.31 425.98 428.51 439.78
  C 431.86 446.21 429.56 452.18 423.53 455.83
  Q 422.60 456.39 423.21 457.50
  Q 423.45 457.93 423.45 458.42
  C 423.69 487.88 426.99 517.19 430.40 546.37
  A 0.38 0.38 0.0 0 0 431.16 546.35
  Q 431.42 541.16 434.15 537.16
  Q 447.59 517.49 461.10 497.87
  Q 466.59 489.90 473.20 482.85
  Q 473.55 482.48 473.48 481.98
  C 473.16 479.61 472.43 477.21 473.06 474.95
  C 476.52 462.50 497.24 465.81 495.87 479.73
  C 494.72 491.33 480.54 491.86 474.27 484.63
  Q 473.95 484.26 473.64 484.63
  Q 453.90 507.96 438.20 534.19
  Q 435.27 539.08 433.61 544.54
  C 428.60 561.08 425.48 577.19 425.31 594.53
  A 0.08 0.08 0.0 0 1 425.15 594.55
  Q 419.99 577.68 417.24 560.34
  Q 413.11 534.30 410.59 508.05
  C 408.98 491.23 411.00 474.93 411.68 458.18
  C 411.71 457.44 411.38 456.63 411.49 455.75
  Z"
      />
      <motion.path
        fill="#8ce8e9"
        variants={icon}
        initial="hidden"
        animate="visible"
        d="
  M 396.32 676.40
  L 458.18 719.94
  A 0.33 0.32 -11.5 0 1 457.82 720.48
  C 445.49 712.94 432.87 703.94 421.43 696.22
  Q 409.02 687.83 397.00 678.88
  C 396.44 678.46 396.18 678.08 395.95 677.39
  Q 395.70 676.67 395.27 677.30
  C 389.78 685.43 379.46 682.76 378.50 672.98
  C 377.10 658.76 401.23 659.07 396.13 675.83
  Q 396.02 676.19 396.32 676.40
  Z"
      />
      <motion.path
        fill="#7ce4e5"
        variants={icon}
        initial="hidden"
        animate="visible"
        d="
  M 312.99 377.99
  C 312.70 379.55 312.02 386.16 310.78 386.81
  A 0.55 0.54 -11.0 0 1 309.98 386.28
  C 313.53 352.87 335.77 321.34 360.77 300.52
  Q 361.48 299.93 362.49 300.10
  Q 363.04 300.19 362.87 300.72
  Q 362.36 302.35 361.45 303.69
  C 347.65 324.09 335.52 347.11 322.66 368.42
  Q 321.24 370.78 320.95 373.23
  Q 320.87 373.90 321.50 373.69
  Q 327.35 371.79 330.25 371.30
  Q 354.64 367.19 374.25 366.40
  Q 377.61 366.26 379.82 364.63
  C 385.23 360.64 390.18 359.41 395.90 363.72
  Q 397.76 365.13 398.13 367.36
  C 400.57 381.78 377.32 385.34 377.70 368.69
  Q 377.72 368.14 377.17 368.21
  C 371.27 368.97 364.76 368.63 359.64 369.12
  Q 343.64 370.65 327.83 373.46
  C 326.24 373.74 323.24 374.68 320.88 374.96
  Q 320.46 375.01 320.27 375.39
  C 318.90 378.10 316.52 385.12 313.15 385.28
  Q 312.55 385.31 312.61 384.72
  L 313.31 378.03
  Q 313.76 373.72 312.99 377.99
  Z"
      />
      <motion.rect
        fill="#7ce4e5"
        variants={icon}
        initial="hidden"
        animate="visible"
        x="-0.51"
        y="-27.12"
        transform="translate(357.93,395.34) rotate(37.9)"
        width="1.02"
        height="54.24"
        rx="0.28"
      />
      <motion.ellipse
        fill="#7ce4e5"
        variants={icon}
        initial="hidden"
        animate="visible"
        cx="0.00"
        cy="0.00"
        transform="translate(341.40,428.84) rotate(-23.7)"
        rx="9.41"
        ry="8.66"
      />
      <motion.path
        fill="#73e2e3"
        variants={icon}
        initial="hidden"
        animate="visible"
        d="
  M 255.75 420.56
  Q 275.93 392.08 304.43 372.13
  A 0.25 0.25 0.0 0 1 304.79 372.45
  Q 300.95 379.84 297.11 387.15
  Q 287.40 405.62 271.55 424.80
  Q 264.09 433.83 256.52 438.78
  Q 241.46 448.63 227.67 460.25
  Q 227.27 460.59 227.57 460.16
  Q 241.71 440.37 255.75 420.56
  Z"
      />
      <motion.path
        fill="#73e2e3"
        variants={icon}
        initial="hidden"
        animate="visible"
        d="
  M 254.49 558.53
  Q 253.97 558.60 253.86 558.08
  C 250.11 539.98 249.33 522.15 249.77 503.75
  C 250.04 492.46 252.38 483.47 255.57 469.07
  Q 258.74 454.78 267.23 439.82
  C 271.19 432.83 287.14 424.85 294.44 421.44
  Q 295.25 421.06 295.70 421.07
  A 0.62 0.62 0.0 0 1 296.20 422.04
  Q 277.90 449.84 270.01 481.75
  C 263.24 509.17 258.42 531.49 257.13 557.54
  Q 257.10 558.17 256.48 558.25
  L 254.49 558.53
  Z"
      />
      <motion.path
        fill="#73e2e3"
        variants={icon}
        initial="hidden"
        animate="visible"
        d="
  M 215.49 646.37
  Q 214.87 646.10 214.74 645.50
  C 211.88 632.34 208.62 620.55 207.69 605.93
  C 205.42 570.30 214.30 533.70 230.67 502.27
  C 235.95 492.12 243.38 481.66 250.17 471.59
  A 0.32 0.32 0.0 0 1 250.76 471.79
  C 250.69 472.91 250.90 474.33 250.57 475.40
  C 247.34 486.13 244.87 498.01 241.84 507.78
  C 237.13 523.04 231.36 538.80 227.73 553.68
  Q 218.39 591.95 217.04 631.43
  Q 216.79 638.73 216.46 645.76
  A 0.70 0.70 0.0 0 1 215.49 646.37
  Z"
      />
    </svg>
  );
}
