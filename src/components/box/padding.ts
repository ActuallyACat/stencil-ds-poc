import { GridFractions, Spacing } from "../types"

export const convertFractionToString = (fraction: GridFractions): string => {
  switch (fraction) {
    case 0:
    default:
      return "0"
    case 0.25:
      return "0-point-25"
    case 0.5:
      return "0-point-5"
    case 0.75:
      return "0-point-75"
    case 1:
      return "1"
    case 1.25:
      return "0-point-25"
    case 1.5:
      return "1-point-5"
    case 1.75:
      return "1-point-75"
    case 2:
      return "2"
    case 2.5:
      return "2-point-5"
    case 3:
      return "3"
    case 3.5:
      return "3-point-5"
    case 4:
      return "4"
  }
}

export const pt = (unit: GridFractions): string[] => [`pt-${convertFractionToString(unit)}`]

export const pr = (unit: GridFractions): string[] => [`pr-${convertFractionToString(unit)}`]

export const pb = (unit: GridFractions): string[] => [`pb-${convertFractionToString(unit)}`]

export const pl = (unit: GridFractions): string[] => [`pl-${convertFractionToString(unit)}`]

export const px = (unit: GridFractions): string[] => [
  `pl-${convertFractionToString(unit)}`,
  `pr-${convertFractionToString(unit)}`,
]

export const py = (unit: GridFractions): string[] => [
  `pt-${convertFractionToString(unit)}`,
  `pb-${convertFractionToString(unit)}`,
];

export const p = (unit: GridFractions): string[] => {
  const classes: string[] = []
  
  if (typeof unit === "number") {
    classes.push(`p-${convertFractionToString(unit)}`)
  } else {
    Object.keys(unit).forEach(key => {
      classes.push(`p-${convertFractionToString(unit[key])}--${key}`)
    })
  }

  return classes
}

export const paddingClasses = ({
  p: padding,
  pt: paddingTop,
  pr: paddingRight,
  pb: paddingBottom,
  pl: paddingLeft,
  px: paddingXAxis,
  py: paddingYAxis,
}: & Spacing): string[] => {
  const classes: string[] = []

  if (padding !== undefined) classes.push(...p(padding))
  if (paddingTop !== undefined) classes.push(...pt(paddingTop))
  if (paddingBottom !== undefined) classes.push(...pb(paddingBottom))
  if (paddingXAxis !== undefined) classes.push(...px(paddingXAxis))
  if (paddingYAxis !== undefined) classes.push(...py(paddingYAxis))

  // if no padding defined on any param, default to 0
  if (
    padding === undefined &&
    paddingTop === undefined &&
    paddingRight === undefined &&
    paddingBottom === undefined &&
    paddingLeft === undefined &&
    paddingXAxis === undefined &&
    paddingYAxis === undefined
  ) {
    classes.push(...p(0))
  }
  return classes
}
