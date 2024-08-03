import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core"
import { environment } from "../environments/environment";
import { Questionnaire } from "../models/Questionnaire";


@Injectable({
    providedIn: 'root',
})
export class QuizzService {

    quizzApi = environment.apiServer+"questionnaire"


    constructor(private http: HttpClient) {}

    getQuizz(){
        return this.http.get<Questionnaire[]>(this.quizzApi);
    }
}