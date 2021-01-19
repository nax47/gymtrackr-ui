interface ExerciseListValue {
    name: string,
    weight: Number
}

export interface ExerciseList extends Array<ExerciseListValue>{
}
