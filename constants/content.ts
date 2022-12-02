import { Content } from "../types";
import { Evidence } from "../types/evidence";
import { Hypothesis } from "../types/hypothesis";
import { v4 } from "uuid"


const DEFAULT_CONTENT_TITLE = 'Untitled'
const DEFAULT_HYPOTHESIS_TITLE = 'Untitled Hypothesis'
const DEFAULT_EVIDENCE_TITLE = 'Untitled Evidence'
const DEFAULT_PROBABILITY = 0.5
const DEFAULT_PROBABILITY_TEXT = '1/2'

export const DEFAULT_HYPOTHESIS: Hypothesis = {
  title: DEFAULT_HYPOTHESIS_TITLE,
  prior: DEFAULT_PROBABILITY,
  priorText: DEFAULT_PROBABILITY_TEXT,
}

export const DEFAULT_EVIDENCE: Evidence = {
  uuid: v4(),
  title: DEFAULT_EVIDENCE_TITLE,
  likelihood: DEFAULT_PROBABILITY,
  likelihoodText: DEFAULT_PROBABILITY_TEXT,
  normalizer: DEFAULT_PROBABILITY,
  normalizerText: DEFAULT_PROBABILITY_TEXT
}

export const DEFAULT_CONTENT: Content = {
  title: DEFAULT_CONTENT_TITLE,
  hypothesis: DEFAULT_HYPOTHESIS,
  evidence: [DEFAULT_EVIDENCE,]
}
