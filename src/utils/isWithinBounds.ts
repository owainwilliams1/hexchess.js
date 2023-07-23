import { Vector } from "vector2d"

function isWithinBounds(coord: Vector): boolean {
    if (
      Math.abs(coord.x) > 5 ||
      Math.abs(coord.y) > 5 ||
      Math.abs(coord.x - coord.y) > 5
    ) {
      return false
    }

    return true
  }

  export default isWithinBounds;