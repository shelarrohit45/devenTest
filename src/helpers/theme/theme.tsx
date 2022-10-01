import { WP, HP, WDP, HDP } from "../../responsive";

const palette = {
  bgColor: "#F5F5F5",
  primary: "#227AC3",
  secondary: "#BDBCFC",
  dodger: "#1186E6",
  blue: "#3F86DD",
  magenta: "#D2D1FF",
  gunPowder: "#4B4B5B",
  arsenic: "#394855",
  cornFlowerBlue: "#444463",
  ral: "#ACAAFE",
  greyWhite: "#969696",
  transparentGrey: "rgba(128,128,128, 0.4)",
  transparentWhite: "rgba(225,225,225, 0.9)",
  lightGrey: "#CACADD",
  white: "#FFFFFF",
  black: "#000000",
  darkGreen: "#12872C",
  green: "#199C36",
  lightGreen: "#53B930",
  red: "#E13434",
  orange: "orange",
  yellow: "#FFEB3B",

  none: 0,
  t: WP(0.01),
  xs: WP(0.02),
  s: WP(0.03),
  m: WP(0.04),
  l: WP(0.05),
  xl: WP(0.06),
  xxl: WP(0.07),
  w10: WP(0.08),
  w11: WP(0.09),
  w12: WP(0.1),
  w13: WP(0.2),
  walf: WP(0.5),
  ht: HP(0.01),
  hxt: HP(0.015),
  hs: HP(0.02),
  hxs: HP(0.03),
  hm: HP(0.04),
  hl: HP(0.05),
  hxl: HP(0.06),
  hxxl: HP(0.07),
  h10: HP(0.08),
  h11: HP(0.09),
  h12: HP(0.1),
  half: HP(0.5),

  regular: "Poppins-Regular",
  medium: "Poppins-Medium",
  semibold: "Poppins-SemiBold",
  bold: "Poppins-Bold",
};

export const MyTheme = {
  colors: {
    bgColor: palette.bgColor,
    primary: palette.primary,
    secondary: palette.secondary,
    dodger: palette.dodger,
    blue: palette.blue,
    magenta: palette.magenta,
    greyWhite: palette.greyWhite,
    transparentGrey: palette.transparentGrey,
    transparentWhite: palette.transparentWhite,
    lightGrey: palette.lightGrey,
    white: palette.white,
    black: palette.black,
    green: palette.green,
    lightGreen: palette.lightGreen,
    darkGreen: palette.darkGreen,
    gunPowder: palette.gunPowder,
    arsenic: palette.arsenic,
    cornFlowerBlue: palette.cornFlowerBlue,
    red: palette.red,
    orange: palette.orange,
    yellow: palette.yellow,
  },

  /**
   * @example
   * xl: 10
   */
  margin: {
    none: palette.none,
    t: palette.t,
    s: palette.s,
    xs: palette.xs,
    m: palette.m,
    l: palette.l,
    xl: palette.xl,
    xxl: palette.xxl,
    w10: palette.w10,
    w11: palette.w11,
    w12: palette.w12,
    w13: palette.w13,
    walf: palette.walf,
    ht: palette.ht,
    hxt: palette.hxt,
    hs: palette.hs,
    hxs: palette.hxs,
    hm: palette.hm,
    hl: palette.hl,
    hxl: palette.hxl,
    hxxl: palette.hxxl,
    h10: palette.h10,
    h11: palette.h11,
    h12: palette.h12,
    half: palette.half,
  },
  fontsize: {
    none: palette.none,
    t: 11,
    xt: 12,
    s: 13,
    xs: 14,
    m: 15,
    l: 16,
    xl: 17,
    xxl: 19,
    ht: HDP(1.8),
    hxt: HDP(2),
    hs: HDP(2.1),
    hxs: HDP(2.2),
    hm: HDP(2.3),
    hl: HDP(2.4),
    hxl: HDP(2.6),
    hxxl: HDP(2.8),
  },
  fontsize1: {
    none: palette.none,
    t: WDP(3.4),
    xt: WDP(3.2),
    s: WDP(3.7),
    xs: WDP(3.5),
    m: WDP(4),
    l: WDP(5),
    xl: WDP(6),
    xxl: WDP(7),
    ht: HDP(1.8),
    hxt: HDP(2),
    hs: HDP(2.1),
    hxs: HDP(2.2),
    hm: HDP(2.3),
    hl: HDP(2.4),
    hxl: HDP(2.6),
    hxxl: HDP(2.8),
  },
  fontfamily: {
    regular: palette.regular,
    medium: palette.medium,
    semibold: palette.semibold,
    bold: palette.bold,
  },
  card: {
    simpleCard: {
      color: palette.primary,
      borderRadius: palette.t,
    },
  },

  header: {
    btitle1: {
      fontSize: HDP("4"),
      fontFamily: "Poppins-SemiBold",
    },
    mtitle1: {
      fontSize: HDP("4"),
      fontFamily: "Poppins-Medium",
    },
    title1: {
      fontSize: HDP("4"),
      fontFamily: "Poppins-Regular",
    },
    btitle2: {
      fontSize: 24,
      fontFamily: "Poppins-SemiBold",
    },
    mtitle2: {
      fontSize: 24,
      fontFamily: "Poppins-Medium",
    },
    title2: {
      fontSize: 24,
      fontFamily: "Poppins-Regular",
    },
    btitle3: {
      fontSize: 22,
      fontFamily: "Poppins-SemiBold",
    },
    mtitle3: {
      fontSize: 22,
      fontFamily: "Poppins-Medium",
    },
    title3: {
      fontSize: 22,
      fontFamily: "Poppins-Regular",
    },
    btitle4: {
      fontSize: 20,
      fontFamily: "Poppins-SemiBold",
    },
    mtitle4: {
      fontSize: 20,
      fontFamily: "Poppins-Medium",
    },
    title4: {
      fontSize: 20,
      fontFamily: "Poppins-Regular",
    },
    btitle5: {
      fontSize: 18,
      fontFamily: "Poppins-SemiBold",
    },
    mtitle5: {
      fontSize: 18,
      fontFamily: "Poppins-Medium",
    },
    title5: {
      fontSize: 18,
      fontFamily: "Poppins-Regular",
    },
    btitle6: {
      fontSize: 16,
      fontFamily: "Poppins-SemiBold",
    },
    mtitle6: {
      fontSize: 16,
      fontFamily: "Poppins-Medium",
    },
    title6: {
      fontSize: 16,
      fontFamily: "Poppins-Regular",
    },
    btitle61: {
      fontSize: 15,
      fontFamily: "Poppins-SemiBold",
    },
    mtitle61: {
      fontSize: 15,
      fontFamily: "Poppins-Medium",
    },
    title61: {
      fontSize: 15,
      fontFamily: "Poppins-Regular",
    },
    btitle7: {
      fontSize: 14,
      fontFamily: "Poppins-SemiBold",
    },
    mtitle7: {
      fontSize: 14,
      fontFamily: "Poppins-Medium",
    },
    title7: {
      fontSize: 14,
      fontFamily: "Poppins-Regular",
    },
    btitle71: {
      fontSize: 13,
      fontFamily: "Poppins-SemiBold",
    },
    mtitle71: {
      fontSize: 13,
      fontFamily: "Poppins-Medium",
    },
    title71: {
      fontSize: 13,
      fontFamily: "Poppins-Regular",
    },
    btitle8: {
      fontSize: 12,
      fontFamily: "Poppins-SemiBold",
    },
    mtitle8: {
      fontSize: 12,
      fontFamily: "Poppins-Medium",
    },
    title8: {
      fontSize: 12,
      fontFamily: "Poppins-Regular",
    },
    btitle9: {
      fontSize: 11,
      fontFamily: "Poppins-SemiBold",
    },
    mtitle9: {
      fontSize: 11,
      fontFamily: "Poppins-Medium",
    },
    title9: {
      fontSize: 11,
      fontFamily: "Poppins-Regular",
    },
    btitle10: {
      fontSize: 10,
      fontFamily: "Poppins-SemiBold",
    },
    mtitle10: {
      fontSize: 10,
      fontFamily: "Poppins-Medium",
    },
    title10: {
      fontSize: 10,
      fontFamily: "Poppins-Regular",
    },
    wbtitle1: {
      fontSize: WDP("8"),
      fontFamily: "Poppins-SemiBold",
    },
    wmtitle1: {
      fontSize: WDP("8"),
      fontFamily: "Poppins-Medium",
    },
    wtitle1: {
      fontSize: WDP("8"),
      fontFamily: "Poppins-Regular",
    },
    wbtitle2: {
      fontSize: WDP("6"),
      fontFamily: "Poppins-SemiBold",
    },
    wmtitle2: {
      fontSize: WDP("6"),
      fontFamily: "Poppins-Medium",
    },
    wtitle2: {
      fontSize: WDP("6"),
      fontFamily: "Poppins-Regular",
    },
    wbtitle3: {
      fontSize: WDP("5"),
      fontFamily: "Poppins-SemiBold",
    },
    wmtitle3: {
      fontSize: WDP("5"),
      fontFamily: "Poppins-Medium",
    },
    wtitle3: {
      fontSize: WDP("5"),
      fontFamily: "Poppins-Regular",
    },
    wbtitle4: {
      fontSize: WDP("4.5"),
      fontFamily: "Poppins-SemiBold",
    },
    wmtitle4: {
      fontSize: WDP("4.5"),
      fontFamily: "Poppins-Medium",
    },
    wtitle4: {
      fontSize: WDP("4.5"),
      fontFamily: "Poppins-Regular",
    },
    wbtitle5: {
      fontSize: WDP("4"),
      fontFamily: "Poppins-SemiBold",
    },
    wmtitle5: {
      fontSize: WDP("4"),
      fontFamily: "Poppins-Medium",
    },
    wtitle5: {
      fontSize: WDP("4"),
      fontFamily: "Poppins-Regular",
    },
    wbtitle6: {
      fontSize: WDP("3.9"),
      fontFamily: "Poppins-SemiBold",
    },
    wmtitle6: {
      fontSize: WDP("3.9"),
      fontFamily: "Poppins-Medium",
    },
    wtitle6: {
      fontSize: WDP("3.9"),
      fontFamily: "Poppins-Regular",
    },
    wbtitle7: {
      fontSize: WDP("3.5"),
      fontFamily: "Poppins-SemiBold",
    },
    wmtitle7: {
      fontSize: WDP("3.5"),
      fontFamily: "Poppins-Medium",
    },
    wtitle7: {
      fontSize: WDP("3.5"),
      fontFamily: "Poppins-Regular",
    },
    wbtitle8: {
      fontSize: WDP("2"),
      fontFamily: "Poppins-SemiBold",
    },
    wmtitle8: {
      fontSize: WDP("2"),
      fontFamily: "Poppins-Medium",
    },
    wtitle8: {
      fontSize: WDP("2"),
      fontFamily: "Poppins-Regular",
    },
  },

  header1: {
    btitle1: {
      fontSize: HDP("4"),
      fontFamily: "Poppins-SemiBold",
    },
    mtitle1: {
      fontSize: HDP("4"),
      fontFamily: "Poppins-Medium",
    },
    title1: {
      fontSize: HDP("4"),
      fontFamily: "Poppins-Regular",
    },
    btitle2: {
      fontSize: HDP("3.5"),
      fontFamily: "Poppins-SemiBold",
    },
    mtitle2: {
      fontSize: HDP("3.5"),
      fontFamily: "Poppins-Medium",
    },
    title2: {
      fontSize: HDP("3.5"),
      fontFamily: "Poppins-Regular",
    },
    btitle3: {
      fontSize: HDP("3"),
      fontFamily: "Poppins-SemiBold",
    },
    mtitle3: {
      fontSize: HDP("3"),
      fontFamily: "Poppins-Medium",
    },
    title3: {
      fontSize: HDP("3"),
      fontFamily: "Poppins-Regular",
    },
    btitle4: {
      fontSize: HDP("2.6"),
      fontFamily: "Poppins-SemiBold",
    },
    mtitle4: {
      fontSize: HDP("2.6"),
      fontFamily: "Poppins-Medium",
    },
    title4: {
      fontSize: HDP("2.6"),
      fontFamily: "Poppins-Regular",
    },
    btitle5: {
      fontSize: HDP("2.2"),
      fontFamily: "Poppins-SemiBold",
    },
    mtitle5: {
      fontSize: HDP("2.2"),
      fontFamily: "Poppins-Medium",
    },
    title5: {
      fontSize: HDP("2.2"),
      fontFamily: "Poppins-Regular",
    },
    btitle6: {
      fontSize: HDP("2"),
      fontFamily: "Poppins-SemiBold",
    },
    mtitle6: {
      fontSize: HDP("2"),
      fontFamily: "Poppins-Medium",
    },
    title6: {
      fontSize: HDP("2"),
      fontFamily: "Poppins-Regular",
    },
    btitle7: {
      fontSize: HDP("1.8"),
      fontFamily: "Poppins-SemiBold",
    },
    mtitle7: {
      fontSize: HDP("1.8"),
      fontFamily: "Poppins-Medium",
    },
    title7: {
      fontSize: HDP("1.8"),
      fontFamily: "Poppins-Regular",
    },
    btitle8: {
      fontSize: HDP("1.5"),
      fontFamily: "Poppins-SemiBold",
    },
    mtitle8: {
      fontSize: HDP("1.5"),
      fontFamily: "Poppins-Medium",
    },
    title8: {
      fontSize: HDP("1.5"),
      fontFamily: "Poppins-Regular",
    },
    wbtitle1: {
      fontSize: WDP("8"),
      fontFamily: "Poppins-SemiBold",
    },
    wmtitle1: {
      fontSize: WDP("8"),
      fontFamily: "Poppins-Medium",
    },
    wtitle1: {
      fontSize: WDP("8"),
      fontFamily: "Poppins-Regular",
    },
    wbtitle2: {
      fontSize: WDP("6"),
      fontFamily: "Poppins-SemiBold",
    },
    wmtitle2: {
      fontSize: WDP("6"),
      fontFamily: "Poppins-Medium",
    },
    wtitle2: {
      fontSize: WDP("6"),
      fontFamily: "Poppins-Regular",
    },
    wbtitle3: {
      fontSize: WDP("5"),
      fontFamily: "Poppins-SemiBold",
    },
    wmtitle3: {
      fontSize: WDP("5"),
      fontFamily: "Poppins-Medium",
    },
    wtitle3: {
      fontSize: WDP("5"),
      fontFamily: "Poppins-Regular",
    },
    wbtitle4: {
      fontSize: WDP("4.5"),
      fontFamily: "Poppins-SemiBold",
    },
    wmtitle4: {
      fontSize: WDP("4.5"),
      fontFamily: "Poppins-Medium",
    },
    wtitle4: {
      fontSize: WDP("4.5"),
      fontFamily: "Poppins-Regular",
    },
    wbtitle5: {
      fontSize: WDP("4"),
      fontFamily: "Poppins-SemiBold",
    },
    wmtitle5: {
      fontSize: WDP("4"),
      fontFamily: "Poppins-Medium",
    },
    wtitle5: {
      fontSize: WDP("4"),
      fontFamily: "Poppins-Regular",
    },
    wbtitle6: {
      fontSize: WDP("3.9"),
      fontFamily: "Poppins-SemiBold",
    },
    wmtitle6: {
      fontSize: WDP("3.9"),
      fontFamily: "Poppins-Medium",
    },
    wtitle6: {
      fontSize: WDP("3.9"),
      fontFamily: "Poppins-Regular",
    },
    wbtitle7: {
      fontSize: WDP("3.5"),
      fontFamily: "Poppins-SemiBold",
    },
    wmtitle7: {
      fontSize: WDP("3.5"),
      fontFamily: "Poppins-Medium",
    },
    wtitle7: {
      fontSize: WDP("3.5"),
      fontFamily: "Poppins-Regular",
    },
    wbtitle8: {
      fontSize: WDP("2"),
      fontFamily: "Poppins-SemiBold",
    },
    wmtitle8: {
      fontSize: WDP("2"),
      fontFamily: "Poppins-Medium",
    },
    wtitle8: {
      fontSize: WDP("2"),
      fontFamily: "Poppins-Regular",
    },
  },
};
