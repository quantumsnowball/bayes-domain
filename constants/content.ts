import { Content } from "../types";
import { Evidence } from "../types/evidence";
import { Hypothesis } from "../types/hypothesis";


export const DEFAULT_CONTENT: Content = {
  title: 'Untitled',
  hypothesis: {
    title: 'Untitled Hypothesis',
    prior: 0.5,
    priorText: '1/2',
  } as Hypothesis,
  evidence: [] as Evidence[],
}
