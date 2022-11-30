import { Evidence } from "../../types/evidence";


export const calPosterior = (evidence: Evidence[], prior: number): number =>
  evidence.reduce(
    (p_H, ev) => {
      const p_H_null = 1 - p_H
      const p_E_given_H = ev.likelihood
      const p_E_given_H_null = ev.normalizer
      const p_E = (p_H * p_E_given_H + p_H_null * p_E_given_H_null)
      const p_H_given_E = p_E_given_H / p_E * p_H
      return p_H_given_E
    },
    prior
  )


export const genPosteriorProbTag = (len: number): string =>
  len == 0 ?
    '( H )' : len == 1 ?
      '( H | E1 )' : len == 2 ?
        '( H | E1,E2 )' :
        `( H | E1,... E${len})`


