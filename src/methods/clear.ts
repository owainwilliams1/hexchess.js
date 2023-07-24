import { WHITE } from '../consts'
import { HexChess } from '../hexchess'

function clear(this: HexChess) {
  this._board = {
    f11: null,
    e10: null,
    g10: null,
    d9: null,
    f10: null,
    h9: null,
    c8: null,
    e9: null,
    g9: null,
    i8: null,
    b7: null,
    d8: null,
    f9: null,
    h8: null,
    j7: null,
    a6: null,
    c7: null,
    e8: null,
    g8: null,
    i7: null,
    k6: null,
    b6: null,
    d7: null,
    f8: null,
    h7: null,
    j6: null,
    a5: null,
    c6: null,
    e7: null,
    g7: null,
    i6: null,
    k5: null,
    b5: null,
    d6: null,
    f7: null,
    h6: null,
    j5: null,
    a4: null,
    c5: null,
    e6: null,
    g6: null,
    i5: null,
    k4: null,
    b4: null,
    d5: null,
    f6: null,
    h5: null,
    j4: null,
    a3: null,
    c4: null,
    e5: null,
    g5: null,
    i4: null,
    k3: null,
    b3: null,
    d4: null,
    f5: null,
    h4: null,
    j3: null,
    a2: null,
    c3: null,
    e4: null,
    g4: null,
    i3: null,
    k2: null,
    b2: null,
    d3: null,
    f4: null,
    h3: null,
    j2: null,
    a1: null,
    c2: null,
    e3: null,
    g3: null,
    i2: null,
    k1: null,
    b1: null,
    d2: null,
    f3: null,
    h2: null,
    j1: null,
    c1: null,
    e2: null,
    g2: null,
    i1: null,
    d1: null,
    f2: null,
    h1: null,
    e1: null,
    g1: null,
    f1: null,
  }
  this._kings = {
    w: null,
    b: null,
  }
  this._turn = WHITE
  this._epHexagon = null
  this._halfMoves = 0
  this._moveNumber = 1
  this._history = []
}

export default clear
