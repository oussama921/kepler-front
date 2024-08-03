import { Choice } from "./Choice";
import { Questionnaire } from "./Questionnaire";
import { QuestionType } from "./QuestionType";

export interface Question{
    id: number
    text: string
    Type: QuestionType
    questionnaire: Questionnaire
	choices:Choice[];
}